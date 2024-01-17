# **kwargs are like dictionary type

def person(**kwargs):
    print(kwargs)
    print(type(kwargs))
    
    if 'age' in kwargs:
        print("your age is",kwargs.get("age"))
person(namw="soli",age=34,barin="huge")


def orderPizza(name,address,**toppings):
    print(f"order is for{name}")
    print(f"ship it to{address}")
    price=18.00
    for key,value in toppings.items():
        price=+2 
        print("teh price up",price)
    print("price totoal",price)
    return price
orderPizza("soli","hanorit 3 3 ashdod",peper=2,chess="amrican")  
