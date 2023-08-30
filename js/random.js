// לוטו
let lotoNum=[]
let strogNum=0
const btn=document.getElementById('btn').addEventListener('click',
function(){

lotoNum=[]
getLotoNum()

})

const getLotoNum=()=>{
    for(let i=0; i<6;i++)
    {
        let num =Math.floor(Math.random()*37)+1
        let sNum =Math.floor(Math.random()*7)+1
        strogNum=sNum
        lotoNum.push(num)
    
    }
    console.log(lotoNum,strogNum)
}

   let num1=true
   const gesNumber=Math.floor(Math.random()*5)+1
  while(num1){
   
    console.log(gesNumber)
    let userNum=prompt("gess the number")
    if(gesNumber==userNum)
    {
        console.log(`you correct the number is : ${gesNumber}`)
        num1=false
        break
        
    }

  }