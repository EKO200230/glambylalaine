// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Portfolio Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                item.classList.add('fade-in-up');
            } else {
                item.style.display = 'none';
                item.classList.remove('fade-in-up');
            }
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(236, 202, 193, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(212, 175, 55, 0.15)';
    } else {
        navbar.style.background = 'rgba(236, 202, 193, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Remove custom booking form submission and validation code for Formspree compatibility

// Notification system with updated colors
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles with updated colors
    const colors = {
        success: {
            background: '#f0f8f0',
            color: '#2d5a2d',
            border: '#c3e6c3'
        },
        error: {
            background: '#fdf2f2',
            color: '#742a2a',
            border: '#f5c6c6'
        },
        info: {
            background: '#f0f8ff',
            color: '#2d5a7a',
            border: '#c3e6ff'
        }
    };
    
    const colorScheme = colors[type] || colors.info;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${colorScheme.background};
        color: ${colorScheme.color};
        border: 1px solid ${colorScheme.border};
        border-radius: 8px;
        padding: 15px 20px;
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .notification-close {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        margin-left: 10px;
        opacity: 0.7;
        color: inherit;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Image loading animation
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.portfolio-item img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // If image is already loaded
        if (img.complete) {
            img.classList.add('loaded');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .contact-item');
    animateElements.forEach(el => observer.observe(el));
});

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('.portfolio-item img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add loading state to form submission
// This section is no longer needed as Formspree handles submission

// Add hover effects for portfolio items
document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.04)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Add scroll to top functionality with updated colors
function addScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: linear-gradient(45deg, #f9d976, #d4af37);
        color: #3a2c2c;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.25);
        border: 2px solid #d4af37;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effects
    scrollToTopBtn.addEventListener('mouseenter', () => {
        scrollToTopBtn.style.background = '#eccac1';
        scrollToTopBtn.style.color = '#3a2c2c';
        scrollToTopBtn.style.transform = 'translateY(-3px)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', () => {
        scrollToTopBtn.style.background = 'linear-gradient(45deg, #f9d976, #d4af37)';
        scrollToTopBtn.style.color = '#3a2c2c';
        scrollToTopBtn.style.transform = 'translateY(0)';
    });
}

// Initialize scroll to top
document.addEventListener('DOMContentLoaded', addScrollToTop);

// Add night mode toggle functionality
function addNightModeToggle() {
    // Create night mode toggle button
    const nightModeToggle = document.createElement('button');
    nightModeToggle.innerHTML = '🌙';
    nightModeToggle.className = 'night-mode-toggle';
    nightModeToggle.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: linear-gradient(45deg, #f9d976, #d4af37);
        color: #3a2c2c;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(212, 175, 55, 0.25);
        border: 2px solid #d4af37;
    `;
    
    document.body.appendChild(nightModeToggle);
    
    // Night mode styles
    const nightModeStyles = `
        body.night-mode {
            background: #181818 !important;
            color: #f0f0f0 !important;
        }
        body.night-mode .navbar {
            background: rgba(24, 24, 24, 0.98) !important;
            border-bottom-color: #d4af37 !important;
        }
        body.night-mode .nav-link,
        body.night-mode .logo-text {
            color: #f0f0f0 !important;
        }
        body.night-mode .nav-link:hover {
            color: #d4af37 !important;
        }
        body.night-mode .logo-img,
        body.night-mode .footer-logo-img {
            background: #181818 !important;
            border-color: #d4af37 !important;
        }
        body.night-mode .hero {
            background: linear-gradient(135deg, #232323 0%, #181818 100%) !important;
        }
        body.night-mode .hero-text h1,
        body.night-mode .hero-text p {
            color: #f0f0f0 !important;
        }
        body.night-mode .hero-img {
            background: #232323 !important;
            border-color: #d4af37 !important;
        }
        body.night-mode .services {
            background: #232323 !important;
        }
        body.night-mode .service-card {
            background: #181818 !important;
            color: #f0f0f0 !important;
            border-color: #d4af37 !important;
        }
        body.night-mode .service-icon {
            background: #232323 !important;
            color: #d4af37 !important;
            border-color: #d4af37 !important;
        }
        body.night-mode .portfolio {
            background: #181818 !important;
        }
        body.night-mode .portfolio-item {
            background: #232323 !important;
            border-color: #d4af37 !important;
        }
        body.night-mode .portfolio-overlay {
            background: linear-gradient(transparent, rgba(212, 175, 55, 0.85)) !important;
            color: #181818 !important;
        }
        body.night-mode .portfolio-tag {
            background: #d4af37 !important;
            color: #181818 !important;
            border-color: #232323 !important;
        }
        body.night-mode .before-after {
            background: #232323 !important;
        }
        body.night-mode .before-after-item {
            background: #181818 !important;
            border-color: #d4af37 !important;
        }
        body.night-mode .before-after-overlay {
            background: linear-gradient(transparent, rgba(212, 175, 55, 0.85)) !important;
            color: #181818 !important;
        }
        body.night-mode .before-after-tag {
            background: #d4af37 !important;
            color: #181818 !important;
            border-color: #232323 !important;
        }
        body.night-mode .booking {
            background: #232323 !important;
        }
        body.night-mode .booking-form {
            background: #181818 !important;
            border-color: #d4af37 !important;
        }
        body.night-mode .form-group input,
        body.night-mode .form-group select,
        body.night-mode .form-group textarea {
            background: #232323 !important;
            color: #f0f0f0 !important;
            border-color: #d4af37 !important;
        }
        body.night-mode .form-group label {
            color: #f0f0f0 !important;
        }
        body.night-mode .contact {
            background: #181818 !important;
        }
        body.night-mode .contact-item {
            background: #232323 !important;
            color: #f0f0f0 !important;
            border-color: #d4af37 !important;
        }
        body.night-mode .contact-icon {
            background: #181818 !important;
            color: #d4af37 !important;
            border-color: #d4af37 !important;
        }
        body.night-mode .contact-details h3,
        body.night-mode .contact-details p {
            color: #f0f0f0 !important;
        }
        body.night-mode .social-link {
            color: #d4af37 !important;
        }
        body.night-mode .footer {
            background: #111 !important;
            color: #f0f0f0 !important;
        }
        body.night-mode .footer-logo-img {
            background: #181818 !important;
            border-color: #d4af37 !important;
        }
        body.night-mode .footer-links a {
            color: #f0f0f0 !important;
        }
        body.night-mode .footer-links a:hover {
            color: #d4af37 !important;
        }
        body.night-mode .footer-rate {
            background: #d4af37 !important;
            color: #181818 !important;
        }
        body.night-mode .footer-bottom {
            color: #f0f0f0 !important;
        }
        body.night-mode .btn,
        body.night-mode .btn-primary,
        body.night-mode .btn-secondary {
            background: #232323 !important;
            color: #d4af37 !important;
            border-color: #d4af37 !important;
        }
        body.night-mode .btn:hover,
        body.night-mode .btn-primary:hover,
        body.night-mode .btn-secondary:hover {
            background: #d4af37 !important;
            color: #181818 !important;
        }
        body.night-mode .section-title {
            color: #d4af37 !important;
        }
        body.night-mode .rate-card,
        body.night-mode .rate-highlight {
            background: #181818 !important;
            color: #d4af37 !important;
            border-color: #d4af37 !important;
        }
        body.night-mode .rate-card i,
        body.night-mode .rate-highlight i {
            color: #d4af37 !important;
        }
        body.night-mode .scroll-to-top {
            background: #232323 !important;
            color: #d4af37 !important;
            border-color: #d4af37 !important;
        }
        body.night-mode .scroll-to-top:hover {
            background: #d4af37 !important;
            color: #181818 !important;
        }
        body.night-mode .night-mode-toggle {
            background: #232323 !important;
            color: #d4af37 !important;
            border-color: #d4af37 !important;
        }
        body.night-mode .night-mode-toggle:hover {
            background: #d4af37 !important;
            color: #181818 !important;
        }
        body.night-mode,
        body.night-mode h1,
        body.night-mode h2,
        body.night-mode h3,
        body.night-mode h4,
        body.night-mode h5,
        body.night-mode h6,
        body.night-mode p,
        body.night-mode span,
        body.night-mode li,
        body.night-mode label,
        body.night-mode .portfolio-overlay,
        body.night-mode .portfolio-overlay h3,
        body.night-mode .portfolio-overlay p,
        body.night-mode .before-after-overlay,
        body.night-mode .service-card,
        body.night-mode .contact-item,
        body.night-mode .footer,
        body.night-mode .footer-logo,
        body.night-mode .footer-links a,
        body.night-mode .footer-bottom,
        body.night-mode .rate-card,
        body.night-mode .rate-highlight {
            color: #fff !important;
        }
        body.night-mode .portfolio-overlay h3,
        body.night-mode .portfolio-overlay p {
            color: #fff !important;
            text-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }
        body.night-mode .logo-text,
        body.night-mode .nav-link,
        body.night-mode .section-title {
            color: #fff !important;
        }
        body.night-mode .feature-item {
            background: #232323 !important;
            border-left: 4px solid #d4af37 !important;
        }
        body.night-mode .feature-item span {
            color: #fff !important;
        }
        body.night-mode .feature-item i {
            color: #d4af37 !important;
        }
        body.night-mode .booking-features {
            color: #fff !important;
        }
        body.night-mode .booking-note {
            background: #232323 !important;
            color: #fff !important;
            border: 1px solid #d4af37 !important;
        }
        body.night-mode .booking-note i {
            color: #d4af37 !important;
        }
    `;
    
    // Add night mode styles to head
    const nightModeStyleSheet = document.createElement('style');
    nightModeStyleSheet.textContent = nightModeStyles;
    document.head.appendChild(nightModeStyleSheet);
    
    // Toggle night mode
    let isNightMode = false;
    nightModeToggle.addEventListener('click', () => {
        isNightMode = !isNightMode;
        document.body.classList.toggle('night-mode', isNightMode);
        
        // Update toggle button
        if (isNightMode) {
            nightModeToggle.innerHTML = '☀️';
            nightModeToggle.style.background = '#eccac1';
        } else {
            nightModeToggle.innerHTML = '🌙';
            nightModeToggle.style.background = 'linear-gradient(45deg, #f9d976, #d4af37)';
        }
        
        // Save preference
        localStorage.setItem('nightMode', isNightMode);
    });
    
    // Load saved preference
    const savedNightMode = localStorage.getItem('nightMode') === 'true';
    if (savedNightMode) {
        document.body.classList.add('night-mode');
        nightModeToggle.innerHTML = '☀️';
        nightModeToggle.style.background = '#eccac1';
        isNightMode = true;
    }
}

// Initialize night mode toggle
document.addEventListener('DOMContentLoaded', addNightModeToggle); 

// Fade-in animation for sections on scroll
function fadeInOnScroll() {
    const fadeSections = document.querySelectorAll('.fade-in-section');
    const windowHeight = window.innerHeight;
    fadeSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < windowHeight - 60) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', fadeInOnScroll);
document.addEventListener('DOMContentLoaded', fadeInOnScroll);

// Sparkle animation in hero section
function createSparkle(x, y, container) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.animationDuration = (1.5 + Math.random()) + 's';
    container.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
}
function sparkleEffect() {
    const container = document.querySelector('.sparkle-container');
    if (!container) return;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    for (let i = 0; i < 3; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height * 0.7;
        createSparkle(x, y, container);
    }
}
setInterval(sparkleEffect, 1200);

// Sparkle CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
.sparkle {
    position: absolute;
    width: 18px;
    height: 18px;
    pointer-events: none;
    background: none;
    z-index: 3;
    opacity: 0.8;
    animation: sparkle-float 1.8s linear forwards;
}
.sparkle::before, .sparkle::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: linear-gradient(45deg, #fffbe6 60%, #d4af37 100%);
}
.sparkle::before {
    width: 18px;
    height: 4px;
    opacity: 0.7;
    filter: blur(0.5px);
}
.sparkle::after {
    width: 4px;
    height: 18px;
    opacity: 0.7;
    filter: blur(0.5px);
}
@keyframes sparkle-float {
    0% { opacity: 0; transform: scale(0.7) translateY(0); }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; transform: scale(1.2) translateY(-30px); }
}
`;
document.head.appendChild(sparkleStyle);

// Parallax/floating effect for hero image/logo
const heroImg = document.querySelector('.hero-img');
if (heroImg) {
    window.addEventListener('mousemove', e => {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        heroImg.style.transform = `translate(${x}px, ${y}px) scale(1.03)`;
    });
    window.addEventListener('mouseleave', () => {
        heroImg.style.transform = '';
    });
} 