// Initialize Splitting (ensure chars are wrapped for animation)
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Splitting === 'function') {
    Splitting();
  }

  const tabButtons = Array.from(document.querySelectorAll('.tab-button[data-tab]'));
  const tabPanels = Array.from(document.querySelectorAll('[data-content]'));

  if (tabButtons.length && tabPanels.length) {
    const setActiveTab = (tabName) => {
      tabButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.tab === tabName);
      });

      tabPanels.forEach((panel) => {
        const isActive = panel.dataset.content === tabName;
        panel.classList.toggle('active', isActive);
        panel.hidden = !isActive;
      });
    };

    const activeButton =
      tabButtons.find((button) => button.classList.contains('active')) || tabButtons[0];

    setActiveTab(activeButton.dataset.tab);

    tabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        setActiveTab(button.dataset.tab);
      });
    });
  }

  const floatingBtn = document.querySelector('.floating-btn');

  const updateFloatingBtn = () => {
    if (!floatingBtn) return;
    const floatingThreshold = window.innerHeight * 2;
    const isVisible = window.scrollY > floatingThreshold;
    floatingBtn.classList.toggle('visible', isVisible);
  };

  if (floatingBtn) {
    window.addEventListener('scroll', updateFloatingBtn, { passive: true });
    floatingBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    updateFloatingBtn();
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


// Show page-specific sections on load
window.addEventListener('load', () => {
  const workSegment = document.querySelector('#work');
  if (workSegment) {
    workSegment.classList.add('show');
  }

  const projectSegment = document.querySelector('#project');
  if (projectSegment) {
    projectSegment.classList.add('show');
  }
});






