import React from "react";

export default function team() {
  return (
    <section id="team" className="team_area pt-120 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
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
          </div>
        </div>
        <div className="row justify-content-center team_active">
          <div className="col-lg-4 col-md-8 col-sm-10"></div>
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div
              className="single_team mt-30 wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              <img src="/images/team-1.jpg" alt="team" />

              <div className="team_content">
                <h4 className="team_name">
                  <a href="#0">M.BOBOZO .</a>
                </h4>
                <p>Directeur Général</p>
                <ul className="social">
                  <li>
                    <a href="#0">
                      <i className="lni lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="lni lni-twitter-original"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="lni lni-linkedin-original"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-10"></div>
          {/* <div className="col-lg-4 col-md-8 col-sm-10">
            <div
              className="single_team mt-30 wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.3s"
            >
              <img src="/images/team-2.jpg" alt="team" />

              <div className="team_content">
                <h4 className="team_name">
                  <a href="#0">Jennifer L.</a>
                </h4>
                <p>UX Designer</p>
                <ul className="social">
                  <li>
                    <a href="#0">
                      <i className="lni lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="lni lni-twitter-original"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="lni lni-linkedin-original"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div
              className="single_team mt-30 wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.4s"
            >
              <img src="/images/team-3.jpg" alt="team" />

              <div className="team_content">
                <h4 className="team_name">
                  <a href="#0">Rob Percy</a>
                </h4>
                <p>Creative Designer</p>
                <ul className="social">
                  <li>
                    <a href="#0">
                      <i className="lni lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="lni lni-twitter-original"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="lni lni-linkedin-original"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        */}
        </div>
      </div>
    </section>
  );
}
