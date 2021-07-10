import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="/js/jquery-min.js"></script>
          <script src="/js/popper.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/jquery.mixitup.js"></script>
          <script src="/js/nivo-lightbox.js"></script>
          <script src="/js/owl.carousel.js"></script>
          <script src="/js/jquery.stellar.min.js"></script>
          <script src="/js/jquery.nav.js"></script>
          <script src="/js/scrolling-nav.js"></script>
          <script src="/js/jquery.easing.min.js"></script>
          <script src="/js/smoothscroll.js"></script>
          <script src="/js/jquery.slicknav.js"></script>
          <script src="/js/wow.js"></script>
          <script src="/js/jquery.vide.js"></script>
          <script src="/js/jquery.counterup.min.js"></script>
          <script src="/js/jquery.magnific-popup.min.js"></script>
          <script src="/js/waypoints.min.js"></script>
          <script src="/js/form-validator.min.js"></script>
          <script src="/js/contact-form-script.js"></script>

          <script src="/js/bootstrap.bundle-5.0.0-beta1.min.js"></script>
          <script src="/js/tiny-slider.js"></script>
          <script src="/js/wow.min.js"></script>
          {/* <script src="/js/jquery-min.js"></script>
          <script src="/js/popper.min.js"></script>
          <script src="/js/form-validator.min.js"></script>
          <script src="/js/contact-form-script.js"></script> */}
          <script src="/js/custom.js"></script>
          <script src="/js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
