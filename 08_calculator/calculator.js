const add = function(firstNumber, secondNumber) {
  return firstNumber + secondNumber;  	
};

const subtract = function(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sum = function(array) {
	let value = array.reduce((target, num) => {
    return target + num;
  }, 0);
  return value;
};

const multiply = function(array) {
  let value = array.reduce((target, num) => {
    return target * num;
  }, 1);
  return value;
};

const power = function(base, exponent) {
  let ans = 1;
  for(let i = 0; i < exponent; i++) {
    ans *= base;
  }
  return ans;
};

const factorial = function(num) {
  let ans = 1;
  while(num > 0) {
    ans *= num;
    num--;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
