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
      ScrollSmoother.create({
        smooth: 2, // The amount of time (in seconds) to "catch up" to native scroll.
        effects: true, // Enables data-speed and data-lag effects on elements.
        smoothTouch: 0.5, // Smoother scroll on mobile devices.
        wrapper: wrapperRef.current, // Outer container.
        content: wrapperRef.current.querySelector("#smooth-content"), // Inner content container.
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
