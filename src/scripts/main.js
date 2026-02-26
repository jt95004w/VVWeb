import { initTeamCarousel } from './carousel.js';
import { initTapInForm } from './form.js';
import { initDynamicWords, initParallax } from './hero.js';
import { initNavHighlight } from './nav.js';
import { initScrollAnimations } from './scroll.js';

initNavHighlight();

document.addEventListener('DOMContentLoaded', () => {
  initDynamicWords();
  initTeamCarousel();
  initTapInForm();
});

initParallax();
initScrollAnimations();
