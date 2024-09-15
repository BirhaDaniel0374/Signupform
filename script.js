var form = document.getElementById("form");

const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");
const cpassword_error = document.getElementById("cpassword_error");
const username_error = document.getElementById("username_error");


form.addEventListener("submit", (e) => {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var cpassword = document.getElementById("cpassword").value;
  
  var input = document.getElementsByTagName("input");
  
  e.preventDefault();

  var email_check = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (username === "") {
    username_error.innerHTML = "username is required";
    input[0].style.borderColor = "red";
  } else if (username.length <= 3) {
    username_error.innerHTML = "username  must be at least 3 characters";
    input[0].style.borderColor = "red";
  } else {
    username_error.innerHTML = "username successfully";
    username_error.style.color = "green";
    input[0].style.borderColor = "green";
  }

  if (!email_check.test(email)) {
    email_error.innerHTML = "Valid email is required";
    input[1].style.borderColor = "red";
  } else {
    email_error.innerHTML = "email is successfully";
    email_error.style.color = "green";
     input[1].style.borderColor = "green"; 
  }

  if (password === "") {
    password_error.innerHTML = "password is required";
    input[2].style.borderColor = "red";
  } else if (password.length <= 6) {
    password_error.innerHTML = "password must be at least 6 characters";
    input[2].style.borderColor = "red";
  } else {
    password_error.innerHTML = "password successfully";
    password_error.style.color = "green";
    input[2].style.borderColor = "green";  
  }

  if (cpassword === "") {
    cpassword_error.innerHTML = " please Confirm your Password";
    input[3].style.borderColor = "red";
  } else if (cpassword !== password) {
    cpassword_error.innerHTML = "Passwords doesn't match";
    input[3].style.borderColor = "red";
  } else {
    cpassword_error.innerHTML = "conform password successfully";
    cpassword_error.style.color = "green";
    input[3].style.borderColor = "green";  
  }
  
  if(username.length > 3 && email_check.test(email) && password.length >6 && cpassword === password){
     alert("Successfully Sign Up");
  }

    

});

window.onload = function(){
  const section = document.getElementById("animated-section");
      section.style.opacity = "1";
  //section.classList.add("fade-in");
};