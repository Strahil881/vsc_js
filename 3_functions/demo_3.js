function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function sum(numbers){
  var s = 0, i, len;
  for(i = 0, len = numbers.length; i < len; i += 1){
    s += numbers[i];
  }
  return s;
}

console.log(multiply(1, 10));
console.log(sum([1, 10]));