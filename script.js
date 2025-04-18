// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Language switcher functionality
    const languageSwitcher = document.getElementById('language-switcher');
    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', function() {
            const currentLang = document.documentElement.lang;
            const newLang = currentLang === 'en' ? 'fa' : 'en';
            applyLanguage(newLang);
            localStorage.setItem('preferredLanguage', newLang);
        });
    }

    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    applyLanguage(savedLang);

    // Rest of your existing code...
});

// Terminal typing effect
const typeWriterElements = document.querySelectorAll('.terminal-text');
typeWriterElements.forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    let i = 0;
    const speed = 50;
    
    function typeWriter() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            const cursor = document.createElement('span');
            cursor.className = 'blinking-cursor';
            cursor.textContent = '_';
            el.appendChild(cursor);
        }
    }
    typeWriter();
});

// Rest of your existing JavaScript...
