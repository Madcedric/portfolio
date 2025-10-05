// Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    // Mobile Menu Toggle
    mobileMenu.addEventListener("click", () => {
        navLinks.style.display =
            navLinks.style.display === "flex" ? "none" : "flex";
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth",
                });

                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.style.display = "none";
                }
            }
        });
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.style.display = "none";
            }
        });
    });
});