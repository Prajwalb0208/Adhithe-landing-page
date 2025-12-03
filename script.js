
const notifyForm = document.getElementById('notifyForm');

if (notifyForm) {
    notifyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = notifyForm.querySelector('.email-input');
        const email = emailInput.value;
        
        if (email && email.includes('@')) {
            console.log('Email submitted:', email);
            
            const btn = notifyForm.querySelector('.notify-btn');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<span>✓ Notified!</span>';
            btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            
            emailInput.value = '';
            emailInput.disabled = true;
            btn.disabled = true;
            
            // Reset after 3 seconds
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                emailInput.disabled = false;
                btn.disabled = false;
            }, 3000);
        } else {
            // Show error
            emailInput.style.borderColor = '#ef4444';
            emailInput.focus();
            
            setTimeout(() => {
                emailInput.style.borderColor = '';
            }, 2000);
        }
    });
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

// Console message
console.log('%c🎙️ Adhithe - Coming Soon', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
console.log('%cLearn Anything, Progressively', 'font-size: 12px; color: #9ca3af;');
