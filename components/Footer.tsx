import Link from "next/link";
import Image from "next/image";
import Twitter from "/public/Twitter.svg";
import Instagram from "/public/Instagram.svg";
import Facebook from "/public/Facebook.svg";
import Linkedin from "/public/Linkedin.svg";
import { formatPhoneNumber } from "@/libs/util";

const locations = [
  { city: "Tokyo", country: "Japan", url: "#" },
  { city: "Jakarta", country: "Indonesia", url: "#" },
  { city: "Seoul", country: "South Korea", url: "#" },
  { city: "Toronto", country: "Canada", url: "#" },
  { city: "Paris", country: "France", url: "#" },
];

const contact = {
  support_center: "+2347014806219",
  email: "godwinsawyer@gmail.com",
  address: {
    street: "94 Roa Malaka",
    city: "Jakarta City",
  },
};

const divisions = [
  { name: "About Us", url: "#" },
  { name: "Our Team", url: "#" },
  { name: "Our Clients", url: "#" },
  { name: "Meet the Crew", url: "#" },
  { name: "Available Positions", url: "#" },
  { name: "Job Application", url: "#" },
];

const services = [
  { name: "Our Services", url: "#" },
  { name: "What We Do", url: "#" },
  { name: "Request a Freight", url: "#" },
  { name: "Track & Trace", url: "#" },
  { name: "Air Freight", url: "#" },
  { name: "Rail Freight", url: "#" },
  { name: "Maritime Transport", url: "#" },
];

const contact_us = [
  { name: "Find Us Here", url: "#" },
  { name: "Get in Touch", url: "#" },
  { name: "FAQ Page", url: "#" },
  { name: "Global Network", url: "#" },
  { name: "Support 24/7", url: "#" },
];

const latest_news = [
  { name: "Expert Tips", url: "#" },
  { name: "A Sustainable Future", url: "#" },
  { name: "Fresh Start", url: "#" },
  { name: "Clean Spaces", url: "#" },
  { name: "Tips & Strategies", url: "#" },
];

interface SvgIconProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
  hoverColor?: string;
}

const socialLinks = [
  { platform: "Twitter", icon: Twitter, url: "#" },
  { platform: "Instagram", icon: Instagram, url: "#" },
  { platform: "Facebook", icon: Facebook, url: "#" },
  { platform: "Linkedin", icon: Linkedin, url: "#" },
];

const SvgIcon: React.FC<SvgIconProps> = ({
  icon: Icon,
  className,
  hoverColor,
}) => {
  return (
    <div className={`transition-colors duration-300 ${className}`}>
      <Icon
        className={`fill-current hover:${
          hoverColor || "text-dark-color"
        } transition-colors duration-[.15s] ease-out`}
      />
    </div>
  );
};

const footer = {
  website: {
    name: "Macqueen006",
    url: "#",
  },
  logo: "08/Logo-Footer-Dark.svg",
};

