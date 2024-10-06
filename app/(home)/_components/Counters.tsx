const Counters = () => {
    return (
      <section className="py-[16rem] bg-main-color block relative">
        <div className="px-[4rem] xl:px-0 w-full flex flex-wrap relative max-w-[1100px] mx-auto">
          <div className="w-full flex content-start pb-[7rem] lg:pb-0 sm:basis-1/2 lg:basis-1/4">
            <div className="pl-[4rem] border-l border-dark-color">
              <h6 className="mb-[1rem] text-[1.5rem] leading-[2.1rem] -tracking-[0.015rem] font-medium">
                Delivered Packages
              </h6>
              <span className="font-bold text-[6.5rem] leading-[7.2rem] -tracking-[0.062rem]">
                7255
              </span>
            </div>
          </div>
          {/* counter */}
          <div className="w-full flex content-start pb-[7rem] lg:pb-0 sm:basis-1/2 lg:basis-1/4">
            <div className="pl-[4rem] border-l border-dark-color">
              <h6 className="mb-[1rem] capitalize text-[1.5rem] leading-[2.1rem] -tracking-[0.015rem] font-medium">
                KM Per Month
              </h6>
              <span className="font-bold text-[6.5rem] leading-[7.2rem] -tracking-[0.062rem]">
                5348
              </span>
            </div>
          </div>
          {/* counter */}
          <div className="w-full flex content-start pb-[7rem] lg:pb-0 sm:basis-1/2 lg:basis-1/4">
            <div className="pl-[4rem] border-l border-dark-color">
              <h6 className="mb-[1rem] text-[1.5rem] leading-[2.1rem] -tracking-[0.015rem] font-medium">
                Tons of goods
              </h6>
              <span className="font-bold text-[6.5rem] leading-[7.2rem] -tracking-[0.062rem]">
                8500
              </span>
            </div>
          </div>
          {/* counter */}
          <div className="w-full flex content-start pb-[7rem] lg:pb-0 sm:basis-1/2 lg:basis-1/4">
            <div className="pl-[4rem] border-l border-dark-color">
              <h6 className="mb-[1rem] text-[1.5rem] leading-[2.1rem] -tracking-[0.015rem] font-medium">
                Satisfied clients
              </h6>
              <span className="font-bold text-[6.5rem] leading-[7.2rem] -tracking-[0.062rem]">
                3125
              </span>
            </div>
          </div>
          {/* counter */}
        </div>
      </section>
    );
};
  
export default Counters;