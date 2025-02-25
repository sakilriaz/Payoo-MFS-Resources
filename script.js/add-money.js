
document.getElementById("add-money-box").addEventListener('click', function(){
    document.getElementById("add-money").style.display ="block";
    document.getElementById("cash-out").style.display ="none";
})
document.getElementById("cash-out-box").addEventListener('click', function(){
    document.getElementById("cash-out").style.display ="block";  
    document.getElementById("add-money").style.display ="none";
})

document.getElementById("add-money-btn").addEventListener('click', function(event){
    event.preventDefault();
    
   const accountNumber = document.getElementById("account-number").value;
   
   const pin = document.getElementById("pin").value; 
   const convertedPin = parseInt(pin);
   const amount = document.getElementById("amount").value;
   const convertedAmount = parseFloat(amount);
   const mainBalance=document.getElementById("main-balance").innerText;
   const convertedBalance=parseFloat(mainBalance);

   if(accountNumber.length===11){
     if(convertedPin===1234){
        const sum = convertedBalance + convertedAmount;
        document.getElementById("main-balance").innerText=sum;

     }
   }
  else{console.log("provide valid account-number")}
})