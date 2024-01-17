import React from "react";
import Hero from "../Hero/Hero";

function AboutView() {
  return (
    <div>
      <Hero text={"welcom to about page"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <div className="lead">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              possimus excepturi cum doloremque voluptates. Fugit quasi, magnam
              dolorem, magni dolorum repellendus optio ea tempore quos adipisci
              corporis tenetur aperiam? Quibusdam aliquid, voluptatem, dolor
              facere quam sed saepe eaque non rem impedit error id optio vitae
              porro deserunt quaerat magni repellat?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutView;
