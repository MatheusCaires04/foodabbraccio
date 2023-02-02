import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-7 right-7 h-20 md:h-7 flex flex-col md:flex-row justify-between items-center py-2 md:py-0">
      <ul className="flex items-center gap-6 text-orange-600">
        <a href="#">
          <FaFacebookF className="text-base hover:scale-105 duration-200" />
        </a>
        <a href="#">
          <ImInstagram className="text-base hover:scale-105 duration-200" />
        </a>
        <a
          href="#"
          className="text-xs hover:scale-105 duration-200 font-medium"
        >
          Aviso de Privacidade
        </a>
        <a
          href="#"
          className="text-xs hover:scale-105 duration-200 font-medium"
        >
          Regulamento Promoção Estar Presente no Abbraccio
        </a>
      </ul>
      <div className="flex">
        <a
          href="#"
          className="text-xs text-orange-600 hover:scale-105 duration-200 font-medium"
        >
          Definições de cookies
        </a>
      </div>
    </footer>
  );
}

export default Footer;
