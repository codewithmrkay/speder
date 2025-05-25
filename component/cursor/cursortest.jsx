import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

function Cursortest() {
    const circleRef = useRef(null);
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

    return (
        <div className='bg-black w-full h-full flex items-center justify-center' 
        
        onMouseEnter={()=>{gsap.to(circleRef.current,{opacity:1})}}
        onMouseLeave={()=>{gsap.to(circleRef.current,{opacity:0})}}
        >
            <div  ref={circleRef} className='pointer-events-none w-[20px] h-[20px] bg-white rounded-full top-0 left-0 mix-blend-difference fixed'>
            </div>
            <h1 id="text" className="text-4xl font-bold text-white cursor-default"
            onMouseEnter={() => {gsap.to(circleRef.current,{scale:8,duration:0.3})}}
            onMouseLeave={() => {gsap.to(circleRef.current,{scale:1,duration:0.3})}}
            >Hover Me</h1>
        </div>
    )
}

export default Cursortest