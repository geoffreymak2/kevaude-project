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
                    About Our Creative Proccess
                  </h4>
                  <p
                    className="wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.4s"
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    dianonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et erebum
                  </p>
                  <p
                    className="wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.6s"
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore etdolore maali
                    quyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores
                  </p>
                </div>
                <a
                  href="#0"
                  className="main-btn wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.7s"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="about_image bg_cover wow fadeInLeft"
          data-wow-duration="1.3s"
          data-wow-delay="0.2s"
          style={{ backgroundImage: "url(/images/about.jpg)" }}
        >
          <div className="image_content">
            <h4 className="experience">
              <span>5</span> Years of Experience
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
