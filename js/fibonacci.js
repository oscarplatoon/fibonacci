const fibonacci = (num) => {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }
  
  let num1 = 0, num2 = 1
  
  for(let i = 2; i <= num; i++){
    let temp = num1 + num2
    num1 = num2
    num2 = temp
  }
  return num2
}


module.exports = {fibonacci}
