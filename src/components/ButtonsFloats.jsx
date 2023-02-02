import React from "react";
import { AiOutlineLeft } from "react-icons/ai";

const ButtonsFloats = (props) => {
  return (
    <button className="bg-red-500 flex items-center w-[20rem] sm:w-[30rem] md:w-32 h-12 md:h-28 hover:scale-105 md:hover:scale-100 md:hover:w-44 duration-300">
      <div className="bg-red-800 border-r-2 border-dotted border-red-500 w-5 h-full flex items-center justify-center text-red-500">
        <AiOutlineLeft size={12} />
      </div>
      <div className="flex md:flex-col gap-2 text-start items-center md:items-start px-2">
        <span className="text-black text-xl">{props.icon}</span>
        <span className="text-white text-xs md:text-sm font-serif uppercase">
          {props.text}
        </span>
      </div>
    </button>
  );
};

export default ButtonsFloats;
