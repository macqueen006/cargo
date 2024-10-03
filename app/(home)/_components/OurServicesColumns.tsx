import Link from "next/link";
import Image from "next/image";
import { prefix } from "@/libs/util";

interface BannerData {
  imageSrc: string;
  altText: string;
  heading: string;
  subheading: string;
  linkHref: string;
}
const data: BannerData[] = [
  {
    imageSrc: `${prefix}08/cargo-home-banner-1.jpg`,
    altText: "First Banner Image",
    heading: "Latest analytics",
    subheading: "Our Services",
    linkHref: "/services/latest-analytics",
  },
  {
    imageSrc: `${prefix}08/cargo-home-banner-2.jpg`,
    altText: "Second Banner Image",
    heading: "Railway Cargo",
    subheading: "Our Services",
    linkHref: "/services/railway-cargo",
  },
]

const OurServicesColumns = () => {
    return (
      <section className="flex flex-wrap mx-auto relative">
      {data.map((banner, index) => (
        <div key={index} className="relative group grow lg:flex-1">
          <div className="relative inline-block w-full h-full overflow-hidden">
            <Image
              className="group-hover:translate-x-[.5rem] scale-[1.03] transition-transform duration-[.4s] ease-[cubic-bezier(.6,.6,.29,.95)] block translate-x-0"
              src={banner.imageSrc}
              width={1280}
              height={774}
              alt={banner.altText}
              layout="responsive"
            />
          </div>
          <div className="absolute container-transition top-0 left-0 text-white w-full h-full flex flex-col items-center justify-center text-center p-[3rem]">
            <h6 className="text-[1.5rem] leading-[2.5rem] -tracking-[0.015rem] font-medium">
              {banner.subheading}
            </h6>
            <h2 className="font-bold text-[3.7rem] leading-[4.5rem] py-[0.2rem] -tracking-[0.037rem]">
              {banner.heading}
            </h2>
          </div>
          <Link
            href={banner.linkHref}
            className="absolute top-0 left-0 w-full h-full z-10 block"
          />
        </div>
      ))}
    </section>
    );
};
  
export default OurServicesColumns;