/*

//create the function
function homeLoanPayment(p, r, n) {
let monthlyPayment = p * (r*((1+r)**n))/(((1+r)**n)-1)
return monthlyPayment
  }

//ask user for numbers
let homePrice = Number(prompt("Enter home price"))
let homeInterest = Number(prompt("Enter your monthly home interest"))
let homeMonths = Number(prompt("Enter your number of total months"))

let homeYears = homeMonths / 12

let homeMonthlyPaymentNumbers = homeLoanPayment(homePrice, homeInterest, homeMonths)
let finalPayment = parseInt(homeMonthlyPaymentNumbers)

alert(`A home loan for $${homePrice} over ${homeYears} years at ${homeInterest}% interest would have a monthly payment of $${finalPayment}`)

*/
