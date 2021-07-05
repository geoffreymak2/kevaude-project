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
                  <h3>Contact With us</h3>
                  <div class="contact-address">
                    <p>Centerville Road, DE 19808, US </p>
                    <p class="phone">
                      Phone: <span>(+94 123 456 789)</span>
                    </p>
                    <p class="email">
                      E-mail: <span>(contact@mate.com)</span>
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
                      <li class="linkedin">
                        <a href="#">
                          <i class="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li class="dribbble">
                        <a href="#">
                          <i class="fa fa-dribbble"></i>
                        </a>
                      </li>
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
                            placeholder="Your Name"
                            required
                            data-error="Please enter your name"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            placeholder="Your Email"
                            id="email"
                            class="form-control"
                            name="name"
                            required
                            data-error="Please enter your email"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            id="message"
                            placeholder="Your Message"
                            rows="8"
                            data-error="Write your message"
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
                            Send Message
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
                  <a href="#">Homepage</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-6 col-sm-6 col-xs-12">
              <div class="copyright">
                <p>
                  All copyrights reserved &copy; 2018 - Designed & Developed by{" "}
                  <a rel="nofollow" href="https://uideck.com">
                    UIdeck
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
