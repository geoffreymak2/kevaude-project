import React from "react";

export default function footer() {
  return (
    <footer id="footer" className="footer_area">
      <div className="container">
        <div className="footer_wrapper text-center d-lg-flex align-items-center justify-content-between">
          <p className="credit">
            Développé par{" "}
            <a href="https://mbokart-concept.net" rel="nofollow">
              Mbok'art Concept
            </a>
          </p>
          <div className="footer_social pt-15">
            <ul>
              <li>
                <a href="#0">
                  <i className="lni lni-facebook-original"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="lni lni-twitter-original"></i>
                </a>
              </li>
              <li>
                <a href="#0">
                  <i className="lni lni-instagram-original"></i>
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
    </footer>
  );
}
