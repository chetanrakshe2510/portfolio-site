const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


// Create the Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // If the element is visible in the viewport
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        // Optional: Else remove the class to re-animate when scrolling up?
        // usually better to leave it once shown:
        // else { entry.target.classList.remove('show'); }
    });
});

// Find all elements with the class 'hidden' and tell the observer to watch them
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* =========================================
   PARTICLES.JS CONFIGURATION (NEURAL NETWORK)
   ========================================= */
// Only load if the div exists to avoid errors on other pages
if (document.getElementById('particles-js')) {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80, // Number of nodes
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff" // Node color
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
                "speed": 2, // Speed of the floating neurons
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
                    "mode": "grab" // The "Synapse" effect: connects to mouse
                },
                "onclick": {
                    "enable": true,
                    "mode": "push" // Adds particles on click
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