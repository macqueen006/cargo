"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor: React.FC = () => {
  const cursorContainerRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState<boolean>(false);

  useEffect(() => {
    const detectTouchDevice = () => {
      const touchSupported = 'ontouchstart' in window;
      setIsTouch(touchSupported);
      document.body.classList.toggle('touchevents', touchSupported);
      document.body.classList.toggle('custom-cursor--enabled', !touchSupported);
    };

    const updateCursorPosition = (e: MouseEvent) => {
      if (cursorContainerRef.current) {
        gsap.to(cursorContainerRef.current, {
          duration: 0.1,
          x: e.clientX,
          y: e.clientY,
        });
      }
    };

    const handleCursorInteractions = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorContainer = cursorContainerRef.current;
      const cursorDot = cursorDotRef.current;

      if (!cursorContainer || !cursorDot) return;

      const interactionMap = [
        {
          selector: 'a, button, .bullet, .order-tracking, input, select, textarea, .slick-button-prev, .slick-button-next',
          addClass: 'cursor--link',
          scale: 1.6,
        },
        // Hover
        {
          selector: '.toggle-btn, button, .back-to-top, .button-icon, .fancybox__content',
          addClass: 'cursor--hide',
        },
        // Hide
        {
          selector: '.hero, .main-header, .counter-section',
          addClass: 'cursor--change-color',
        },
        // Change Color
        {
          selector: '.header-tracking, .header-dropdown',
          addClass: 'cursor--revert-color',
        },
        // Revert Color
        {
          selector: '.section-video, a.m-play',
          addClass: 'cursor--video-button',
          scale: 13.8,
        },
        // Video
        {
          selector: '.section-title',
          addClass: 'cursor--text',
          scale: 11.9,
        },
        // Title
        {
          selector: '.link',
          addClass: 'cursor--link-svg',
          scale: 11.9,
        },
        // anchorTag Link
        {
          selector: '.close-sidebar, .fancybox__track',
          addClass: 'cursor--close-svg',
          scale: 8.1,
        },
        // Close
      ];

      // Remove all classes and reset scale
      cursorContainer.className = '';
      gsap.to(cursorDot, {
        duration: 0.35,
        scale: 1,
        ease: "power2.inOut",
      });

      // Check for matches and apply the first matching interaction
      for (const interaction of interactionMap) {
        if (target.matches(interaction.selector) || target.closest(interaction.selector)) {
          cursorContainer.classList.add(interaction.addClass);
          if (interaction.scale) {
            gsap.to(cursorDot, {
              duration: 0.35,
              scale: interaction.scale,
              ease: "power2.inOut",
            });
          }
        }
      }
    };

    detectTouchDevice();
    if (!isTouch) {
      document.addEventListener('mousemove', updateCursorPosition);
      document.addEventListener('mouseover', handleCursorInteractions);
    }

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', handleCursorInteractions);
    };
  }, [isTouch]);

  if (isTouch) return null;

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
              <path d="M10.5-3,23,17H-2Z" stroke="none"></path>
              <path
                d="M 10.5 0.7735996246337891 L 1.608499526977539 15 L 19.39150047302246 15 L 10.5 0.7735996246337891 M 10.5 -3 L 23 17 L -2 17 L 10.5 -3 Z"
                stroke="none"
                fill="currentColor"
              ></path>
            </g>
          </svg>

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
                transform="translate(0 -2.586)"
                fill="currentColor"
              ></path>
              <path
                d="M1046.887,1002.834c.064.071.132.142.2.208a6.3,6.3,0,0,0,8.893,0l6.1-6.1a6.288,6.288,0,0,0-8.893-8.893l-2.151,2.152a1.066,1.066,0,0,0,1.507,1.507l2.151-2.152a4.157,4.157,0,0,1,5.879,5.879l-6.1,6.1a4.125,4.125,0,0,1-2.939,1.216h0a4.134,4.134,0,0,1-2.94-1.217l-.134-.139a1.065,1.065,0,1,0-1.57,1.439Z"
                transform="translate(-0.585 -2)"
                fill="currentColor"
              ></path>
            </g>
          </svg>

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
              ></rect>
              <rect
                width="13"
                height="2"
                transform="translate(48.364 49.778) rotate(-135)"
              ></rect>
              <rect
                width="13"
                height="2"
                transform="translate(30 48.364) rotate(-45)"
              ></rect>
              <rect
                width="13"
                height="2"
                transform="translate(49.778 31.414) rotate(135)"
              ></rect>
            </g>
          </svg>
        </span>
      </div>
  );
};

export default CustomCursor;
