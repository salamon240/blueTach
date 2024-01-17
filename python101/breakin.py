items=["one","two","three","four","five"]
# whit  continue you can  skip the variables that in the if
for item in items:
    if item=="two":
        continue
    print(item)

# whit break you just break the loop
for item in items:
    if item=="two":
        break
    print(item)    


num=0    
while num<=20:
    num=num+1
    if num%2==0:
        continue
    print(num)
      