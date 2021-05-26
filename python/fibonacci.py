def fibonacci(n):
  if type(n) != int:
    return "Error"
  input_number = n
  fibonacci_list = [0,1]
# catch the 0 case
  if input_number == 0:
    return 0
# catch the 1 case
  elif input_number == 1:
    return 1
# generate fibonacci numbers up to the specified index
  for x in range(2, input_number+1):
    next_num = fibonacci_list[-1] + fibonacci_list[-2]
    fibonacci_list.append(next_num)

  #return the specified index
  return fibonacci_list[input_number]



