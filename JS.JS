// script.js
// Example: Adding a hover effect to portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});