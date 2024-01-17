import requests

req = requests.get("https://swapi.dev/api/people/2/")
preson =req.json()
print("the name is",preson['name'])
print("the height is",preson['height'])
print("the mass is",preson['mass'])
print("the skin color is",preson['skin_color'])
print("the eye color is",preson['eye_color'])

print("film involved in:")
for film in preson["films"]:
    req=requests.get(film)
    filmes=req.json()
    print("film in :" ,filmes["title"])