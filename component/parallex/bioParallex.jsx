import Image from 'next/image'
import React from 'react'

function SmediaParallex() {
    return (
        <div 
        className='flex flex-col items-center justify-evenly px-5 w-full h-screen relative overflow-hidden text-black xs:px-10 sm:px-15 md:px-30 lg:flex-row lg:px-10'>
            <div className="relative overflow-hidden h-[40%] w-[70%] xs:h-[50%] sm:h-[50%] md:h-[50%] lg:h-[70%] lg:mt-0">
                <img
                    className="imgParallex absolute w-full h-[120%] object-cover bottom-[0]"
                    src="/bioProject.webp" alt="" />
            </div>
            <div className='h-40 w-[100%] flex flex-col items-center justify-center lg:w-[60%]'>
                <h1  className='text-black text-2xl xs:text-4xl'><span className='text-3xl md:text-5xl font-sans font-bold'>3</span>.Personal Insta Page</h1>
                <div className='w-full flex items-center justify-around h-[80%] lg:px-20'>
                    <div data-lag="1">
                        <a target="_blank" href="https://github.com/codewithmrkay/post">
                            <img  className='w-15 sm:w-20 aspect-square object-center' src="/github.svg" alt="" />
                        </a>
                    </div>
                    <div data-lag="1.3">
                        <a target="_blank" href="https://post-vu47.vercel.app/">
                            <img  className='w-15 sm:w-20 aspect-square' src="/golive.svg" alt="" />
                        </a>
                        Go Live
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmediaParallex