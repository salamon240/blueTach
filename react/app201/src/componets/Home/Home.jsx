import React from "react";
import Hero from "../Hero/Hero";

function Home() {
  return (
    <div>
      <Hero text={"welcom to home page"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            perspiciatis deleniti laudantium maiores nobis error, eveniet in
            sequi saepe, vel, reiciendis nam. Veritatis dignissimos eligendi,
            voluptatum sit maxime aspernatur iure.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
