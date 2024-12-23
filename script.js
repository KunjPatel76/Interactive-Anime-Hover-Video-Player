document.querySelectorAll('.media-card').forEach(card => {
    const video = card.querySelector('video');
    card.addEventListener('mouseover', () => video.play());
    card.addEventListener('mouseout', () => video.pause());
});