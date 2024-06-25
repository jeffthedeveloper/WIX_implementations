const calculator = (number1, number2, callback) => {
  console.log(
    `The calculator gets the addition of the numbers ${number1} and ${number2}.`
  );
  const result = number1 + number2;
  callback(result);
};

const resultCalculator = result => console.log(`The result is ${result}`);

// Invoke calculator with 5 and 7 as parameters
calculator(5, 7, resultCalculator);
