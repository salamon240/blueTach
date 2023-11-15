fav_food=['pizza','tacps','salmon']

order=input("wahtdo you want to order?")
for food in fav_food:
    if order==food:
        size=input("what size do you whant to order?")
        if size=="large":
            print(f"you order {size} {order} is gonna be ready in 10 min ")
        elif size=="mediume":
             print(f"you order {size} {order} is gonna be ready in 8 min ")
        else :
            print(f"you order {size} {order} is gonna be ready in 5 min ")


