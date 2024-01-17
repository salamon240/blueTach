#finel projcet to creat a pokemon serch
# task
#1 ask for user input 2 create a dynamic url based on step1
#3detch the data from the url in step 2
# conver json to dictionary
# print out 

import requests


data =True
while data:
    pokemonUser=input("serch for pokimon: ")
    pokemonUser=pokemonUser.lower()
    if (pokemonUser!=None and pokemonUser!="exit"):
        req=requests.get("https://pokeapi.co/api/v2/pokemon/"+pokemonUser)
        if req.status_code!=200:
            print("we have a problom",req.status_code)
        else:
            pokemon=req.json()
            print("name: ", pokemon["name"])
            print("height: ", pokemon["height"])
            print("weight: ", pokemon["weight"])
            print("this is the pokemon ability :")
            for abilitiy in pokemon["abilities"]:
                print(abilitiy["ability"]["name"])
           
          
    else:
        data=False 