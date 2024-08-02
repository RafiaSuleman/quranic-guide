import React from 'react'
import Image from "next/image";
const services = () => {
  return (
    <div>
      <section className="text-gray-700 body-font">
  <div className="container px-5 py-24 mx-auto ">
   
    <div className="flex flex-wrap -m-4 text-center">
      {/* p-4 */}
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-green-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg> */}
          <Image src="/tajweed1.png"height={90} width={400} alt='nazra pic'/>
          <h2 className="title-font font-medium text-3xl text-gray-900">Tajweed Quran</h2>
        </div>
      </div>
      
      <div className="p-5 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-green-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg> */}
          <Image src="/nazra.png"height={90} className="ml-[15px]" width={130} alt='nazra pic'/>
          <h2 className="title-font font-medium text-3xl text-gray-900">Nazra</h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-green-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg> */}
          <Image src="/hifz.png" height={7} width={130} className='ml-[25px]' alt='nazra pic'/>
          <h2 className="title-font font-medium text-3xl text-gray-900">Hifz</h2>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-green-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg> */}
          <Image src="/arbi.png"height={90} width={400} alt='nazra pic'/>
          <h2 className="title-font font-medium text-3xl text-gray-900">Arbic Language</h2>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default services
