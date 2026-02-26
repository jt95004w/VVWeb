export function initTapInForm() {
  const tapInButton = document.getElementById('tapInButton');
  const tapInForm = document.getElementById('tapInForm');
  const applicationForm = document.getElementById('applicationForm');
  const confirmationMessage = document.getElementById('confirmationMessage');
  if (!tapInButton || !tapInForm || !applicationForm || !confirmationMessage) return;

  tapInButton.addEventListener('click', () => {
    tapInForm.style.display = 'block';
    setTimeout(() => tapInForm.classList.add('active'), 10);
    tapInButton.style.display = 'none';
    confirmationMessage.style.display = 'none';
    confirmationMessage.style.opacity = '0';
  });

  applicationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    if (!emailField.value || !messageField.value) {
      alert('Please fill out all required fields.');
      return;
    }

    const formData = new FormData();
    formData.append('email', emailField.value);
    formData.append('message', messageField.value);

    fetch('https://formspree.io/f/xldgoaaj', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          tapInForm.style.display = 'none';
          confirmationMessage.style.display = 'flex';
          setTimeout(() => {
            confirmationMessage.style.opacity = '1';
          }, 10);

          setTimeout(() => {
            confirmationMessage.style.opacity = '0';
            setTimeout(() => {
              confirmationMessage.style.display = 'none';
              confirmationMessage.style.height = '0';
              tapInButton.style.display = 'block';
            }, 400);
          }, 2500);
        } else {
          alert('Submission failed. Please try again.');
        }
      })
      .catch(() => {
        alert('Something went wrong. Try again.');
      });
  });
}
