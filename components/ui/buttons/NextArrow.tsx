function NextArrow(props: { onClick?: () => void }) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="arrow-right group cursor-pointer z-[6] opacity-100 top-full left-full bg-transparent absolute w-[6.6rem] h-[8rem] flex items-center text-dark-color transform: translate(-106px,-80px) -translate-x-[10.6rem] -translate-y-[8rem] lg:-translate-x-[19rem]"
      >
        <span className="text-[1.7rem] font-[700] leading-[2.2rem] -tracking-[0.017rem] text-dark-color before:content-['Next'] group-hover:-translate-x-[1rem] transition-transform duration-[.2s] ease-linear"></span>
        <svg
          className="ml-[1.0rem] flex-[1_0_auto] rotate-180 overflow-visible transition-[margin] duration-[.3s] ease-linear"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="16.971"
          viewBox="0 0 22 16.971"
        >
          <g transform="translate(-758.1 -1746.515)">
            <rect
              className="h-[.2rem] w-[2.2rem] rounded-full group-hover:w-[1.1rem] transition-[width] duration-[.2s] ease-linear"
              transform="translate(759.515 1753.586) rotate(45)"
            ></rect>
            <rect
              className="h-[2.2rem] w-[.2rem] rounded-full group-hover:h-[1.1rem] transition-[height] duration-[.2s] ease-linear"
              transform="translate(759.515 1756.414) rotate(-135)"
            ></rect>
            <rect
              className="h-0 w-[.2rem] rounded-full group-hover:h-[2.2rem] transition-[height] duration-[.2s] ease-linear"
              transform="translate(760.101 1756.1) rotate(-90)"
            ></rect>
          </g>
        </svg>
      </div>
    );
  }

export default NextArrow;