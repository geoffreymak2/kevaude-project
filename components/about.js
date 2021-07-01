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
                    Qui sommes nous ?
                  </h4>
                  <p
                    className="wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.4s"
                  >
                    Face aux grandes mutations énergetiques de l' heure, nous
                    nous taillons une place de choix et non le moindre dans le
                    secteur des hydrocarbures dans le monde. Aguerris et
                    déterminé, nous le sommes.
                  </p>
                  <p
                    className="wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.6s"
                  >
                    GROUPE KEVAUDE se veut être en position d'avant-gardiste
                    dans le secteur des hydrocarbures, trading et
                    Commercialisation. Tels est l'objectif assigné à l' horizon
                    2025.
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
              <span>5</span> ans d'experiances
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
