function PrevArrow(props: { onClick?: () => void }) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        data-type="color"
        className="interactive scale arrow-left z-[6] group opacity-100 top-full left-0  bg-transparent absolute h-[8rem] w-[6.6rem] flex items-center text-dark-color translate-x-[4rem] -translate-y-[8rem] lg:translate-x-[12.5rem] lg:-translate-y-[8rem]"
      >
        <svg
          className="mr-[1.0rem] flex-[1_0_auto] overflow-visible transition-[margin] duration-[.3s] ease-linear"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="16.971"
          viewBox="0 0 22 16.971"
        >
          <g transform="translate(-758.1 -1746.515)">
            <rect
              className="h-[.2rem] w-[2.2rem] group-hover:w-[1.1rem] rounded-full transition-[width] duration-[.2s] ease-linear"
              transform="translate(759.515 1753.586) rotate(45)"
            ></rect>
            <rect
              className="h-[2.2rem] w-[.2rem] rounded-full group-hover:h-[1.1rem] transition-[height] duration-[.2s] ease-linear"
              transform="translate(759.515 1756.414) rotate(-135)"
            ></rect>
            <rect
              className="h-0 group-hover:h-[2.2rem] transition-[height] duration-[.2s] ease-linear w-[.2rem] rounded-full"
              transform="translate(760.101 1756.1) rotate(-90)"
            ></rect>
          </g> 
        </svg>
        <span className="text-[1.7rem] font-[700] leading-[2.2rem] -tracking-[0.017rem] text-dark-color before:content-['Prev'] group-hover:translate-x-[1rem] transition-transform duration-[.2s] ease-linear"></span>
      </div>
    );
}
  
export default PrevArrow;