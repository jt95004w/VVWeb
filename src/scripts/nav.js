export function initNavHighlight() {
  document.querySelectorAll('.main-nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      document.querySelectorAll('.main-nav a').forEach((navLink) => navLink.classList.remove('active'));
      event.currentTarget.classList.add('active');
    });
  });
}
