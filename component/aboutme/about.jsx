"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const AboutMe = () => {
  const imgRef = useRef(null);
  const rootRef = useRef(null);
  useEffect(() => {
    // const mm = gsap.matchMedia();
    // mm.add(
    //   {
    //     isDesktop: "(min-width: 1024px)",
    //     isTablet: "(min-width: 768px) and (max-width: 1023px)",
    //     isMobile: "(max-width: 767px)",
    //   },
    //   (context) => {
    //     let { isDesktop, isTablet, isMobile } = context.conditions;
    //     const scaleValue = isDesktop ? 15 : isTablet ? 10 : 10;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "center center",
            end: "bottom top",
            pin: imgRef.current, // Pin only the image.
            pinSpacing: false, // Disable pin spacing to avoid extra space.
            scrub: 1,
            // markers: true,
             // Uncomment for debugging.
          },
        });
        // First tween scales the image based on the responsive value.
        tl.from(imgRef.current, { scale: 10, duration: 1 })
          // Second tween fades out the image.
          .from(imgRef.current, { opacity: 1, duration: 0.1 });

        // Optional: return a cleanup callback for when the context changes.
        // return () => tl.kill();
    //   }
    // );

    // Cleanup the matchMedia instance on component unmount.
    // return () => mm.revert();
  }, []);
    return (
      <div
        ref={rootRef}
        className="mywork  
        text-6xl md:text-9xl
        w-full h-screen flex flex-col lg:flex-row justify-center gap-5 items-center  font-bold text-black">
        <div className="flex items-center justify-center">
          <h1 data-lag="0.5">M</h1>
          <h1 data-lag="1">Y</h1>
        </div>
        <div className="flex items-center justify-center">
          <h1 data-lag="1.1">
            W
          </h1>
          <span>
            <img
              ref={imgRef}
              className="relative z-10 aspect-square w-25 md:w-40" src="/mywork.svg" alt="" />
          </span>
          <h1 data-lag="1.2">R</h1>
          <h1 data-lag="1.5">K</h1>
        </div>
      </div>
    );
  };

  export default AboutMe;
