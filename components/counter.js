import React from "react";

export default function counter() {
  return (
    <div className="counters section" data-stellar-background-ratio="0.5">
      <div className="container over">
        <div className="row count-container">
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="facts-item">
              <div className="icon">
                <i className="lnr lnr-clock"></i>
              </div>
              <div className="fact-count">
                <h3>
                  <span className="counter">1000</span>
                </h3>
                <h4>Heures de travaux</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="facts-item">
              <div className="icon">
                <i className="lnr lnr-briefcase"></i>
              </div>
              <div className="fact-count">
                <h3>
                  <span className="counter">124</span>
                </h3>
                <h4>Projects Realisés</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="facts-item">
              <div className="icon">
                <i className="lnr lnr-user"></i>
              </div>
              <div className="fact-count">
                <h3>
                  <span className="counter">254</span>
                </h3>
                <h4>Clients Actifs</h4>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="facts-item">
              <div className="icon">
                <i className="lnr lnr-heart"></i>
              </div>
              <div className="fact-count">
                <h3>
                  <span className="counter">745</span>
                </h3>
                <h4>Personnes nous aiment</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
