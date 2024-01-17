#for wirtin to a file you can use this
with open("writing_file.txt","w")as file:
    file.write("helo my frind this is my first time using python to writing to a file i am very exiting about this proses")
# to append to a file yiu just need to change the 'w' to 'a'

with open("writing_file.txt","a")as file:
    file.write("\nhelo my frind this is my secend time using python to writing to a file i am very exiting about this proses")
# to append to a file yiu just need to change the 'w' to 'a'