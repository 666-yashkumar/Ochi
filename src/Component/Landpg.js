import { motion } from "framer-motion";
import React from "react";
import { FaCarrot } from "react-icons/fa6";

const Landpg = () => {
   
  return (
    <div  className="w-full h-screen bg-zinc-900 pt-1 pb-8 ">
      <div className="textstruc mt-32 px-16">
        {["WE CREATE", "EYE OPENING", "BEST WORK"].map((item, index) => {
          return (
            <div className="masker overflow-hidden ">
              <div className="flex w-fit overflow-hidden items-end">
                {index === 1 && (
                  <motion.div initial = {{width : "0"}} animate = {{width : "8.95vw"}} transition={{ease :[0.76,0,0.24,1 ], duration : 1}} className="w-[7vw] h-[4.7vw] relative top-[-0.3vh] bg-green-300 rounded-xl"> </motion.div>)}
                  <h1 className="uppercase text-[6.5vw] leading-[5.9vw] tracking-tighter font-semibold ">
                    {item} 
                  </h1>
              </div>
              
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px]  border-zinc-700 mt-[7vw] flex justify-between items-center px-10 py-5 ">
        {["hell'o sir how are you", "what are you doing"].map((item, index) => (
          <p className="text-md leading-none tracking-tight font-light ">
            {item}
          </p>
        ))}


        <div className=" flex ">
          <h1 className="px-5 py-1 capitalize border-2 border-zinc-400 rounded-full text-sl hover:bg-slate-200 hover:text-black cursor-pointer">start the project</h1>
          
          <div className="w-10 h-10   border-zinc-400 rounded-full border-2 flex items-center justify-center   ">
           <span className="">
             <FaCarrot /> 

             
           </span>
        </div>
        </div>

         
      </div>
    </div>
  );
};
 

export default Landpg;


