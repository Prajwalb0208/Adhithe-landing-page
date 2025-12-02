// AI-Themed Landing Page - Interactive JavaScript

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        const navSearch = document.querySelector('.nav-search');
        if (navSearch) {
            navSearch.style.display = navSearch.style.display === 'block' ? 'none' : 'block';
        }
    });
}

// Search form handler
const searchForm = document.getElementById('searchForm');
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        const classFilter = document.getElementById('classFilter');
        const subjectFilter = document.getElementById('subjectFilter');
        
        console.log('Search:', {
            query: searchInput.value,
            class: classFilter.value,
            subject: subjectFilter.value
        });
        
        // In a real app, this would trigger a search
        alert(`Searching for "${searchInput.value}" in ${classFilter.value} - ${subjectFilter.value}`);
    });
}

// Format selector for demo output
const formatButtons = document.querySelectorAll('.format-btn');
const outputPreview = document.getElementById('outputPreview');

const formatContent = {
    article: `
        <div class="article-preview">
            <h4>Photosynthesis</h4>
            <p>Photosynthesis is the process by which plants make their own food using sunlight, water, and carbon dioxide. This process occurs in the chloroplasts of plant cells, where chlorophyll captures light energy and converts it into chemical energy stored in glucose molecules.</p>
            <p>The general equation for photosynthesis is: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂</p>
        </div>
    `,
    audio: `
        <div class="audio-preview">
            <div class="audio-player">
                <div class="play-button">▶</div>
                <div class="audio-info">
                    <p>AI Audio Lesson: Photosynthesis</p>
                    <div class="audio-progress"></div>
                </div>
            </div>
        </div>
    `,
    video: `
        <div class="video-preview">
            <div class="video-placeholder">
                <div class="play-icon">▶</div>
                <p>AI Video: Understanding Photosynthesis</p>
            </div>
        </div>
    `,
    sandbox: `
        <div class="sandbox-preview">
            <div class="sandbox-content">
                <h4>Interactive AI Experiment</h4>
                <p>Explore how different factors affect photosynthesis in this AI-powered interactive sandbox...</p>
                <button class="btn btn-primary">Launch Sandbox</button>
            </div>
        </div>
    `,
    code: `
        <div class="code-preview">
            <pre><code>// AI-Generated Photosynthesis Simulation
function photosynthesis(light, water, co2) {
  if (light > 0 && water > 0 && co2 > 0) {
    return {
      glucose: light * water * co2,
      oxygen: light * water,
      energy: light * 2.5
    };
  }
  return null;
}

// Example usage
const result = photosynthesis(10, 8, 6);
console.log(result);</code></pre>
        </div>
    `
};

formatButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        formatButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get format type
        const format = button.getAttribute('data-format');
        
        // Update preview
        if (outputPreview && formatContent[format]) {
            outputPreview.innerHTML = formatContent[format];
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards and sections
document.querySelectorAll('.feature-card, .trust-card, .language-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Update current year in footer
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Language selector handler
const languageSelect = document.getElementById('languageSelect');
if (languageSelect) {
    languageSelect.addEventListener('change', (e) => {
        console.log('Language changed to:', e.target.value);
        // In a real app, this would change the language of the content
    });
}

// Add parallax effect to hero background orbs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        orb.style.transform = `translateY(${yPos}px)`;
    });
});

// Demo topic input handler
const demoTopic = document.getElementById('demoTopic');
if (demoTopic) {
    demoTopic.addEventListener('input', (e) => {
        // Update preview based on topic (in a real app)
        console.log('Topic changed:', e.target.value);
    });
}

// Add hover effect to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-6px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Console message for developers
console.log('%c🧠 Adhithe - AI Learning Platform', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cBuilt with advanced CSS and modern JavaScript', 'font-size: 12px; color: #475569;');

