"use client";
import Image from "next/image";
import Link from "next/link";
import HamburgerBtn from "../ui/buttons/HamburgerBtn";
import { prefix } from "@/libs/util";
import {useDrawer} from "@/app/context/DrawerContext";

const linksData = [
  {
    label: "Home",
    href: "#",
    dropdownItems: [{ href: "#", text: "Main Home" }],
  },
  {
    label: "Pages",
    href: "#",
    dropdownItems: [{ href: "#", text: "Main Home" }],
  },
  {
    label: "Services",
    href: "#",
    dropdownItems: [{ href: "#", text: "Main Home" }],
  },
  {
    label: "Blog",
    href: "#",
    dropdownItems: [{ href: "#", text: "Main Home" }],
  },
  {
    label: "Contact",
    href: "#",
    dropdownItems: [{ href: "#", text: "Main Home" }],
  },
];

const MainHeader = () => {

  const {isDrawerOpen, toggleDrawer} = useDrawer();

  return (
    <>
      <header data-type="color" className="interactive relative lg:inline-block w-full z-[100] h-[8rem] bg-transparent hidden">
        <div className="border-b border-dark-color flex justify-between h-full">
          <Link
            href="#"
            data-type="color"
            className="interactive scale flex items-center shrink-0 h-[8rem] max-h-full pl-[4rem]"
          >
            <Image
              src={`${prefix}08/Logo-Inner-Pages.svg`}
              alt=""
              width={135.75}
              height={33.6167}
            />
          </Link>
          <nav className="ml-auto h-full block">
            <ul className="flex items-center h-full whitespace-nowrap relative">
              {linksData.map((data, index) => (
                <LinkWithDropdown
                  key={index}
                  label={data.label}
                  href={data.href}
                  dropdownItems={data.dropdownItems}
                />
              ))}
            </ul>
          </nav>
          <div className="flex items-center ml-[2.8rem] h-full relative">
            <TrackAndTraceDropdown label="track your order" dropdownLabel="keep track of your packages">
              <form action="">
                <div className="relative">
                  <label htmlFor="UserEmail" className="sr-only">
                    Email
                  </label>

                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Tracking ID"
                    className="w-full bg-transparent mb-[2rem] text-center py-[1.6rem] text-white text-[1.7rem] leading-[2.4rem] -tracking-[0.017rem] font-bold inline-block border border-[#a6a6a6] transition-[border-color] ease-[.3s] focus:border-white hover:border-white focus:ring-transparent placeholder-[#a6a6a6]"
                  />
                </div>
                <button className="bg-main-color group w-full flex items-center justify-center text-dark-color border border-dark-color py-[1.8rem] xl:px-[4rem]">
                  <span className="mr-[1.4rem]">
                    <svg
                      className="group-hover:rotate-90 transition-transform ease-[.2s]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path d="M0,0H14V2H0Z" transform="translate(0 6)"></path>
                      <path d="M0,0H2V14H0Z" transform="translate(6)"></path>
                    </svg>
                  </span>
                  <span className="font-bold text-[1.7rem] leading-[2.2rem] -tracking-[0.017rem]">
                    Track & trace
                  </span>
                </button>
                <Link
                  href="#"
                  className="mt-[3rem] text-[1.8rem] inline-block leading-[2.6rem] text-[#979797] text-center w-full"
                >
                  <span className="text-transition bg-gradient-to-r from-[#979797] to-[#979797]">
                    Need Help?
                  </span>
                </Link>
              </form>
            </TrackAndTraceDropdown>
            <div className="flex items-center h-full relative">
              <HamburgerBtn dark={true} toggle={isDrawerOpen} handleToggle={toggleDrawer} />
            </div>
            {/* Hamburger menu */}
          </div>
        </div>
      </header>
    </>
  );
};

interface DropdownLinkProps {
  label: string;
  href: string;
  dropdownItems?: { href: string; text: string }[];
  key: number
}

