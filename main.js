console.log("js loaded");

//For coloring nav links. Removes 'active' from all nav links and adds to clicked link
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      // Remove 'active' from all links
      document.querySelectorAll('.main-nav a').forEach(el => el.classList.remove('active'));
      // Add 'active' to the clicked link
      e.currentTarget.classList.add('active');
    });
  });