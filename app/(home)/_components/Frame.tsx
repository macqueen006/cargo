import Image from "next/image";
import Link from "next/link";
import {prefix} from "@/libs/util";

const Frame = () => {
    return (
      <section data-type="video" className="interactive relative block w-full">
        <div className="relative block w-full">
          <div className="w-full">
            <Image
              className="w-full h-auto"
              src={`${prefix}08/cargo-home-video-button.jpg`}
              alt=""
              width={1235}
              height={515}
            />
          </div>
          <Link
            className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center"
            href="#"
          />
        </div>
      </section>
    );
};
export default Frame;