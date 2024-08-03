import React from "react";
import Image from "next/image";
const services = () => {
  return (
    <div className="lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 grid gap-5 ">
      <div className="border border-2 border-green-700  rounded-lg px-4 py-4 transform transition duration-500 hover:scale-110">
      <Image
                className="mt-[40px]"
                  src="/tajweed1.png"
                  height={90}
                  width={900}
                  alt="nazra pic"
                />
      <h1 className="text-xl mt-[30px] font-bold flex justify-center align-center">Tajweed</h1>
      </div>
      <div className="border border-2 border-green-700 rounded-lg px-4 py-4 transform transition duration-500 hover:scale-110">
      <Image
                  src="/nazra.png"
                  height={90}
                  width={400}
                  alt="nazra pic"
                />
      <h1 className="text-xl font-bold flex justify-center align-center">Nazra</h1>
      </div>
      <div className="border border-2 border-green-700 rounded-lg px-4 py-4 transform transition duration-500 hover:scale-110">
      <Image
                  src="/hifz.png"
                  height={90}
                  width={400}
                  alt="nazra pic"
                />
      <h1 className="text-xl font-bold flex justify-center align-center">Memorization</h1>
      </div>
      <div className="border border-2 border-green-700 rounded-lg px-4 py-4 transform transition duration-500 hover:scale-110">
      <Image
      className="mt-5"
                  src="/arbi.png"
                  height={90}
                  width={400}
                  alt="nazra pic"
                />
      <h1 className="text-xl font-bold flex justify-center text-center mt-4">Arabic Language</h1>
      </div>
      <div className="border border-2 border-green-700 rounded-lg px-4 py-4 transform transition duration-500 hover:scale-110">
      <Image
                  src="/tafseer.png"
                  height={90}
                  width={400}
                  alt="nazra pic"
                />
      <h1 className="text-xl font-bold flex justify-center align-center">Tafseer</h1>
      </div>
    </div>
   
  );
};

export default services;
