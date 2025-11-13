// === LOGIN HANDLING ===
const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simulate a simple login
    if (email && password) {
      // Redirect to the home page
      window.location.href = "home.html";
    } else {
      alert("Please enter your login credentials.");
    }
  });
}

// === LIKE BUTTON HANDLING ===
const likeButtons = document.querySelectorAll('.like-btn');

likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const count = button.querySelector('.like-count');
    let likes = parseInt(count.textContent);
    count.textContent = likes + 1;
  });
});
