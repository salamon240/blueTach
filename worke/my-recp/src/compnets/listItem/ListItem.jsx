import React, { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

import './listItem.scss'
function ListItem({prop}) {
  const[review,setReview]=useState("")
  const[allReview,setaAllReview]=useState(prop.reviews||[])

  const postRievew=async()=>{
   try {

         const response=await axios.post(`http://localhost:5052/recipes/reviews/${prop.label}`,{review})
       
         console.log(response.data)
         setaAllReview(response.data)

     } catch (error) {
       console.log(error)
     }
     console.log(prop.label)
     
     console.log("post rievew sasccgol")
   }

  return (
    <div className="listItem">
     <div className="fooditem">
                <h3 id='foodH' >{prop.label}</h3>
                <img id='imgId' src={prop.image} alt="food" />
                <p id='desc'>review:</p>
               
                <ul>
                   
                  {allReview?  allReview.map(item=>(
                    <li>{item}</li>

                  )):<li>No reviews</li>}
                </ul>
                <Link to="/singel" state={{ data: prop }}></Link>
                <a id='linkId' href="">food link</a>
                <div className="revieo">
                <input className='reivInput' type="text" onChange={(e)=>setReview(e.target.value)} placeholder='your reivew'/>
                <button id='reivBtn' className='reivBtn' onClick={postRievew}>send</button>
                <ul id='reivOl'>
                  
                </ul>
                </div>
                
            </div>
    </div>
  )
}

export default ListItem