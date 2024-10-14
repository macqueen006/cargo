"use client";
import React from "react";
import Fancybox from "./Fancybox";
import Link from "next/link";

export default function VideoPopup() {
  return (
    <Fancybox
      options={{
        infinite: false,
      }}
    >
      <Link
        data-fancybox="gallery"
        href="https://www.youtube.com/watch?v=l0aI8Ecumy8&t=141s"
        data-caption="Watch this awesome video"
        className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center"
      ></Link>
    </Fancybox>
  );
}
