def fibonacci(n):
  if n==0: return 0
  if n==1: return 1
  temp1 = 0
  temp2 = 1
  temp3 = temp1 + temp2
  for i in range(n-2):
      #Starts at n=3 (n=2 will skip the loop)
      temp1 = temp2
      temp2 = temp3
      temp3 = temp1 + temp2
  return temp3
  



