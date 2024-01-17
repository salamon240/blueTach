filename= input("what is the file name ?")
content=input("Enter the content: ")

with open(f"{filename}.txt","w") as file:
    file.write(content)
    
openFile=input("would you like to open this file ?")

if openFile in ["y","n"]:
    if openFile=='y':
        with open(filename,"r") as file:
            print(file.read())
    else:
        print("have a  gerate day")