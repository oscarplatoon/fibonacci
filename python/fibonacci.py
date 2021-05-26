def fibonacci(n):
	if n == 0:
		return 0
	elif n == 1:
		return 1
	else:
		return fibonacci(n - 1) + fibonacci(n - 2)
	
print(fibonacci(0))
print(fibonacci(2))
print(fibonacci(5))
print(fibonacci(8))
print(fibonacci(11))
print(fibonacci(14))
print(fibonacci(17))
print(fibonacci(20))