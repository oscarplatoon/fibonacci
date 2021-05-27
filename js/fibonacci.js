const fibonacci = (num) => {
  if (num === 2 || num === 1) {
    return 1;
  }
  
  return fibonacci(num - 1) + fibonacci(num - 2);
}

module.exports = {fibonacci}

// console.log(fibonacci(20))
