import React from "react";

export default function contact() {
  return (
    <section
      id="contact"
      className="contact_area bg_cover pt-120 pb-130"
      style={{ backgroundImage: "url(/images/contact_bg.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title section_title_2 text-center pb-25">
              <h4
                className="title wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                Nous contacter
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

        <form
          id="contact-form"
          action="/contact.php"
          method="post"
          className="wow fadeInUp"
          data-wow-duration="1.3s"
          data-wow-delay="0.4s"
        >
          <div className="row">
            <div className="col-lg-6">
              <div className="single_form">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single_form">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single_form">
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="number"
                  id="number"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single_form">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="single_form">
                <textarea
                  placeholder="Message"
                  name="message"
                  id="message"
                  required
                ></textarea>
              </div>
            </div>

            <p className="form-message"></p>

            <div className="col-lg-12">
              <div className="single_form text-center">
                <button className="main-btn" type="submit">
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
