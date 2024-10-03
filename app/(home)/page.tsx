import React from "react";
import HeroSection from "./_components/HeroSection";
import MainHeader from "@/components/navigators/MainHeader";
import MobileHeader from "@/components/navigators/MobileHeader";
// import Footer from "@/components/Footer";
import OurSolutions from "./_components/OurSolutions";
import OurServicesColumns from "./_components/OurServicesColumns";
import Testimonials from "./_components/Testimonials";
import Counters from "./_components/Counters";
// import MoreInfo from "./_components/MoreInfo";
// import OurDevelopers from "./_components/OurDevelopers";
// import Frame from "./_components/Frame";
// import PricingRange from "./_components/PricingRange";
// import CompanyLogos from "./_components/CompanyLogos";

export default function Home() {
  return (
    <>
      <MobileHeader />
      {/* Mobile navigation */}
      <MainHeader />
      {/* Main navigation */}
      <div className="-mt-[8rem] lg:-mt-[11.3rem] h-full w-full relative block">
        <main className="relative inline-block w-full align-top">
          <HeroSection />
          <OurSolutions />
          <OurServicesColumns />
          <Testimonials />
          <Counters />
          {/* <MoreInfo />
          <OurDevelopers />
          <Frame />
          <PricingRange />
          <CompanyLogos /> */}
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
}


