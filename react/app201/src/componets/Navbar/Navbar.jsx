import React, { useState } from 'react'
import { Link, json } from 'react-router-dom'
import { useNavigate  } from "react-router-dom";
function Navbar({setdataSearch}){
  const[search,setSearch]=useState(JSON.parse(localStorage.getItem("search")))
  let history = useNavigate ();
  const handelSearch=(e)=>{

    e.preventDefault();
    
    setdataSearch(search)
    
    localStorage.setItem("search",JSON.stringify(search));
    console.log("click",search)
    history("/search")
   
  }

    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link to= "/" className="navbar-brand" >Movie browser</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to= "/" className="nav-link active" aria-current="page" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link to= "/about" className="nav-link" href="#">About</Link>
          </li>
         
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search"  aria-label="Search" onChange={(e)=>setSearch(e.target.value)}/>
          <button className="btn btn-outline-success" type="submit" onClick={handelSearch}>Search</button>
        </form>
      </div>
    </div>
  </nav>
  }

export default Navbar