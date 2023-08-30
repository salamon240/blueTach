import React from 'react'
import './foodlist.scss'

function Foodlist({prop}) {
 
  return (
    <div className='foodList'>
        <div className="items">
            <div className="serech">
              <h1>Recpie of the week</h1>
            </div>
            <div className="fooditem">
                <h3 id='foodH' >{prop.label}</h3>
                <img id='imgId' src={prop.image} alt="food" />
                <p id='desc'>reviews:</p>
                
                {prop.reviews==[]?<p id='desc'>reviews:</p>:<p id='desc'>no:</p>}
                <a id='linkId' href={prop.uri}> full recipe </a>
            </div>
        </div>
    </div>
  )
}

export default Foodlist