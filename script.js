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
//create a function for all spanText.
function updateSpanText(YourSpanId, depositToNumber){

    let currentBalence = document.getElementById(YourSpanId).innerText;
    let currentBalenceToNumber =  parseFloat(currentBalence);
    let totalBalence = depositToNumber + currentBalenceToNumber;
    document.getElementById(YourSpanId).innerText = totalBalence;
}
//Deposit Button even handler Finish.

//withdraw Button even handler Start.
let withdraw = document.getElementById("addWithdraw");
withdraw.addEventListener("click", function(){
    let widrawAmount = document.getElementById("widrawAmount").value;
    let widrawAmountToNumber = parseFloat(widrawAmount);
    let currentWidraw = document.getElementById("currentWidraw").innerText;
    let currentWidrawToNumber = parseFloat(currentWidraw);
    let totalWidraw = widrawAmountToNumber + currentWidrawToNumber;
    document.getElementById("currentWidraw").innerText = totalWidraw;
 

    let currentBalenceForWidraw = document.getElementById("currentBalence").innerText;
    let currentBalenceWidrawToNumber = parseFloat(currentBalenceForWidraw);
    let totalWidrawFromCurrentBalence = currentBalenceWidrawToNumber - widrawAmountToNumber;
    document.getElementById("currentBalence").innerText = totalWidrawFromCurrentBalence;

    document.getElementById("widrawAmount").value = "";
})
//withdraw Button even handler Finish.