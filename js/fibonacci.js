const fibonacci = (num) => {
	let sequence = [0, 1]
	let answer = 0
  

	for (var i = 2; i <= num; i++) {
		sequence.push(sequence[i-1] + sequence[i-2])
    
	}
  
  if (num <= 1) {
    console.log(num)
  } else {
    console.log(sequence[sequence.length-1])
  }
    
}

fibonacci(5)// === 5)
fibonacci(8)// === 21)
fibonacci(12)// === 21)
