"use client";
import {useEffect, useState} from "react";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 600) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = (duration = 500) => {
        const start = window.scrollY;
        const startTime = performance.now();

        const animateScroll = (currentTime) => {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); // Calculate the progress (0 to 1)

            // Apply easing (easeInOutQuad for smoother scrolling)
            const easeInOutQuad = (t) => {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            };

            const easeProgress = easeInOutQuad(progress);
            window.scrollTo(0, start - start * easeProgress); // Scroll to the calculated position

            if (progress < 1) {
                requestAnimationFrame(animateScroll); // Continue the animation
            }
        };

        requestAnimationFrame(animateScroll); // Start the animation
    };

    return (
        <div onClick={() => scrollToTop(1000)}
             className={`fixed ${visible ? 'back-to-top-on' : 'back-to-top-off'} w-[6rem] h-[6rem] right-[40px] bottom-[60px] overflow-hidden z-[1000]`}>
        <span
            className="h-full group relative w-full rounded-full flex items-center justify-center bg-main-color border border-main-color">
          <svg
              className="overflow-visible inline-block"
              xmlns="http://www.w3.org/2000/svg"
              width="24.042"
              height="26.433"
              viewBox="0 0 24.042 26.433"
          >
            <g transform="translate(-1740.938 -900.216)">
              <g className="translate-y-[.7rem] group-hover:translate-y-0 transition-transform duration-[.3s] ease-out">
                <rect
                    width="16"
                    height="2"
                    transform="translate(1754.373 901.63) rotate(135)"
                ></rect>
                <rect
                    className="w-[.2rem] group-hover:w-[2.4rem] transition-[width] duration-[.3s] ease-out"
                    width="24"
                    height="2"
                    transform="translate(1753.958 902.649) rotate(90)"
                ></rect>
                <rect
                    width="16"
                    height="2"
                    transform="translate(1752.958 900.216) rotate(45)"
                ></rect>
              </g>
            </g>
          </svg>
        </span>
        </div>
    );
};

export default BackToTop;