export const Footer = () => {
  return (
    <footer className="px-[4rem] relative w-full inline-block">
      <div className="pt-[13.8rem] pb-[4.5rem] flex items-start flex-wrap -mx-[1.5rem]">
        <div className="px-[1.5rem] mb-[6rem] w-full">
          <h6 className="mb-[1.9rem] font-medium text-[1.5rem] leading-[2.1rem] -tracking-[0.015rem] text-[#777]">
            Currently Operating
          </h6>
          <ul>
            {locations.map((location, index) => (
              <li key={index} className="mb-[1.5rem]">
                <Link
                  href="#"
                  className="font-bold bg-transition text-[1.7rem] leading-[2.2rem] capitalize -tracking-[0.017rem]"
                >
                  {location.city} - {location.country}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-[1.5rem] w-full mb-[6rem]">
          <div className="bg-[#ececec] p-[3.5rem]">
            <div className="mb-[2.6rem]">
              <div className="mb-[2.6rem]">
                <h6 className="mb-[.5rem] font-medium text-[1.5rem] leading-[2.1rem] -tracking-[0.015rem] text-[#777]">
                  Support center 24/7
                </h6>
                <Link
                  href="tel:+2347014806219"
                  className="font-bold text-[3.7rem] leading-[4.5rem] -tracking-[0.037rem]"
                >
                  {formatPhoneNumber(contact.support_center)}
                </Link>
              </div>
              <div className="w-auto">
                <h6 className="font-medium text-[1.5rem] leading-[2.1rem] -tracking-[0.015rem] text-[#777] mb-[1.2rem]">
                  You can find us at
                </h6>
                <Link
                  href="#"
                  className="font-bold text-[2.2rem] leading-[2.6rem] -tracking-[0.022rem]"
                >
                  {contact.address.street}, {contact.address.city}
                </Link>
              </div>
            </div>
            <div className="w-auto">
              <h6 className="font-medium text-[1.5rem] leading-[2.1rem] -tracking-[0.015rem] text-[#777] mb-[1.2rem]">
                Get in touch with us
              </h6>
              <Link
                href="email:godwinsawyer@gmail.com"
                className="font-bold text-[2.2rem] leading-[2.6rem] -tracking-[0.022rem] break-words"
              >
                {contact.email}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[10.5rem] pb-[2.9rem] w-full relative inline-block inner">
        <div className="flex flex-wrap items-start -mx-[1.5rem]">
          <div className="mb-[6rem] px-[1.5rem] w-full">
            <Link href="#" className="inline-block">
              <Image
                className="max-w-full"
                src={footer.logo}
                alt="logo"
                width={243.917}
                height={60.4167}
              />
            </Link>
          </div>
          <div className="mb-[6rem] px-[1.5rem] w-full">
            <h5 className="font-bold mb-[2.9rem] text-[1.7rem] capitalize leading-[2.2rem] -tracking-[0.017rem] text-dark-color">
              Our Division
            </h5>
            <ul className="text-[#777]">
              {divisions.map((division, index) => (
                <li key={index} className="mb-[1.5rem]">
                  <Link
                    href={division.url}
                    className="bg-transition text-[1.7rem] leading-[2.6rem] capitalize"
                  >
                    {division.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* links */}
          <div className="mb-[6rem] px-[1.5rem] w-full">
            <h5 className="font-bold mb-[2.9rem] text-[1.7rem] capitalize leading-[2.2rem] -tracking-[0.017rem] text-dark-color">
              Company Service
            </h5>
            <ul className="text-[#777]">
              {services.map((service, index) => (
                <li key={index} className="mb-[1.5rem]">
                  <Link
                    href={service.url}
                    className="bg-transition text-[1.7rem] leading-[2.6rem] capitalize"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* links */}

          <div className="mb-[6rem] px-[1.5rem] w-full">
            <h5 className="font-bold mb-[2.9rem] text-[1.7rem] capitalize leading-[2.2rem] -tracking-[0.017rem] text-dark-color">
              contact us
            </h5>
            <ul className="text-[#777]">
              {contact_us.map((contact, index) => (
                <li key={index} className="mb-[1.5rem]">
                  <Link
                    href={contact.url}
                    className="bg-transition text-[1.7rem] leading-[2.6rem] capitalize"
                  >
                    {contact.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* links */}
          <div className="mb-[6rem] px-[1.5rem] w-full">
            <h5 className="font-bold mb-[2.9rem] capitalize text-[1.7rem] leading-[2.2rem] -tracking-[0.017rem] text-dark-color">
              Latest News
            </h5>
            <ul className="text-[#777]">
              {latest_news.map((news, index) => (
                <li key={index} className="mb-[1.5rem]">
                  <Link
                    href={news.url}
                    className="bg-transition text-[1.7rem] leading-[2.6rem] capitalize"
                  >
                    {news.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* links */}
        </div>
      </div>
      {/* middle */}
      <div className="pt-[2rem] w-full relative inline-block inner">
        <div className="-mx-[1.5rem] flex flex-wrap items-start">
          <div className="w-full px-[1.5rem] mb-[2rem]">
            <p className="text-[1.5rem] my-[1rem] leading-[2.6rem] text-dark-color">
              &copy; 2024{" "}
              <Link
                className="text-transition bg-gradient-to-r from-dark-color to-dark-color"
                href={footer.website.url}
              >
                {footer.website.name}
              </Link>
              , All Rights Reserved
            </p>
          </div>
          <div className="w-full px-[1.5rem] mb-[2rem]">
            <div>
              {socialLinks.map(({ platform, icon, url }) => (
                <Link
                  key={platform}
                  href={url}
                  className="mt-[1.3rem] mr-[2.5rem] inline-block"
                >
                  <SvgIcon
                    icon={icon}
                    className="h-5 w-5"
                    hoverColor="text-main-color"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
    </footer>
  );
};

export default Footer;
