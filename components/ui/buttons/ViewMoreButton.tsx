import Link from "next/link";
import React from "react";

interface ViewMoreProps {
  href: string;
  text: string;
}

const ViewMoreButton: React.FC<ViewMoreProps> = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="group flex items-center"
      aria-label={`View more about ${text}`}
    >
      <span className="button-icon w-[5.4rem] bg-main-color shrink-0 h-[5.4rem] rounded-full flex justify-center items-center">
        <svg
          aria-hidden="true"
          className="rotate-0 group-hover:rotate-90 origin-center transition-transform duration-[.2s] ease-out"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
        >
          <path d="M0,0H14V2H0Z" transform="translate(0 6)"></path>
          <path d="M0,0H2V14H0Z" transform="translate(6)"></path>
        </svg>
      </span>
      <span className="ml-[1.9rem] text-[1.5rem] font-bold leading-[1.7rem] -tracking-[0.017rem]">
        View more
        <br />
        {text}
      </span>
    </Link>
  );
};

export default ViewMoreButton;
