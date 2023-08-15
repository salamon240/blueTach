


let displayNum=document.getElementById('calc-display-val')
let equalBtn=document.getElementById('calc-equals')
let clearBtn=document.getElementById('calc-clear')
let num1 = '0';
let numbey=''
let numDisplay=''
let operatorNum=''
let evalStringArray = [];
let fullanser=''
let anser=''
  
  const btnNum=Array.from(document.getElementsByClassName('calc-btn-num '))
  const operatorBtn=Array.from(document.getElementsByClassName('calc-btn-operator '))
  operatorBtn.forEach(element => {
     console.log(element.innerText)
 
 });
 
 
 
  const updateDisplayVal=(clickObj)=>{
    let numbersArry=clickObj.target.innerText

    console.log('numberarry',numbersArry)
    if(num1==='0')num1=''
   
      num1+=numbersArry
      numDisplay+=numbersArry
      displayNum.innerText=numDisplay
  
}
const calaetor=(clickObj)=>{
     operatorNum =clickObj.target.innerText;
   if(operatorNum!='='){
       if(num1!=''){
        numDisplay+=operatorNum
        displayNum.innerText=numDisplay
         evalStringArray.push(num1,operatorNum)
         num1=''

        }
    else{
           evalStringArray.pop()
           evalStringArray.push(operatorNum)
        }
   }

}


 for(let i=0;i<btnNum.length;i++){
   
    btnNum[btnNum.length-1-i].innerText=i
    
 }
   


for(let i=0;i<btnNum.length;i++){
    
}


for (let i = 0; i < btnNum.length; i++) {
    btnNum[i].addEventListener('click', updateDisplayVal, false);
  }
for (let i = 0; i < operatorBtn.length; i++) {
    operatorBtn[i].addEventListener('click',calaetor, false);
  }

  equalBtn.addEventListener('click',function (clickObj) {

    operatorNum =clickObj.target.innerText;
    
    evalStringArray.push(num1)
    console.log(evalStringArray)
    

    for(let i=0;i<evalStringArray.length;i++)
    {
      if(anser==='')
      {
        switch (evalStringArray[i]) {
          case 'x':
            
              anser =evalStringArray[i-1]*evalStringArray[i+1]
              displayNum.innerText=anser
              console.log(anser)
            
            break;
          case '/':
            
              anser =evalStringArray[i-1]/evalStringArray[i+1]
              displayNum.innerText=anser
              console.log(anser)
            
            break;
          case '+':
            
              anser = parseFloat(evalStringArray[i-1]) +parseFloat(evalStringArray[i+1])
              displayNum.innerText=anser
              console.log(anser)
            
            break;
          case '-':
            
              anser =evalStringArray[i-1]-evalStringArray[i+1]
              displayNum.innerText=anser
              console.log(anser)
            
            break;
        
          default:
            break;
        }
        

      }else{
        
        switch (evalStringArray[i]) {
          case 'x':
            
              anser =anser*evalStringArray[i+1]
              displayNum.innerText=anser
              console.log(anser)
            
            break;
          case '/':
            
              anser =anser/evalStringArray[i+1]
              displayNum.innerText=anser
              console.log(anser)
            
            break;
          case '+':
            
              anser = parseFloat(anser) +parseFloat(evalStringArray[i+1])
              displayNum.innerText=anser
              console.log(anser)
            
            break;
          case '-':
            
              anser =anser-evalStringArray[i+1]
              displayNum.innerText=anser
              console.log(anser)
            
            break;
        
          default:
            break;
        }
      }
    }
   
  })

  clearBtn.addEventListener('click',function(){

    num1 = '0';
    numbey=''
    numDisplay=''
    operatorNum=''
    evalStringArray = [];
    fullanser=''
    anser=''
    displayNum.innerText='0'
  })





