const fibonacci = (num) => {
	let sequence = [0, 1]
	let answer = 0
	for (var i = 2; i < num; i++) {
		sequence.push(sequence[i-1] + sequence[i-2])
		if (num == 0) {
		console.log(0)
		} else if (num = 1) {
		console.log(1)
		}

	}
	console.log(sequence)
    
}

console.log(fibonacci(5))// === 5)
