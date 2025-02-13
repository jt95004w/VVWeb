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

// Carousel stuff

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


//FUNCTIONS FOR MEMBERS SECTION 
document.addEventListener("DOMContentLoaded", () => {

  // Defining variables for "Meet the Collective" section
  const tabs = document.querySelectorAll(".tab");
  const memberCards = document.querySelectorAll(".member-card");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  // Default should be artists and first artists displayed
  let activeCategory = "artists"; // Default category
  let activeIndex;
  let prevIndex;
  let nextIndex;

  // Function to switch categories
  function switchCategory(category) {
    activeCategory = category;
    activeIndex = 0; // Reset to first member when switching categories
    resetMembers();
  }

  // Function to reset visible members
  function resetMembers() {
    // Update tab styles
    tabs.forEach(tab => {
      tab.classList.toggle("active", tab.dataset.category === activeCategory);
    });

    // Hide all members first
    memberCards.forEach(card => {
      card.classList.remove("active", "previous");
      card.style.opacity = "0";
      card.style.transform = "translateX(200%)";
    });

    // Select members in the active category
    const members = document.querySelectorAll(`.member-card[data-category="${activeCategory}"]`);

    // Resetting active index to 0
    activeIndex = 0; // Default first member index
    prevIndex = (activeIndex - 1 + members.length) % members.length;
    nextIndex = (activeIndex + 1) % members.length;

    console.log(prevIndex);

    if (members.length > 0) {
      members[activeIndex].classList.add("active");
      members[prevIndex].classList.add("previous");
      members[nextIndex].classList.add("next");
    }

  }

  function navigate(direction) {

    // Select cards for the current active category.
    const members = document.querySelectorAll(`.member-card[data-category="${activeCategory}"]`);
    if (members.length === 0) return; // No cards to navigate

    // Remove current classes
    if (prevIndex !== null) members[prevIndex].classList.remove("previous");
    members[activeIndex].classList.remove("active");
    if (nextIndex !== null) members[nextIndex].classList.remove("next");

    if (direction === "next") {

      let nextnextIndex = (nextIndex + 1) % members.length;

      // Reassigning new trio
      prevIndex = activeIndex;
      activeIndex = nextIndex;
      nextIndex = nextnextIndex;

    }
    else {

      let prevprevIndex = (prevIndex - 1 + members.length) % members.length;

      // Reassigning new trio
      nextIndex = activeIndex;
      activeIndex = prevIndex;
      prevIndex = prevprevIndex;

    }

    // Add current classes
    members[activeIndex].classList.add("active");
    if (prevIndex !== null) members[prevIndex].classList.add("previous");
    if (nextIndex !== null) members[nextIndex].classList.add("next");

  }

  // Event Listeners
  tabs.forEach(tab => {
    tab.addEventListener("click", () => switchCategory(tab.dataset.category));
  });

  leftArrow.addEventListener("click", () => navigate("prev"));
  rightArrow.addEventListener("click", () => navigate("next"));

  // Initialize members
  resetMembers();
  
});

/* ===============================
     OBSERVE ON SCROLL
     =============================== */

// Show div when user scrolls to 50% of the div
function divActive(e) {

  // Collect all divs with 'slide-in' class
  const divs = document.querySelectorAll('.slide-in');

  // For each div...
  divs.forEach(div => {

    // Calculate current height user is at on div
    const slideInAt = (window.scrollY + window.innerHeight) - div.offsetHeight / 2;
    // Add active class to div if threshold of 50% of height has been crossed
    if (slideInAt > div.offsetTop) div.classList.add('active');
    else div.classList.remove('active');

  })

}

// delays scroll affects (copied from stack overflow)
function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Adding event listener for scroll to call debounce
window.addEventListener('scroll', debounce(divActive));




