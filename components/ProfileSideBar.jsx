import React, { useContext } from "react";
import Link from "next/link";
import Router from "next/router";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import { MdOutlineLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments, FaHistory } from "react-icons/fa";
import { CgBrowse } from "react-icons/cg";

function SideNavbar() {
  const { userGlobal, islogged } = useContext(UsuarioContext);

  const cerrarSesion = () => {
    localStorage.removeItem("LMG-user");
    Router.reload();
  };

  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-sky-800 hover:bg-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-sky-100 z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-red-400 pb-4 w-full">
              <Link href="/">
                <a className="cursor-pointer">
                  La<span className="font-bold text-red-600">Mila</span>Grosa
                </a>
              </Link>
            </h1>
            <div className=" my-4 border-b border-red-600 pb-4">
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-blue-400 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgProfile className="text-2xl text-sky-600 group-hover:text-white " />
                {islogged ? (
                  <Link href="/perfil">
                  <a className="text-base text-sky-800 group-hover:text-white font-semibold ">
                    Perfil
                  </a>
                </Link>
                ) : (
                    <Link href="NoneExist">
                    <a className="text-base text-sky-800 group-hover:text-white font-semibold ">
                      Perfil
                    </a>
                  </Link>
                )}
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-blue-400 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaRegComments className="text-2xl text-sky-600 group-hover:text-white " />
                {islogged ? (
                  <Link href="/testimonios">
                  <a className="text-base text-sky-800 group-hover:text-white font-semibold ">
                    Dejar reseña
                  </a>
                </Link>
                ) : (
                    <Link href="/login">
                    <a className="text-base text-sky-800 group-hover:text-white font-semibold ">
                      Dejar reseña
                    </a>
                  </Link>
                )}
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-blue-400 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaHistory className="text-2xl text-sky-600 group-hover:text-white " />
                {islogged ? (
                  <Link href="/historial">
                  <a className="text-base text-sky-800 group-hover:text-white font-semibold ">
                    Historial
                  </a>
                </Link>
                ) : (
                    <Link href="/login">
                    <a className="text-base text-sky-800 group-hover:text-white font-semibold ">
                      Historial
                    </a>
                  </Link>
                )}
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-blue-400 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgBrowse className="text-2xl text-sky-600 group-hover:text-white " />
                {islogged ? (
                  <Link href="menu">
                  <a className="text-base text-sky-800 group-hover:text-white font-semibold ">
                    Acceder Menu
                  </a>
                </Link>
                ) : (
                    <Link href="login">
                    <a className="text-base text-sky-800 group-hover:text-white font-semibold ">
                      Acceder Menu
                    </a>
                  </Link>
                )}
              </div>
            </div>
            {/* logout */}
            <div className=" my-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-blue-800  hover:bg-blue-400 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-sky-600 group-hover:text-white " />
                {islogged ? (
                  <button
                    onClick={cerrarSesion}
                    className="text-base text-sky-800 group-hover:text-white font-semibold "
                  >
                    Cerrar Sesion
                  </button>
                ) : (
                  <Link href="login">
                    <button className="text-base text-sky-800 group-hover:text-white font-semibold ">
                      Iniciar Sesion
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
