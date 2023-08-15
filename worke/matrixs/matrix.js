let arr=[[9,1,7],[5,3,10],[6,6,7]]
let row=[]
let col=[]
let maxJ =''
let maxI =''
function matrixRow(arr)
{
    for (let i=0;i<arr.length;i++) {      
        for (let j=0;j<arr[i].length;j++) {        
               
          console.log(arr[i][j])
        }  
   }
}
function matrixCol(arr)
{
    for (let i=0;i<arr.length;i++) {      
        for (let j=0;j<arr[i].length;j++) {        
               
          console.log(arr[j][i])
        }  
   }
}

//matrixRow(arr)
//matrixCol(arr)

function matrixFindMax(arr)
{
    for (let i=0;i<arr.length;i++) {      
        for (let j=0;j<arr[i].length;j++) {        
               
          if(arr[i][j]>maxI)
          {
            maxI=arr[i][j]
            console.log("max number i",maxI)
          }
        if(arr[j][i]>maxJ)
        {
            maxJ=arr[j][i]
            console.log("max number j",maxJ)
        }
        } 
        
        row.push(maxI)
        col.push(maxJ)
        maxI=0
        maxJ=0 
        console.log(col)
        console.log(row)
   }
}
//exampl  number 2
matrixFindMax(arr)

function matrixFindMajs(arr)
{
    let maxjs=[]
    let maxim=arr.map(function(row){ return Math.max.apply(Math, row); });
    console.log("max row example 2",maxim)

for(let i=0; i<arr.length;i++) {
    maxjs.push((Math.max.apply(Math, arr.map(v => v[i]))))

 
   
};
console.log("max col example 2",maxjs)
}

matrixFindMajs(arr)