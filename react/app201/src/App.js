import './App.css';

import Navbar from './componets/Navbar/Navbar';
import Home from './componets/Home/Home';
import AboutView from './componets/About/AboutView'
import {BrowserRouter as Router,Routes,Route,Navigate  } from 'react-router-dom';
import SearchView from './componets/SearchView/SearchView';
import MovieInfo from './componets/MovieInfo/MovieInfo'
import { useEffect, useState } from 'react';
function App() {
  const[dataSearch,setdataSearch]=useState()
  const[movieData,setMovieData] =useState([])

  useEffect(()=>{
    if(dataSearch){

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzE2NjU1ZTA4MzRlMzFjNWE1OTdjN2QxOGRlMjE2NiIsInN1YiI6IjY1NmY4MzhiNjUxN2Q2MDEyZmFiOWZiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kjf5htMbFyM3wznE8C9KZNzAXxN9bA1JkOkGxNguJek'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/search/movie?query=${dataSearch}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(data => {
          setMovieData(data.results)
          
        }        
          
          )
        .catch(err => console.error(err));
    }
    
  
  },[dataSearch])

  return (
    <div className="App">
     
      
      <Router>
      <Navbar setdataSearch={setdataSearch}/>
        <Routes >
          <Route path='/' element={<Home />}>

          </Route>
          <Route path='/about' element={<AboutView/>}>
           
          </Route>
          
          <Route path='/search' element={<SearchView dataSearch={dataSearch} movieData={movieData}/>}>
           
          </Route>
          <Route path='/movies/:id' element={<MovieInfo/>}>
           
          </Route>
        
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
