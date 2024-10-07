import Image from "next/image";
import Link from "next/link";
import {prefix} from "@/libs/util";

const companyLogos = [
    {
        id: 1,
        img: `${prefix}08/client-1-hover.jpg`,
        logo: `${prefix}08/Client-1.png`
    },
    {
        id: 2,
        img: `${prefix}08/client-2-hover.jpg`,
        logo: `${prefix}08/Client-2.png`
    },
    {
        id: 3,
        img: `${prefix}08/client-3-hover.jpg`,
        logo: `${prefix}08/Client-3.png`,
    },
    {
        id: 4,
        img: `${prefix}08/client-4-hover.jpg`,
        logo: `${prefix}08/Client-4.png`,
    },
    {
        id: 5,
        img: `${prefix}08/client-5-hover.jpg`,
        logo: `${prefix}08/Client-5.png`,
    },
]

const CompanyLogos = () => {
    return (
        <section className="bg-[#12171b] relative inline-block">
            <div className="flex items-center w-full flex-wrap">
                {companyLogos.map((item, index) => (
                    <div key={index} className="sm:basis-1/3 lg:basis-1/5 flex items-center w-full flex-wrap border border-[#FFFFFF26] border-l-transparent">
                        <div
                            className="w-full group relative grid grid-cols-1 grid-rows-1 place-items-center ">
                            <span
                                className="hover-logo group-hover:remove relative col-start-1 col-end-1 row-start-1 row-end-1 z-[1]">
                              <Image
                                  className="block max-w-full"
                                  src={item.img}
                                  alt="img"
                                  width={600}
                                  height={438}
                              />
                            </span>
                            <span className="relative col-start-1 col-end-1 row-start-1 row-end-1 z-[2]">
                              <Image
                                  className="inline-block"
                                  src={item.logo}
                                  alt="img"
                                  width={166}
                                  height={58}
                              />
                            </span>
                            <Link
                                href="#"
                                className="w-full h-full absolute top-0 left-0 z-[1]"
                                target="_blank"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CompanyLogos;