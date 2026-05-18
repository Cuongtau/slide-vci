/* Reveal init + custom slide-specific animations */
(function () {
  const deck = new Reveal({
    hash: true,
    history: true,
    controls: true,
    progress: true,
    slideNumber: 'c/t',
    showSlideNumber: 'all',
    center: true,
    transition: 'slide',
    transitionSpeed: 'default',
    backgroundTransition: 'fade',
    width: 1920,
    height: 1080,
    margin: 0.02,
    minScale: 0.2,
    maxScale: 2.0,
    plugins: [RevealNotes],
  });

  deck.initialize().then(() => {
    // Trigger slide-specific custom animations on slide change
    deck.on('slidechanged', (e) => onSlideEnter(e.currentSlide));
    onSlideEnter(deck.getCurrentSlide());
  });

  function onSlideEnter(slide) {
    if (!slide) return;

    // Timeline (slide 5): activate pins sequentially
    const timeline = slide.querySelector('.timeline');
    if (timeline) {
      const pins = timeline.querySelectorAll('.pin');
      pins.forEach((p, i) => {
        p.classList.remove('active');
        setTimeout(() => p.classList.add('active'), 600 + i * 350);
      });
      const fill = timeline.querySelector('.progress-fill');
      if (fill) {
        fill.style.width = '0%';
        // force reflow then animate
        void fill.offsetWidth;
        const target = fill.dataset.progress || '75%';
        fill.style.width = target;
      }
    }

    // Flowchart (slide 4): pulse arrows in sequence
    const flow = slide.querySelector('.flow');
    if (flow) {
      const arrows = flow.querySelectorAll('.arrow');
      arrows.forEach((a, i) => {
        a.style.opacity = 0;
        setTimeout(() => {
          a.style.transition = 'opacity .4s';
          a.style.opacity = 1;
        }, 800 + i * 250);
      });
    }
  }
})();
