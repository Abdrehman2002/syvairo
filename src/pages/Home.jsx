import React from "react";
import HerosSection from "../compounents/HeroSection";
import IntroVideoSection from "../compounents/IntroVideoSection";
import WhyChooseSyvairo from "../compounents/WhyChooseSyvairo";
import ClientTrustLiveAgents from "../compounents/ClientTrustLiveAgents";
import ROICalculator from "../compounents/ROICalculator";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <div className="relative">
      <div className="relative pt-16">
        <HerosSection />
        <IntroVideoSection />
        <WhyChooseSyvairo />
        <ClientTrustLiveAgents />
        <ROICalculator />
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
