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
    const circleRef = useRef(null);
    const [atMaxBound, setAtMaxBound] = useState(false);
    useEffect(() => {
        const oye = (e) => {
            const { clientX, clientY } = e;
            gsap.to(circleRef.current, {
                x: clientX - 20 / 2,
                y: clientY - 20 / 2,
                delay: 0,
                ease: "power4.out",
            })
        }
        window.addEventListener("mousemove", oye)
        return () => {
            window.removeEventListener("mousemove", oye)
        }
    }, [])
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
            <div ref={circleRef} className='z-10 pointer-events-none w-[20px] h-[20px] bg-white rounded-full top-0 left-0 mix-blend-difference fixed'>
            </div>
            {atMaxBound ? (
                <div ref={popupRef} className="px-2 sm:px-4 md:px-6 w-full absolute left-1/2 transform -translate-x-1/2 top-[25vh] md:top-[20vh] lg:top-[10vh] h-auto">
                    <h1
                        onMouseEnter={() => { gsap.to(circleRef.current, { scale: 8, duration: 0.3 }) }}
                        onMouseLeave={() => { gsap.to(circleRef.current, { scale: 1, duration: 0.3 }) }}
                        className="cursor-default text-black text-6xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-center text-nowrap ">Now</h1>
                    <div className='flex justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 p-10'>
                        <h1
                            onMouseEnter={() => { gsap.to(circleRef.current, { scale: 8, duration: 0.3 }) }}
                            onMouseLeave={() => { gsap.to(circleRef.current, { scale: 1, duration: 0.3 }) }}
                            className="cursor-default text-black text-6xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-center text-nowrap ">Scroll</h1>
                        <img className='relative bottom-1 inline-block h-20 lg:h-30' src="/scroll.webp" alt="" />
                    </div>
                </div>
            ) : (
                <div className="px-2 sm:px-4 md:px-6 w-full absolute left-1/2 transform -translate-x-1/2 top-[25vh] md:top-[20vh] lg:top-[10vh] h-auto">
                    <h1
                        onMouseEnter={() => { gsap.to(circleRef.current, { scale: 8, duration: 0.3 }) }}
                        onMouseLeave={() => { gsap.to(circleRef.current, { scale: 1, duration: 0.3 }) }}
                        onTouchStart={() => { gsap.to(circleRef.current, { scale: 8, duration: 0.3 }); }}
                        onTouchEnd={() => { gsap.to(circleRef.current, { scale: 1, duration: 0.3 }); }}
                        className="cursor-default text-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-center text-nowrap ">
                        Drag the Spider <br />& Unleash Happy <br />Vibes!
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