
it('should calculate the monthly rate correctly', function () {
let values = {amount:150000, rate:3.081, years:30};
expect(calculateMontlyPayment(values)).toEqual("638.98");
});


it("should return a result with 2 decimal places", function() {
  let paymentString = /^\d+\.\d{0,2}$/;
  let values = {amount:150000, rate:3.081, years:30};
  let testPayment = calculateMontlyPayment(values);
  expect(paymentString.test(testPayment)).toEqual(true);
});

 
