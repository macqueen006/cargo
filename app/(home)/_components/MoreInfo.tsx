import Link from "next/link";
import Image from "next/image";

const MoreInfo = () => {
    return (
      <section className="pt-[16rem] pb-[14rem] relative block">
        <div className="px-[4rem] w-full flex flex-col-reverse">
          <div className="mt-[4rem] w-full">
            <h2 className="text-[3.2rem] leading-[4rem] -tracking-[0.037rem] font-bold mb-[2.9rem]">
              Globefarer offers global shipping
            </h2>
            <p className="mt-[1.6rem] mb-[3rem] pb-[3rem] text-[1.8rem] leading-[2.6rem] text-grey-text border-b border-grey-dark">
              Providing an independent advice and identifying the right fit for
              you. Services are sourced
            </p>
            <Link href="#" className="group flex items-center">
              <span className="w-[5.4rem] bg-main-color shrink-0 h-[5.4rem] rounded-full flex justify-center items-center">
                <svg
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
                about our services
              </span>
            </Link>
          </div>
          <div className="w-full">
            <Image
              width={800}
              height={408}
              layout="responsive"
              src="08/cargo-home-img-3.jpg"
              alt="img"
            />
          </div>
        </div>
      </section>
    );
  };
  
export default MoreInfo;