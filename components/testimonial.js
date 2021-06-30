import React from "react";

export default function testimonial() {
  return (
    <section
      id="testimonial"
      className="testimonial_area pt-130 pb-130 bg_cover"
      style={{ backgroundImage: "url(/images/testimonial.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="testimonial_active_wrapper">
              <div className="testimonial_active">
                <div className="single_testimonial text-center">
                  <img src="/images/author-1.jpg" alt="author" />
                  <h5 className="author_name">Isabela Moreira</h5>
                  <span>UX Specialist, Yoast</span>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren.
                  </p>
                </div>
                <div className="single_testimonial text-center">
                  <img src="/images/author-2.jpg" alt="author" />
                  <h5 className="author_name">Fiona Smith</h5>
                  <span>Sr. Software Engineer</span>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren.
                  </p>
                </div>
                <div className="single_testimonial text-center">
                  <img src="/images/author-3.jpg" alt="author" />
                  <h5 className="author_name">Elon Musk</h5>
                  <span>Creaitve Businessman</span>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
