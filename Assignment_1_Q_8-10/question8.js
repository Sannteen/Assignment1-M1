// Question 8: Changes image source on page load
document.addEventListener('DOMContentLoaded', function () {
  const img = document.getElementById('image');
  if (img) {
    img.src = 'Mountain.jpg';
  }
});