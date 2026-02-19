// Initialize Splitting (ensure chars are wrapped for animation)
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Splitting === 'function') {
    Splitting();
  }
});

// Show navigation
const menuBtn = document.querySelector(".menu");
const nav = document.querySelector(".nav");

// ensure overlay exists (will be appended to body)
let overlay = document.querySelector('.nav-overlay');
if (!overlay) {
  overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);
}

// Function to close nav with exit animation
function closeNav() {
  if (!nav.classList.contains('show')) return;
  
  nav.classList.add('closing');
  overlay.classList.remove('active');
  document.body.classList.remove('nav-active');
  
  // Wait for exit animation to complete, then remove classes
  setTimeout(() => {
    nav.classList.remove('show', 'closing');
  }, 350); // matching the fadeOutDown duration
}

menuBtn.addEventListener("click", () => {
    if (nav.classList.contains('show')) {
      closeNav();
    } else {
      nav.classList.add('show');
      overlay.classList.add('active');
      document.body.classList.add('nav-active');
    }
});

// clicking overlay closes nav
overlay.addEventListener('click', () => {
  closeNav();
});

// close when a nav item is clicked
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    closeNav();
  });
});


// Show work on page load
window.addEventListener('load', () => {
  const workSegment = document.querySelector('#work');
  if (workSegment) {
    workSegment.classList.add('show');
  } 
});


Splitting();









