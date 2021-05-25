const fibonacci = (num) => {
    if (num === 1) return 1

    if (num <= 1) return num
    
    else return fibonacci(num - 1) + fibonacci(num - 2)
}

module.exports = {fibonacci}
console.log(fibonacci(7))
