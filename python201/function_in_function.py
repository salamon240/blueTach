def func1(name):
    print("this is function 1",name)
    def func2():
        print("this is function 2",name)#if u dont declar vareibal on the functin is going to look outsude the functio for the same variabel
    func2()
func1("soli")

#this is call decorator