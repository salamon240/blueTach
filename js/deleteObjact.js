const person={
    name:'salamon',
    age:'35',
    facebook:'salamon240@walla.com',
    worke:'collge og managment',
    phonNumber:'0545607333'
}



const edeletd= prompt('what you wantto delete ?')
if(edeletd!=null){
    delete person[edeletd]
    console.log(person)
}