let signUpBtn = document.querySelector(".signupbtn");
let signInBtn = document.querySelector(".signinbtn");
let nameField = document.querySelector(".namefield");
let title = document.querySelector(".title");
let underline = document.querySelector(".underline");
console.log(signInBtn);
let text=document.querySelector('.text');
signInBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  text.innerHTML = "Lost Password";
  signUpBtn.classList.add('disable');
  signInBtn.classList.remove('disable');
  underline.style.transform = 'translateX(35)';
});
signUpBtn.addEventListener("click", () => {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  text.innerHTML="Password Suggestions";
  signInBtn.classList.add('disable');
  signUpBtn.classList.remove('disable');
  underline.style.transform = 'translateX(0)';
});