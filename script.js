var loginButton = document.getElementById("login");
var registerButton = document.getElementById("register");
var switchButton = document.getElementById("btn")

function register(){
    loginButton.style.left = "-400px"
    registerButton.style.left = "10px"
    switchButton.style.left = "120px"    
}
function login(){
    loginButton.style.left = "10px"
    registerButton.style.left = "450px"
    switchButton.style.left = "0px"    
}