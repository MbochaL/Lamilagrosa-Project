import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-blue-600">
        <div className="max-w-[85%] mx-auto min-h-[210px] py-5 flex flex-col items-center md:flex-row md:justify-center md:gap-x-12 md:items-center md:min-h-[250px] relative">
          <div className="w-auto h-auto flex items-center gap-4 ">
            <Link href="/">
              <a className="cursor-pointer w-[70px] h-[66px] md:w-[110px] md:h-[110px]">
                <Image
                  layout="responsive"
                  width="538"
                  height="548"
                  src="/img/logo-LaMilaGrosa-circular.png"
                  alt="logo milagrosa"
                />
              </a>
            </Link>
            <h2 className="text-xl text-white font-bold tracking-widest md:text-2xl">
              Descargá nuestra app
            </h2>
          </div>

          <p className="text-sm text-white p-3 md:absolute md:top-[160px] md:text-base md:p-5">
            Descargá nuestra app y accedé a beneficios exclusivos!
          </p>
          <div className="flex flex-col items-center gap-y-4 mt-4">
            <button className="text-sm font-semibold py-3 px-6 bg-white rounded-md shadow-sm shadow-gray-900">
              Descargar ahora
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white pt-3">
        <div className="w-full pt-5">
          <div className="flex justify-center gap-x-4 md:gap-x-8 lg:gap-x-12 xl:gap-x-16">
            <div className="bg-white rounded-full shadow-md shadow-gray-800 p-2 cursor-pointer flex ease-in duration-100 hover:bg-blue-500">
              <FaFacebook size="20px" />
            </div>
            <div className="bg-white rounded-full shadow-md shadow-gray-800 p-2 cursor-pointer flex ease-in duration-100 hover:bg-blue-500">
              <AiFillInstagram size="20px" />
            </div>
            <div className="bg-white rounded-full shadow-md shadow-gray-800 p-2 cursor-pointer flex ease-in duration-100 hover:bg-blue-500">
              <FaTwitter size="20px" />
            </div>
            <div className="bg-white rounded-full shadow-md shadow-gray-800 p-2 cursor-pointer flex ease-in duration-100 hover:bg-blue-500">
              <FaYoutube size="20px" />
            </div>
          </div>

          <div className="flex justify-around py-5">
            <Link href="/">
              <a className="cursor-pointer">
                <Image
                  layout="fixed"
                  width="105"
                  height="33"
                  src="/img/Disponible-en-AppStore.png"
                  alt="logo appstore"
                />
              </a>
            </Link>
            <Link href="/">
              <a className="cursor-pointer">
                <Image
                  layout="fixed"
                  width="105"
                  height="33"
                  src="/img/Disponible-en-GooglePlay.png"
                  alt="logo google play"
                />
              </a>
            </Link>
          </div>
        </div>

        <div className="mx-auto flex text-xs text-gray-600 mt-4 gap-x-10 justify-center ">
          <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:gap-x-10 lg:text-sm">
            <Link href="/">
              <p className="cursor-pointer hover:font-semibold">
                Politica de Privacidad
              </p>
            </Link>
            <Link href="/">
              <p className="cursor-pointer hover:font-semibold">
                Proteccion de datos Personales
              </p>
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:gap-x-10 lg:text-sm">
            <Link href="/">
              <p className="cursor-pointer hover:font-semibold">
                Defensa del Consumidor
              </p>
            </Link>
            <Link href="/">
              <p className="cursor-pointer hover:font-semibold">Contacto</p>
            </Link>
          </div>
        </div>
        <div className="">
          <p className="text-xs pt-5 mb-10 text-center">
            Copyright &copy; 2022 La Mila Grosa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
