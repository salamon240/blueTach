import React, { useState } from "react";
import Hero from "../Hero/Hero";
import MovieCard from "../MovieCard/MovieCard";
function SearchView({ dataSearch, movieData }) {
  //tmbd api =2316655e0834e31c5a597c7d18de2166
  //movie url=url 'https://api.themoviedb.org/3/search/movie?query=15&include_adult=false&language=en-US&page=1'
  const defultImag =
    "https://as2.ftcdn.net/v2/jpg/03/15/18/09/1000_F_315180932_rhiXFrJN27zXCCdrgx8V5GWbLd9zTHHA.jpg";

  console.log("movieData", movieData);
  return (
    <div>
      <Hero text={`you are  searching ... ${dataSearch} `} />
      <div className="container">
        
        <div className="row">

        {movieData.length>0?
        <h2></h2>:<h2>no resulet try again</h2>
        }

          {movieData.map((obj, i) => {
            if (obj.poster_path == null) {
              return <MovieCard obj={obj} defuletImage={defultImag} key={i} />;
            } else {
              const imagPath = `https://image.tmdb.org/t/p/w500${obj.poster_path}`;

              return <MovieCard obj={obj} defuletImage={imagPath} key={i} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchView;
