
const passwordInput = document.querySelector(".password-username");
const togglePassword = document.querySelector(".eye-icon");

togglePassword.addEventListener('click', function() {
  const isPassword = passwordInput.getAttribute('type') === 'password';
  if (isPassword) {
  passwordInput.setAttribute('type', 'text');
} else {
  passwordInput.setAttribute('type', 'password');
}
});
