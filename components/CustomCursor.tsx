"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorContainerRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  // Resize Handler
  useEffect(() => {
    const handleResize = () => {
      mousePositionRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detect Touch Device
  useEffect(() => {
    const detectTouchDevice = () => "ontouchstart" in window || navigator.maxTouchPoints > 0;

    setIsTouchDevice(detectTouchDevice());

    if (!detectTouchDevice()) {
      document.body.classList.add("custom-cursor--enabled");
    } else {
      document.body.classList.add("touchevents");
    }
  }, []);

  // Mouse Move Handler (throttled with gsap)
  useEffect(() => {
    if (!isTouchDevice) {
      const handleMouseMove = (e: MouseEvent) => {
        mousePositionRef.current = { x: e.clientX, y: e.clientY };
        gsap.to(cursorContainerRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2,
          ease: "power2.out",
        });
      };

      document.addEventListener("mousemove", handleMouseMove);
      return () => document.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isTouchDevice]);
  
  const customCursorManager = {
    resetSize: () =>
      gsap.to(cursorDotRef.current, { scale: 1, duration: 0.35, ease: "power2.inOut" }),
    linkCursor: () =>
      gsap.to(cursorDotRef.current, { scale: 1.6, duration: 0.35, ease: "power2.inOut" }),
    videoBtnCursor: () =>
      gsap.to(cursorDotRef.current, { scale: 13.8, duration: 0.35, ease: "power2.inOut" }),
    closeCursor: () =>
      gsap.to(cursorDotRef.current, { scale: 8.7, duration: 0.35, ease: "power2.inOut" }),
  };

   const applyClass = (className: string, animation?: () => void) => {
    cursorContainerRef.current?.classList.add(className);
    animation?.();
  };

  const removeClass = (className: string, animation?: () => void) => {
    cursorContainerRef.current?.classList.remove(className);
    animation?.();
  };

  // Hover Effects Setup
  useEffect(() => {
    if (!isTouchDevice && cursorContainerRef.current) {
      const hoverListeners = [
        {
          elements: "a, button, .bullet, .order-tracking, input, select, textarea, .slick-button-prev, .slick-button-next",
          over: () => applyClass("cursor--link", customCursorManager.linkCursor),
          leave: () => removeClass("cursor--link", customCursorManager.resetSize),
        },
        // Hover
        {
          elements: ".toggle-btn, .button-icon, .back-to-top",
          over: () => applyClass("cursor--hide"),
          leave: () => removeClass("cursor--hide"),
        },
        // Hide
        {
          elements: ".hero, .main-header, .counter-section",
          over: () => applyClass("cursor--change-color"),
          leave: () => removeClass("cursor--change-color"),
        },
        // change color
        {
          elements: ".section-video, a.m-play",
          over: () => applyClass("cursor--video-button", customCursorManager.videoBtnCursor),
          leave: () => removeClass("cursor--video-button", customCursorManager.resetSize),
        },
        // Video Cursor
        {
          elements: ".close-sidebar, .fancybox__viewport",
          over: () => applyClass("cursor--close-svg", customCursorManager.closeCursor),
          leave: () => removeClass("cursor--close-svg", customCursorManager.resetSize),
        },
        // Close Cursor
        {
          elements: ".header-tracking, .header-dropdown",
          over: () => applyClass("cursor--revert-color"),
          leave: () => removeClass("cursor--revert-color"),
        },
        // Revert Color
      ];
 
      hoverListeners.forEach(({ elements, over, leave }) => {
        document.querySelectorAll(elements).forEach((el) => {
          el.addEventListener("mouseover", over);
          el.addEventListener("mouseleave", leave);
        });
      });

      return () => {
        hoverListeners.forEach(({ elements, over, leave }) => {
          document.querySelectorAll(elements).forEach((el) => {
            el.removeEventListener("mouseover", over);
            el.removeEventListener("mouseleave", leave);
          });
        });
      };
    }
  }, [isTouchDevice, customCursorManager.resetSize, customCursorManager.linkCursor, customCursorManager.closeCursor, customCursorManager.videoBtnCursor]);

  if (isTouchDevice) return null; 

  return (
    <div id="custom-cursor" ref={cursorContainerRef}>
      <span className="cursor-dot" ref={cursorDotRef}></span>
      <span className="cursor-text-holder">
        <span className="cursor-discover-text">Discover </span>
      </span>
      <span className="cursor-svg-holder">
        <svg
          className="svg--video-button cursor-video-button-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="25"
          viewBox="0 0 20 25"
        >
          <g transform="translate(17 2) rotate(90)" fill="none">
            <path d="M10.5-3,23,17H-2Z" stroke="none" />
            <path
              d="M 10.5 0.7735996246337891 L 1.608499526977539 15 L 19.39150047302246 15 L 10.5 0.7735996246337891 M 10.5 -3 L 23 17 L -2 17 L 10.5 -3 Z"
              stroke="none"
              fill="currentColor"
            />
          </g>
        </svg>
        {/* Link SVG */}
        <svg
          className="svg--cursor-link cursor-link-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          viewBox="0 0 27 27"
        >
          <g transform="translate(-1036.335 -984.207)">
            <path
              d="M1053.774,997.658c-.053-.072-.108-.143-.166-.212a6.025,6.025,0,0,0-.439-.488,6.3,6.3,0,0,0-8.892,0l-6.1,6.1a6.287,6.287,0,0,0,8.892,8.891l2.133-2.133a1.066,1.066,0,0,0-1.507-1.507l-2.132,2.133a4.157,4.157,0,0,1-5.879-5.878l6.1-6.1a4.163,4.163,0,0,1,5.879,0,3.962,3.962,0,0,1,.289.321c.037.045.074.094.111.144a1.092,1.092,0,0,0,1.49.219A1.067,1.067,0,0,0,1053.774,997.658Z"
              fill="currentColor"
            />
            <path
              d="M1046.887,1002.834c.064.071.132.142.2.208a6.3,6.3,0,0,0,8.893,0l6.1-6.1a6.288,6.288,0,0,0-8.893-8.893l-2.151,2.152a1.066,1.066,0,0,0,1.507,1.507l2.151-2.152a4.157,4.157,0,0,1,5.879,5.879l-6.1,6.1a4.125,4.125,0,0,1-2.939,1.216h0a4.134,4.134,0,0,1-2.94-1.217l-.134-.139a1.065,1.065,0,1,0-1.57,1.439Z"
              fill="currentColor"
            />
          </g>
        </svg>
        {/* Close SVG */}
        <svg
          className="svg--close cursor-close-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="19.778"
          height="19.778"
          viewBox="0 0 19.778 19.778"
        >
          <g transform="translate(-30 -30)">
            <rect
              width="13"
              height="2"
              transform="translate(31.414 30) rotate(45)"
            />
            <rect
              width="13"
              height="2"
              transform="translate(48.364 49.778) rotate(-135)"
            />
            <rect
              width="13"
              height="2"
              transform="translate(30 48.364) rotate(-45)"
            />
            <rect
              width="13"
              height="2"
              transform="translate(49.778 31.414) rotate(135)"
            />
          </g>
        </svg>
      </span>
    </div>
  );
};

export default CustomCursor;
