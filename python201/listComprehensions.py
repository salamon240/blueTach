#this the one way to do this
numbers=[]
for num in [1,2,3,4,5,6]:
    numbers.append(num**2)
print(numbers)

# and this is the comprehensions way 
numbers=[num**3 for num in [1,2,3,4,5,6,7,8]]
print(numbers)