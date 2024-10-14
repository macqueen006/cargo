"use client";
import React, {useState} from "react";
import Slider, {LazyLoadTypes} from "react-slick";
import NextArrow from "@/components/ui/buttons/NextArrow";
import PrevArrow from "@/components/ui/buttons/PrevArrow";
import Image from "next/image";
import {prefix} from "@/libs/util";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
    {
        text: "Always on time",
        img: {
            desktop: `${prefix}10/cargo-home-slider-img-2-new.jpg`,
            tablet: `${prefix}09/cargo-home-slider-tablet-img-2.jpg`,
            mobile: `${prefix}09/cargo-home-slider-mobile-img-2.jpg`,
        },
    },
    {
        img: {
            desktop: `${prefix}10/cargo-home-slider-img-1-new.jpg`,
            tablet: `${prefix}09/cargo-home-slider-tablet-img-1.jpg`,
            mobile: `${prefix}09/cargo-home-slider-mobile-img-1.jpg`,
        },
        text: "Fast and reliable",
    },
    {
        img: {
            desktop: `${prefix}10/cargo-home-slider-img-3-new.jpg`,
            tablet: `${prefix}09/cargo-home-slider-tablet-img-3.jpg`,
            mobile: `${prefix}09/cargo-home-slider-mobile-img-3.jpg`,
        },
        text: "Package safety",
    },
    {
        img: {
            desktop: `${prefix}08/air-blog-img2-1024x523.jpg`,
            tablet: `${prefix}08/air-blog-img2-768x392.jpg`,
            mobile: `${prefix}08/air-blog-img2-650x650.jpg`,
        },
        text: "Always ahead",
    },
];

const HeroSection = () => {
    const [slider, setSlider] = useState<Slider | null>(null);
    const [activeSlide, setActiveSlide] = useState<number>(0);

    interface SliderSettings {
        className: string,
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
        className: "h-full w-full",
        dots: false,
        infinite: true,
        fade: true,
        lazyLoad: "ondemand" as LazyLoadTypes,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        waitForAnimate: false,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setActiveSlide(next),
    };

    const goToSlide = (index: number) => {
        slider?.slickGoTo(index);
    };

    return (
        <section data-type="color" className="relative block w-full h-auto bg-main-color interactive">
            <div className="slider-container w-full h-[81.2rem] relative lg:h-[67.6rem]">
                <Slider ref={(s) => setSlider(s)} {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full h-[81.2rem] lg:h-[67.6rem] relative">
                            <picture className="absolute w-full h-full top-0 left-0">
                                <source media="(max-width: 640px)" srcSet={slide.img.mobile}/>
                                <source media="(min-width: 641px) and (max-width: 1024px)" srcSet={slide.img.tablet}/>
                                <source media="(min-width: 641px)" srcSet={slide.img.desktop}/>
                                <Image
                                    className="block"
                                    src={slide.img.desktop}
                                    style={{objectFit: "cover", backgroundPosition: 'center 0'}}
                                    fill
                                    sizes="100%"
                                    alt="img"
                                />
                            </picture>

                            <div
                                className="absolute block left-[3.5rem] top-[62.7rem] lg:left-[12.5rem] lg:top-[46.8rem] z-[9]">
                                <div
                                    className="absolute block overflow-hidden">
                                    <div className={`w-[30.5rem] h-[10rem] z-[9] text-left text-[4rem] leading-[4.7rem] -tracking-[0.1rem] font-bold transform origin-center translate-x-0 
                                    ${index === activeSlide && "scale-text-bottom"}  lg:text-[6.5rem] lg:leading-[7.2rem] lg:h-[8rem] lg:w-[60rem] font-inter`}
                                    >
                                        {slide.text}
                                    </div>
                                </div>
                            </div>
                            {/* text */}
                        </div>
                    ))}
                </Slider>
                <div
                    className="bullets lg:block hidden opacity-100 absolute top-full left-1/2 h-[8rem] z-[6] -translate-x-[15rem] -translate-y-[8.1rem] visible"
                    style={{width: `${slides.length * 100}px`}}>
                    {[...Array(slides.length)].map((_, index) => (
                        <div
                            data-type="color"
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`bullet ${
                                index === activeSlide ? "selected" : ""
                            } absolute top-0 flex items-center justify-center visible w-[10rem] h-[8rem] bg-transparent text-dark-color interactive scale`}
                            style={{left: `${index * 100}px`}}
                        >
              <span className="text-[1.7rem] leading-[2.2rem] -tracking-[0.018rem] font-bold font-arial">
                {String(index + 1).padStart(2, "0")}
              </span>
                        </div>
                    ))}
                </div>
                {/*bullets */}
            </div>
        </section>
    );
};

export default HeroSection;
