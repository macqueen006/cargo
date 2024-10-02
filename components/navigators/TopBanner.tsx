import { cn } from "@/libs/util";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const contactInfo = {
  phone: {
    href: "#",
    iconSrc: "08/Phone-Icon-2.png",
    iconAlt: "Phone Icon",
    text: "+234 148 06 219",
    iconWidth: 15,
    iconHeight: 15,
  },
  email: {
    href: "#",
    iconSrc: "08/Mail-Icon-1.png",
    iconAlt: "Mail Icon",
    text: "Godwinsawyer@gmail.com",
    iconWidth: 18,
    iconHeight: 12,
  },
  support: {
    href: "#",
    iconSrc: "08/Support-Icon-top-header.png",
    iconAlt: "Support Icon",
    text: "Support 24/7",
    iconWidth: 20,
    iconHeight: 17,
  },
  trace: {
    href: "#",
    iconSrc: "08/Tracking-Icon.png",
    iconAlt: "Tracking Icon",
    text: "Track and Trace",
    iconWidth: 14,
    iconHeight: 20,
  },
};

const TopBanner = () => {
  return (
    <div className="hidden lg:flex items-center justify-between px-[4rem] h-[3.3rem] bg-dark-color text-white z-[101] relative">
      <div className="flex items-center">
        <BannerLink data={contactInfo.phone} className="mr-[1.2rem]" />
        <span className="mx-[1.2rem] h-[3.3rem]"></span>
        {/* separator */}
        <BannerLink data={contactInfo.email} className="ml-[1.2rem]" />
      </div>
      {/* left */}
      <div className="flex items-center">
        <BannerLink data={contactInfo.support} className="mr-[1.2rem]" />
        <span className="mx-[1.2rem] h-[3.3rem]"></span>
        {/* separator */}
        <BannerLink data={contactInfo.trace} className="ml-[1.2rem]" />
      </div>
    </div>
  );
};

interface BannerLinkData {
  href: string;
  iconSrc: string;
  iconAlt: string;
  text: string;
  iconWidth: number;
  iconHeight: number;
}
interface BannerLinkProps {
  data: BannerLinkData;
  className?: string;
}

const BannerLink: React.FC<BannerLinkProps> = ({ data, className }) => {
  return (
    <div className={cn(`flex items-end`, className)}>
      <Link href={data.href} className="flex items-center">
        <span className="mr-[1.5rem] flex items-center ">
          <Image
            className="max-w-full"
            src={data.iconSrc}
            alt={data.iconAlt}
            width={data.iconWidth}
            height={data.iconHeight}
          />
        </span>
        <span className="inline-block text-[1.3rem] leading-[1.67rem] tracking-[0.052rem] font-extralight text-transition bg-gradient-to-r from-white to-white">
          {data.text}
        </span>
      </Link>
    </div>
  );
};

export default TopBanner;
