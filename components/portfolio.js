import React from "react";

export default function portfolio() {
  return (
    <section id="portfolio" className="portfolio_area pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-60">
              <h4
                className="title wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                Notre Galerie
              </h4>
              <p
                className="wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                Voici une présentation visuelle de votre savoir-faire.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio_wrapper d-flex flex-wrap">
        {/* <div
          className="single_portfolio wow fadeInUp"
          data-wow-duration="1.3s"
          data-wow-delay="0.2s"
        >
          <img src="/images/portfolio-1.jpg" alt="portfolio" />
          <div className="portfolio_content">
            <ul className="meta">
              <li>
                <a href="#0">
                  <i className="lni lni-link"></i>
                </a>
              </li>
            </ul>
            <h5 className="portfolio_title">Logo And Branding</h5>
          </div>
        </div>
        <div
          className="single_portfolio wow fadeInUp"
          data-wow-duration="1.3s"
          data-wow-delay="0.3s"
        >
          <img src="/images/portfolio-2.jpg" alt="portfolio" />
          <div className="portfolio_content">
            <ul className="meta">
              <li>
                <a href="#0">
                  <i className="lni lni-link"></i>
                </a>
              </li>
            </ul>
            <h5 className="portfolio_title">Bootstrap 5 Project</h5>
          </div>
        </div>
        */}
        <div
          className="single_portfolio wow fadeInUp"
          data-wow-duration="1.3s"
          data-wow-delay="0.4s"
        >
          <img src="/images/portofolio-10.jpg" alt="portfolio" />
          <div className="portfolio_content">
            <ul className="meta">
              <li>
                <a href="#0">
                  <i className="lni lni-link"></i>
                </a>
              </li>
            </ul>
            <h5 className="portfolio_title">Creative Projects</h5>
          </div>
        </div>
        <div
          className="single_portfolio wow fadeInUp"
          data-wow-duration="1.3s"
          data-wow-delay="0.5s"
        >
          <img src="/images/portfolio-4.jpeg" alt="portfolio" />
          <div className="portfolio_content">
            <ul className="meta">
              <li>
                <a href="#0">
                  <i className="lni lni-link"></i>
                </a>
              </li>
            </ul>
            <h5 className="portfolio_title">UI/UX Projects</h5>
          </div>
        </div>
        <div
          className="single_portfolio wow fadeInUp"
          data-wow-duration="1.3s"
          data-wow-delay="0.2s"
        >
          <img src="/images/portfolio-5.jpeg" alt="portfolio" />
          <div className="portfolio_content">
            <ul className="meta">
              <li>
                <a href="#0">
                  <i className="lni lni-link"></i>
                </a>
              </li>
            </ul>
            <h5 className="portfolio_title">App Development</h5>
          </div>
        </div>
        <div
          className="single_portfolio wow fadeInUp"
          data-wow-duration="1.3s"
          data-wow-delay="0.3s"
        >
          <img src="/images/portfolio-6.jpeg" alt="portfolio" />
          <div className="portfolio_content">
            <ul className="meta">
              <li>
                <a href="#0">
                  <i className="lni lni-link"></i>
                </a>
              </li>
            </ul>
            <h5 className="portfolio_title">Web Development</h5>
          </div>
        </div>
        <div
          className="single_portfolio wow fadeInUp"
          data-wow-duration="1.3s"
          data-wow-delay="0.4s"
        >
          <img src="/images/portfolio-7.jpeg" alt="portfolio" />
          <div className="portfolio_content">
            <ul className="meta">
              <li>
                <a href="#0">
                  <i className="lni lni-link"></i>
                </a>
              </li>
            </ul>
            <h5 className="portfolio_title">Business Card Design</h5>
          </div>
        </div>
        <div
          className="single_portfolio wow fadeInUp"
          data-wow-duration="1.3s"
          data-wow-delay="0.5s"
        >
          <img src="/images/portfolio-8.jpeg" alt="portfolio" />
          <div className="portfolio_content">
            <ul className="meta">
              <li>
                <a href="#0">
                  <i className="lni lni-link"></i>
                </a>
              </li>
            </ul>
            <h5 className="portfolio_title">Consulting Business</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
