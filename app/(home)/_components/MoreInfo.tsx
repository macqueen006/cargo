import Image from "next/image";
import ViewMoreButton from "@/components/ui/buttons/ViewMoreButton";
import React from "react";


interface MoreinfoProps {
    title: string;
    description: string;
    href: string;
    buttonText: string;
    imageSrc: string;
    imageAlt: string;
}

const MoreInfo: React.FC<{data: MoreinfoProps}> = ({data}) => {
    return (
      <section className="pt-[16rem] pb-[14rem] relative block">
        <div className="px-[4rem] xl:px-0 max-w-[110rem] mx-auto w-full flex flex-col-reverse lg:flex-row">
          <div className="mt-[4rem] lg:mt-0 lg:basis-[37%] w-full lg:pr-[4%] overflow-hidden">
            <h2 className="text-[3.2rem] lg:text-[4.5rem] leading-[4rem] lg:leading-[5.2rem] -tracking-[0.037rem] lg:-tracking-[0.045rem] font-bold mb-[2.9rem]">
                {data.title}
            </h2>
            <p className="m-text relative mt-[1.6rem] mb-[3rem] pb-[3rem] text-[1.8rem] leading-[2.6rem] text-grey-text">
                {data.description}
            </p>
              <ViewMoreButton href={data.href} text={data.buttonText} />
          </div>
          <div className="w-full lg:basis-[63%] lg:pl-[5.8%] lg:self-center border-l border-transparent lg:border-[#a6a6a6]">
            <Image
              width={800}
              height={408}
              src={data.imageSrc}
              alt={data.imageAlt}
            />
          </div>
        </div>
      </section>
    );
  };

export default MoreInfo;