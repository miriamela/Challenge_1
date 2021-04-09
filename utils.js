const sumNumbers = (arr) => {
  const numbers = arr
    .map((each) => Number(each))
    .filter((each) => !isNaN(each));
  if (numbers.length === 0) {
    return 0;
  } else {
    const number = numbers.reduce((a, b) => a + b);
    return number;
  }
};

module.exports.sumNumbers = sumNumbers;
