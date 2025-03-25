// script.js - Interactive elements for Parsa's hacker portfolio

document.addEventListener('DOMContentLoaded', function() {
    // ===== COMMON ELEMENTS =====
    // Add terminal-like typing effect to elements with class 'terminal-text'
    const typeWriterElements = document.querySelectorAll('.terminal-text');
    
    typeWriterElements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        let i = 0;
        const speed = 50; // typing speed in ms
        
        function typeWriter() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                // Add blinking cursor after typing completes
                const cursor = document.createElement('span');
                cursor.className = 'blinking-cursor';
                cursor.textContent = '_';
                el.appendChild(cursor);
            }
        }
        
        typeWriter();
    });

    // ===== HOME PAGE SPECIFIC =====
    if (document.querySelector('.hero')) {
        // Matrix-like rain effect for the hero section
        const hero = document.querySelector('.hero');
        hero.addEventListener('mousemove', function(e) {
            const x = e.clientX;
            const y = e.clientY;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            // Create falling code characters
            if (Math.random() > 0.7) {
                const char = document.createElement('span');
                char.className = 'matrix-char';
                char.textContent = String.fromCharCode(0x30A0 + Math.random() * 96);
                char.style.left = `${x}px`;
                char.style.top = `${y}px`;
                char.style.color = `hsl(${Math.random() * 120 + 100}, 100%, 50%)`;
                hero.appendChild(char);
                
                // Animate and remove
                setTimeout(() => {
                    char.style.transform = `translateY(${window.innerHeight}px)`;
                    char.style.opacity = '0';
                    setTimeout(() => char.remove(), 1000);
                }, 10);
            }
        });

        // Skill bars animation
        const skills = [
            { name: 'Ethical Hacking', level: 90 },
            { name: 'Python', level: 85 },
            { name: 'Web Security', level: 80 },
            { name: 'Django', level: 75 },
            { name: 'AI/ML', level: 70 }
        ];

        const skillsContainer = document.createElement('div');
        skillsContainer.className = 'skills-visualization';
        skillsContainer.innerHTML = '<h3>Skill Proficiency</h3>';
        
        skills.forEach(skill => {
            const skillBar = document.createElement('div');
            skillBar.className = 'skill-bar';
            
            const bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.width = '0';
            bar.dataset.level = skill.level;
            
            const label = document.createElement('span');
            label.className = 'skill-label';
            label.textContent = skill.name;
            
            skillBar.appendChild(label);
            skillBar.appendChild(bar);
            skillsContainer.appendChild(skillBar);
        });
        
        document.querySelector('.features').appendChild(skillsContainer);
        
        // Animate skill bars when scrolled into view
        const animateBars = () => {
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => {
                if (isInViewport(bar)) {
                    bar.style.width = `${bar.dataset.level}%`;
                }
            });
        };
        
        window.addEventListener('scroll', animateBars);
        animateBars(); // Run once on load
    }

    // ===== ABOUT PAGE SPECIFIC =====
    if (document.querySelector('.contact-card')) {
        // Interactive contact card
        const contactCard = document.querySelector('.contact-card');
        contactCard.addEventListener('click', function() {
            this.classList.toggle('glow');
            // Copy phone number to clipboard
            const phone = '+989162510463';
            navigator.clipboard.writeText(phone).then(() => {
                const originalText = this.querySelector('p:last-child').textContent;
                this.querySelector('p:last-child').textContent = 'Phone number copied to clipboard!';
                setTimeout(() => {
                    this.querySelector('p:last-child').textContent = originalText;
                }, 2000);
            });
        });

        // Hacker effect for skills
        const skills = document.querySelectorAll('.skill');
        skills.forEach(skill => {
            skill.addEventListener('mouseover', function() {
                const originalText = this.textContent;
                let iterations = 0;
                const interval = setInterval(() => {
                    this.textContent = originalText.split('')
                        .map((letter, index) => {
                            if (index < iterations) {
                                return originalText[index];
                            }
                            return String.fromCharCode(Math.random() * 94 + 33);
                        })
                        .join('');
                    
                    if (iterations >= originalText.length) clearInterval(interval);
                    iterations += 1 / 3;
                }, 30);
            });
        });
    }

    // Helper function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientHeight)
        );
    }
});
