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

  const initLogoCarousel = () => {
    const carouselEl = document.getElementById('logoCarousel');
    if (!carouselEl || !window.bootstrap?.Carousel) return;

    const carousel = new window.bootstrap.Carousel(carouselEl, {
      interval: false,
      ride: false,
      wrap: true,
      touch: true,
    });

    const intervalMs = 5000;
    let timerId = window.setInterval(() => {
      // Move backward so the logo appears to slide from left to right.
      carousel.prev();
    }, intervalMs);

    carouselEl.addEventListener('mouseenter', () => {
      if (!timerId) return;
      window.clearInterval(timerId);
      timerId = null;
    });

    carouselEl.addEventListener('mouseleave', () => {
      if (timerId) return;
      timerId = window.setInterval(() => carousel.prev(), intervalMs);
    });
  };


  const initVideoCarousel = () => {
    const videoCarouselEl = document.getElementById('videoCarousel');
    if (!videoCarouselEl) return;

    videoCarouselEl.addEventListener('slide.bs.carousel', () => {
      const videos = videoCarouselEl.querySelectorAll('video');
      videos.forEach((video) => {
        video.pause();
      });
    });
  };

  const bootstrap = () => {
    initSmoothScroll();
    initLogoCarousel();
    initVideoCarousel();
  };

  document.addEventListener('DOMContentLoaded', bootstrap);
})();
