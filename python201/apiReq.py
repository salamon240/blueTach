import requests
import time

while True:
    req= requests.get("https://kalob.io")
    print(req.status_code)
    if(req.status_code!=200):
        pass
    time.sleep(4)# make it wite 4 secend
    
    
    
    
    