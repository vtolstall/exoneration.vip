window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('mailto:')) return;

        e.preventDefault();
        document.body.classList.remove('fade-in');
        document.body.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});

const glitchLink = document.getElementById('glitchLink');
if (glitchLink) {
    const glitchWords = ["404", "error", "??", "T6", "soon™"];
    const originalText = glitchLink.textContent;

    setInterval(() => {
        const randomWord = glitchWords[Math.floor(Math.random() * glitchWords.length)];
        glitchLink.textContent = randomWord;
        glitchLink.classList.add('glitch-flash');

        setTimeout(() => {
            glitchLink.textContent = originalText;
            glitchLink.classList.remove('glitch-flash');
        }, 150); 
    }, 3000); 
}