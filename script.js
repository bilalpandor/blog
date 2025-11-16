// Theme Management
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeIcon = document.querySelector('.theme-icon');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
}

// Dynamic Multilingual Greeting (only on home page)
const greetingElement = document.getElementById('greeting');

if (greetingElement) {
    const greetings = [
        'Hello',           // English
        'مرحبا',           // Arabic
        '你好',            // Chinese
        'こんにちは',      // Japanese
        'नमस्ते',         // Hindi
        'Hola',           // Spanish
        'Bonjour',        // French
        'Hallo',          // German
        'Ciao',           // Italian
        'Olá'             // Portuguese
    ];

    let currentGreetingIndex = 0;

    function rotateGreeting() {
        greetingElement.classList.add('fade');

        setTimeout(() => {
            currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
            greetingElement.textContent = greetings[currentGreetingIndex];
            greetingElement.classList.remove('fade');
        }, 500);
    }

    // Start greeting rotation
    setInterval(rotateGreeting, 2500);
}

// Mobile Menu Toggle
function createMobileMenuToggle() {
    const navbar = document.querySelector('.navbar .container');
    const navMenu = document.querySelector('.nav-menu');

    // Only add mobile menu on smaller screens
    if (window.innerWidth <= 768) {
        const existingToggle = document.querySelector('.mobile-menu-toggle');
        if (!existingToggle) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'mobile-menu-toggle';
            menuToggle.innerHTML = '☰';
            menuToggle.setAttribute('aria-label', 'Toggle menu');

            menuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                menuToggle.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
            });

            navbar.insertBefore(menuToggle, document.querySelector('.theme-toggle'));
        }
    } else {
        // Remove mobile menu toggle on larger screens
        const existingToggle = document.querySelector('.mobile-menu-toggle');
        if (existingToggle) {
            existingToggle.remove();
        }
    }
}

// Add CSS for mobile menu toggle
const style = document.createElement('style');
style.textContent = `
    .mobile-menu-toggle {
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: var(--text-primary);
        cursor: pointer;
        padding: 0.5rem;
    }

    @media (max-width: 768px) {
        .mobile-menu-toggle {
            display: block;
        }
    }
`;
document.head.appendChild(style);

// Initialize mobile menu on load and resize
window.addEventListener('load', createMobileMenuToggle);
window.addEventListener('resize', createMobileMenuToggle);

// Intersection Observer for Animations
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

// Observe timeline items, skill categories, and highlight items
document.querySelectorAll('.timeline-item, .skill-category, .highlight-item, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Console Easter Egg
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cInterested in the code? Check it out on GitHub!', 'font-size: 14px; color: #666;');
console.log('%cBuilt with ❤️ and lots of ☕', 'font-size: 12px; font-style: italic; color: #999;');
