document.getElementById("add-money-btn").addEventListener('click', function(event){
    event.preventDefault();
   
   const accountNumber = document.getElementById("account-number").value;

   const amount = getInputValueByID("amount");

   const pin = getInputValueByID("pin");

   const mainBalance = getInnerTextById("main-balance");

   if (accountNumber.length===11){
     if (pin===1234){
       const sum = mainBalance + amount;
    //    document.getElementById("main-balance").innerText = sum;
    setInnerTextByIDandValue("main-balance",sum)

     }
     else{ console.log("provide valid pin")}
   }
   else{console.log("provide valid number")}

}) 