import Head from "next/head";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <title>Groupe Kevaude</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/favicon.png" type="image/png" />

        <link rel="stylesheet" href="/css/bootstrap.min.css" />

        <link rel="stylesheet" href="/css/line-icons.css" />
        <link rel="stylesheet" href="/css/owl.carousel.css" />
        <link rel="stylesheet" href="/css/owl.theme.css" />
        <link rel="stylesheet" href="/css/nivo-lightbox.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/slicknav.css" />
        {/* <link rel="stylesheet" href="/css/responsive.css" />
        <link rel="stylesheet" href="/css/main.css" /> */}

        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/tiny-slider.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/LineIcons.2.0.css" />
        <link rel="stylesheet" href="/css/bootstrap-5.0.0-beta1.min.css" />
        <link rel="stylesheet" href="/css/default.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
