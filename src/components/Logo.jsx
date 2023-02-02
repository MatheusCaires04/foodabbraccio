import React from "react";

import logo from "/assets/abbraccio_logo.svg";

const Logo = () => {
  return (
    <div className="bg-white fixed top-0 md:top-14 left-0 sm:left-[50%] sm:translate-x-[-50%] md:translate-x-0 md:left-0 px-5 sm:px-10 md:pl-12 md:pr-10 py-1 sm:py-7 sm:hover:pt-12 md:hover:pt-7 md:hover:pl-16 group duration-300 z-[1000]">
      <a href="/" className="group-hover:opacity-50 duration-300">
        <img
          src={logo}
          alt=""
          className="w-[120px] h-[40px] sm:w-full sm:h-full"
        />
      </a>
    </div>
  );
};

export default Logo;
