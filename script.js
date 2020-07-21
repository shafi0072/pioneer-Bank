let LoginBtn = document.getElementById("Login");
LoginBtn.addEventListener('click', function () {
    let loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    let TransitionArea = document.getElementById('Transition-Area');
    TransitionArea.style.display = "block"
});
