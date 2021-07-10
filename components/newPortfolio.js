import React from "react";

export default function newPortfolio() {
  return (
    <section id="portfolios" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Portfolio</h2>
          <hr className="lines" />
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
            dignissimos! <br /> Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="controls text-center">
              <a className="filter active btn btn-common" data-filter="all">
                All
              </a>
              <a className="filter btn btn-common" data-filter=".design">
                Design
              </a>
              <a className="filter btn btn-common" data-filter=".development">
                Development
              </a>
              <a className="filter btn btn-common" data-filter=".print">
                Print
              </a>
            </div>
          </div>

          <div id="portfolio" className="row">
            <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print">
              <div className="portfolio-item">
                <div className="shot-item">
                  <img src="/images/portfolio-3.jpeg" alt="" />
                  <a
                    className="overlay lightbox"
                    href="/images/portfolio-3.jpeg"
                  >
                    <i className="lnr lnr-eye item-icon"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix design print">
              <div className="portfolio-item">
                <div className="shot-item">
                  <img src="/images/portfolio-4.jpeg" alt="" />
                  <a
                    className="overlay lightbox"
                    href="/images/portfolio-4.jpeg"
                  >
                    <i className="lnr lnr-eye item-icon"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development">
              <div className="portfolio-item">
                <div className="shot-item">
                  <img src="/images/portfolio-5.jpeg" alt="" />
                  <a
                    className="overlay lightbox"
                    href="/images/portfolio-5.jpeg"
                  >
                    <i className="lnr lnr-eye item-icon"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development design">
              <div className="portfolio-item">
                <div className="shot-item">
                  <img src="/images/portfolio-6.jpeg" alt="" />
                  <a
                    className="overlay lightbox"
                    href="/images/portfolio-6.jpeg"
                  >
                    <i className="lnr lnr-eye item-icon"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development">
              <div className="portfolio-item">
                <div className="shot-item">
                  <img src="/images/portfolio-7.jpeg" alt="" />
                  <a
                    className="overlay lightbox"
                    href="/images/portfolio-7.jpeg"
                  >
                    <i className="lnr lnr-eye item-icon"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix print design">
              <div className="portfolio-item">
                <div className="shot-item">
                  <img src="/images/portfolio-8.jpeg" alt="" />
                  <a
                    className="overlay lightbox"
                    href="/images/portfolio-8.jpeg"
                  >
                    <i className="lnr lnr-eye item-icon"></i>
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
