document.addEventListener('DOMContentLoaded', () => {
  console.log('Timeline JS loaded');
  const timeline = document.querySelector('.timeline');
  const leftArrow = document.querySelector('.timeline-arrow.left');
  const rightArrow = document.querySelector('.timeline-arrow.right');

  if (!timeline || !leftArrow || !rightArrow) {
    console.error('Timeline or arrows missing');
    return;
  }

  const scrollAmount = () => timeline.clientWidth * 0.8;

  leftArrow.addEventListener('click', () => {
    timeline.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
    timeline.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });
});
