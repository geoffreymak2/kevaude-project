import React from "react";

export default function features() {
  return (
    <section id="features" className="features_area pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-25">
              <h4
                className="title wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                Pourquoi nous choisir ?
              </h4>
              <p
                className="wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                Groupe Kevaude s'affirme dans le secteur des hydrocarbures.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-7">
            <div
              className="single_features text-center mt-30 wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              <i className="lni lni-layers"></i>
              <h4 className="features_title">La Qualité de Nos Produits</h4>
              <p>
                Groupe Kevaude commercialise les produits pétroliers raffinés à
                travers son réseau de distribution et ses aires
                d'approvisionnement dans le port du Pool Malebo.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-7">
            <div
              className="single_features text-center mt-30 wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.4s"
            >
              <i className="lni lni-layout"></i>
              <h4 className="features_title">La Livraison de Nos Produits</h4>
              <p>
                Nos unités fluviales assurent la distribution dans le Grand
                Équateur et dans tout le pays en assurant l'autonomie des
                produits ainsi que l'ouverture des zones forestières.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-7">
            <div
              className="single_features text-center mt-30 wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.6s"
            >
              <i className="lni lni-bolt"></i>
              <h4 className="features_title">Nos Objectifs</h4>
              <p>
                Défier toute concurrence liée au prix et participer à la
                reconstitution du pays par le développement des infrastructures
                de base dans le Sud-Ubangi et au Nord-Ubangi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
