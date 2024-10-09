import React from "react";

interface ButtonProps {
  toggle: boolean;
  handleToggle: () => void;
  dark: boolean;

}

const HamburgerBtn: React.FC<ButtonProps> = ({ toggle, handleToggle, dark }) => {
  return (
    <button
      className={`w-[8rem] h-[8rem] z-10 bg-dark-color block relative overflow-hidden -mt-[1px] m-icon hover:open ${dark ? "hover:dark text-white": "hover:light text-dark-color"}`}
      onClick={handleToggle}
    >
      {toggle ? (
        <span className="relative z-[1] px-[3rem] flex items-center h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.778"
            height="19.778"
            viewBox="0 0 19.778 19.778"
            fill="currentColor"
          >
            <g transform="translate(-30 -30)">
              <rect
                width="13"
                height="2"
                transform="translate(31.414 30) rotate(45)"
              ></rect>
              <rect
                width="13"
                height="2"
                transform="translate(48.364 49.778) rotate(-135)"
              ></rect>
              <rect
                width="13"
                height="2"
                transform="translate(30 48.364) rotate(-45)"
              ></rect>
              <rect
                width="13"
                height="2"
                transform="translate(49.778 31.414) rotate(135)"
              ></rect>
            </g>
          </svg>
        </span>
      ) : (
        <span className="relative z-[1] px-[2.7rem] flex items-center h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="16"
            viewBox="0 0 26 16"
            fill="currentColor"
          >
            <g transform="translate(-27 -32)">
              <rect
                width="26"
                height="2"
                transform="translate(27 46)"
              ></rect>
              <rect
                width="26"
                height="2"
                transform="translate(27 39)"
              ></rect>
              <rect
                width="26"
                height="2"
                transform="translate(27 32)"
              ></rect>
            </g>
          </svg>
        </span>
      )}
    </button>
  );
};

export default HamburgerBtn;
