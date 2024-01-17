import React, { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import { useParams } from "react-router-dom";

function MovieInfo() {
  const { id } = useParams();
  const [movieDtails, setMovieDtails] = useState();
  const [isLoding,setLoding]=useState(true)
  useEffect(() => {
    if (id) {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzE2NjU1ZTA4MzRlMzFjNWE1OTdjN2QxOGRlMjE2NiIsInN1YiI6IjY1NmY4MzhiNjUxN2Q2MDEyZmFiOWZiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kjf5htMbFyM3wznE8C9KZNzAXxN9bA1JkOkGxNguJek",
        },
      };

      fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then((response) => response.json())
        .then((response) => {
          setMovieDtails(response);
          setLoding(false)
          console.log("movie info", movieDtails);
          
        })
        .catch((err) => console.error(err));
    }
  }, [id]);
   function renderDtails(){
    if(isLoding)
    {
      return <Hero text= "loading..." />
    }
    if(movieDtails)
    {
      let imageInfo=''
      let backdropImage=''
      if(movieDtails.poster_path){
        imageInfo=`https://image.tmdb.org/t/p/w500${movieDtails.poster_path}`
        backdropImage =`https://image.tmdb.org/t/p/original/${movieDtails.backdrop_path}`

      }
      else{
        imageInfo="https://as2.ftcdn.net/v2/jpg/03/15/18/09/1000_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg"
      }
     return<>
          <Hero text={movieDtails.original_title } bacbackdrop={backdropImage} />
      <div className="container my-5">
        <div className="row">
          <div className="col-3">
            <img
              src={imageInfo}
              alt="..."
              className="img-fluid shadow rounded"
            />
          </div>
          <div className="col-9">
          <h2>{movieDtails.original_title}</h2>
          <p> <strong>Release date : </strong>{movieDtails.release_date} </p>
           <p><strong>Geners ;</strong>
           {movieDtails.genres.map(genr=>{
             return <span> {genr.name} ,</span>

           })}
           
            </p>
          <p className="lead">{movieDtails.overview}</p>
            <span>rated : {movieDtails.vote_average}</span>
            <span>rated : {movieDtails.vote_average}</span>
          </div>
        </div>
      </div>
      
      </>
  

    }
   }
 


  return (
   
    renderDtails()

   
  );
}

export default MovieInfo;
