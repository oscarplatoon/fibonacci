const fibonacci = (num) => {
  var array = [0,1];
  
  for (var i = 2; i < 1000; i++) {
    var numbers = (array[i - 1] + array[i - 2]);
    array.push(numbers);
  }
  console.log(array[num]);
}

// module.exports = {fibonacci}
fibonacci(7);