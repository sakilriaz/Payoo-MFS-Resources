document.getElementById("cash-out-btn").addEventListener('click', function(event){
event.preventDefault();

const accountNumber = document.getElementById("cash-out-account-number").value;


const amount = getInputValueByID("cash-out-amount");

const pinCash = getInputValueByID("cash-out-pin");

const mainBalance=getInnerTextById("main-balance");


if(pinCash===1234){
if(accountNumber.length===11){
const sum = mainBalance - amount ;
setInnerTextByIDandValue("main-balance",sum)
}
else{
    alert("account number not valid")
} 
}
else{
    alert("pin not valid")
}

})