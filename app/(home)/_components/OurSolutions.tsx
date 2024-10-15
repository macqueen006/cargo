import Link from "next/link";
import Image from "next/image";
import { prefix } from "@/libs/util";
import ViewMoreButton from "@/components/ui/buttons/ViewMoreButton";

interface SolutionProps {
    imageSrc: string;
    imageAlt: string;
    heading: string;
    subheading: string;
    description: string;
    linkHref: string;
    linkText: string;
    solutionsTitle: string;
    solutions: { name: string; link: string }[];
}

const data:SolutionProps = {
  imageSrc: `${prefix}08/cargo-home-img-1.png`,
  imageAlt: "Fork Lift",
  heading: "We’ll keep your items damage free",
  subheading: "Warehouse storage",
  description: "At consul facilis philosophia usu, mei feugait sapientem no. Porro scribentur vis ad, te his meliore electram, ex usu tation tritani scribentur. Gubergren appellantur.",
  linkHref: "/services",
  linkText: "about our services",
  solutionsTitle: "Our Solutions",
  solutions: [
    { name: "Elaboraret Quodsi", link: "#" },
    { name: "Feugait Sapientem", link: "#" },
    { name: "Ipssum Nusquam", link: "#" },
    { name: "Ubique Nominat", link: "#" },
    { name: "Convenire Volupta", link: "#" },
  ],
};

const OurSolutions = () => {
  return (
    <section className="mt-[13.4rem] mb-[16rem] block px-[4rem] xl:px-0 lg:flex max-w-[110rem] mx-auto">
    <div className="pb-[4.7rem] lg:basis-[34%] relative overflow-hidden">
      <Image
        src={data.imageSrc}
        width={440}
        height={350}
        className="object-cover"
        alt={data.imageAlt}
      />
    </div>
    <div className="lg:basis-[40.5%]">
      <div className="mb-[2rem] lg:pb-[4.5rem] pb-[3.6rem]">
        <h2 className="text-[3.7rem] leading-[4.5rem] font-bold lg:text-[4.5rem] lg:leading-[5.2rem]">
          {data.heading}
        </h2>
      </div>
      <div className="relative inline-block w-full mb-[8rem] lg:mb-0">
        <h3 className="text-[3.2rem] leading-[4rem] font-bold">
          {data.subheading}
        </h3>
        <p className="mt-[1.6rem] mb-[3rem] pb-[3rem] text-[1.8rem] leading-[2.6rem] text-grey-text border-b border-grey-dark">
          {data.description}
          </p>
          <ViewMoreButton href={data.linkHref} text={data.linkText} />
      </div>
    </div>
    <div className="lg:basis-[25.5%] flex items-end content-end lg:pl-[2.4667rem]">
      <div className="p-[6rem] bg-light-grey inline-block lg:-mb-[2.5rem]">
        <h4 className="mb-[1.9rem] font-bold text-[2.2rem] leading-[2.6rem] text-dark-color">
          {data.solutionsTitle}
        </h4>
        <ul className="text-grey-text">
          {data.solutions.map((solution, index) => (
            <li key={index} className="mb-[1.1rem]">
              <Link href={solution.link}>
                <span className="bg-transition text-[1.8rem] leading-[2.6rem] lg:text-nowrap">
                  {solution.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
  );
};

export default OurSolutions;
