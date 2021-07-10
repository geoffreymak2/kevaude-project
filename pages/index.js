import Preloader from "../components/preloader";
import Home from "../components/home";
import Features from "../components/features";
import About from "../components/about";
import Services from "../components/services";
import Portfolio from "../components/newPortfolio";
// import Portfolio from "../components/portfolio";

// import Pricing from "../components/pricing";
import Team from "../components/team";
import Testimonial from "../components/testimonial";
// import Blog from "../components/blog";
import Contact from "../components/contact";
// import Footer from "../components/footer";
import BackToTop from "../components/backToTop";
import Counter from "../components/counter";

export default function HomePage() {
  return (
    <>
      <Preloader />
      <Home />
      <Features />
      <About />
      <Services />
      <Portfolio />
      <Counter />
      {/* <Pricing /> */}
      <Team />
      {/* <Testimonial /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      <BackToTop />
    </>
  );
}
