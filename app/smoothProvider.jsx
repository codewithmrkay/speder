"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother is a GSAP Club plugin. If you have access, import and register it.
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothScrollProvider = ({ children }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (wrapperRef.current) {
      // Creates a smoother scroll effect on the container.
      const smoother = ScrollSmoother.create({
        smooth: 2,  // Smooth scroll effect
        effects: true, // Enable effects like data-lag
        smoothTouch: 0.5, // Smoother mobile scrolling
        wrapper: wrapperRef.current, // Outer container
        content: wrapperRef.current.querySelector("#smooth-content"), // Inner content
      });
     
    }
  }, []);

  return (
    <div ref={wrapperRef} className="">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default SmoothScrollProvider;
