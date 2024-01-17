#enumeration give us back a tupel wite the index from the list 
animals=["gully","rhubard","zephyr","henry"]

for index,animal in enumerate(animals):
    if index==2:
        print("i m variebal of index 2")
        continue
    print(index,animal)