const LinkWithDropdown: React.FC<DropdownLinkProps> = ({
  label,
  href,
  dropdownItems,
}) => {
  return (
    <li  className="h-full px-[2.8rem] header-transition group">
      <Link href={href} data-type="color" className="interactive scale flex relative items-center h-full">
        <span className="font-bold text-[1.7rem] leading-[2.2rem] -tracking-[0.017rem]">
          {label}
        </span>
      </Link>
      {dropdownItems && dropdownItems.length > 0 && (
        <div data-type="revert-color" className="interactive header-down group-hover:active bg-dark-color">
          <div className="relative inline-block w-full text-white">
            <ul className="py-[1.8rem] w-[24rem]">
              {dropdownItems.map((item, index) => (
                <li key={index} className="px-[2.8rem]">
                  <Link
                    href={item.href}
                    className="interactive scale flex group/hover overflow-hidden my-[1.4rem] pr-[2.8rem] transition-[padding] duration-[.2s] ease-out relative"
                  >
                    <span className="text-[1.7rem] leading-[2.2rem] -tracking-[0.017rem] font-bold capitalize flex items-center justify-between relative">
                      <svg
                        className="absolute -left-[28px] rotate-0 group-hover/hover:rotate-90 group-hover/hover:left-0 transition-transform duration-[.2s] ease-out"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                      >
                        <path
                          d="M0,0H14V2H0Z"
                          transform="translate(0 6)"
                        ></path>
                        <path d="M0,0H2V14H0Z" transform="translate(6)"></path>
                      </svg>
                      <span className="group-hover/hover:pl-[2.8rem] transition-[padding] duration-[.2s] ease-out">
                        {item.text}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

interface TrackProps {
  label: string;
  dropdownLabel: string;
  children: React.ReactNode;
}

const TrackAndTraceDropdown: React.FC<TrackProps> = ({
  label,
  dropdownLabel,
  children,
}) => {
  return (
    <div className="track px-[2.5rem] xl:px-[2.8rem] group/tracking relative flex items-center justify-center h-full">
      <div className="xl:px-[2.8rem] flex items-center gap-[14px] header-transition h-full">
        <svg
          className=""
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="22"
          viewBox="0 0 18 22"
        >
          <g transform="translate(-1811.5 -48)">
            <path
              d="M0,0H13.391L11.4,2H0Z"
              transform="translate(1815.5 50)"
            ></path>
            <path d="M0,0H8V2H0Z" transform="translate(1811.5 68)"></path>
            <path
              d="M0,0H11.533l1.92,2H0Z"
              transform="translate(1815.5 58)"
            ></path>
            <path
              d="M0,0,6.983-.017,9,2H0Z"
              transform="translate(1821.636 54.95) rotate(-45)"
            ></path>
            <path
              d="M0,0,9.121.021,7.11,2.032,0,2Z"
              transform="translate(1823.05 53.536) rotate(45)"
            ></path>
            <path d="M0,0H2V22H0Z" transform="translate(1814.5 48)"></path>
          </g>
        </svg>
        <span className="font-bold text-[1.7rem] capitalize leading-[2.2rem] -tracking-[0.017rem]">
          {label}
        </span>
      </div>
      {/*  Tracking link */}
      <div className="header-down group-hover/tracking:active bg-dark-color w-full">
        <div className="relative inline-block w-full text-white">
          <div data-type="revert-color" className="interactive px-[2.6rem] pt-[3.4rem] pb-[4.4rem] w-full h-full">
            <h1 className="mb-[3rem] text-[1.8rem] leading-[2.6rem] text-center">
              {dropdownLabel}
            </h1>
            {/* heading text */}
            <div className="w-auto">{children}</div>
            {/* Form */}
          </div>
        </div>
      </div>
      {/* tracking dropdown */}
    </div>
  );
};

export default MainHeader;
