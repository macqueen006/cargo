
import Image from "next/image";
import {prefix} from "@/libs/util";

const PricingRange = () => {
    return (
      <section className="pb-[15.5rem] lg:pb-[11rem] bg-[#12171b] inline-block">
        <div className="mx-auto w-[calc(100%-80px)] xl:w-[110rem] relative flex lg:flex-row flex-wrap">
          <div className="w-full lg:basis-1/2 order-2 lg:order-1 lg:pt-[7.2rem] lg:pr-[7.2rem]">
            <div className="mb-[2rem]">
              <h2 className="pb-[1.8rem] text-white text-[3.7rem] lg:text-[4.4rem] leading-[4.5rem] lg:leading-[5.2rem] -tracking-[0.037rem] lg:-tracking-[0.045rem] font-bold">
                Our fleet covers your needs & pricing range
              </h2>
            </div>
            <div className="w-full">
              <ul>
                <li className="flex mb-[2.6rem] text-[#B7B7B7]">
                  <span>
                    <svg
                      className="text-main-color mr-[1.5rem] mt-[.9rem]"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.971"
                      height="12.728"
                      viewBox="0 0 16.971 12.728"
                    >
                      <g transform="translate(-766.793 -1747.429)">
                        <rect
                          width="16"
                          height="2"
                          transform="translate(771.035 1758.743) rotate(-45)"
                        ></rect>
                        <rect
                          width="2"
                          height="8"
                          transform="translate(773.864 1758.743) rotate(135)"
                        ></rect>
                      </g>
                    </svg>
                  </span>
                  <p className="text-[1.8rem] leading-[2.6rem] inline-block">
                    <span className="flex items-start">
                      Providing an independent advice and identifying the right
                      fit for you, sourced and procured based on sol.
                    </span>
                  </p>
                </li>
                <li className="flex text-[#B7B7B7]">
                  <span>
                    <svg
                      className="text-main-color mr-[1.5rem] mt-[.9rem]"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.971"
                      height="12.728"
                      viewBox="0 0 16.971 12.728"
                    >
                      <g transform="translate(-766.793 -1747.429)">
                        <rect
                          width="16"
                          height="2"
                          transform="translate(771.035 1758.743) rotate(-45)"
                        ></rect>
                        <rect
                          width="2"
                          height="8"
                          transform="translate(773.864 1758.743) rotate(135)"
                        ></rect>
                      </g>
                    </svg>
                  </span>
                  <p className="text-[1.8rem] leading-[2.6rem] inline-block">
                    <span className="flex items-start">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur lobortis lobortis iaculis. Nullam elit risus.
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:basis-1/2 mb-[7rem] lg:mb-0 overflow-hidden order-1 lg:order-2 lg:px-[1rem]">
            <Image
              src={`${prefix}10/cargo-home-img-2-new.png`}
              alt=""
              width={655}
              height={690}
            />
          </div>
        </div>
      </section>
    );
};
  
export default PricingRange;