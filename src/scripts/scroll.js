function divActive() {
  const divs = document.querySelectorAll('.slide-in');
  divs.forEach((div) => {
    const slideInAt = window.scrollY + window.innerHeight - div.offsetHeight / 2;
    if (slideInAt > div.offsetTop) div.classList.add('active');
    else div.classList.remove('active');
  });
}

function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function wrapped() {
    const context = this;
    const args = arguments;
    const later = function laterFn() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export function initScrollAnimations() {
  window.addEventListener('scroll', debounce(divActive));
}
