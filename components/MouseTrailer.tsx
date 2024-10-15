"use client";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const MouseTrailer = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [cursorTypeStack, setCursorTypeStack] = useState<string[]>(["default"]);
  const [isTouchDevice, setIsTouchDevice] = useState(false); // State to track if the device is touch-enabled
  const currentCursorType = cursorTypeStack[cursorTypeStack.length - 1];

  useEffect(() => {
    // Detect if the device is touch-enabled
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };

    checkTouchDevice();

    // Optionally add an event listener to handle changes dynamically
    window.addEventListener("resize", checkTouchDevice);

    return () => {
      window.removeEventListener("resize", checkTouchDevice);
    };
  }, []);

  useGSAP(() => {
    if (isTouchDevice) return; // Skip mouse events for touch devices

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("interactive")) {
        const newType = target.dataset.type || "default";
        setCursorTypeStack((prev) => [...prev, newType]);
        gsap.to(cursorRef.current, { scale: 1.5, duration: 0.3 });
      }
    };

    const onMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("interactive")) {
        setCursorTypeStack((prev) => prev.slice(0, -1));
        gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter, true);
    document.addEventListener("mouseleave", onMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter, true);
      document.removeEventListener("mouseleave", onMouseLeave, true);
    };
  }, [isTouchDevice]);

  const renderCursorContent = () => {
    switch (currentCursorType) {
      case "close":
        return (
          <div className="flex justify-center items-center w-[5rem] h-[5rem] rounded-full bg-main-color text-dark-color font-bold">
            <svg
              className="block"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
        );
      case "video":
        return (
          <div className="flex justify-center items-center w-[5rem] h-[5rem] rounded-full bg-main-color text-dark-color">
            <svg
              className="w-[1.2rem] h-[1.2rem] block"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        );
      default:
        return (
          <div
            className={`relative block w-[1.2rem] h-[1.2rem] rounded-full bg-main-color z-[1]`}
          ></div>
        );
    }
  };

  if (isTouchDevice) return null; 

  return (
    <div ref={cursorRef} id="trailer" className={`cursor-${currentCursorType}`}>
      {renderCursorContent()}
    </div>
  );
};

export default MouseTrailer;
