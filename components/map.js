import React from "react";

export default function map() {
  return (
    <section id="google-map-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 padding-0">
            <object
              style={{ border: 0, height: 450, width: "100%" }}
              data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5482373958303!2d15.319257014484476!3d-4.307516096869021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a340e8aeba43b%3A0xf0a18d62e307af01!2sBasoko%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1626734594495!5m2!1sfr!2scd"
            ></object>
          </div>
        </div>
      </div>
    </section>
  );
}
