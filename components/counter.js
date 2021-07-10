import React from "react";

export default function counter() {
  return (
    <div class="counters section" data-stellar-background-ratio="0.5">
      <div class="container over">
        <div class="row count-container">
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="facts-item">
              <div class="icon">
                <i class="lnr lnr-clock"></i>
              </div>
              <div class="fact-count">
                <h3>
                  <span class="counter">1000</span>
                </h3>
                <h4>Heures de travaux</h4>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="facts-item">
              <div class="icon">
                <i class="lnr lnr-briefcase"></i>
              </div>
              <div class="fact-count">
                <h3>
                  <span class="counter">124</span>
                </h3>
                <h4>Projects Realisés</h4>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="facts-item">
              <div class="icon">
                <i class="lnr lnr-user"></i>
              </div>
              <div class="fact-count">
                <h3>
                  <span class="counter">254</span>
                </h3>
                <h4>Clients Actifs</h4>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3 col-lg-3">
            <div class="facts-item">
              <div class="icon">
                <i class="lnr lnr-heart"></i>
              </div>
              <div class="fact-count">
                <h3>
                  <span class="counter">745</span>
                </h3>
                <h4>Personnes nous aimes</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
