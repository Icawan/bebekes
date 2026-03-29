/**
 * UI module for lightweight interactions.
 * Keeps behavior isolated from markup and styles for maintainability.
 */
(() => {
  const initSmoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  };

  const bootstrap = () => {
    initSmoothScroll();
  };

  document.addEventListener('DOMContentLoaded', bootstrap);
})();
