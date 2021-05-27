def fibonacci(n):
  def fibonacci(n):
  sequence = [0, 1]

  for i in range(2, n+1):
    sequence.append(sequence[i-1] + sequence[i-2])
  
  if n <= 1:
    print(n)
  else:
    print(sequence[len(sequence)-1])

fibonacci(5)# === 5)
fibonacci(8)# === 21)
fibonacci(12)# === 144)


