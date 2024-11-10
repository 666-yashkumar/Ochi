import React from "react";
import naruto from './Img/naruto.png';

const Aboute = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tr-3xl rounded-tl-3xl text-black">
      <h1 className="text-[2vw]  font-semibold leading-[4vw] tracking-tight">
        Animation Duration: If you want the animation to move slower or faster,
        adjust the duration parameter increasing it will slow down the
        animation. Custom Fonts: If you are using a custom font, make sure it is
        properly loaded and available in your project.
      </h1>
      <div className="w-full flex border-t-[2px] mt-16 border-gray-600">
        <div className="w-1/2">
          <h1 className="text-[2vw] font-['HELLION']  mt-8">
            Our approuch here
          </h1>
          <button className="flex uppercase gap-2 items-center px-10 py-4 mt-5 rounded-full bg-black text-[2vh] text-white">
            Started
            <div className="w-2 h-2 bg-white rounded-full"> </div>
          </button>
        </div>
        <div className="w-1/2 h-[60vh] mt-10 rounded-3xl bg-[#171a0e] overflow-hidden object-cover hover:p-[2vh] ">
          <div>
            <img src={naruto} alt="" className="w-full h-full object-contain " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboute;
