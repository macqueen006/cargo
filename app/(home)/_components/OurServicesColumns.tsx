import Link from "next/link";
import Image from "next/image";

const OurServicesColumns = () => {
    return (
      <section className="flex flex-wrap mx-auto relative">
        <div className="relative group">
          <div className="relative inline-block w-full h-full overflow-hidden">
            <Image
              className="group-hover:translate-x-[.5rem] scale-[1.03] transition-transform duration-[.4s] ease-[cubic-bezier(.6,.6,.29,.95)] block translate-x-0"
              src="08/cargo-home-banner-1.jpg"
              width={1280}
              height={774}
              alt="img"
              layout="responsive"
            />
          </div>
          <div className="absolute container-transition top-0 left-0 text-white w-full h-full flex flex-col items-center justify-center text-center p-[3rem]">
            <h6 className="text-[1.5rem] leading-[2.5rem] -tracking-[0.015rem] font-medium">
              Our Services
            </h6>
            <h2 className="font-bold text-[3.7rem] leading-[4.5rem] py-[0.2rem] -tracking-[0.037rem]">
              Latest analytics
            </h2>
          </div>
          <Link
            href="#"
            className="absolute top-0 left-0 w-full h-full z-10 block"
          />
        </div>
  
        <div className="relative group">
          <div className="relative inline-block w-full h-full overflow-hidden">
            <Image
              className="group-hover:translate-x-[.5rem] scale-[1.03] transition-transform duration-[.4s] ease-[cubic-bezier(.6,.6,.29,.95)] block translate-x-0"
              src="08/cargo-home-banner-2.jpg"
              width={1280}
              height={774}
              alt="img"
              layout="responsive"
            />
          </div>
          <div className="absolute container-transition top-0 left-0 text-white w-full h-full flex flex-col items-center justify-center text-center p-[3rem]">
            <h6 className="text-[1.5rem] leading-[2.5rem] -tracking-[0.015rem] font-medium">
              Our Services
            </h6>
            <h2 className="font-bold text-[3.7rem] leading-[4.5rem] py-[0.2rem] -tracking-[0.037rem]">
              Railway Cargo
            </h2>
          </div>
          <Link
            href="#"
            className="absolute top-0 left-0 w-full h-full z-10 block"
          />
        </div>
      </section>
    );
};
  
export default OurServicesColumns;