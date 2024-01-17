# the args in the function *args  act like tupel evrithing that came aftr the * going to act like tupel
#tupel is order and unchangbel  list wite () breket
def thing(name,*args):
    totel=0
    print(name,args)
    print(type(args))
    for num in args:
        totel=totel+num
    return totel

totoles =thing("soli",1,2,3,4,5)
print(totoles)