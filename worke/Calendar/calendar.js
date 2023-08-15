
const carrentDate=document.getElementById('manthId')
const yearId=document.getElementById('yearId')
const daysId=document.getElementById('daysId')
const eventIdLb=document.getElementById('eventIdLb')
const prevNext=document.querySelectorAll('.manth span ')
const model=document.querySelector(".mode")

const close=document.querySelector(".close").addEventListener('click',()=>{
    console.log("is close", model.style)
    model.style.display='none'
})

//getting new date, current year and month

let dateNow= new Date()
let currYear= dateNow.getFullYear()
let curMonth=dateNow.getMonth()
let dates=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decembe"]
console.log(dateNow,curMonth,currYear)

const renderCalendar=()=>{
    let lastdateOf=new Date(currYear,curMonth+1,0).getDate()
    console.log(lastdateOf)
    let dayTag=''
    for (let i = 1; i < lastdateOf; i++) {
        dayTag+=`<div class="frist"><div class="day" ;"><label class="labelDay">${i}</label></div></div> </div>`
        console.log(i)
       
        
    }
    daysId.innerHTML=dayTag
    yearId.innerText=`${currYear}`
    carrentDate.innerText=`${dates[curMonth]}`


}
 renderCalendar()

const labelStyle=document.querySelectorAll(".labelDay")
labelStyle.forEach(element => {
    element.addEventListener("click",()=>{
        console.log("laybel is clickd" ,element.innerHTML)
        model.style.display='block'
        eventIdLb.innerText=`DATE : ${element.innerHTML}/${curMonth+1}/${currYear}`
        
    })
    
});
/*function getCalendar(){
    
    fetch('https://calendar.google.com/calendar/embed?src=en.judaism%23holiday%40group.v.calendar.google.com&ctz=Asia%2FJerusalem')
   .then(response=>response.json())
    .then(data=>{console.log(data)
 
})
.catch(error=>alert( error,"this in not a city")
)
}
getCalendar()*/

prevNext.forEach(element => {
element.addEventListener('click',()=>{
    console.log(element.id)
    curMonth=element.id==='next'?curMonth+1:curMonth-1
    console.log(curMonth)
    renderCalendar()
})
    
});