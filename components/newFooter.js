import React, { useState } from "react";

import { useForm } from "react-hook-form";
import axios from "axios";

export default function newFooter() {
  const [succes, setSucces] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmitForm(data) {
    let config = {
      method: "post",
      url: `/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };

    try {
      setLoading(true);
      const response = await axios(config);
      console.log("satut", response.status);
      if (response.status == 200) {
        reset();
        setSucces(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

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
                    <p>
                      Adresse: <span>Basoko n° 3968 Gombe-Kinshasa/RDC</span>
                    </p>
                    {/* <p>Kinshasa, Gémena, Lubumbashi, Lualaba </p> */}
                    <p className="phone">
                      Téléphone:{" "}
                      <span>
                        (+243 829 957 187 - 854 538 238 - 808 880 084)
                      </span>
                    </p>
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
                  <form id="contactForm" onSubmit={handleSubmit(onSubmitForm)}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className={`form-control ${
                              errors.name && "is-invalid"
                            }`}
                            name="name"
                            placeholder="Votre Nom"
                            {...register("name", {
                              required: true,
                              minLength: 3,
                            })}
                          />
                          <div className="invalid-feedback error-msg">
                            Nom incorrect !
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className={`form-control ${
                              errors.email && "is-invalid"
                            }`}
                            name="email"
                            placeholder="Votre Adress Email"
                            {...register("email", {
                              required: true,
                              pattern:
                                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            })}
                          />
                          <div className="invalid-feedback error-msg">
                            Email incorrect !
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            row="8"
                            className={`form-control ${
                              errors.message && "is-invalid"
                            }`}
                            name="message"
                            placeholder="Votre Message"
                            name="message"
                            {...register("message", {
                              required: true,
                            })}
                          />
                          <div className="invalid-feedback error-msg">
                            Message incorrect !
                          </div>
                        </div>
                        <div className="submit-button text-center">
                          <button
                            className="btn btn-common"
                            id="submit"
                            type="submit"
                            disabled={loading}
                          >
                            Envoyer
                          </button>
                          <div
                            id="msgSubmit"
                            className="h3 text-center hidden"
                          ></div>
                          <div className="col-12">
                            {succes && (
                              <div
                                className=" mt-3 text-center alert alert-success alert-dismissible fade show"
                                role="alert"
                              >
                                <strong>Merci!</strong> nous avons reçu votre
                                message.
                                <button
                                  type="button"
                                  class="close"
                                  data-dismiss="alert"
                                  aria-label="Close"
                                  onClick={() => setSucces(false)}
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                            )}
                          </div>
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
