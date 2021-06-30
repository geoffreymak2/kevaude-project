import React from "react";

export default function blog() {
  return (
    <section id="blog" className="blog_area pt-120 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-25">
              <h4
                className="title wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                Recent Blog
              </h4>
              <p
                className="wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt labor dolore.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div
              className="single_blog mt-30 wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              <div className="blog_image">
                <img src="/images/blog-1.jpg" alt="blog" />
              </div>
              <div className="blog_content">
                <h3 className="blog_title">
                  <a href="#0">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor .
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt labor dolore.Lorem ipsum
                  dolor sit amet, conse sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt labor dolore magna .Lorem ipsum dolor sit
                  amet, consetetur sadipscing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="single_blog blog_2 d-sm-flex mt-30 wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              <div className="blog_image">
                <img src="/images/blog-2.jpg" alt="blog" />
              </div>
              <div className="blog_content media-body">
                <h3 className="blog_title">
                  <a href="#0">
                    Lorem ipsum dolor sit amet, consetetur sadipscing .
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit consetetur sadipscing elitr, sed diam.
                </p>
                <a href="#0" className="more">
                  Read More
                </a>
              </div>
            </div>

            <div
              className="single_blog blog_2 d-sm-flex mt-30 wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.3s"
            >
              <div className="blog_image">
                <img src="/images/blog-3.jpg" alt="blog" />
              </div>
              <div className="blog_content media-body">
                <h3 className="blog_title">
                  <a href="#0">
                    Lorem ipsum dolor sit amet, consetetur sadipscing .
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit consetetur sadipscing elitr, sed diam.
                </p>
                <a href="#0" className="more">
                  Read More
                </a>
              </div>
            </div>

            <div
              className="single_blog blog_2 d-sm-flex mt-30 wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.4s"
            >
              <div className="blog_image">
                <img src="/images/blog-4.jpg" alt="blog" />
              </div>
              <div className="blog_content media-body">
                <h3 className="blog_title">
                  <a href="#0">
                    Lorem ipsum dolor sit amet, consetetur sadipscing .
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit consetetur sadipscing elitr, sed diam.
                </p>
                <a href="#0" className="more">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
