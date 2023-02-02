import React, { useState } from "react";

import logo from "/assets/abbraccio_logo.svg";

const style = {
  linkMenu:
    "border border-black bg-green-900 text-white font-serif text-2xl py-2 hover:text-red-800 duration-300 text-center",
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();

    setMenu(!menu);

    const divNone = document.querySelector(".none");
    const divNone1 = document.querySelector(".close1");
    const divNone2 = document.querySelector(".close2");

    if (!menu) {
      divNone.classList.add("active");
      divNone1.classList.add("active");
      divNone2.classList.add("active");
    } else {
      divNone.classList.remove("active");
      divNone1.classList.remove("active");
      divNone2.classList.remove("active");
    }
  };

  return (
    <nav className="absolute top-[4.5rem] right-32 flex items-center gap-10 z-10">
      <ul className="hidden lg:flex gap-10 text-lg text-white font-semibold font-serif">
        <li>
          <a href="#" className="hover:opacity-60 duration-200">
            CARDÁPIOS
          </a>
        </li>
        <li>
          <a href="#" className="hover:opacity-60 duration-200">
            LOCALIZAÇÃO
          </a>
        </li>
        <li>
          <a href="#" className="hover:opacity-60 duration-200">
            DELIVERY
          </a>
        </li>
      </ul>
      <div
        className="w-8 sm:w-10 h-auto flex flex-col gap-1 fixed right-5 md:right-20 top-[0.875rem] md:top-[6.5rem] z-[1001] cursor-pointer menu"
        onClick={openMenu}
      >
        <span className="w-full h-1 bg-amber-900 md:bg-white close1"></span>
        <span className="w-full h-1 bg-black md:bg-white none"></span>
        <span className="w-full h-1 bg-amber-900 md:bg-white close2"></span>
      </div>
      <ul
        className={`${
          menu ? "translate-y-0" : "translate-y-[-100%]"
        } fixed top-0 left-0 right-0 flex flex-col justify-between h-screen bg-slate-100 z-[1000] pb-1 duration-500`}
      >
        <a
          href="#"
          className={`${style.linkMenu} flex items-center justify-center group`}
        >
          <img src={logo} alt="" className="w-[10rem] group-hover:opacity-70" />
        </a>
        <a href="#" className={style.linkMenu}>
          SOBRE ABBRACCIO
        </a>
        <a href="#" className={style.linkMenu}>
          CARDÁPIOS
        </a>
        <a href="#" className={style.linkMenu}>
          TABELA DE ALERGÊNICOS
        </a>
        <a href="#" className={style.linkMenu}>
          LOCALIZAÇÃO
        </a>
        <a href="#" className={style.linkMenu}>
          DELIVERY
        </a>
        <a href="#" className={style.linkMenu}>
          CARTÃO PRESENTE
        </a>
        <a href="#" className={style.linkMenu}>
          NOVIDADES
        </a>
        <a href="#" className={style.linkMenu}>
          FALE CONOSCO
        </a>
        <a href="#" className={style.linkMenu}>
          TRABALHE CONOSCO
        </a>
        <a href="#" className={style.linkMenu}>
          PESQUISA
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
