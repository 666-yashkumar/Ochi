import { motion } from "framer-motion";
import React from "react";

const Feature = () => {
  return (
    <div className="w-full py-20  ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-[20px]">
        <h1 className="text-5xl ">Suiiiiiiii </h1>
      </div>
      <div className="mt-5 mx-6">
        <div className="cards w-full flex gap-6">
          {/* <div className="cardcontainer  w-1/2 h-[75vh] relative   ">
            <h1 className="absolute text-6xl text-purple-500 left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              FYDE
            </h1>
            <div className="card w-full   h-full overflow-hidden rounded-xl">
              <img
                className="h-full w-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div> */}
          <div className="cardcontainer w-1/2 h-[75vh] relative group">
            <h1 className="absolute text-7xl text-purple-500 left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              FYDE
            </h1>
            <div className="card w-full h-full overflow-hidden rounded-xl">
              <img
                className="h-full w-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>

          <div className="cardcontainer  w-1/2 h-[75vh]  relative group ">
            <h1 className="absolute text-7xl text-violet-900 right-full  translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight opacity-0 translate-opacity duration-300 group-hover:opacity-100">
            
            DKSE 
               
            </h1>
            <div className="card w-full  bg-blue-400 h-full  overflow-hidden rounded-xl">
              <img
                className="h-full w-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
// -translate-x-1/2 top-1/2 -translate-y-1/2
