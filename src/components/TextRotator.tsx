'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function TextRotator() {
  return (
   
    <div
    className="py-4  rounded-md flex flex-col justify-left items-left flex-start overflow-hidden"
  >
    <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
    I am a Certified Qari & Offering 
      <span className='flex justify-left items-left flex-start font-bold text-green-700'>
      <TypeAnimation
                        sequence={[
                          "Nazra",
                          1500,
                          "Tajweed",
                          1000,
                          "Hifz",
                          1000,
                          "Arabic Language",
                          1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                      />
     </span>
    </div>
  </div>
  )
}

export default TextRotator