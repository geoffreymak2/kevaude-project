import Head from "next/head";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <title>Groupe Kevaude</title>
        <meta
          name="description"
          content={`Le Groupe Kevaude commercialise les produits petroliers raffinés à travers ses reseaux de distribution et ses aires d'approvisionnement dans les ports du Pool Malebo. Nos unités fluviales assurent une distribution dans le Grand Equateur et dans tout le pays en assurant une autonomie en produits et de surcroit le désenclavement des zones forestières. Défiant toute concurrence liée au prix et participe à la reconstitution du pays par l'aménagement des infrastructures de base dans le Sud-Ubangi et au Nord-Ubangi.`}
        />
        <meta
          name="keywords"
          content={`Face aux grandes mutations énergetiques de l' heure, nous nous taillons une place de choix et non le moindre dans le secteur des hydrocarbures dans le monde. Aguerris et déterminé, nous le sommes. GROUPE KEVAUDE se veut être en position d'avant-gardiste dans le secteur des hydrocarbures, trading et Commercialisation. Tels est l'objectif assigné à l' horizon 2025.`}
        />
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
