document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.profile h1');

    title.addEventListener('mouseenter', () => {
        title.style.color = '#2ecc71';
    });

    title.addEventListener('mouseleave', () => {
        title.style.color = '#007acc';
    });
});
