"use client";
import React, { useState } from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "@/components/ui/buttons/NextArrow";
import PrevArrow from "@/components/ui/buttons/PrevArrow";
import Image from "next/image";

const slides = [
  {
    img: "/10/cargo-home-slider-img-2-new.jpg",
    text: "Always on time",
  },
  {
    img: "/10/cargo-home-slider-img-1-new.jpg",
    text: "Fast and reliable",
  },
  {
    img: "/10/cargo-home-slider-img-3-new.jpg",
    text: "Package safety",
  },
];

const HeroSection = () => {
  const [slider, setSlider] = useState<Slider | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);

  interface SliderSettings {
    dots: boolean;
    infinite: boolean;
    fade: boolean;
    lazyLoad: LazyLoadTypes;
    autoplay: boolean;
    waitForAnimate: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    nextArrow?: JSX.Element;
    prevArrow?: JSX.Element;
    beforeChange: (current: number, next: number) => void;
  }

  const settings: SliderSettings = {
    dots: false,
    infinite: true,
    fade: true,
    lazyLoad: "ondemand" as LazyLoadTypes,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    waitForAnimate: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  const goToSlide = (index: number) => {
    slider?.slickGoTo(index);
  };

  return (
    <section className="relative block h-[81.2rem] lg:h-[65.3rem] bg-main-color">
      <div className="w-full visible block absolute top-0 left-0 h-full">
        <div className="slider-container">
          <Slider ref={(s) => setSlider(s)} {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="h-[81.2rem] lg:h-[65.3rem] w-full">
                <div className="w-full h-[42rem] sm:h-[55rem] lg:h-full relative mt-[183px] sm:mt-[105px] lg:mt-0">
                  <Image
                    src={slide.img}
                    style={{ objectFit: "cover" }}
                    fill
                    alt="img"
                  />
                </div>
                {/* Image */}
                <div className="absolute block left-[3.5rem] top-[62.7rem] lg:left-[12.5rem] lg:top-[46.8rem] z-[9]">
                  <div className="absolute block overflow-hidden transform origin-center translate-x-0 translate-y-0">
                    <div
                      className={`w-[30.5rem] h-[10rem] z-[9] text-left text-[4rem] leading-[4.7rem] -tracking-[0.1rem] font-bold transform origin-center translate-x-0 ${
                        index === activeSlide
                          ? "translate-y-[10rem]"
                          : "translate-y-0"
                      } transition-transform ease-out lg:text-[6.5rem] lg:leading-[7.2rem] lg:h-[8rem] lg:w-[60rem] font-inter`}
                    >
                      {slide.text}
                    </div>
                  </div>
                </div>
                {/* text */}
              </div>
            ))}
          </Slider>
        </div>

        <div
          className="bullets lg:block hidden opacity-100 absolute top-full left-1/2 h-[8rem] z-[6] -translate-x-[15rem] -translate-y-[8.1rem] visible"
          style={{ width: `${slides.length * 100}px` }}
        >
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`bullet ${
                index === activeSlide ? "selected" : ""
              } absolute top-0 flex items-center justify-center visible w-[10rem] h-[8rem] bg-transparent text-dark-color cursor-pointer`}
              style={{ left: `${index * 100}px` }}
            >
              <span className="text-[1.7rem] leading-[2.2rem] -tracking-[0.018rem] font-bold font-arial">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
        {/* bullets */}
      </div>
    </section>
  );
};




export default HeroSection;
