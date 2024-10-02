"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HamburgerBtn from "../ui/buttons/HamburgerBtn";

export const MobileHeader = () => {
    const [open, setOpen] = useState<number | null>(null);
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);
    const handleOpen = (index: number) => {
      setOpen(open === index ? null : index);
    };
  
    const menus = [
      {
        title: "Homes",
        submenus: ["Main Home", "Alternate Home"],
      },
      {
        title: "Pages",
        submenus: [
          "About Us",
          "Our Team",
          "Meet the Crew",
          "Job Application",
          "Available Positions",
          "Our Clients",
          "FAQ",
        ],
      },
      {
        title: "Services",
        submenus: ["Our Services", "What We Do", "Request Freight"],
      },
      {
        title: "Blog",
      },
      {
        title: "Contact",
        submenus: ["Get In Touch", "Global Network"],
      },
    ];
  
    return (
      <header className="block lg:hidden h-[8rem] bg-white z-[100] relative">
        <div className="pl-[4rem] flex justify-between items-center">
          <Link href="#" className="mr-auto inline-flex items-center h-[8rem]">
            <Image
              width={135.75}
              height={33.6167}
              src="/08/logo.svg"
              alt="logo"
            />
          </Link>
          <HamburgerBtn toggle={toggle} handleToggle={handleToggle} />
        </div>
        <nav
          className={`absolute top-full left-0 w-full ${
            toggle ? "block max-h-[calc(100vh - 8rem)]" : "hidden max-h-0"
          } bg-white border-b border-border-grey overflow-x-hidden overflow-y-scroll z-10`}
        >
          <ul className="px-[4rem] pt-[1.8rem] pb-[3.4rem] mx-auto">
            {menus.map((item, index) => (
              <li key={index} className="my-[1.2rem] relative">
                <div onClick={() => handleOpen(index)} className="cursor-pointer">
                  <Link href="#" className="mobile-link">
                    <span>{item.title}</span>
                  </Link>
                  {item.submenus && (
                    <svg
                      className={`absolute top-[.3rem] right-0 h-auto text-dark-color z-[9] ${
                        open === index ? "rotate-90" : "rotate-0"
                      } transition-[transform,color] duration-[.2s] ease-out`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="8.485"
                      height="14.14"
                      fill="currentColor"
                      viewBox="0 0 8.485 14.14"
                    >
                      <path
                        d="M0,0H10V2H0Z"
                        transform="translate(8.485 7.069) rotate(135)"
                      ></path>
                      <path
                        d="M0,0H10V2H0Z"
                        transform="translate(7.071 8.485) rotate(-135)"
                      ></path>
                    </svg>
                  )}
                </div>
                {/* Sub menu */}
                {open === index && item.submenus && (
                  <ul className="pt-[.9rem] leading-[2.6rem]">
                    {item.submenus.map((submenu, subIndex) => (
                      <li
                        key={subIndex}
                        className="pt-[.4rem] pb-[.5rem] relative"
                      >
                        <Link href="#" className="mobile-sub-link">
                          <span>{submenu}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
};
  
export default MobileHeader;