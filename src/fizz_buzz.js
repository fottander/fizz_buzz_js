function FizzCalculator(){
}

FizzCalculator.prototype.fizzbuzz_calc = function(x){

  if (x % 5 === 0 && x % 3 === 0) {
    return('fizzbuzz');
  }
  else if (x % 5 === 0) {
    return('buzz');
  }
  else if (x % 3 === 0) {
    return('fizz');
  }
  else {
    return(x);
}
};
