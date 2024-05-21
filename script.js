const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const error = document.getElementById('error-message');
const emailRegex = /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})/;

const showError = message => {
  error.innerText = message;
}

form.addEventListener('submit', (e) => {
  const emailValue = emailInput.value.trim();

  if (emailValue.length === 0) {
    showError("Oops! Please add your email");
    e.preventDefault();
    return;
  }

  if (!emailRegex.test(emailValue)) {
    showError("Oops! Please check your email");
    e.preventDefault();
    return;
  }
  
  // Clear the error message if the email is valid
  error.innerText = "";
});