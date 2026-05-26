/* ==========================================================================
   INTERACTIVE LOGIC & PARTICLE BACKGROUND FOR SLIDE WEB APP
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Reveal.js Safely (Defensive load)
    const activePlugins = [];
    if (typeof RevealNotes !== 'undefined') activePlugins.push(RevealNotes);

    Reveal.initialize({
        width: 1280,
        height: 720,
        margin: 0.04,
        minScale: 0.2,
        maxScale: 2.0,
        
        controls: false,
        progress: true,
        history: true,
        center: true,
        touch: true,
        keyboard: true,
        navigationMode: 'linear',
        overview: true,
        
        transition: 'convex', // none/fade/slide/convex/concave/zoom
        transitionSpeed: 'fast', // default/fast/slow
        backgroundTransition: 'fade',
        
        plugins: activePlugins
    });

    // 2. Presenter-grade spotlight and slide activation polish
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const spotlight = document.getElementById('cursor-spotlight');
    let syncParticleActivity = () => {};

    if (!prefersReducedMotion && typeof gsap !== 'undefined') {
        document.body.classList.add('motion-gsap-ready');
        gsap.defaults({ overwrite: 'auto' });
    }

    if (spotlight && !prefersReducedMotion) {
        let targetX = window.innerWidth / 2;
        let targetY = window.innerHeight / 2;
        let currentX = targetX;
        let currentY = targetY;
        let spotlightFrameId = null;

        window.addEventListener('mousemove', (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
            if (!spotlightFrameId) {
                spotlightFrameId = requestAnimationFrame(moveSpotlight);
            }
        });

        const moveSpotlight = () => {
            const deltaX = targetX - currentX;
            const deltaY = targetY - currentY;
            currentX += deltaX * 0.12;
            currentY += deltaY * 0.12;
            spotlight.style.setProperty('--spotlight-x', `${currentX}px`);
            spotlight.style.setProperty('--spotlight-y', `${currentY}px`);

            if (Math.abs(deltaX) > 0.4 || Math.abs(deltaY) > 0.4) {
                spotlightFrameId = requestAnimationFrame(moveSpotlight);
            } else {
                spotlightFrameId = null;
            }
        };
    }

    function createCoverMotion() {
        if (prefersReducedMotion || typeof gsap === 'undefined') {
            return {
                handleSlide() {}
            };
        }

        const cover = document.querySelector('.tech-title-slide .tech-cover');
        if (!cover) {
            return {
                handleSlide() {}
            };
        }

        const brand = cover.querySelector('.tech-cover-brand');
        const navItems = cover.querySelectorAll('.tech-cover-nav span');
        const kicker = cover.querySelector('.tech-kicker');
        const titleLines = cover.querySelectorAll('.tech-title span');
        const subtitle = cover.querySelector('.tech-subtitle');
        const demoPill = cover.querySelector('.tech-demo-pill');
        const demoArrow = cover.querySelector('.tech-demo-pill i:last-child');
        const metaItems = cover.querySelectorAll('.tech-meta div');
        const coverVisual = cover.querySelector('.tech-cover-visual');
        const cinemaCards = cover.querySelectorAll('.cinema-card');
        const steps = cover.querySelectorAll('.diagram-step');
        const arrows = cover.querySelectorAll('.diagram-arrow');
        const footerItems = cover.querySelectorAll('.tech-cover-footer span');
        const animatedItems = [
            brand,
            kicker,
            subtitle,
            demoPill,
            demoArrow,
            ...navItems,
            ...titleLines,
            ...metaItems,
            ...cinemaCards,
            ...steps,
            ...arrows,
            ...footerItems
        ].filter(Boolean);

        let introTimeline;
        let loopTimeline;
        let lastPlayedAt = 0;

        const stopTimelines = () => {
            if (introTimeline) introTimeline.kill();
            if (loopTimeline) loopTimeline.kill();
            introTimeline = null;
            loopTimeline = null;
            gsap.killTweensOf(animatedItems);
        };

        const startLoop = () => {
            const activeStep = cover.querySelector('.diagram-step.active');
            if (!activeStep || !demoArrow) return;

            loopTimeline = gsap.timeline({
                repeat: -1,
                repeatDelay: 0.65,
                defaults: {
                    ease: 'sine.inOut'
                }
            });

            loopTimeline
                .to(activeStep, {
                    scale: 1.018,
                    duration: 1.15
                }, 0)
                .to(demoArrow, {
                    x: 4,
                    duration: 0.45,
                    repeat: 1,
                    yoyo: true
                }, 0.15)
                .to(activeStep, {
                    scale: 1,
                    duration: 1.15
                }, '>');
        };

        const play = () => {
            const now = Date.now();
            if (now - lastPlayedAt < 350) return;
            lastPlayedAt = now;
            stopTimelines();

            gsap.set([brand, kicker, subtitle, demoPill, ...metaItems, ...footerItems], {
                autoAlpha: 0,
                y: 14
            });
            gsap.set(navItems, {
                autoAlpha: 0,
                y: -8
            });
            gsap.set(titleLines, {
                autoAlpha: 0,
                y: 34,
                clipPath: 'inset(0 0 100% 0)'
            });
            gsap.set(steps, {
                autoAlpha: 0,
                x: 26
            });
            gsap.set(cinemaCards, {
                autoAlpha: 0,
                transformPerspective: 900,
                x: 0,
                y: 0,
                z: 0,
                rotationX: 0,
                rotationY: 0,
                rotation: 0,
                scale: 0.86,
                filter: 'blur(7px)'
            });
            gsap.set(arrows, {
                autoAlpha: 0,
                y: -6
            });
            gsap.set(demoArrow, {
                x: 0
            });

            introTimeline = gsap.timeline({
                defaults: {
                    duration: 0.58,
                    ease: 'power3.out',
                    overwrite: 'auto'
                },
                onComplete: startLoop
            });

            introTimeline
                .to(brand, { autoAlpha: 1, y: 0 }, 0)
                .to(navItems, { autoAlpha: 1, y: 0, stagger: 0.06 }, 0.08)
                .to(kicker, { autoAlpha: 1, y: 0 }, 0.18)
                .to(titleLines, {
                    autoAlpha: 1,
                    y: 0,
                    clipPath: 'inset(0 0 0% 0)',
                    stagger: 0.12,
                    duration: 0.76
                }, 0.28)
                .to(subtitle, { autoAlpha: 1, y: 0 }, 0.74)
                .to(demoPill, {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.52
                }, 0.9)
                .to(metaItems, { autoAlpha: 1, y: 0, stagger: 0.08 }, 1.02)
                .fromTo(cinemaCards, {
                    autoAlpha: 0,
                    x: (index) => [-360, 340, 420, -430, 0][index] || 0,
                    y: (index) => [-190, -150, 160, 170, -260][index] || 0,
                    z: (index) => [-780, -660, -720, -820, -560][index] || -700,
                    rotationX: (index) => [-22, 18, -16, 20, -26][index] || 0,
                    rotationY: (index) => [32, -30, -24, 26, 18][index] || 0,
                    rotation: (index) => [-12, 10, 13, -9, 5][index] || 0,
                    scale: 0.54,
                    filter: 'blur(8px)'
                }, {
                    autoAlpha: 1,
                    x: 0,
                    y: 0,
                    z: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotation: 0,
                    scale: 1,
                    filter: 'blur(0px)',
                    duration: 1.05,
                    ease: 'power3.out',
                    stagger: {
                        each: 0.08,
                        from: 'random'
                    }
                }, 0.52)
                .to(cinemaCards, {
                    x: (index, target) => {
                        if (!coverVisual) return 0;
                        const visualRect = coverVisual.getBoundingClientRect();
                        const targetRect = target.getBoundingClientRect();
                        return visualRect.left + visualRect.width / 2 - (targetRect.left + targetRect.width / 2);
                    },
                    y: (index, target) => {
                        if (!coverVisual) return 0;
                        const visualRect = coverVisual.getBoundingClientRect();
                        const targetRect = target.getBoundingClientRect();
                        return visualRect.top + visualRect.height / 2 - (targetRect.top + targetRect.height / 2);
                    },
                    z: -120,
                    scale: 0.22,
                    autoAlpha: 0,
                    filter: 'blur(4px)',
                    duration: 0.5,
                    ease: 'power2.inOut',
                    stagger: 0.025
                }, 1.36)
                .to(steps, {
                    autoAlpha: 1,
                    x: 0,
                    stagger: 0.12,
                    duration: 0.48
                }, 1.42)
                .to(arrows, { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.34 }, 1.64)
                .to(footerItems, { autoAlpha: 1, y: 0, stagger: 0.04, duration: 0.38 }, 1.18);
        };

        return {
            handleSlide(event) {
                const isCover = (event.indexh || 0) === 0 && (event.indexv || 0) === 0;
                if (isCover) {
                    play();
                } else {
                    stopTimelines();
                }
            }
        };
    }

    function createDeckMotion() {
        if (prefersReducedMotion || typeof gsap === 'undefined') {
            return {
                handleSlide() {},
                handleFragment() {}
            };
        }

        let slideTimeline = null;
        let loopTimelines = [];
        let generatedNodes = [];
        let currentSlideKey = '';

        const toArray = (selector, root = document) => gsap.utils.toArray(root.querySelectorAll(selector));

        const clearLoopState = () => {
            loopTimelines.forEach((timeline) => timeline.kill());
            loopTimelines = [];
            generatedNodes.forEach((node) => node.remove());
            generatedNodes = [];
            gsap.set('.flow-step, .media-proof-frame, .proof-callout-list div', {
                clearProps: 'transform,opacity,visibility'
            });
        };

        const resetSlideTimeline = () => {
            if (slideTimeline) slideTimeline.kill();
            slideTimeline = null;
            clearLoopState();
        };

        const getStandardTargets = (section) => {
            const selectors = [
                '.slide-title',
                '.slide-subtitle',
                '.thanks-kicker',
                '.adam-avatar-stage',
                '.thanks-point',
                '.thanks-adam-callout',
                '.agenda-timeline-item',
                '.agent-build-loop',
                '.agent-product-card',
                '.agent-example-takeaway',
                '.prompt-tile',
                '.skill-visual-card',
                '.skill-text-visual',
                '.skill-card',
                '.superpowers-brief',
                '.workflow-phase',
                '.flow-step',
                '.workflow-loop-strip',
                '.guard-card',
                '.approval-matrix',
                '.media-proof-frame',
                '.proof-callout-list > div',
                '.paradox-quote',
                '.judgment-board',
                '.paradox-mechanisms > div',
                '.qa-card .badge',
                '.qa-card h1',
                '.qa-card .subtitle',
                '.qa-highlight'
            ].join(',');

            return toArray(selectors, section).filter((element, index, allTargets) => {
                return allTargets.indexOf(element) === index
                    && !element.closest('aside.notes')
                    && !element.classList.contains('fragment')
                    && !element.closest('.fragment');
            });
        };

        const addStandardEntrance = (timeline, section) => {
            if (section.matches('.tech-title-slide')) return;
            const targets = getStandardTargets(section);
            if (!targets.length) return;

            targets.forEach((element) => element.classList.add('motion-gsap-target'));
            timeline.set(targets, {
                autoAlpha: 0,
                y: 18,
                force3D: true
            }, 0);
            timeline.to(targets, {
                autoAlpha: 1,
                y: 0,
                duration: 0.48,
                ease: 'power3.out',
                stagger: {
                    each: 0.035,
                    from: 'start'
                },
                clearProps: 'transform,opacity,visibility'
            }, 0.02);
        };

        const animateSurveyStat = (fragment) => {
            const stat = fragment.querySelector('.survey-statline strong');
            const donut = fragment.querySelector('.format-donut');
            if (stat) {
                const counter = { value: 0 };
                gsap.to(counter, {
                    value: 13,
                    duration: 0.75,
                    ease: 'power2.out',
                    onUpdate() {
                        stat.textContent = String(Math.round(counter.value));
                    },
                    onComplete() {
                        stat.textContent = '13';
                    }
                });
            }

            if (donut) {
                gsap.fromTo(donut, {
                    scale: 0.9,
                    rotation: -8
                }, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.65,
                    ease: 'back.out(1.5)',
                    clearProps: 'transform'
                });
            }
        };

        const animateTopicBars = (root) => {
            const bars = toArray('.topic-track b', root);
            if (!bars.length) return;

            gsap.set(bars, {
                scaleX: 0,
                transformOrigin: 'left center'
            });
            gsap.to(bars, {
                scaleX: 1,
                duration: 0.7,
                ease: 'power3.out',
                stagger: 0.08,
                clearProps: 'transform'
            });
        };

        const animateSvgLine = (line) => {
            const length = line.getTotalLength();
            gsap.set(line, {
                autoAlpha: 1,
                strokeDasharray: length,
                strokeDashoffset: length
            });
            gsap.to(line, {
                strokeDashoffset: 0,
                duration: 0.55,
                ease: 'power2.out'
            });
        };

        const animateDecisionBoard = (fragment) => {
            const rows = toArray('.decision-list div, .human-gate-strip', fragment);
            if (!rows.length) return;

            gsap.fromTo(rows, {
                autoAlpha: 0,
                x: 18
            }, {
                autoAlpha: 1,
                x: 0,
                duration: 0.42,
                ease: 'power3.out',
                stagger: 0.07,
                clearProps: 'transform,opacity,visibility'
            });
        };

        const animateProofStrip = (fragment) => {
            const icon = fragment.querySelector('i');
            if (!icon) return;

            gsap.fromTo(icon, {
                scale: 0.72,
                rotation: -12
            }, {
                scale: 1,
                rotation: 0,
                duration: 0.55,
                ease: 'back.out(1.8)',
                clearProps: 'transform'
            });
        };

        const startWorkflowRunner = (section) => {
            const workflow = section.querySelector('.agent-workflow');
            const steps = workflow ? toArray('.flow-step', workflow) : [];
            if (!workflow || steps.length < 2) return;

            workflow.querySelectorAll('.workflow-runner').forEach((node) => node.remove());
            const runner = document.createElement('div');
            runner.className = 'workflow-runner';
            workflow.appendChild(runner);
            generatedNodes.push(runner);

            const workflowRect = workflow.getBoundingClientRect();
            const runnerSize = 14;
            const points = steps.map((step) => {
                const rect = step.getBoundingClientRect();
                return {
                    x: rect.left - workflowRect.left + rect.width / 2 - runnerSize / 2,
                    y: rect.top - workflowRect.top - 4
                };
            });

            gsap.set(runner, {
                autoAlpha: 0,
                x: points[0].x,
                y: points[0].y,
                scale: 0.7,
                force3D: true
            });

            const timeline = gsap.timeline({
                repeat: -1,
                repeatDelay: 0.95,
                defaults: {
                    ease: 'power2.inOut'
                }
            });

            timeline.to(runner, {
                autoAlpha: 1,
                scale: 1,
                duration: 0.2
            });

            points.forEach((point, index) => {
                if (index > 0) {
                    timeline.to(runner, {
                        x: point.x,
                        y: point.y,
                        duration: 0.36
                    }, '>-0.02');
                }

                timeline
                    .to(steps[index], {
                        y: -5,
                        scale: 1.018,
                        duration: 0.18,
                        ease: 'power2.out'
                    }, '<')
                    .to(steps[index], {
                        y: 0,
                        scale: 1,
                        duration: 0.22
                    }, '>');
            });

            timeline.to(runner, {
                autoAlpha: 0,
                scale: 0.7,
                duration: 0.2
            });

            loopTimelines.push(timeline);
        };

        const loadDeferredVideo = (video) => {
            if (!video || video.dataset.hydrated === 'true') return;
            const source = video.querySelector('source[data-video-src]');
            if (!source || !source.dataset.videoSrc) return;

            source.setAttribute('src', source.dataset.videoSrc);
            video.dataset.hydrated = 'true';
            video.preload = 'metadata';
            video.addEventListener('loadedmetadata', () => {
                video.play().catch(() => {});
            }, { once: true });
            video.load();
        };

        const armDeferredVideo = (section) => {
            toArray('video source[data-video-src]', section).forEach((deferredSource) => {
                const video = deferredSource.closest('video');
                if (!video || video.dataset.armed === 'true') return;
                const frame = video.closest('.media-proof-frame');
                const trigger = frame?.querySelector('.video-placeholder') || frame || video;
                if (!trigger) return;

                trigger.setAttribute('role', 'button');
                trigger.setAttribute('tabindex', '0');
                trigger.addEventListener('click', () => loadDeferredVideo(video));
                trigger.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        loadDeferredVideo(video);
                    }
                });
                video.dataset.armed = 'true';
            });
        };

        const startProofScans = (section) => {
            const frames = toArray('.media-proof-frame', section);
            if (!frames.length) return;

            const timeline = gsap.timeline({
                repeat: -1,
                repeatDelay: 1.4,
                defaults: {
                    ease: 'power2.inOut'
                }
            });

            frames.forEach((frame, index) => {
                frame.classList.add('motion-proof-ready');
                let scanLine = frame.querySelector('.proof-scan-line');
                if (!scanLine) {
                    scanLine = document.createElement('div');
                    scanLine.className = 'proof-scan-line';
                    frame.appendChild(scanLine);
                    generatedNodes.push(scanLine);
                }

                timeline
                    .fromTo(frame, {
                        rotationX: 0,
                        rotationY: index === 0 ? -1.4 : 1.4
                    }, {
                        rotationX: 0,
                        rotationY: 0,
                        duration: 0.42,
                        clearProps: 'transform'
                    }, index * 0.18)
                    .fromTo(scanLine, {
                        autoAlpha: 0,
                        backgroundPosition: '-60% 0'
                    }, {
                        autoAlpha: 1,
                        backgroundPosition: '160% 0',
                        duration: 1.05
                    }, index * 0.18)
                    .to(scanLine, {
                        autoAlpha: 0,
                        duration: 0.18
                    }, '>-0.1');
            });

            loopTimelines.push(timeline);
        };

        const handleFragment = (fragment, shown) => {
            if (!fragment) return;
            gsap.killTweensOf(fragment);

            if (!shown) {
                gsap.set(fragment, {
                    clearProps: 'transform,opacity,visibility,filter'
                });
                if (fragment.classList.contains('needs-topics')) {
                    gsap.set(fragment.querySelectorAll('.topic-track b'), {
                        clearProps: 'transform'
                    });
                }
                return;
            }

            if (fragment instanceof SVGLineElement) {
                animateSvgLine(fragment);
                return;
            }

            const fromVars = {
                autoAlpha: 0,
                y: 18,
                scale: 1,
                filter: 'blur(4px)'
            };

            if (fragment.classList.contains('need-slide-left')) {
                fromVars.x = 28;
                fromVars.y = 0;
            }

            if (fragment.classList.contains('need-zoom') || fragment.classList.contains('ai-zoom-in')) {
                fromVars.scale = 0.94;
                fromVars.y = 14;
            }

            if (fragment.classList.contains('agent-orbit')) {
                fromVars.scale = 0.82;
                fromVars.y = 20;
                fromVars.rotation = -3;
            }

            gsap.fromTo(fragment, fromVars, {
                autoAlpha: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotation: 0,
                filter: 'blur(0px)',
                duration: fragment.classList.contains('agent-orbit') ? 0.52 : 0.46,
                ease: fragment.classList.contains('need-zoom') || fragment.classList.contains('ai-zoom-in')
                    ? 'back.out(1.35)'
                    : 'power3.out',
                clearProps: 'transform,opacity,visibility,filter'
            });

            if (fragment.classList.contains('needs-mandate')) animateSurveyStat(fragment);
            if (fragment.classList.contains('needs-topics')) animateTopicBars(fragment);
            if (fragment.classList.contains('demo-proof-strip')) animateProofStrip(fragment);
            if (fragment.classList.contains('agent-decision-board')) animateDecisionBoard(fragment);
        };

        const handleSlide = (event) => {
            const section = event.currentSlide || (typeof Reveal !== 'undefined' ? Reveal.getCurrentSlide() : null);
            if (!section) return;

            const key = `${event.indexh || 0}:${event.indexv || 0}`;
            if (key === currentSlideKey) return;

            currentSlideKey = key;
            resetSlideTimeline();
            slideTimeline = gsap.timeline();
            addStandardEntrance(slideTimeline, section);

            if (section.querySelector('.agent-workflow')) {
                slideTimeline.add(() => startWorkflowRunner(section), 0.82);
            }

            if (section.querySelector('.demo-proof-media-layout')) {
                armDeferredVideo(section);
                slideTimeline.add(() => startProofScans(section), 0.58);
            }
        };

        return {
            handleSlide,
            handleFragment
        };
    }

    const coverMotion = createCoverMotion();
    const deckMotion = createDeckMotion();

    if (typeof Reveal !== 'undefined') {
        Reveal.on('slidechanged', (event) => {
            document.body.dataset.slideIndex = String(event.indexh || 0);
            syncParticleActivity(event.currentSlide);
            coverMotion.handleSlide(event);
            deckMotion.handleSlide(event);
        });

        Reveal.on('ready', (event) => {
            document.body.dataset.slideIndex = String(event.indexh || 0);
            syncParticleActivity(event.currentSlide);
            coverMotion.handleSlide(event);
            deckMotion.handleSlide(event);
        });

        Reveal.on('fragmentshown', (event) => {
            deckMotion.handleFragment(event.fragment, true);
        });

        Reveal.on('fragmenthidden', (event) => {
            deckMotion.handleFragment(event.fragment, false);
        });
    }

    // 4. Interactive Background Particles (Neural Network Effect)
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        
        const particles = [];
        let particleFrameId = null;
        let particlesActive = false;
        const properties = {
            bgColor: 'transparent',
            particleColor: 'rgba(71, 142, 247, 0.05)', // Extremely faint particles
            particleRadius: 1.8,
            particleCount: prefersReducedMotion ? 0 : 24,
            maxVelocity: prefersReducedMotion ? 0.06 : 0.20,
            lineLength: 120,
            linkColor: 'rgba(71, 142, 247, 0.02)' // Faint connection lines
        };
        
        // Mouse interaction state
        const mouse = {
            x: null,
            y: null,
            radius: 120
        };

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.velocityX = (Math.random() * 2 - 1) * properties.maxVelocity;
                this.velocityY = (Math.random() * 2 - 1) * properties.maxVelocity;
            }
            
            position() {
                // Border collision
                if (this.x + this.velocityX > width || this.x + this.velocityX < 0) {
                    this.velocityX = -this.velocityX;
                }
                if (this.y + this.velocityY > height || this.y + this.velocityY < 0) {
                    this.velocityY = -this.velocityY;
                }
                
                this.x += this.velocityX;
                this.y += this.velocityY;
            }
            
            reDraw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fillStyle = properties.particleColor;
                ctx.fill();
            }
        }
        
        function drawLines() {
            let x1, y1, x2, y2, length, opacity;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    x1 = particles[i].x;
                    y1 = particles[i].y;
                    x2 = particles[j].x;
                    y2 = particles[j].y;
                    length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                    
                    if (length < properties.lineLength) {
                        opacity = 1 - length / properties.lineLength;
                        ctx.lineWidth = '0.5';
                        ctx.strokeStyle = `rgba(71, 142, 247, ${opacity * 0.12})`;
                        ctx.beginPath();
                        ctx.moveTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.closePath();
                        ctx.stroke();
                    }
                }
            }
        }
        
        function initParticles() {
            for (let i = 0; i < properties.particleCount; i++) {
                particles.push(new Particle());
            }
        }
        
        function animateParticles() {
            if (!particlesActive) {
                return;
            }

            ctx.clearRect(0, 0, width, height);
            
            particles.forEach(p => {
                // Interactive avoidance logic
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = p.x - mouse.x;
                    let dy = p.y - mouse.y;
                    let distance = Math.sqrt(dx*dx + dy*dy);
                    
                    if (distance < mouse.radius) {
                        let force = (mouse.radius - distance) / mouse.radius; // 0 to 1
                        let forceDirectionX = dx / distance;
                        let forceDirectionY = dy / distance;
                        
                        // Push away from mouse
                        p.x += forceDirectionX * force * 3;
                        p.y += forceDirectionY * force * 3;
                    }
                }
                
                p.position();
                p.reDraw();
            });
            
            drawLines();
            particleFrameId = requestAnimationFrame(animateParticles);
        }

        function setParticlesActive(active) {
            if (prefersReducedMotion) {
                ctx.clearRect(0, 0, width, height);
                return;
            }

            if (active && !particlesActive) {
                particlesActive = true;
                animateParticles();
                return;
            }

            if (!active && particlesActive) {
                particlesActive = false;
                if (particleFrameId) {
                    cancelAnimationFrame(particleFrameId);
                    particleFrameId = null;
                }
                ctx.clearRect(0, 0, width, height);
            }
        }
        
        initParticles();
        syncParticleActivity = (section) => {
            const active = !section
                || section.matches('.tech-title-slide')
                || Boolean(section.querySelector('.qa-card'));
            setParticlesActive(active);
        };
        syncParticleActivity(typeof Reveal !== 'undefined' ? Reveal.getCurrentSlide() : null);
    }
});
