
import React from 'react'
import { motion } from 'framer-motion'


const Marqi = () => {
  return (
    <div className='w-full py-[5vw] bg-green-950 rounded-2xl'>
    <div className='text flex border-t-2 border-b-2 border-green-800 gap-9 overflow-hidden whitespace-nowrap'>
      {/* Motion Element 1 */}
      <motion.h1 
        initial={{ x: "0" }} 
        animate={{ x: "-100%" }} 
        transition={{ ease: "linear", repeat: Infinity, duration: 10 }} 
        className='text-[12vw] leading-none font-["LOSMENT_HUNTER"] pt-4 mb-[0.5vw]'>
        We are ochi
      </motion.h1>
      
      {/* Motion Element 2 */}
      <motion.h1 
        initial={{ x: "0" }} 
        animate={{ x: "-100%" }} 
        transition={{ ease: "linear", repeat: Infinity, duration: 10 }} 
        className='text-[12vw] leading-none font-["LOSMENT_HUNTER"] pt-4 mb-[0.5vw]'>
        We are ochi
      </motion.h1>
      {/* Motion Element 2 */}
      <motion.h1 
        initial={{ x: "0" }} 
        animate={{ x: "-100%" }} 
        transition={{ ease: "linear", repeat: Infinity, duration: 10 }} 
        className='text-[12vw] leading-none font-["LOSMENT_HUNTER"] pt-4 mb-[0.5vw]'>
        We are ochi
      </motion.h1>
    </div>
  </div>
);
};
//   

export default Marqi;
 