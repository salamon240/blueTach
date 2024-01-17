
name=[("name","kalob"),("occuption","code"),("name","soli"),("occuption","progrmer")]
d={}
for key, value in name:
    print("key",key)
    print("value",value)
    d[key]=value
print(d)

dnames={key:value for key,value in name}#how to use comprehensions in dictionary

print("names",dnames)
#-----------------------------------------------------------------------------------------
prorgamer={key:value   for key ,value in name if value=="progrmer"}#how to use if 
print(prorgamer)

#-----------------------------------------------------------------------------------------
original_dict = {'jack': 38, 'michael': 48, 'guido': 57, 'john': 33}

new_dict = {k: v for (k, v) in original_dict.items() if v % 2 != 0 if v < 40}# multiplay if
print(new_dict)


#-----------------------------------------------------------------------------------------
original_dict = {'jack': 38, 'michael': 48, 'guido': 57, 'john': 33}

new_dict_1 = {key: ('old' if value > 40 else 'young')# if eles
    for (key, value) in original_dict.items()}
print(new_dict_1)

dicen=dict(name)
print("shory wey",dicen)