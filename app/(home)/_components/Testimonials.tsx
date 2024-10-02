import Image from "next/image";

const Testimonials = () => {
    return (
      <section className="block relative p-[4rem]">
        <div className="absolute top-0 left-0 overflow-hidden z-0 bg-black w-[calc(100%+1px)] h-[calc(100%+1px)]">
          <video
            muted
            loop
            autoPlay
            className="max-w-full block object-cover h-full w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
            src="https://globefarer.qodeinteractive.com/wp-content/uploads/2021/09/flag-x.mp4"
          ></video>
        </div>
        <div className="relative z-10 min-h-[83rem] lg:min-h-[71rem] flex items-center justify-center flex-wrap lg:flex-nowrap">
          <div>
            <div className="w-[7rem] h-[6.79667] mb-[4rem] text-[#FFFFFF59]">
              <svg
                className=""
                stroke="currentColor"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="75.172"
                height="62.462"
                viewBox="0 0 75.172 62.462"
              >
                <g transform="translate(-762.938 -1079.129)">
                  <g transform="translate(763.438 1079.634)">
                    <g>
                      <path
                        d="M808.7,1141.091H837.61v-27.657H824.424a1.159,1.159,0,0,1-1.149-1.17v-2.83c0-10.565,3.98-16.034,11.832-16.261v-13.538c-10.007.106-17.7,3.274-22.865,9.421-5.278,6.275-7.954,14.69-7.954,25.01A89.185,89.185,0,0,0,808.7,1141.091Zm-40.631,0h28.921v-27.657H783.574a1.159,1.159,0,0,1-1.15-1.17v-2.83c0-10.57,4.056-16.039,12.06-16.262v-13.537c-10.01.105-17.739,3.275-22.984,9.424-5.351,6.277-8.063,14.691-8.063,25.008A84.046,84.046,0,0,0,768.065,1141.091Z"
                        transform="translate(-763.438 -1079.634)"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="">
              <h2 className="text-white mb-[5.4rem] text-[3.7rem] leading-[4.5rem] -tracking-[0.037rem] font-bold">
                Eos no dico graeci sea, debet nihil omnium quodsi quot dolores
                percipit.
              </h2>
              <div className="flex items-center">
                <div className="mr-[3.1rem] w-[7.8rem] h-[7.8rem]">
                  <Image
                    className="rounded-full"
                    src="08/main-home-testimonial-150x150.png"
                    alt=""
                    width={150}
                    height={150}
                  />
                </div>
                <div className="">
                  <h6 className="text-[#777777] font-medium text-[1.5rem] leading-[2.1rem] -tracking-[0.015rem]">
                    Satisfied Client
                  </h6>
                  <h3 className="text-white font-bold text-[2.6rem] leading-[3.3rem] -tracking-[0.026rem]">
                    Godwin Sawyer
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* <span className=""></span> */}
        </div>
      </section>
    );
};
  
export default Testimonials;