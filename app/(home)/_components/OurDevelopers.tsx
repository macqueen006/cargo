
import Link from "next/link";
import Image from "next/image";
import { prefix } from "@/libs/util";

const OurDevelopers = () => {
    return (
      <section className="pb-[16rem] lg:pb-[14.5rem] relative block">
        <div className="px-[4rem] xl:px-0 w-full max-w-[110rem] mx-auto">
          <h2 className="font-bold text-[3.7rem] lg:text-[4.5rem] leading-[4.5rem] -tracking-[0.037rem] mb-[5rem]">Meet the pros</h2>
          <div className="basis-full flex flex-col sm:flex-row flex-wrap lg:-mx-[2rem]">
            <div className="mb-[4rem] shrink-0 basis-full flex items-center group lg:px-[2rem] sm:basis-1/2 lg:basis-1/4">
              <div className="block">
                <Link href="#">
                  <Image
                    className="clip-img block group-hover:active max-w-full"
                    src={`${prefix}08/main-home-team-1-1.png`}
                    alt=""
                    width={140}
                    height={140}
                  />
                </Link>
              </div>
              <div className="ml-[1.9rem] text-[1.5rem] font-bold leading-[1.7rem] -tracking-[0.017rem] -translate-x-[1.6rem] group-hover:translate-x-0 transition-transform duration-[.6s] ease-[cubic-bezier(.57,.57,0,.97)]">
                <span className="font-medium text-[1.5rem] leading-[2.1rem] -tracking-[0.015rem] text-[#777]">
                  Developer
                </span>
                <h4 className="mb-[1rem] font-bold text-[2.2rem] leading-[2.5rem] -tracking-[0.022rem]">
                  <Link href="#">Godwin Sawyer</Link>
                </h4>
              </div>
            </div>
            {/* Developer */}
            <div className="mb-[4rem] shrink-0 basis-full flex items-center group lg:px-[2rem] sm:basis-1/2 lg:basis-1/4">
              <div className="block">
                <Link href="#">
                  <Image
                    className="clip-img group-hover:active max-w-full"
                    src={`${prefix}08/team-single-img1.png`}
                    alt=""
                    width={140}
                    height={140}
                  />
                </Link>
              </div>
              <div className="ml-[1.9rem] text-[1.5rem] font-bold leading-[1.7rem] -tracking-[0.017rem] -translate-x-[1.6rem] group-hover:translate-x-0 transition-transform duration-[.6s] ease-[cubic-bezier(.57,.57,0,.97)]">
                <span className="font-medium text-[1.5rem] leading-[2.1rem] -tracking-[0.015rem] text-[#777]">
                  Copy Writer
                </span>
                <h4 className="mb-[1rem] font-bold text-[2.2rem] leading-[2.5rem] -tracking-[0.022rem]">
                  <Link href="#">Nina West</Link>
                </h4>
              </div>
            </div>
            {/* Developer */}
            <div className="mb-[4rem] shrink-0 basis-full flex items-center group lg:px-[2rem] sm:basis-1/2 lg:basis-1/4">
              <div className="block">
                <Link href="#">
                  <Image
                    className="clip-img group-hover:active max-w-full"
                    src={`${prefix}08/main-home-team-3-1.png`}
                    alt=""
                    width={140}
                    height={140}
                  />
                </Link>
              </div>
              <div className="ml-[1.9rem] text-[1.5rem] font-bold leading-[1.7rem] -tracking-[0.017rem] -translate-x-[1.6rem] group-hover:translate-x-0 transition-transform duration-[.6s] ease-[cubic-bezier(.57,.57,0,.97)]">
                <span className="font-medium text-[1.5rem] leading-[2.1rem] -tracking-[0.015rem] text-[#777]">
                  Co Founder
                </span>
                <h4 className="mb-[1rem] font-bold text-[2.2rem] leading-[2.5rem] -tracking-[0.022rem]">
                  <Link href="#">Godwin Newt</Link>
                </h4>
              </div>
            </div>
            {/* Developer */}
            <div className="mb-[4rem] shrink-0 basis-full flex items-center group lg:px-[2rem] sm:basis-1/2 lg:basis-1/4">
              <div className="block">
                <Link href="#">
                  <Image
                    className="clip-img group-hover:active max-w-full"
                    src={`${prefix}08/main-home-team-4-1.png`}
                    alt=""
                    width={140}
                    height={140}
                  />
                </Link>
              </div>
              <div className="ml-[1.9rem] text-[1.5rem] font-bold leading-[1.7rem] -tracking-[0.017rem] -translate-x-[1.6rem] group-hover:translate-x-0 transition-transform duration-[.6s] ease-[cubic-bezier(.57,.57,0,.97)]">
                <span className="font-medium text-[1.5rem] leading-[2.1rem] -tracking-[0.015rem] text-[#777]">
                  Web Designer
                </span>
                <h4 className="mb-[1rem] font-bold text-[2.2rem] leading-[2.5rem] -tracking-[0.022rem]">
                  <Link href="#">Susie Marsh</Link>
                </h4>
              </div>
            </div>
            {/* Developer */}
          </div>
        </div>
      </section>
    );
  };
export default OurDevelopers;