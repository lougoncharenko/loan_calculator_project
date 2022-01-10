//listen for submit button
let loanForm=document.getElementById('loan-form')
loanForm.addEventListener('submit', calculateResults);




//function calculate Results
function calculateResults(e){
e.preventDefault(); //needed for all form submits
//UI Vars
const amount=document.getElementById('amount');
const interest=document.getElementById('interest');
const years=document.getElementById('years');
const monthlyPayment=document.getElementById('monthly-payment');
const totalPayment=document.getElementById('total-payment');
const totalInterest=document.getElementById('total-interest');

//formulas
const principal=parseFloat(amount.value);
const calculatedInterest= parseFloat(interest.value)/100/12;
const calculatedPayments= parseFloat(years.value)*12

//compute monthly payment
const x=Math.pow(1+calculatedInterest, calculatedPayments);
const monthly=(principal*x*calculatedInterest)/ (x-1);
if(isFinite(monthly)){
    monthlyPayment.value=monthly.toFixed(2);
    totalPayment.value=(monthly*calculatedPayments).toFixed(2);
    totalInterest.value= ((monthly*calculatedPayments)-principal).toFixed(2);

}else {
    alert("please check your numbers")
}

}

