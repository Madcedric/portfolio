// Contact Form Functionality
document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS
    (function () {
        emailjs.init("NF3LCwTHl76DfmuHd");
        console.log("EmailJS Initialized");
    })();

    const contactForm = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");
    
    console.log("Contact Form Script Loaded");
    console.log("Contact Form Element:", contactForm);
    console.log("Submit Button:", submitBtn);

    if (contactForm && submitBtn) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            console.log("Form submitted - starting email send");

            // Show loading state
            const originalText = submitBtn.textContent;
            submitBtn.textContent = "Sending...";
            submitBtn.disabled = true;

            try {
                console.log("Sending email with EmailJS...");
                
                // Send email using EmailJS
                const result = await emailjs.sendForm(
                    "service_6fqwmbg",
                    "template_r9ub5uh", 
                    contactForm
                );
                
                console.log("Email sent successfully:", result);
                
                // Success message
                showNotification(
                    "Thank you for your message! I will get back to you soon.",
                    "success"
                );
                contactForm.reset();
                
            } catch (error) {
                console.error("EmailJS Error Details:", error);
                showNotification(
                    `Error: ${error.text || "Please email me directly at madhansomuDev@gmail.com"}`,
                    "error"
                );
            } finally {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    } else {
        console.error("Contact form or submit button not found!");
    }

    // Notification function
    function showNotification(message, type) {
        // Remove existing notification
        const existingNotification = document.querySelector(".notification");
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement("div");
        notification.className = `notification ${type}`;
        notification.textContent = message;

        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 5px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            max-width: 300px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;

        // Set background color based on type
        if (type === "success") {
            notification.style.backgroundColor = "#10b981";
        } else {
            notification.style.backgroundColor = "#ef4444";
        }

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = "translateX(0)";
        }, 100);

        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = "translateX(400px)";
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }
});