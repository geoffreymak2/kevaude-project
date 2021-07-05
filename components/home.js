import React from "react";

export default function home() {
  return (
    <section id="home" className="header_area">
      <div id="header_navbar" className="header_navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img id="logo" src="/images/logo.svg" alt="Logo" />
                </a>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a className="page-scroll active" href="#home">
                        Accueil
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#about">
                        A propos
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#services">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#portfolio">
                        Gallerie
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#team">
                        Equipe
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#blog">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="header_hero">
        <div
          className="single_hero bg_cover d-flex align-items-center"
          style={{ backgroundImage: "url(/images/hero.jpeg)" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="hero_content text-center">
                  <h2
                    className="hero_title wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.2s"
                  >
                    Aguerris et déterminés, <br /> Nous le sommes
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.5s"
                  >
                    Face aux grandes mutations énergetiques de l' heure, nous
                    nous taillons une place de choix et non le moindre dans le
                    secteur des hydrocarbures dans le monde.
                  </p>
                  <a
                    href="#features"
                    className="main-btn wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.8s"
                  >
                    Explorer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
