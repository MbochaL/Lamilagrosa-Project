import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useState, useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { CarritoContext } from "../contexts/CarritoContext";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillInstagram,
  AiOutlineUser,
} from "react-icons/ai";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { userGlobal, islogged } = useContext(UsuarioContext);
  const { carrito } = useContext(CarritoContext);
  const [navUser, setNavUser] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const cerrarSesion = () => {
    localStorage.removeItem("LMG-user");
    Router.reload();
  };

  return (
    <div className="fixed w-full h-20 z-[900] top-0 shadow-lg bg-white">
      <div className="max-w-[95%] xs:max-w-[90%] lg:max-w-[85%] mx-auto flex justify-between items-center w-full h-full ">
        <Link href="/">
          <a className="pt-1">
            <div className="w-[90px] xs:w-[100px] md:w-[120px]">
              <Image
                width="256"
                height="170"
                src="/img/logo-web-LaMilaGrosa2.png"
                alt="logo milagrosa"
                className="cursor-pointer"
              />
            </div>
          </a>
        </Link>

        <div>
          <ul className="hidden md:flex cursor-pointer md:gap-x-1 md:text- lg:gap-x-6 lg:text-lg xl:gap-x-10 xl:text-xl 2xl:gap-x-16 font-semibold">
            <Link href="/">
              <li className="hover:ring-1 ring-blue-800 px-4 rounded-full  hover:text-blue-800 ease-in duration-200">
                Inicio
              </li>
            </Link>
            <Link href="/menu">
              <li className="hover:ring-1 ring-blue-800 px-4 rounded-full hover:text-blue-800 ease-in duration-200">
                Menu
              </li>
            </Link>
            <Link href="/nosotros">
              <li className="hover:ring-1 ring-blue-800 px-4 rounded-full hover:text-blue-800 ease-in duration-200">
                Nosotros
              </li>
            </Link>
            <Link href="/locales">
              <li className="hover:ring-1 ring-blue-800 px-4 rounded-full hover:text-blue-800 ease-in duration-200">
                Locales
              </li>
            </Link>
            <Link href="/contacto">
              <li className="hover:ring-1 ring-blue-800 px-4 rounded-full hover:text-blue-800 ease-in duration-200">
                Contacto
              </li>
            </Link>
          </ul>
        </div>

        {/* logica para poder mostrar el avatar o el nombre de usuario */}
        <div className="flex transition-transform ease-in duration-200 items-center xs:gap-x-1 md:gap-x-1 lg:gap-x-2">
          {islogged ? (
            <div className="flex relative">
              <div className="flex flex-col text-center">
                <p className="text-xs">Bienvenido</p>
                <p className="text-xs font-bold capitalize ">
                  {userGlobal.user}
                </p>
              </div>
              <div className="flex justify-center items-center">
                <AiOutlineUser
                  size="32"
                  className="text-gray-600 hover:text-blue-600 hover:scale-105 ease-in duration-200 cursor-pointer"
                  onClick={() => setNavUser(!navUser)}
                />
                <div>
                  {navUser ? (
                    <Image
                      width="25"
                      height="25"
                      alt="flecha derecha"
                      src="/img/arrowd.svg"
                      className="cursor-pointer"
                      onClick={() => setNavUser(!navUser)}
                    />
                  ) : (
                    <Image
                      width="25"
                      height="25"
                      src="/img/arrowl2.svg"
                      alt="flecha izquierda"
                      className="cursor-pointer"
                      onClick={() => setNavUser(!navUser)}
                    />
                  )}
                </div>
                <div
                  className={
                    navUser
                      ? "absolute top-4 left-0"
                      : "hidden ease-in duration-300"
                  }
                >
                  <ul className="mt-10 bg-white border-slate-500 border-t-0 absolute w-[150px] text-center rounded-b-lg border">
                    <Link href="perfil">
                      <li className="py-3 border-b border-slate-500 text-md font-semibold hover:text-white hover:bg-sky-500 cursor-pointer">
                        Perfil
                      </li>
                    </Link>
                    <Link href="historial">
                      <li className="py-3 border-b border-slate-500 text-md font-semibold hover:text-white hover:bg-blue-500 cursor-pointer ">
                        Historial
                      </li>
                    </Link>
                    <li className="py-3 hover:bg-red-700 text-md font-semibold hover:text-white rounded-b-md cursor-pointer">
                      <button onClick={cerrarSesion}>Cerrar Sesión</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="md:flex md:flex-col lg:flex-row  justify-center items-center gap-1 lg:gap-2 hidden ">
              <Link href="/login">
                <a className="md:text-sm p-1 tracking-widest hover:ring-1 ring-blue-800 px-4 rounded-full text-lg font-semibold hover:text-md hover:text-blue-800 ease-in duration-200">
                  Iniciá sesión
                </a>
              </Link>
              <Link href="/register">
                <button className="bg-blue-600 text-white p-2 md:py-2 md:px-3 md:text-xs cursor-pointer rounded-full  font-semibold tracking-widest hover:bg-white hover:text-blue-800 hover:ring-2 ring-blue-600 ease-in duration-200 lg:mr-5 ">
                  Registrate
                </button>
              </Link>
            </div>
          )}

          <Link href="/carrito">
            <div className="relative flex justify-between">
              <MdOutlineLocalGroceryStore
                size="30px"
                className="text-blue-600 relative hover:scale-110 ease-in duration-200"
              />
              <span className="text-xs font-semibold">{carrito?.length}</span>
            </div>
          </Link>
          <div
            onClick={handleNav}
            className="flex md:hidden cursor-pointer ml-3"
          >
            <AiOutlineMenu size="30" />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white px-8 pt-2 ease-in duration-300"
              : "fixed left-[-120%] top-0 px-8 pt-2 ease-in duration-500 border-b-2"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between pb-2 border-b border-gray-300">
              <Image
                src="/img/logo-web-LaMilaGrosa2.png"
                width="100"
                height="65"
                alt="logo milagrosa"
              />

              <div
                onClick={handleNav}
                className="rounded-full bg-blue-500 shadow-md shadow-gray-800 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>

          {islogged ? null : (
            <div className="w-full flex flex-col mt-5 justify-center items-center gap-3">
              <Link href="/login">
                <a className="text-black lg:text-xs font-semibold tracking-widest hover:text-blue-600">
                  Iniciar sesión
                </a>
              </Link>
              <Link href="/register">
                <button className="flex bg-blue-600 text-white py-1.5 px-4 lg:text-xs cursor-pointer rounded-lg font-semibold tracking-widest hover:bg-white hover:text-black border-1 border-blue-600 ease-in duration-200 lg:mr-5 ">
                  Registrate
                </button>
              </Link>
            </div>
          )}

          <div className="pl-4 mt-16 flex flex-col">
            <ul className="uppercase text-md">
              <Link href="/">
                <li className="mb-8 cursor-pointer">Inicio</li>
              </Link>
              <Link href="/menu">
                <li className="mb-8 cursor-pointer">Menu</li>
              </Link>
              <Link href="/nosotros">
                <li className="mb-8 cursor-pointer">Nosotros</li>
              </Link>
              <Link href="/locales">
                <li className="mb-8 cursor-pointer">Locales</li>
              </Link>
              <Link href="/contacto">
                <li className="mb-8 cursor-pointer">Contacto</li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="uppercase mb-2 tracking-widest text-blue-500 text-center font-semibold text-sm">
                Seguinos En Nuestras Redes
              </p>
              <div className="flex items-center justify-around mx-auto py-4">
                <div className="rounded-full bg-white hover:bg-blue-500 shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-105 ease-in duration-300">
                  <FaFacebook size="20px" />
                </div>
                <div className="rounded-full bg-white hover:bg-blue-500 shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-105 ease-in duration-300">
                  <AiFillInstagram size="20px" />
                </div>
                <div className="rounded-full bg-white hover:bg-blue-500 shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-105 ease-in duration-300">
                  <FaTwitter size="20px" />
                </div>
                <div className="rounded-full bg-white hover:bg-blue-500 shadow-md shadow-gray-800 p-3 cursor-pointer flex hover:scale-105 ease-in duration-300">
                  <FaYoutube size="20px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
