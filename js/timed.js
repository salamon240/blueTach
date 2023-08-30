

setTimeout(function(){
 console.log("waited 3 secend")
},300)


//
let count=0
const tray= setInterval(function(){
console.log("haping every 3 secend")
count++
if(count===3){
    console.log("finish")
    clearInterval(tray)
}
},3000)