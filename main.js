console.log("js loaded");

//for coloring nav links. Removes 'active' from all nav links and adds to clicked link so color changes 
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      // remove 'active' from all links
      document.querySelectorAll('.main-nav a').forEach(el => el.classList.remove('active'));
      //add 'active' to the clicked link
      e.currentTarget.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const words = document.querySelectorAll(".dynamic-words span");
  let currentIndex = 0;
  let interval = 850; // Start speed in milliseconds

  function cycleWords() {
    // Remove 'active' from the current word and mark it as 'inactive'
    words[currentIndex].classList.remove("active");
    words[currentIndex].classList.add("inactive");

    // Move to the next word (loop back to the start if necessary)
    currentIndex = (currentIndex + 1) % words.length;

    // Add 'active' to the new current word
    words[currentIndex].classList.remove("inactive");
    words[currentIndex].classList.add("active");

    // If this is the final word, stop cycling
    if (currentIndex === words.length - 1) {
      return; // End the function to stop cycling
    }

    // Speed up the interval
    if(interval == 1000){
      interval = 800
    }
    else if(interval > 300){
      interval -= 150; // Reduce the interval by 20% each time
    }
    
    // Call cycleWords again with the new interval
    setTimeout(cycleWords, interval);
  }

  // Initialize the first word
  words[currentIndex].classList.add("active");

  // Start cycling words
  setTimeout(cycleWords, interval);
});

document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const logo = document.querySelector(".parallax-image"); // The main logo
  const leftImage = document.querySelector(".parallax-left");
  const rightImage = document.querySelector(".parallax-right");

  // Adjust depth for the logo
  const depthLogo = scrollY * 0.2; // Slightly more depth for visibility
  logo.style.transform = `translateY(${depthLogo}px) translateZ(0)`;

  // Adjust depth for both images
  const depthLeft = scrollY * 0.03;
  const depthRight = scrollY * 0.05;

  leftImage.style.transform = `translateY(${depthLeft}px) translateZ(0)`;
  rightImage.style.transform = `translateY(${depthRight}px) translateZ(0)`;
});




