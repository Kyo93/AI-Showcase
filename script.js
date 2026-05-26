/* ==========================================================================
   INTERACTIVE LOGIC & PARTICLE BACKGROUND FOR SLIDE WEB APP
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Reveal.js Safely (Defensive load)
    const activePlugins = [];
    if (typeof RevealMarkdown !== 'undefined') activePlugins.push(RevealMarkdown);
    if (typeof RevealHighlight !== 'undefined') activePlugins.push(RevealHighlight);
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

    if (spotlight && !prefersReducedMotion) {
        let targetX = window.innerWidth / 2;
        let targetY = window.innerHeight / 2;
        let currentX = targetX;
        let currentY = targetY;

        window.addEventListener('mousemove', (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        });

        const moveSpotlight = () => {
            currentX += (targetX - currentX) * 0.12;
            currentY += (targetY - currentY) * 0.12;
            spotlight.style.setProperty('--spotlight-x', `${currentX}px`);
            spotlight.style.setProperty('--spotlight-y', `${currentY}px`);
            requestAnimationFrame(moveSpotlight);
        };

        moveSpotlight();
    }

    if (typeof Reveal !== 'undefined') {
        Reveal.on('slidechanged', (event) => {
            document.body.dataset.slideIndex = String(event.indexh || 0);
        });

        Reveal.on('ready', (event) => {
            document.body.dataset.slideIndex = String(event.indexh || 0);
        });
    }

    // 3. Interactive Background Particles (Neural Network Effect)
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        
        const particles = [];
        const properties = {
            bgColor: 'transparent',
            particleColor: 'rgba(71, 142, 247, 0.05)', // Extremely faint particles
            particleRadius: 1.8,
            particleCount: prefersReducedMotion ? 12 : 36,
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
            if (!prefersReducedMotion) {
                requestAnimationFrame(animateParticles);
            }
        }
        
        initParticles();
        animateParticles();
    }
});
