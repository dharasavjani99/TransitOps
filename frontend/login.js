const loginForm=document.getElementById("loginForm");
const signupForm=document.getElementById("signupForm");

document.getElementById("showSignup").onclick=function(e){

e.preventDefault();

loginForm.classList.add("hidden");

signupForm.classList.remove("hidden");

};

document.getElementById("showLogin").onclick=function(e){

e.preventDefault();

signupForm.classList.add("hidden");

loginForm.classList.remove("hidden");

};

document.querySelector(".togglePassword").onclick=function(){

const password=document.getElementById("loginPassword");

const icon=this.querySelector("i");

if(password.type==="password"){

password.type="text";

icon.classList.replace("fa-eye","fa-eye-slash");

}
else{

password.type="password";

icon.classList.replace("fa-eye-slash","fa-eye");

}

};

loginForm.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("loginEmail").value.trim();

const password=document.getElementById("loginPassword").value.trim();

if(email===""||password===""){

alert("Please fill all fields.");

return;

}

if(!email.includes("@")){

alert("Enter a valid email.");

return;

}

alert("Login Successful!");

setTimeout(function () {

    window.location.href = "dashboard.html";

}, 1000);

});

signupForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("signupName").value.trim();

const email=document.getElementById("signupEmail").value.trim();

const password=document.getElementById("signupPassword").value.trim();

if(name===""||email===""||password===""){

alert("Please fill all fields.");

return;

}

alert("Account Created Successfully!");

signupForm.classList.add("hidden");

loginForm.classList.remove("hidden");

});