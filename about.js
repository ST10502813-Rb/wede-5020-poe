const lightbox = document.getElementById
('lightbox');
const lightbox = document.getElementById
('lightbox-img');
const closeBtn = document.getElementById
('closeBtn');

document.querySelectorAll('.gallery img').forEach
(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none'
})
