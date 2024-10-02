import Image from "next/image";
import Link from "next/link";

const SidebarDrawer = () => {
    return (
      <div className="side-area active">
        <Link href=""></Link>
        <div className="">
          <div className="mb-[3.5rem]">
            <figure>
              <Link href="#" className="inline-block">
                <Image
                  src="/08/Logo-sida-area.svg"
                  alt=""
                  width={178}
                  height={44}
                />
              </Link>
            </figure>
          </div>
          <div className="mb-[3.5rem]">
            <p className="-mt-[1rem] mb-[1rem] text-[1.8rem] leading-[2.6rem] text-[#979797]">
              Everything your logistics business needs is already here!
              GlobeFarer, a theme made for transport service companies.
            </p>
          </div>
          <div className="mb-[3.5rem]">
            <h4 className="text-[#979797] my-[1.3rem] text-[1.4rem] leading-[2.6rem]">
              Support center 24/7
            </h4>
            <p className="my-[1rem] text-white text-[3.2rem] leading-[2.6rem] -tracking-[0.032rem] font-bold">
              + 234 148 062 19
            </p>
          </div>
          <div className="mb-[3.5rem] flex justify-between items-start">
            <div className="">
              <span className="text-[1.4rem] leading-[2.6rem] -mt-[2rem] -mb-[.5rem] text-[#979797]">
                You can find us at
              </span>
              <Link
                href="#"
                className="my-[1rem] block text-[1.7rem] leading-[2.2rem] -tracking-[0.017rem] text-white font-bold"
              >
                94 Roa Malaka,
                <br />
                West Jakarta City
              </Link>
            </div>
            <div className="">
              <span className="text-[1.4rem] leading-[2.6rem] -mt-[2rem] -mb-[.5rem] text-[#979797]">
                Get in touch with us
              </span>
              <Link
                href="#"
                className="my-[1rem] block text-[1.7rem] leading-[2.2rem] -tracking-[0.017rem] text-white font-bold"
              >
                Godwinsawyer@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};
  
export default SidebarDrawer;