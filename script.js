// =========================================
// NAVIGATION - Hamburger Menu Toggle
// =========================================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when a nav link is clicked (mobile UX)
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// =========================================
// HACK TEXT EFFECT (Decryption Animation)
// =========================================
class HackTextEffect {
    constructor(element) {
        this.element = element;
        this.originalText = element.innerText;
        this.element.dataset.value = this.originalText;
        this.chars = "!@#$%^&*()_+-=[]{}|;':\",./<>?0123456789";
        this.isAnimating = false;

        this.element.addEventListener('mouseenter', () => this.scramble());
    }

    scramble() {
        if (this.isAnimating) return;
        this.isAnimating = true;

        let iteration = 0;
        const originalText = this.element.dataset.value;

        const interval = setInterval(() => {
            this.element.innerText = originalText
                .split("")
                .map((char, index) => {
                    if (index < iteration) {
                        return originalText[index];
                    }
                    if (char === " ") return " ";
                    return this.chars[Math.floor(Math.random() * this.chars.length)];
                })
                .join("");

            if (iteration >= originalText.length) {
                clearInterval(interval);
                this.element.innerText = originalText;
                this.isAnimating = false;
            }

            iteration += 1 / 3; // Speed of reveal
        }, 30);
    }
}

// Apply HackTextEffect to headings
document.addEventListener('DOMContentLoaded', () => {
    const heroName = document.querySelector('.hero-name');
    if (heroName) new HackTextEffect(heroName);

    document.querySelectorAll('.section-title').forEach(title => {
        new HackTextEffect(title);
    });
});

// =========================================
// MAGNETIC CURSOR EFFECT
// =========================================
function initMagneticCursor() {
    const magneticElements = document.querySelectorAll('.glass-btn, .nav-link');
    const maxPull = 10; // Maximum pixels to pull

    magneticElements.forEach(el => {
        el.style.transition = 'transform 0.2s ease-out';

        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = (e.clientX - centerX) / rect.width * maxPull;
            const deltaY = (e.clientY - centerY) / rect.height * maxPull;

            el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
        });
    });
}

document.addEventListener('DOMContentLoaded', initMagneticCursor);

// =========================================
// SCROLL PROGRESS BAR
// =========================================
// Optimized Scroll Progress using requestAnimationFrame to prevent jank
const progressBar = document.getElementById('scroll-progress');
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            if (progressBar) {
                progressBar.style.width = `${progress}%`;
            }
            ticking = false;
        });
        ticking = true;
    }
});

// =========================================
// SCROLL ANIMATIONS - Intersection Observer
// =========================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Target all elements with 'hidden' class including new section elements
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// =========================================
// PARTICLES.JS CONFIGURATION
// =========================================
// Responsive particle count for performance optimization
const getParticleCount = () => {
    if (window.innerWidth < 768) {
        return 20;  // Mobile: fewer particles (Performance Optimized)
    } else if (window.innerWidth < 1200) {
        return 40;  // Tablet: moderate
    }
    return 60;      // Desktop: balanced effect
};

if (document.getElementById('particles-js')) {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": getParticleCount(),
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}

// =========================================
// SMOOTH SCROLL for Navigation Links
// =========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// =========================================
// SKILLS RADAR CHART (Chart.js)
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('skills-chart');
    if (ctx) {
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Deep Learning', 'Signal Processing', 'Exp. Design', 'Statistical Analysis', 'Software Eng.'],
                datasets: [{
                    label: 'Technical Proficiency',
                    data: [90, 95, 85, 80, 75],
                    fill: true,
                    backgroundColor: 'rgba(0, 188, 212, 0.2)', // Cyan transparent
                    borderColor: '#006064', // Deep Teal
                    pointBackgroundColor: '#006064',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#006064'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        pointLabels: {
                            font: {
                                size: 14,
                                family: "'Playfair Display', serif"
                            },
                            color: '#0A192F'
                        },
                        suggestedMin: 0,
                        suggestedMax: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
});

// =========================================
// 3D BRAIN HERO (Three.js Connectome)
// =========================================
function initBrainHero() {
    const container = document.getElementById('brain-canvas');
    if (!container || typeof THREE === 'undefined') return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Network (Brain Nodes)
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sphereRadius = 4;

    // Generate random points in a sphere
    for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = sphereRadius * Math.cbrt(Math.random()); // Uniform distribution

        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);

        // Cyan color with slight variation
        colors[i * 3] = 0.4 + Math.random() * 0.2;     // R
        colors[i * 3 + 1] = 1;                          // G
        colors[i * 3 + 2] = 0.85 + Math.random() * 0.15; // B
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
        size: 0.08,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Line Connections (Synapses)
    const linePositions = [];
    const connectionDistance = 0.8;

    for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
            const dx = positions[i * 3] - positions[j * 3];
            const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
            const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < connectionDistance) {
                linePositions.push(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
                linePositions.push(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
            }
        }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xbd34fe, // Neural Purple
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Camera Position
    camera.position.z = 8;

    // Mouse Tracking
    let mouseX = 0, mouseY = 0;
    let targetRotationX = 0, targetRotationY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    });

    // Animation Loop
    let time = 0;
    function animate() {
        requestAnimationFrame(animate);
        time += 0.01;

        // Smooth rotation towards mouse
        targetRotationY = mouseX * 0.5;
        targetRotationX = mouseY * 0.3;

        particles.rotation.y += (targetRotationY - particles.rotation.y) * 0.02;
        particles.rotation.x += (targetRotationX - particles.rotation.x) * 0.02;
        lines.rotation.y = particles.rotation.y;
        lines.rotation.x = particles.rotation.x;

        // Auto-rotation
        particles.rotation.y += 0.001;
        lines.rotation.y += 0.001;

        // Breathing Effect (Pulse)
        const breathScale = 1 + Math.sin(time) * 0.03;
        particles.scale.set(breathScale, breathScale, breathScale);
        lines.scale.set(breathScale, breathScale, breathScale);

        // Opacity pulse
        particleMaterial.opacity = 0.7 + Math.sin(time * 0.5) * 0.2;

        renderer.render(scene, camera);
    }

    animate();

    // Handle Resize
    window.addEventListener('resize', () => {
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
    });
}

// Initialize Brain on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initBrainHero();
});