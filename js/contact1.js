// function contact() {
// Contact Form Functionality
document.addEventListener('submit', function() {
    // Initialize EmailJS - Replace with your actual Public Key
    (function() {
        emailjs.init("NF3LCwTHl76DfmuHd");
        console.log("EmailJS Initialized");
    })();

    // Contact Form Submission with EmailJS
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
console.log("Contact Form Script Loaded");
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            console.log("Form Submission Detected");
            
            // Show loading state
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            try {
                // Send email using EmailJS
                await emailjs.sendForm(
                    'service_6fqwmbg',     // Replace with your Service ID
                    'template_r9ub5uh',    // Replace with your Template ID
                    contactForm
                );
                
                // Success message
                showNotification('Thank you for your message! I will get back to you soon.', 'success');
                contactForm.reset();
                
            } catch (error) {
                console.error('EmailJS Error:', error);
                showNotification('Sorry, there was an error sending your message. Please email me directly at madhansomuDev@gmail.com', 'error');
            } finally {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Notification function
    function showNotification(message, type) {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
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
        if (type === 'success') {
            notification.style.backgroundColor = '#10b981';
        } else {
            notification.style.backgroundColor = '#ef4444';
        }
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }
});
// }