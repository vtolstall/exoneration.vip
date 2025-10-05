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

const footerTexts = [
    "for console membership please head to the discord to purchase.",
    "this mod currently only supports xbox black ops 2.",
    "plutonium version is not available as of right now.",
    "please report any bugs in the discord."
];

const footerElement = document.getElementById("footerText");
let currentFooter = 0;

setInterval(() => {
    footerElement.classList.add("fade-out");

    setTimeout(() => {
        currentFooter = (currentFooter + 1) % footerTexts.length;
        footerElement.textContent = footerTexts[currentFooter];
        footerElement.classList.remove("fade-out");
        footerElement.classList.add("fade-in");

        setTimeout(() => {
            footerElement.classList.remove("fade-in");
        }, 800);
    }, 800);
}, 4000);
