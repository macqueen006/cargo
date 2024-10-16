"use client";
import React from "react";
import Fancybox from "./Fancybox";
import Link from "next/link";

export default function VideoPopup() {
  const fancyboxOptions = {
    animationEffect: "fade",
    animationDuration: 400,
    transitionEffect: "zoom-in-out",
    buttons: ["zoom", "close"], // Customize buttons
    loop: false,
    infinite: false,
    baseClass: "fancybox-custom",
  };
  return (
    <Fancybox options={fancyboxOptions}>
      <Link
        data-fancybox="gallery"
        href="https://youtu.be/sjH0j6WkaRQ"
        data-caption="Watch this awesome video"
        className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center"
      ></Link>
      <Link
        data-fancybox="gallery"
        href="https://cdn.pixabay.com/photo/2023/06/14/23/12/sunset-8064078_960_720.jpg"
        data-caption="view this awesome picture"
        className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center"
      ></Link>
    </Fancybox>
  );
}
