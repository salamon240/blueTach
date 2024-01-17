# reading multple line 

with open("email.txt",'r') as file:
    emails=file.readlines()
  
for emali in emails:
    print(emali.rstrip())
        