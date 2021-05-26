def fibonacci(n):

  my_array = [0,1]
  x=1
  while x < n:
    
    my_array.append(my_array[x]+ my_array[x-1])
    
    x=x+1

  return my_array[n]
  
fibonacci(8)

#  pass


