// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = themeToggle.querySelector("i");

    // Load saved theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add("dark-theme");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
            localStorage.setItem('theme', 'light');
        }
    });
});