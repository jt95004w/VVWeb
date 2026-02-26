export function initDynamicWords() {
  const words = document.querySelectorAll('.dynamic-words span');
  if (!words.length) return;

  let currentIndex = 0;
  let interval = 850;

  function cycleWords() {
    words[currentIndex].classList.remove('active');
    words[currentIndex].classList.add('inactive');

    currentIndex = (currentIndex + 1) % words.length;
    words[currentIndex].classList.remove('inactive');
    words[currentIndex].classList.add('active');

    if (currentIndex === words.length - 1) return;

    if (interval === 1000) interval = 800;
    else if (interval > 300) interval -= 150;

    setTimeout(cycleWords, interval);
  }

  words[currentIndex].classList.add('active');
  setTimeout(cycleWords, interval);
}

export function initParallax() {
  document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const logo = document.querySelector('.parallax-image');
    const leftImage = document.querySelector('.parallax-left');
    const rightImage = document.querySelector('.parallax-right');
    if (!logo) return;

    if (window.innerWidth < 768) {
      logo.style.transform = `translateY(${scrollY * 0.1}px) translateZ(0)`;
      if (leftImage) leftImage.style.transform = `translateY(${scrollY * 0.02}px) translateZ(0)`;
      if (rightImage) rightImage.style.transform = `translateY(${scrollY * 0.02}px) translateZ(0)`;
    } else {
      logo.style.transform = `translateY(${scrollY * 0.2}px) translateZ(0)`;
      if (leftImage) leftImage.style.transform = `translateY(${scrollY * 0.03}px) translateZ(0)`;
      if (rightImage) rightImage.style.transform = `translateY(${scrollY * 0.05}px) translateZ(0)`;
    }
  });
}
