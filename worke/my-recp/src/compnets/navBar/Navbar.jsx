import React from 'react'
import './navbar.scss'
function navbar() {
  return (
    <div className='navbar'>
       <div className="warper">
        <div className="logo">
          <img src="https://cdn-icons-png.flaticon.com/512/2865/2865814.png" alt="icon" />
          <h3>My Recpies</h3>
          </div>
        <div className="items">
            <div className="item">
            <select name="" id="">
              <option value="">MEAT</option>
            </select>
            </div>
            <div className="item">
            <select name="" id="">
              <option value="">CHIIS</option>
            </select>
            </div>
            <div className="item">
            <select name="" id="">
              <option value="">VIG</option>
            </select>
            </div>
        </div>
       </div> 

    </div>
  )
}

export default navbar