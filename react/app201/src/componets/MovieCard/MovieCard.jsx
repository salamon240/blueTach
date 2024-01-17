import React from "react";

function MovieCard({ obj ,defuletImage}) {
console.log("defult",defuletImage)
  const imagPath = `https://image.tmdb.org/t/p/w500${obj.poster_path}`;
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4 ">
      <div className="card" >
        <img src={defuletImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{obj.original_title}</h5>
          <p className="card-text">reles date:{obj.release_date}</p>
          <a href={`http://localhost:3000/movies/${obj.id}`} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
