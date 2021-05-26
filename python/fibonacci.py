def fibonacci(num):
  past = 0
  current = 1
  if num <= 1:
    return num
  for num in range(num - 1):
    next = current + past
    past = current
    current = next
  return current

fibonacci(8)



