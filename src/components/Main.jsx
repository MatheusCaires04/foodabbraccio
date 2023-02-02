import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { RiEmotion2Line } from "react-icons/ri";
import Banners from "./Banners";

import ButtonsFloats from "./ButtonsFloats";
import Footer from "./Footer";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className="bg-green-500 w-full h-full relative">
      <Logo />
      <div className="fixed bottom-[8.5rem] md:bottom-24 right-[50%] translate-x-[50%] md:translate-x-0 md:right-0 md:top-32 z-10">
        <ButtonsFloats
          text="Participe da pesquisa de satisfação"
          icon={<RiEmotion2Line />}
          top="top-12"
        />
      </div>
      <div className="fixed bottom-20 md:bottom-10 right-[50%] translate-x-[50%] md:translate-x-0 md:right-0 md:top-64 z-10">
        <ButtonsFloats
          text="Receba nossa novidades"
          icon={<FaRegEnvelope />}
          top="top-56"
        />
      </div>
      <Navbar />
      <Banners />
      <Footer />
    </div>
  );
};

export default Main;
