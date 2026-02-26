export function initTeamCarousel() {
  const tabs = document.querySelectorAll('.tab');
  const memberCards = document.querySelectorAll('.member-card');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  if (!tabs.length || !memberCards.length || !leftArrow || !rightArrow) return;

  let activeCategory = 'artists';
  let activeIndex;
  let prevIndex;
  let nextIndex;

  function switchCategory(category) {
    activeCategory = category;
    activeIndex = 0;
    resetMembers();
  }

  function resetMembers() {
    tabs.forEach((tab) => {
      tab.classList.toggle('active', tab.dataset.category === activeCategory);
    });

    memberCards.forEach((card) => {
      card.classList.remove('active', 'previous', 'next');
      card.style.opacity = '0';
      card.style.transform = 'translateX(200%)';
    });

    const members = document.querySelectorAll(`.member-card[data-category="${activeCategory}"]`);
    activeIndex = 0;
    prevIndex = (activeIndex - 1 + members.length) % members.length;
    nextIndex = (activeIndex + 1) % members.length;

    if (members.length > 0) {
      members[activeIndex].classList.add('active');
      members[prevIndex].classList.add('previous');
      members[nextIndex].classList.add('next');
    }
  }

  function navigate(direction) {
    const members = document.querySelectorAll(`.member-card[data-category="${activeCategory}"]`);
    if (members.length === 0) return;

    if (prevIndex !== null) members[prevIndex].classList.remove('previous');
    members[activeIndex].classList.remove('active');
    if (nextIndex !== null) members[nextIndex].classList.remove('next');

    if (direction === 'next') {
      const nextnextIndex = (nextIndex + 1) % members.length;
      prevIndex = activeIndex;
      activeIndex = nextIndex;
      nextIndex = nextnextIndex;
    } else {
      const prevprevIndex = (prevIndex - 1 + members.length) % members.length;
      nextIndex = activeIndex;
      activeIndex = prevIndex;
      prevIndex = prevprevIndex;
    }

    members[activeIndex].classList.add('active');
    if (prevIndex !== null) members[prevIndex].classList.add('previous');
    if (nextIndex !== null) members[nextIndex].classList.add('next');
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => switchCategory(tab.dataset.category));
  });

  leftArrow.addEventListener('click', () => navigate('prev'));
  rightArrow.addEventListener('click', () => navigate('next'));
  switchCategory('members');
}
