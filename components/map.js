import React from "react";

export default function map() {
  return (
    <section id="google-map-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 padding-0">
            <object
              style={{ border: 0, height: 450, width: "100%" }}
              data="https://www.google.com/maps/embed/v1/place?q=Pullman+Kinshasa+Grand+Hotel,+Av.+des+Batetela,+Kinshasa,+République+démocratique+du+Congo&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></object>
          </div>
        </div>
      </div>
    </section>
  );
}
