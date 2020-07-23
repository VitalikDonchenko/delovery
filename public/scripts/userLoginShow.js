const userLoginButton = document.getElementById('userLoginButton');
const courierLoginButton = document.getElementById('courierLoginButton');

userLoginButton.addEventListener('click', (e) => {
  e.preventDefault();
  e.target.style.display = "none";
  document.getElementById('userLoginForm').style.display = "block";
})

courierLoginButton.addEventListener('click', (e) => {
  e.preventDefault();
  e.target.style.display = "none";
  document.getElementById('courierLoginForm').style.display = "block";
})
