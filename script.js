document.addEventListener('DOMContentLoaded', () => {
    // Hover glow for feature cards and skills
    const interactiveElements = document.querySelectorAll('.feature-card, .skill');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.boxShadow = '0 0 15px rgba(32, 194, 14, 0.5)';
        });
        el.addEventListener('mouseleave', () => {
            el.style.boxShadow = 'none';
        });
    });

    // Fade-in for sections on scroll
    const sections = document.querySelectorAll('section, .contact-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
});
