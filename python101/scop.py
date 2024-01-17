def myfunc():
    name="soli"

print(name)# cant get the name becuse is insid the scop

names="soli"
def names():
    names="izake"
    return names

print(names())
print(names)
# the names variabel is now insid thee scop and out side
#if just print  his going to print waht is outside the scop
#if you print the function his going to print what is insid the scop
# if you didint chang the name insid the scop his going  to look outsid the scop variabrl whit the same name