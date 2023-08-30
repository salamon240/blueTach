import React, { useEffect, useState } from 'react'
import Foodlist from '../../compnets/foodList/Foodlist.jsx'
import Navbar from '../../compnets/navBar/Navbar.jsx'
import ListItem from '../../compnets/listItem/ListItem.jsx'
import axios from 'axios'
import './home.scss'
function Home() {
       const[data,setdata]=useState([])
       const[serechInput,setserechInput]=useState("")
       const[recpi,setrecpi]=useState([])
       const randoRcip=["meat","cheese","vegetarian"]
       let item=''
       useEffect(()=>{
        let randNUm=Math.floor(Math.random()*3)+1
     
          const getRecipeData=async ()=>{
            try{
            const response=await axios.get(`http://localhost:5052/recipes/${randoRcip[randNUm]}`)
               setdata(response.data[Math.floor(Math.random()*response.data.length)])

          }catch(err){
          console.log(err)
        }

      }
      getRecipeData()

       },[])

       const getdata= async()=>{
        if(serechInput==='')
        {
          console.log("no ")
        }else{
          try{
            const response=await axios.get(`http://localhost:5052/recipes/${serechInput}`)
            console.log(response.data)
              setrecpi(response.data)
          }catch(err){
            console.log("no w")
          }

        }

       }
      
  return (
    <div className='home'>
       <Navbar/>
      <div className="container">
         <div className="main">
         <Foodlist prop={data}/>

         </div>
         <div className="chart">
          <div className="sereching">
          <input id='serechInput' onChange={(e)=>{setserechInput(e.target.value)}} className='serechInput' type="text" />
          <button id='serechBtn' onClick={getdata} className='serechBtn'>serech</button>
          </div>
          <div className="recepisInfo">
              { recpi.map((recpis,i)=>(
                <ListItem key={i} prop={recpis}  />
              ))
                            

              } 
         
          </div>
         
         
         </div>

      </div>
       
    </div>
  )
}

export default Home