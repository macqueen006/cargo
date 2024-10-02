import Link from "next/link";
import Image from "next/image";
import { prefix } from "@/libs/util";

const OurSolutions = () => {
  return (
    <section className="mt-[13.4rem] mb-[16rem] block mx-[4rem] lg:flex max-w-[110rem] lg:mx-auto">
      <div className="pb-[4.7rem] lg:basis-[34%] relative overflow-hidden">
        <Image
          src={`${prefix}08/cargo-home-img-1.png`}
          width={440}
          height={350}
          className="object-cover"
          alt="fork lift"
        />
      </div>
      {/* first column */}
      <div className="lg:basis-[40.5%]">
        <div className="mb-[2rem] lg:pb-[4.5rem] pb-[3.6rem]">
          <h2 className="text-[3.7rem] leading-[4.5rem] font-bold -tracking-[0.037rem] lg:text-[4.5rem] lg:leading-[5.2rem] lg:-tracking-[0.045rem]">
            We’ll keep your items damage free
          </h2>
        </div>
        <div className="relative inline-block w-full mb-[8rem] lg:mb-0">
          <h3 className="text-[3.2rem] leading-[4rem] -tracking-[0.037rem] font-bold">
            Warehouse storage
          </h3>
          <p className="mt-[1.6rem] mb-[3rem] pb-[3rem] text-[1.8rem] leading-[2.6rem] text-grey-text border-b border-grey-dark">
            At consul facilis philosophia usu, mei feugait sapientem no. Porro
            scribentur vis ad, te his meliore electram, ex usu tation tritani
            scribentur. Gubergren appellantur.
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
      </div>
      {/* second column */}
      <div className="lg:basis-[25.5%] flex items-end content-end lg:pl-[2.4667rem]">
        <div className="p-[6rem] bg-light-grey inline-block lg:-mb-[2.5rem]">
          <h4 className="mb-[1.9rem] font-bold text-[2.2rem] leading-[2.6rem] -tracking-[0.022rem] text-dark-color">
            Our Solutions
          </h4>
          <ul className="text-grey-text">
            <li className="mb-[1.1rem]">
              <Link href="#">
                <span className="bg-transition text-[1.8rem] leading-[2.6rem]">
                  Elaboraret Quodsi
                </span>
              </Link>
            </li>
            <li className="mb-[1.1rem]">
              <Link href="#">
                <span className="bg-transition text-[1.8rem] leading-[2.6rem]">
                  Feugait Sapientem
                </span>
              </Link>
            </li>
            <li className="mb-[1.1rem]">
              <Link href="#">
                <span className="bg-transition text-[1.8rem] leading-[2.6rem]">
                  Ipssum Nusquam
                </span>
              </Link>
            </li>
            <li className="mb-[1.1rem]">
              <Link href="#">
                <span className="bg-transition text-[1.8rem] leading-[2.6rem]">
                  Ubique Nominat
                </span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="bg-transition text-[1.8rem] leading-[2.6rem]">
                  Convenire Volupta
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* third column */}
    </section>
  );
};

export default OurSolutions;
