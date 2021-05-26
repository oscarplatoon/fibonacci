const fibonacci = (num) => {

  if(num==0){return 0}
  else if (num==1 ||num==2){return 1}

  else if (num >2){
    let x = 1
    let answer = 2
    let nextanswer =0
    for(i = 3; i < num; i++){
      nextanswer = answer + x
      x = answer
      answer = nextanswer
    }
    return answer

  }
  else{return('invalid input')}
    
  
    
}

module.exports = {fibonacci}
