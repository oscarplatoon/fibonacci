const fibonacci = (num) => {
  let fibonacci = [0, 1];
  inputIndex = num;

  //Catch if input wants the 0 term of the Fibonacci Sequence)
  if (inputIndex == 0) return 0
  //Generates an array with fibonacci sequence numbers up to the requested index
  for (let i = 2; i <= inputIndex; i++) {
    fibonacci.push(fibonacci[i-2] + fibonacci[i-1])
  }

  //pops the requested index from the end of the generated array.
  return fibonacci.pop()
}

module.exports = {fibonacci}
