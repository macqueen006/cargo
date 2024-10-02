import Image from "next/image";
import Link from "next/link";

const Frame = () => {
    return (
      <section className="relative block">
        <div className="relative w-full">
          <div className="w-full">
            <Image
              className="max-w-full h-auto"
              src="/08/cargo-home-video-button.jpg"
              alt=""
              width={2560}
              height={1067}
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