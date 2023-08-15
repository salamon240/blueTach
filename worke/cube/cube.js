
var cube = document.querySelector('.cube');
var secendCube = document.querySelector('.secendCube');
var radioGroup = document.querySelector('.radio-group');
const btnCube=document.getElementById('btn-cube')
var currentClass = '';
let side=["show-front","show-right","show-back","show-left","show-top","show-bottom"]
let now=""
let snow=""
let secendshowClass =""
let showClass=""
let len=0
let lend=0
let randm
let secendrandm
btnCube.addEventListener('click',function(){

    const getRandom=()=>{
       randm=Math.floor(Math.random() * 6);
       secendrandm=Math.floor(Math.random() * 6);
       showClass =  side[randm]
       secendshowClass =  side[secendrandm]
      
    }
    const changeColor=()=>{
      getRandom()
      if(randm===secendrandm){
        getRandom()
      }
      else{
         showClass =  side[randm]
         secendshowClass =  side[secendrandm]
        console.log(showClass,randm,now[1])
        if(secendshowClass==snow[1]||showClass==now[1]){
          getRandom()
        }
        if(cube.classList==now&& secendCube.classList==snow)
        {
           len=cube.classList.length
           lend=secendCube.classList.length
          cube.classList.replace(now[len-1],showClass)
          secendCube.classList.replace(snow[lend-1],secendshowClass)
          
        }else{
          

          cube.classList.add( showClass );
          secendCube.classList.add( secendshowClass );
          now=cube.classList
          snow=secendCube.classList
        }
      }
       
                
    
   
   
      
};

 setTimeout(()=>{
      console.log('first')
      changeColor()
      },2000)
    
  
 }
    

)
/*function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );*/