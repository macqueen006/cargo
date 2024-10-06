import React from "react";
import HeroSection from "./_components/HeroSection";
import MainHeader from "@/components/navigators/MainHeader";
import MobileHeader from "@/components/navigators/MobileHeader";
import MoreInfo from "@/app/(home)/_components/MoreInfo";
// import Footer from "@/components/Footer";
import OurSolutions from "./_components/OurSolutions";
import OurServicesColumns from "./_components/OurServicesColumns";
import Testimonials from "./_components/Testimonials";
import Counters from "./_components/Counters";
import { prefix } from "@/libs/util";
import OurDevelopers from "./_components/OurDevelopers";
// import Frame from "./_components/Frame";
// import PricingRange from "./_components/PricingRange";
// import CompanyLogos from "./_components/CompanyLogos";
const moreInfoData = {
  title: "Globefarer offers global shipping",
  description:
    "Providing independent advice and identifying the right fit for you. Services are sourced.",
  href: "#",
  buttonText: "about our services",
  imageSrc: `${prefix}08/cargo-home-img-3.jpg`,
  imageAlt: "Image showing global shipping",
};

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
          <MoreInfo data={moreInfoData} />
          <OurDevelopers />
          {/* <Frame />
          <PricingRange />
          <CompanyLogos /> */}
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
