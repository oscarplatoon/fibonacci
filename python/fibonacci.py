def fibonacci(n):
  x = 1
  answer = 2
  next_answer = 0
  if n == 0:
    answer = 0
  elif (n == 1 or n ==2):
    answer = 1
  elif (n>2):
    while n > 3:
      next_answer = x + answer
      x = answer
      answer = next_answer
      n -= 1
  else:
    return('invalid input')
  return(answer)





