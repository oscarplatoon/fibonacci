const fibonacci = (num) => {
  var prior = 0
  var current = 1
  if (num <= 1) {
    return num
  }
    for (i = 2; i <= num; i++) {
      next = prior + current
      prior = current
      current = next
    }
  return current
}

module.exports = {fibonacci}
