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