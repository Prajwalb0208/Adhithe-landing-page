const notifyForm = document.getElementById('notifyForm');

if (notifyForm) {
    notifyForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const emailInput = notifyForm.querySelector('.email-input');
        const email = emailInput.value.trim();
        const btn = notifyForm.querySelector('.notify-btn');
        const originalText = btn.innerHTML;
        
        // Validation
        if (!email || !email.includes('@')) {
            emailInput.style.borderColor = '#ef4444';
            emailInput.focus();
            setTimeout(() => {
                emailInput.style.borderColor = '';
            }, 2000);
            return;
        }
        
        // Disable form during submission
        emailInput.disabled = true;
        btn.disabled = true;
        btn.innerHTML = '<span>Sending...</span>';
        
        try {
            // Using FormSubmit service (free, works with static sites)
            // This will send email to your Mailjet account via SMTP
            // Alternative: Use Mailjet Contact API or a simple form service
            const API_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
            
            // Option 1: Using Formspree (recommended for GitHub Pages)
            // Sign up at https://formspree.io, get your form ID, and replace YOUR_FORM_ID above
            // Then configure Formspree to forward emails to your Mailjet account
            
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ 
                    email: email,
                    _subject: 'New Adhithe Coming Soon Signup',
                    _replyto: email
                }),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                // Success
                btn.innerHTML = '<span>✓ Notified!</span>';
                btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                emailInput.value = '';
                
                // Show success message
                showNotification('Thank you! We\'ll notify you when we launch.', 'success');
            } else {
                throw new Error(data.error || 'Failed to send email');
            }
            
        } catch (error) {
            console.error('Error sending email:', error);
            btn.innerHTML = originalText;
            showNotification('Something went wrong. Please try again.', 'error');
        } finally {
            // Re-enable form after 3 seconds
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                emailInput.disabled = false;
                btn.disabled = false;
            }, 3000);
        }
    });
}

// Notification helper function
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'rgba(16, 185, 129, 0.9)' : 'rgba(239, 68, 68, 0.9)'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        font-size: 14px;
        font-weight: 500;
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add parallax effect to background orbs on scroll
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const speed = 0.3 + (index * 0.1);
        const yPos = -(scrolled * speed);
        orb.style.transform = `translateY(${yPos}px)`;
    });
    
    lastScroll = scrolled;
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Console message
console.log('%c🎙️ Adhithe - Coming Soon', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
console.log('%cLearn Anything, Progressively', 'font-size: 12px; color: #9ca3af;');
