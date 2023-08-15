const weatherBtn= document.getElementById("weatherBtn");
const weatherInput=document.getElementById('weatherInput');
const weatherLabel=document.getElementById("weatherLabel");

const temp=document.getElementsByClassName(' temp');
const fell=document.getElementsByClassName(' fell');
const labe= document.getElementsByClassName(' Label');


let cityName=''
const apiKey='afdf6e7d5eba5ea17c2f5755d8a4d432'
weatherInput.addEventListener('change',function(e){
cityName=e.target.value
console.log(cityName)
})
weatherBtn.addEventListener('click',function() {
   
    console.log( temp[0],"click")
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+cityName+`&APPID=afdf6e7d5eba5ea17c2f5755d8a4d432`)
    .then(response=>response.json())
    .then(data=>{console.log(data)
    console.log(data.weather[0].main )
    getTemp(data)
}
    )
    .catch(error=>alert( error,"this in not a city")
    )
})


function getTemp(data){
    if(data!=null)
    {
        switch (data.weather[0].main ) {
            case 'Clouds':
                temp[0].innerText='City: '+data.name
                fell[0].innerText='temp: ' +data.main.temp
                labe[0].innerText='Weather: '+ data.weather[0].main
                document.getElementById('imgId').style.display='block'
                document.getElementById('imgiD').src='pngwing.com (4).png'
                document.getElementsByClassName('main')[0].style.backgroundImage='url(pexels-pixabay-209831.jpg)'//background pic
                break;
             case 'Clear':
                temp[0].innerText='City: '+data.name
                fell[0].innerText='temp: ' +data.main.temp
                labe[0].innerText='Weather: '+ data.weather[0].main
                 document.getElementById('imgId').style.cssText = `
                display: block; 
                opacity: 1;
                 ;
              `;
                document.getElementById('imgiD').src='—Pngtree—cartoon cute cute little sun_4628469.png'//icon pic
                document.getElementsByClassName('main')[0].style.backgroundImage='url(pexels-brett-sayles-912364.jpg)'//background pic
               
                break;
             case 'Rain':
                temp[0].innerText='City: '+data.name
                fell[0].innerText='temp: ' +data.main.temp
                labe[0].innerText='Weather: '+ data.weather[0].main
                 document.getElementById('imgId').style.cssText = `
                display: block; 
                opacity: 1;
                          `;
                document.getElementById('imgiD').src='pngwing.com (1).png'//icon pic
                document.getElementsByClassName('main')[0].style.backgroundImage='url(pexels-kaique-rocha-125510.jpg)'//background pic

                break;
            default:
                break;
        }
    }
}

function changeWather(weather)
{
    
}

