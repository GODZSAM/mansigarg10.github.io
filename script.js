particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - purple background');
});
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
