import random
computer_anser=random.choice(["rock","pepeaer","sessier"])
print(computer_anser)
win =True
while win:
   choises=input("enter rock , pepeaer , sessier : ")
   if computer_anser =="rock" and choises=="pepeaer":
           print("you win")
           break
   elif computer_anser =="pepeaer" and choises=="sessier":
           print("you win")
           break
   elif computer_anser =="sessier" and choises=="rock":
           print("you win")
           break
   elif computer_anser == choises:
           print("you tide")
           continue
   else:
       print("you lose tray again")
        
   
        
          
           
      
