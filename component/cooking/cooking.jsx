import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitScreen = () => {
  // Refs for key elements.
  const containerRef = useRef(null);         
  const leftRef = useRef(null);              
  const rightRef = useRef(null);             
  const panelContainerRef = useRef(null);    

  useEffect(() => {
    // Entrance animation for left/right sides on component entry.
    const entranceTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", 
        end: "top 20%", 
        scrub:true, 
        markers:true
      },
    });

    entranceTl
      .from(leftRef.current, { x: "-100%", duration: 1, ease: "power3.out" })
      .from(rightRef.current, { x: "100%", duration: 1, ease: "power3.out" }, "<");

    // Calculate the total horizontal scroll distance.
    const panels = gsap.utils.toArray(".panel");
    const totalScroll = rightRef.current.offsetWidth * (panels.length - 1);

    // Horizontal panel tween.
    gsap.to(panelContainerRef.current, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top", 
        scrub: true,      
        pin: true,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + totalScroll,
        // markers: true, 
      },
    });

    
    // Gather all left text elements.
    const leftTexts = gsap.utils.toArray(".leftText");

    
    
    // is perfectly synchronized with the horizontal tween.
    const leftTextTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => "+=" + totalScroll,
        scrub: true,
      },
    });

    // In this example with 3 panels, we divide the timeline into two parts:
    // • From progress 0 to 50%: fade out the first text and fade in the second.
    // • From 50% to 100%: fade out the second text and fade in the third.
    //
    // The timings (in seconds) below are relative to the timeline’s total duration.
    // With scrub enabled, these values are mapped proportionally to your scroll.
    leftTextTl
      // Transition from first to second text.
      .to(leftTexts[0], { opacity:0, duration: 0.5, ease: "none" })
      .to(leftTexts[1], { opacity: 1, duration: 0.5, ease: "none" })
      // Transition from second to third text.
      .to(leftTexts[1], { opacity: 0, duration: 0.5, ease: "none" })
      .to(leftTexts[2], { opacity: 1, duration: 0.5, ease: "none" })
    //third to fourth
      .to(leftTexts[2], { opacity: 0, duration: 0.5, ease: "none" })
      .to(leftTexts[3], { opacity: 1, duration: 0.5, ease: "none" });

    // Refresh ScrollTrigger so that all markers and animations can compute correctly.
    ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={containerRef} className="cooking flex h-screen w-full flex-col md:flex-row">
      {/* Left Side: Pinned and layered text container */}
      <div
        ref={leftRef}
        className=" text-4xl relative w-full h-1/2 md:w-1/2 md:h-full md:text-6xl lg:text-8xl bg-black text-white flex items-center justify-center overflow-hidden"
      >
        {/* Each text element is absolutely positioned to cover the container.
            Initially, only the first text is visible (opacity-100) while the others are hidden (opacity-0). */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="leftText font-bold opacity-100">Currently</h1>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="leftText  font-bold opacity-0 text-center">Bachelor <br /> <br />Thesis</h1>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="leftText  font-bold opacity-0 text-center">Youtube <br /> <br />Content</h1>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="leftText font-bold opacity-0 text-center">Awesome <br /> <br />Webs</h1>
        </div>
      </div>

      {/* Right Side: Horizontal panels */}
      <div ref={rightRef} className="text-4xl w-full h-1/2 overflow-hidden relative md:w-1/2 md:h-full">
        <div ref={panelContainerRef} className="flex h-full">
          <div className="panel flex-shrink-0 w-full h-[100%] bg-white text-black flex items-center justify-center">
            <h2 className=" font-bold">Cooking</h2>
          </div>
          <div className="panel flex-shrink-0 w-full h-[100%] bg-blue-500 flex items-center justify-center">
            <h2 className=" font-bold">Panel 2</h2>
          </div>
          <div className="panel flex-shrink-0 w-full h-[100%] bg-green-500 flex items-center justify-center">
            <h2 className=" font-bold">Panel 3</h2>
          </div>
          <div className="panel flex-shrink-0 w-full h-[100%] bg-red-500 flex items-center justify-center">
            <h2 className=" font-bold">Panel 4</h2>
          </div>
          {/* Add more panels as needed */}
        </div>
      </div>
    </div>
  );
};

export default SplitScreen;
