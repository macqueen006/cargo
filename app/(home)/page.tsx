import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";

import HeroSection from "./_components/HeroSection";
import MainHeader from "@/components/navigators/MainHeader";
import MobileHeader from "@/components/navigators/MobileHeader";
import Footer from "@/components/Footer";
import OurSolutions from "./_components/OurSolutions";
import OurServicesColumns from "./_components/OurServicesColumns";
import Testimonials from "./_components/Testimonials";
import Counters from "./_components/Counters";
import MoreInfo from "./_components/MoreInfo";
import OurDevelopers from "./_components/OurDevelopers";
import Frame from "./_components/Frame";
import PricingRange from "./_components/PricingRange";
import CompanyLogos from "./_components/CompanyLogos";

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
          <MoreInfo />
          <OurDevelopers />
          <Frame />
          <PricingRange />
          <CompanyLogos />
        </main>
      </div>
      <Footer />
    </>
  );
}

export const SidebarDrawer = () => {
  return (
    <div className="side-area active">
      <Link href=""></Link>
      <div className="">
        <div className="mb-[3.5rem]">
          <figure>
            <Link href="#" className="inline-block">
              <Image
                src="/08/Logo-sida-area.svg"
                alt=""
                width={178}
                height={44}
              />
            </Link>
          </figure>
        </div>
        <div className="mb-[3.5rem]">
          <p className="-mt-[1rem] mb-[1rem] text-[1.8rem] leading-[2.6rem] text-[#979797]">
            Everything your logistics business needs is already here!
            GlobeFarer, a theme made for transport service companies.
          </p>
        </div>
        <div className="mb-[3.5rem]">
          <h4 className="text-[#979797] my-[1.3rem] text-[1.4rem] leading-[2.6rem]">
            Support center 24/7
          </h4>
          <p className="my-[1rem] text-white text-[3.2rem] leading-[2.6rem] -tracking-[0.032rem] font-bold">
            + 234 148 062 19
          </p>
        </div>
        <div className="mb-[3.5rem] flex justify-between items-start">
          <div className="">
            <span className="text-[1.4rem] leading-[2.6rem] -mt-[2rem] -mb-[.5rem] text-[#979797]">
              You can find us at
            </span>
            <Link
              href="#"
              className="my-[1rem] block text-[1.7rem] leading-[2.2rem] -tracking-[0.017rem] text-white font-bold"
            >
              94 Roa Malaka,
              <br />
              West Jakarta City
            </Link>
          </div>
          <div className="">
            <span className="text-[1.4rem] leading-[2.6rem] -mt-[2rem] -mb-[.5rem] text-[#979797]">
              Get in touch with us
            </span>
            <Link
              href="#"
              className="my-[1rem] block text-[1.7rem] leading-[2.2rem] -tracking-[0.017rem] text-white font-bold"
            >
              Godwinsawyer@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
