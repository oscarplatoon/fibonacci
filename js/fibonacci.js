const fibonacci = (num) => {

  let fibArray = [0,1];

  if (num === 0 || num === 1){
    return 0;
  }

  while (fibArray.length <= num) {

     fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
  }
 return fibArray[num];
}
module.exports = {fibonacci}

