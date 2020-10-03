
btnsubmit.onclick=function(){
  
//ask user for numbers
let principle = ""; 
let interest = "";
let months = "";

principle = inptPrinciple.value
interest = inptMonthlyInterest.value
months = inptNumberofMonths.value

let p = principle
let r = interest
let n =months

function carLoanPayment(p, r, n) {
let monthlyPayment = p * (r*((1+r)**n))/(((1+r)**n)-1)
return monthlyPayment
  }

let monthlyPaymentNumbers = carLoanPayment(price, interest, months)
let finalPayment = parseInt(monthlyPaymentNumbers)

lblcarLoanformtextContent = 'A car loan for ${p} over ${n} months at ${r) interest would have a monthly payment of ${FinalPayment}`

