import React from "react";

export default function newFooter() {
  return (
    <>
      <section
        id="contact"
        class="section"
        data-stellar-background-ratio="-0.2"
      >
        <div class="contact-form">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="contact-us">
                  <h3>Nous Contacter</h3>
                  <div class="contact-address">
                    <p>Kinshasa, Sud-Ubangi, Nord-Ubangi </p>
                    {/* <p class="phone">
                      Phone: <span>(+94 123 456 789)</span>
                    </p> */}
                    <p class="email">
                      E-mail: <span>(info@groupekevaude.com)</span>
                    </p>
                  </div>
                  <div class="social-icons">
                    <ul>
                      <li class="facebook">
                        <a href="#">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li class="twitter">
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li class="google-plus">
                        <a href="#">
                          <i class="fa fa-google-plus"></i>
                        </a>
                      </li>
                      {/* <li class="linkedin">
                        <a href="#">
                          <i class="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li class="dribbble">
                        <a href="#">
                          <i class="fa fa-dribbble"></i>
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-xs-12">
                <div class="contact-block">
                  <form id="contactForm">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="name"
                            name="name"
                            placeholder="Votre Nom"
                            required
                            data-error="Renseigner votre nom !"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            placeholder="Votre Adress Email"
                            id="email"
                            class="form-control"
                            name="name"
                            required
                            data-error="Renseigner votre email !"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            id="message"
                            placeholder="Votre Message"
                            rows="8"
                            data-error="Renseigner votre message !"
                            required
                          ></textarea>
                          <div class="help-block with-errors"></div>
                        </div>
                        <div class="submit-button text-center">
                          <button
                            class="btn btn-common"
                            id="submit"
                            type="submit"
                          >
                            Envoyer
                          </button>
                          <div
                            id="msgSubmit"
                            class="h3 text-center hidden"
                          ></div>
                          <div class="clearfix"></div>
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
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-sm-6 col-xs-12">
              <ul class="footer-links">
                <li>
                  <a className="page-scroll" href="#home">
                    Accueil
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#about">
                    A propos
                  </a>
                </li>
                <li>
                  <a className="page-scroll" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-6 col-sm-6 col-xs-12">
              <div class="copyright">
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
