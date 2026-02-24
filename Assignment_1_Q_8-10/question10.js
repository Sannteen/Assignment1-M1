// Question 10: Changes text color on hover
document.addEventListener('DOMContentLoaded', function () {
  const paragraphs = document.querySelectorAll('section:nth-of-type(3) p');

  paragraphs.forEach(p => {
    p.addEventListener('mouseenter', () => {
      p.style.color = 'red';
    });
    p.addEventListener('mouseleave', () => {
      p.style.color = '';
    });
  });
});