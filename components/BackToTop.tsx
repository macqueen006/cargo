
const BackToTop = () => {
    return (
      <div className="fixed w-[6rem] h-[6rem] right-[40px] bottom-[60px] overflow-hidden z-[1000]">
        <span className="h-full group relative w-full rounded-full flex items-center justify-center bg-main-color border border-main-color">
          <svg
            className="overflow-visible inline-block"
            xmlns="http://www.w3.org/2000/svg"
            width="24.042"
            height="26.433"
            viewBox="0 0 24.042 26.433"
          >
            <g transform="translate(-1740.938 -900.216)">
              <g className="translate-y-[.7rem] group-hover:translate-y-0 transition-transform duration-[.3s] ease-out">
                <rect
                  width="16"
                  height="2"
                  transform="translate(1754.373 901.63) rotate(135)"
                ></rect>
                <rect
                  className="w-[.2rem] group-hover:w-[2.4rem] transition-[width] duration-[.3s] ease-out"
                  width="24"
                  height="2"
                  transform="translate(1753.958 902.649) rotate(90)"
                ></rect>
                <rect
                  width="16"
                  height="2"
                  transform="translate(1752.958 900.216) rotate(45)"
                ></rect>
              </g>
            </g>
          </svg>
        </span>
      </div>
    );
};

export default BackToTop;