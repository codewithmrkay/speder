"use client";
import React, { useState } from 'react'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);
function Hero() {
    const containerRef = useRef(null);
    const spiderRef = useRef(null);
    const popupRef = useRef(null);
    const happyRef = useRef(null);
    const [atMaxBound, setAtMaxBound] = useState(false);
    useEffect(() => {
        if (containerRef.current && spiderRef.current) {
            Draggable.create(spiderRef.current, {
                type: "x",
                bounds: containerRef.current,
                cursor: "grab",
                activeCursor: "grabbing",
                onDrag: function () {
                    if (Math.abs(this.x - this.maxX) < 1) {
                        setAtMaxBound(true);
                    } else {
                        setAtMaxBound(false);
                    }
                },
                onDragEnd: function () {
                    if (Math.abs(this.x - this.maxX) >= 1) {
                        gsap.to(this.target, { x: 0, duration: 0.5, ease: "power2.out" });
                    }
                },
            });
        }
    }, []);
    useEffect(() => {
        if (atMaxBound && popupRef.current) {
            gsap.fromTo(
                popupRef.current,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(3)", }
            );
        }
    }, [atMaxBound]);
    useEffect(() => {
        if (atMaxBound && happyRef.current) {
            gsap.fromTo(
                happyRef.current,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)", }
            );
        }
    }, [atMaxBound]);
    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //       if (!atMaxBound) {
    //         document.body.style.overflow = "hidden";
    //       } else {
    //         document.body.style.overflow = "auto";
    //       }
    //     }
    //     return () => {
    //       if (typeof window !== "undefined") {
    //         document.body.style.overflow = "auto"; 
    //       }
    //     };
    //   }, [atMaxBound]);
    return (
        <div className="relative mx-auto px-4 h-screen w-full">
            {atMaxBound ? (
                <div ref={popupRef} className="px-2 sm:px-4 md:px-6 w-full absolute left-1/2 transform -translate-x-1/2 top-[25vh] md:top-[20vh] lg:top-[10vh] h-auto">
                    <h1 className=" text-black text-6xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-center text-nowrap ">Now</h1>
                    <div className='flex justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5'>
                        <h1 className=" text-black text-6xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-center text-nowrap ">Scroll</h1>
                        <img className='relative bottom-1 inline-block h-20 lg:h-30' src="/scroll.webp" alt="" />
                    </div>
                </div>
            ) : (
                <div className="px-2 sm:px-4 md:px-6 w-full absolute left-1/2 transform -translate-x-1/2 top-[25vh] md:top-[20vh] lg:top-[10vh] h-auto">
                    <h1 className=" text-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-center text-nowrap ">
                        Drag the Spider <br />& Unleash Happy  <br />Vibes!
                    </h1>
                </div>
            )
            }


            <div className="h-50 px-2 sm:px-4 md:px-6  w-full max-w-[800px]  absolute left-1/2 transform -translate-x-1/2 bottom-[15vh] md:bottom-[10vh] flex justify-between items-center">
                <div ref={containerRef} className=" w-full">
                    <img ref={spiderRef} className="w-[100px] aspect-square sm:w-[120px] md:w-[180px]" src="/spiderlogo.webp" alt="Spider Logo" />
                </div>
                <div >
                    {atMaxBound ? (
                        <img ref={happyRef} className="relative right-1 w-[100px] aspect-square sm:w-[120px] md:w-[180px]" src="/smiley.webp" alt="Happy Smiley" />
                    ) : (
                        <img className="relative right-1 w-[100px] aspect-square sm:w-[120px] md:w-[180px]" src="/upset.webp" alt="Happy Smiley" />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Hero