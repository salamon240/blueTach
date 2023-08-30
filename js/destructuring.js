
//destructuring an array
const month=['january','february','decmber']
const[sd,dd]=month

console.log(sd,dd)

//destructuring an objact

const person1={
    name:"salamon",
    isntgarm:"@salmon240",
    somthingEles:"somthing somthing"
}

const{somthingEles,isntgarm}=person1 // the new way

//const name =person1['name'] old way
//const isntgarm= person1['isntgarm']
 console.log(somthingEles,isntgarm)