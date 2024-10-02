
import Link from "next/link";
import Image from "next/image";

const OurDevelopers = () => {
    return (
      <section className="pb-[16rem] relative block">
        <div className="px-[4rem] w-full">
          <div className="w-full">
            <div className="mb-[4rem] w-full flex items-center group">
              <div className="block">
                <Link href="#">
                  <Image
                    className="clip-img group-hover:clip-img--active max-w-full"
                    src="08/main-home-team-1-1.png"
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
                <h4 className="mb-[1rem] font-bold text-[2.2rem] leading-[2.5rem] -tracking-[0.022rem] whitespace-nowrap">
                  <Link href="#">Godwin Sawyer</Link>
                </h4>
              </div>
            </div>
            {/* Developer */}
            <div className="mb-[4rem] w-full flex items-center group">
              <div className="block">
                <Link href="#">
                  <Image
                    className="clip-img group-hover:clip-img--active max-w-full"
                    src="08/team-single-img1.png"
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
                <h4 className="mb-[1rem] font-bold text-[2.2rem] leading-[2.5rem] -tracking-[0.022rem] whitespace-nowrap">
                  <Link href="#">Nina West</Link>
                </h4>
              </div>
            </div>
            {/* Developer */}
            <div className="mb-[4rem] w-full flex items-center group">
              <div className="block">
                <Link href="#">
                  <Image
                    className="clip-img group-hover:clip-img--active max-w-full"
                    src="08/main-home-team-3-1.png"
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
                <h4 className="mb-[1rem] font-bold text-[2.2rem] leading-[2.5rem] -tracking-[0.022rem] whitespace-nowrap">
                  <Link href="#">Godwin Newt</Link>
                </h4>
              </div>
            </div>
            {/* Developer */}
            <div className="mb-[4rem] w-full flex items-center group">
              <div className="block">
                <Link href="#">
                  <Image
                    className="clip-img group-hover:clip-img--active max-w-full"
                    src="08/main-home-team-4-1.png"
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
                <h4 className="mb-[1rem] font-bold text-[2.2rem] leading-[2.5rem] -tracking-[0.022rem] whitespace-nowrap">
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