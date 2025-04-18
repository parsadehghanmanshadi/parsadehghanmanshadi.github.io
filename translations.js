// translations.js
const translations = {
    en: {
        home: "Home",
        about: "About",
        title: "Parsa Dehghan Manshadi | Gray Hat Hacker",
        tagline: "Exploring the digital frontier where security meets innovation",
        // Add all other English translations here
    },
    fa: {
        home: "خانه",
        about: "درباره من",
        title: "پارسا دهقان منشادی | هکر کلاه خاکستری",
        tagline: "کاوش در مرزهای دیجیتال جایی که امنیت با نوآوری ملاقات می‌کند",
        // Add all other Persian translations here
    }
};

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    
    // Apply translations to all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update language switcher text
    const switcher = document.getElementById('language-switcher');
    if (switcher) {
        switcher.textContent = lang === 'en' ? 'فارسی' : 'English';
    }
}
