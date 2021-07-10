import React from "react";

export default function newFooter() {
  return (
    <>
      <section
        id="contact"
        className="section"
        data-stellar-background-ratio="-0.2"
      >
        <div className="contact-form">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="contact-us">
                  <h3>Nous Contacter</h3>
                  <div className="contact-address">
                    <p>Kinshasa, Gémena, Lubumbashi, Lualaba </p>
                    {/* <p className="phone">
                      Phone: <span>(+94 123 456 789)</span>
                    </p> */}
                    <p className="email">
                      E-mail: <span>(infos@groupekevaude.com)</span>
                    </p>
                  </div>
                  <div className="social-icons">
                    <ul>
                      <li className="facebook">
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li className="google-plus">
                        <a href="#">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      {/* <li className="linkedin">
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li className="dribbble">
                        <a href="#">
                          <i className="fa fa-dribbble"></i>
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <div className="contact-block">
                  <form id="contactForm">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Votre Nom"
                            required
                            data-error="Renseigner votre nom !"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Votre Adress Email"
                            id="email"
                            className="form-control"
                            name="name"
                            required
                            data-error="Renseigner votre email !"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            id="message"
                            placeholder="Votre Message"
                            rows="8"
                            data-error="Renseigner votre message !"
                            required
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                        <div className="submit-button text-center">
                          <button
                            className="btn btn-common"
                            id="submit"
                            type="submit"
                          >
                            Envoyer
                          </button>
                          <div
                            id="msgSubmit"
                            className="h3 text-center hidden"
                          ></div>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <ul className="footer-links">
                <li>
                  <a className="" href="#home">
                    Accueil
                  </a>
                </li>
                <li>
                  <a className="" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="" href="#about">
                    A propos
                  </a>
                </li>
                <li>
                  <a className="" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <div className="copyright">
                <p>
                  Tous droit reservé &copy; 2021 - Dévelopé par{" "}
                  <a rel="nofollow" href="https://mbokart-concept.net">
                    Mbok'art Concept
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
