import React from "react";

export default function newBlog() {
  return (
    <section id="blog" className="section">
      <div className="container">
        <div className="section_title text-center pb-25">
          <h4
            className="title wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            Notre Equipe
          </h4>
          <p
            className="wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.4s"
          ></p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-item"></div>

          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-item">
            <div className="blog-item-wrapper">
              <div className="blog-item-img">
                <a href="single-post.html">
                  <img src="/images/dg.png" alt="" />
                </a>
              </div>
              <div className="blog-item-text">
                <div className="meta-tags">
                  {/* <span className="date">
                    <i className="lnr lnr-clock"></i>2 Days Ago
                  </span> */}
                  <span className="comments">
                    <a href="#">
                      <i className="lnr lnr-bubble"></i> Directeur Général
                    </a>
                  </span>
                </div>
                <h3>
                  <a href="single-post.html">Mr BOBOZO Bobo Newman</a>
                </h3>
                <p>
                  Bobo Newman, est un homme pragmatique et ambitieux dont les
                  ambitions sont entre autres offrir à la RDC une nouvelle
                  classe d'homme d'affaire nationaux capables de relever les
                  défis économiques.
                </p>
                {/* <a href="single-post.html" className="btn-rm">
                  Read More <i className="lnr lnr-arrow-right"></i>
                </a> */}
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-item"></div>
        </div>
      </div>
    </section>
  );
}
