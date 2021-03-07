window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = "0";
  document.getElementById("loan-years").value = "0"; 
  document.getElementById("loan-rate").value = "0"; 
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let myValues = getCurrentUIValues();
  let myPayment = calculateMonthlyPayment(myValues);
  updateMonthly(myPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  let principle = values.amount;
  let interest = values.rate / 100 / 12;
  let term = values.years * 12;
  let payment = principle * interest * (Math.pow(1 + interest, term))/(Math.pow(1 + interest, term)-1);
  return payment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let display = document.getElementById("monthly-payment"); 
  display.innerHTML = monthly;
}
 