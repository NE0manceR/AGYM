import App from "next/app";
import Head from "next/head";
import Layout from "../components/Layout.jsx";
import Phone from "../components/Phone.jsx";
import ScrollTop from "../components/scroll-top.jsx";
import "../styles/index.css";
import {
  getHome,
  getMainPrices,
  getFAQS,
  getNutrition,
  getMembership,
  getNewbie,
  getDevelopmentVideo,
  getNutritionVideo,
  getSupplementVideo,
  getAbout,
  getGalleryPhotos,
  getPersonalVideo,
  getFeedback,
} from "../utils/api.js";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout {...pageProps}>
      <Phone />
      <ScrollTop />
      <Head></Head>
      <Component {...pageProps} />
    </Layout>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  const homeData = await getHome();
  const mainPrices = await getMainPrices();
  const faqs = await getFAQS();
  const nutrition = await getNutrition();
  const membership = await getMembership();
  const newbie = await getNewbie();
  const developmentVideo = await getDevelopmentVideo();
  const personalVideo = await getPersonalVideo();
  const nutritionVideo = await getNutritionVideo();
  const supplementVideo = await getSupplementVideo();
  const about = await getAbout();
  const galleryPhotos = await getGalleryPhotos();
  const feedbacks = await getFeedback();



  // Fetch global site settings from Strapi
  // Pass the data to our page via props
  return {
    ...appProps,
    pageProps: {
      path: ctx.pathname,
      homeData,
      mainPrices,
      faqs,
      nutrition,
      membership,
      newbie,
      developmentVideo,
      personalVideo,
      nutritionVideo,
      supplementVideo,
      about,
      galleryPhotos,
      feedbacks,
    },
  };
};

export default MyApp;
