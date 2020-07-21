//Login Button even Start.
let LoginBtn = document.getElementById("Login");
LoginBtn.addEventListener('click', function () {
    let loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    let TransitionArea = document.getElementById('Transition-Area');
    TransitionArea.style.display = "block"
});
//Login Button even handler Finish.

//Deposit Button even handler Start.
let deposit = document.getElementById("addDeposit");
deposit.addEventListener('click', function(){
   let depositAmount = document.getElementById("deposit-Ammount").value;
   let depositToNumber = parseFloat(depositAmount);
   updateSpanText("currentDeposit", depositToNumber);
   updateSpanText("currentBalence", depositToNumber);
  document.getElementById("deposit-Ammount").value = "";
});

function updateSpanText(YourSpanId, depositToNumber){

    let currentBalence = document.getElementById(YourSpanId).innerText;
    let currentBalenceToNumber =  parseFloat(currentBalence);
    let totalBalence = depositToNumber + currentBalenceToNumber;
    document.getElementById(YourSpanId).innerText = totalBalence;
}
//Deposit Button even handler Finish.

