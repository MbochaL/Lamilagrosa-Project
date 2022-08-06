import { React, useContext } from "react";
import Image from "next/image";
import ProfileSideBar from "../components/ProfileSideBar";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { TbMapPin } from "react-icons/tb";
import { UsuarioContext } from "../contexts/UsuarioContext";

export default function Profile() {
  const { userGlobal, islogged } = useContext(UsuarioContext);

  return (
    <>
    <div className="bg-blue-500 h-full py-4">
          <h1 className="text-center font-bold text-2xl  text-white m-auto">
            Perfil de Usuario
          </h1>
        </div>
        <div className="border-2 border-sky-300 rounded-full w-full"></div>
    <div className="h-full absolute w-full ">
      <ProfileSideBar />
      <div className="antialiased max-w-6xl mx-auto my-32 px-8">
        <div className="block md:flex items-center ">
          <div className="w-full md:w-1/2 relative z-1 bg-white border border-sky-500 rounded shadow-xl shadow-gray-300 overflow-hidden">
            <div className="text-lg font-medium text-blue-500 uppercase p-8 text-center border-b border-gray-300 tracking-wide">
              <Image
                width="100"
                height="100"
                src="/img/profile.svg"
                alt="profile"
              />
            </div>
            <div className="block sm:flex md:block lg:flex items-center justify-center">
              <div className="mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center">
                <div className="inline-flex items-center">
                  <span className="text-3xl text-bold text-slate-600 font-medium">
                    Usuario: <span className="text-blue-600">{userGlobal?.user}</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 w-full ">
              <ul>
                <li className="flex mx-5 items-center  border-b border-sky-500 p-2">
                  <div className="bg-blue-200 rounded-full p-2 fill-current text-blue-700">
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <AiOutlineMail size="25px" />
                    </svg>
                  </div>
                  <span className="text-black text-md ml-3 font-semibold text-[13px]">
                    Email: {userGlobal?.email}
                  </span>
                </li>
                <li className="flex items-center mx-5 mt-5 mb-16 border-b border-sky-500 p-2">
                  <div className="bg-blue-200 rounded-full p-2 fill-current text-blue-700">
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <TbMapPin size="25px" />
                    </svg>
                  </div>
                  <span className="text-black text-md text-[13px] ml-3 font-semibold">
                    Direccion: {userGlobal?.direcciones?.[0].calle}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-10">
            <div className="bg-blue-800 text-white rounded-b md:rounded-b-none md:rounded-r shadow-xl overflow-hidden">
              <div className="text-2xl font-semibold p-8 px-6 text-center border-b border-blue-500 tracking-wide">
                Editar Perfil
              </div>
              <div className="text-center text-sm sm:text-md max-w-sm m-auto mt-4 text-gray-800 px-6 lg:px-0">
                <input
                  type="text"
                  placeholder="Usuario"
                  className="bg-white ring-2 ring-sky-600 font-semibold p-1 px-4 rounded-3xl my-4 max-w-[85%] text-lg  mx-5"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="bg-white ring-2 ring-sky-600 font-semibold p-1 px-4 rounded-3xl my-5 max-w-[85%] text-lg  mx-5"
                />
                <input
                  type="text"
                  placeholder="Dirección"
                  className="bg-white ring-2 ring-sky-600 font-semibold p-1 px-4 rounded-3xl my-5 max-w-[85%] text-lg  mx-5"
                />
                <input
                  type="text"
                  placeholder="Contraseña"
                  className="bg-white ring-2 ring-sky-600 font-semibold p-1 px-4 rounded-3xl my-5 max-w-[85%] text-lg  mx-5"
                />
                <input
                  type="text"
                  placeholder="Confirmar contraseña"
                  className="bg-white ring-2 ring-sky-600 font-semibold p-1 px-4 rounded-3xl my-5 max-w-[85%] text-lg  mx-5"
                />
                
              </div>
              <div className="mt-6 border border-blue-500 mx-8 lg:mx-16 flex flex-wrap"></div>
              <button className="w-full block items-center justify-center bg-blue-700 hover:bg-blue-600 py-6 text-xl font-bold text-white mt-4">
                <span className="font-semibold">Enviar</span>
                <span className="font-medium text-white ml-2">➔</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
