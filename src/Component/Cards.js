import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-800 px-6 flex items-center gap-4 '>
        <div className='cardcontainer w-1/2 h-[45vh]'>
            <div className='card bg-[#004d4c] w-full h-full relative flex items-center justify-center  rounded-xl'>
                <img className='w-32 ' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt='' />
               <button className='absolute px-2 py-1 border-2  rounded-xl border-zinc-900 text-black font-bold left-5 bottom-5'>&copy;2009-2080 </button> 
                 </div>
        </div>
        <div className='cardcontainer w-1/2 h-[45vh] flex gap-4'>
            <div className='card bg-[#284448] w-1/2 h-full relative flex items-center justify-center rounded-xl'>
               <img className='w-32 ' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt='' />
               <button className='absolute px-2 py-1 border-2  rounded-xl border-zinc-900 text-black font-bold left-5 bottom-3'>&copy;What are you </button> 
            </div>
            <div className='card bg-[#284448] w-1/2 h-full relative flex items-center justify-center rounded-xl'>
               <img className='w-32 ' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt='' />
               <button className='absolute px-2 py-1 border-2  rounded-xl border-zinc-900 text-black font-bold left-5 bottom-3'>Hello Moto </button> 
             </div>
        </div>

    </div>
  )
}

export default Cards