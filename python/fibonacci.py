def fibonacci(n):
  # base cases
  if (n == 0):
    return 0
  if (n == 1):
    return 1
# recursive call
  return (fibonacci(n-1) + fibonacci(n-2))



# print(fibonacci(8))