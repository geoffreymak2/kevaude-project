import React from "react";

export default function about() {
  return (
    <section id="about" className="pt-130">
      <div className="about_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about_content pt-120 pb-130">
                <div className="section_title pb">
                  <h4
                    className="title wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.2s"
                  >
                    Qui sommes-nous ?
                  </h4>
                  <p
                    className="wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.4s"
                  >
                    Face aux grands changements d'énergétiques de l'heure, nous
                    nous créons une place de choix et non la moindre dans le
                    secteur des hydrocarbures.
                  </p>
                  <p
                    className="wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.6s"
                  >
                    S'affirme dans le secteur des hydrocarbures à travers le
                    trading et la commercialisation, tel est l'objectif assigné.
                  </p>
                </div>
                <a
                  href="#0"
                  className="main-btn wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.7s"
                >
                  Lire plus
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="about_image bg_cover wow fadeInLeft"
          data-wow-duration="1.3s"
          data-wow-delay="0.2s"
          style={{ backgroundImage: "url(/images/portfolio-3.jpeg)" }}
        >
          <div className="image_content">
            <h4 className="experience">
              <span>5</span> ans d'experiences
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
