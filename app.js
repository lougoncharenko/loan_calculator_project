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


}

