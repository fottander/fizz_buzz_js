describe("FizzCalculator", function() {
  var calculator;

beforeEach(function() {
  calculator = new FizzCalculator();
});

it("should return 'fizz' if number is divisible by 3", function() {
  //calculator.fizzbuzz_calc(3);///
  expect(calculator.fizzbuzz_calc(3)).toBe('fizz');
});

it("should return 'buzz' if number is divisible by 5", function() {
  ///calculator.fizzbuzz_calc(5);///
  expect(calculator.fizzbuzz_calc(5)).toBe('buzz');
});

it("should return 'fizzbuzz' if number is divisible by 5 and 3", function() {
  /////calculator.fizzbuzz_calc(15);/////
  expect(calculator.fizzbuzz_calc(15)).toBe('fizzbuzz');
});

});
