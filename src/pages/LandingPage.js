import React from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import ContentPage from "../components/landingpage/ContentPage.js";
import ContentPageTwo from "../components/landingpage/ContentPageTwo.js";
import ContentPageThree from "../components/landingpage/ContentPageThree.js";
import BrandCarsoule from "../components/BrandCarsoule.js";

const LandingPage = () => {
  return (
    <>
      <Header />
      <ContentPage />
      <ContentPageTwo />
      <ContentPageThree />
      {/* <BrandCarsoule /> */}
      <Footer />
    </>
  );
};

export default LandingPage;
