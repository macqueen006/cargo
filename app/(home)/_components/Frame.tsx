import Image from "next/image";
import {prefix} from "@/libs/util";
import VideoPopup from "@/components/VideoPopup";

const Frame = () => {
    return (
      <section className="section-video relative block w-full">
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
         <VideoPopup />
        </div>
      </section>
    );
};
export default Frame;