import React, { useContext } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";
import { UsuarioContext } from "../contexts/UsuarioContext";
import LocalImage from "../public/img/Local1.png";
import LocalImage2 from "../public/img/Local2.jpg";
import LocalImage3 from "../public/img//Local3.jpg";
import LocalImage4 from "../public/img//Local4.jpg";
import LogoImage from "../public/img/login-and-register.png";
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

export default function infoCards() {
  const { userGlobal, islogged } = useContext(UsuarioContext);

  return (
    <Layout>
      <div className="min-h-screen min-w-screen overflow-auto">
        <div className="m-auto text-center mt-28">
          <div className="my-12">
            <h1 className="font-bold text-3xl text-red-800 py-4">
              Información General sobre nuestros 4 Locales
            </h1>
            <h2 className="font-bold text-2xl text-black">
              Toda la información de los locales de La
              <span className="text-red-500">Mila</span>
              Grosa, con sus horarios y direcciones!
            </h2>
          </div>
        </div>
        <div className="bg-gray-100 xs:w-full m-auto my-10 text-center overflow-hidden">
          <div className="border-2 border-orange-300 w-full text-start"></div>
          <h1 className=" font-bold m-auto text-center text-3xl text-red-900 my-4">
            Informacion de nuestro Local en Bahía Blanca{" "}
          </h1>
          <div className="border-2 border-orange-300 xs:w-full text-start"></div>
        </div>
        <div className="m-auto shadow-xl shadow-gray-500 xs:min-w-screen xs:overflow-clip lg:w-3/5 xs:my-12 xs:flex xs:h-auto xs:flex-col">
          <Image
            src={LocalImage}
            alt="Picture of the author"
            height={480}
            width={480}
          />
          <div className="bg-white p-8 rounded-bl-md rounded-br-md xs:rounded-bl-none xs:rounded-br-none">
            <h2 className="text-sky-800 font-bold">
              Informacion general del Local
            </h2>
            <p className="text-sm text-gray-600 mt-4">
              <span className="text-gray-700 font-bold ">
                Opciones de servicio:
              </span>{" "}
              Consumo en el lugar · Para llevar · Entrega sin contacto
            </p>
            <p className="text-sm text-gray-600 mt-4 flex">
              <span className="text-gray-700 font-bold pr-2">Dirección:</span>{" "}
              Dorrego 27, B8000FLB Bahía Blanca, Provincia de Buenos Aires
              <a
                href="https://www.google.com/search?q=oliva+bahia+blanca&tbm=lcl&sxsrf=ALiCzsZ4e4P7z-lrtLotbUcD9jZlmQ2pXw%3A1657952055404&ei=N1fSYs2fGLmb1sQPq7WtmAY&oq=olivia+bahua&gs_l=psy-ab.3.0.0i13i10k1j0i30i8i13k1l2j0i30i15i8i13i10k1.47519.52019.0.52961.16.14.2.0.0.0.187.1487.9j5.14.0....0...1c.1.64.psy-ab..0.16.1490...35i39k1j0i67k1j0i433i67k1j0i512i433k1j0i512k1j0i512i263i20k1j0i512i10k1j0i10k1j0i203k1j0i30i22k1j0i30i22i10k1.0.15zMhP8IgeA#rlfi=hd:;si:2941287101010715358;mv:[[-38.714393322680976,-62.26114344009053],[-38.71475327731904,-62.26160475990946]]"
                target="_blank"
              >
                <FaMapMarkedAlt className="ml-2 text-sm text-red-700" />
              </a>
            </p>
            <p className="text-sm text-gray-600 mt-4">
              <span className="text-gray-700 font-bold ">
                Horarios de Atención:
              </span>
            </p>
            <div className="flex mt-2 xs:flex xs:h-auto sm:ml-20 xs:flex-col xs:min-w-screen overflow-auto">
              <div className="flex flex-row">
                <p className="text-sm text-gray-800 ml-2 font-bold">
                  Lunes: CERRADO
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Martes:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Miercoles:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Jueves:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-slate-800">Viernes:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Sabado:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Domingo:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
              </div>
            </div>
            <div className="flex items-center mt-8">
              <div className="flex items-center">
                <Image
                  src={LogoImage}
                  alt="Picture of the author"
                  width={100}
                  height={75}
                />
                <div className="ml-4 flex xs:flex-col">
                  <p className="text-blue-800 text-sm font-bold">
                    La<span className="text-red-800">Mila</span>Grosa siempre
                    para servirle
                  </p>
                  <div className="flex mt-1">
                    <p className="text-gray-600 text-sm font-semibold">
                      Telefono:{" "}
                      <span className="text-sky-400 hover:border-b-2 hover:border-sky-400 ml-1">
                        +54-9-291-4654080
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-8 xs:ml-auto mt-auto flex justify-end">
                <span className="flex items-center justify-center text-blue-900 font-bold">
                  Bahía Blanca - Buenos Aires
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 w-full m-auto my-10 text-center overflow-hidden">
          <div className="border-2 border-orange-300 rounded-full w-full text-start"></div>
          <h1 className=" font-bold m-auto text-center text-3xl text-red-900 my-4">
            Informacion del nuestros Locales en Corrientes Capital{" "}
          </h1>
          <div className="border-2 border-orange-300 rounded-full w-full text-start"></div>
        </div>
        <div className="m-auto shadow-xl shadow-gray-500 xs:my-20  xs:py-auto lg:w-3/5 xs:flex xs:h-auto xs:flex-col">
          <Image
            src={LocalImage2}
            alt="Picture of the author"
            height={480}
            width={480}
          />
          <div className="bg-white p-8 rounded-bl-md rounded-br-md xs:rounded-bl-none xs:rounded-br-none">
            <h2 className="text-sky-800 font-bold">
              Informacion general del Local
            </h2>
            <p className="text-sm text-gray-600 mt-4">
              <span className="text-gray-700 font-bold ">
                Opciones de servicio:
              </span>{" "}
              Consumo en el lugar · Para llevar · Entrega sin contacto
            </p>
            <p className="text-sm text-gray-600 mt-4 flex">
              <span className="text-gray-700 font-bold pr-2">Dirección:</span>{" "}
              Carlos Pellegrini 1252, W3400BAW, Carlos Pellegrini, W3400BAW
              Corrientes
              <a
                href="https://www.google.com/maps/place/Carlos+Pellegrini+1239,+W3400BAU+Corrientes/@-27.4655888,-58.8368812,17z/data=!4m12!1m6!3m5!1s0x94456ca435a86d4b:0xb5eee1704ac6160e!2sMaruja+Resto+%26+Bar!8m2!3d-27.465584!4d-58.834692!3m4!1s0x94456ca42a17f699:0x25bb7a681f9988c!8m2!3d-27.4651173!4d-58.8347331?hl=es"
                target="_blank"
              >
                <FaMapMarkedAlt className="ml-2 text-sm text-red-700" />
              </a>
            </p>
            <p className="text-sm text-gray-600 mt-4">
              <span className="text-gray-700 font-bold ">
                Horarios de Atención:
              </span>
            </p>
            <div className="flex mt-2 xs:flex xs:h-auto sm:ml-20 xs:flex-col xs:min-w-screen overflow-auto">
              <div className="flex flex-row">
                <p className="text-sm text-gray-800 ml-2 font-bold">
                  Lunes: CERRADO
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Martes:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Miercoles:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Jueves:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-slate-800">Viernes:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Sabado:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Domingo:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
              </div>
            </div>
            <div className="flex items-center mt-8">
              <div className="flex items-center">
                <Image
                  src={LogoImage}
                  alt="Picture of the author"
                  width={100}
                  height={75}
                />
                <div className="ml-4">
                  <p className="text-blue-800 text-sm font-bold">
                    La<span className="text-red-800">Mila</span>Grosa siempre
                    para servirle
                  </p>
                  <div className="flex mt-1">
                    <p className="text-gray-600 text-sm font-semibold">
                      Telefono:{" "}
                      <span className="text-sky-400 hover:border-b-2 hover:border-sky-400 ml-1">
                        +54-9-3794-612832
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-8 ml-auto mt-auto flex justify-end">
                <span className="flex items-center justify-center text-blue-800 font-bold">
                  Corrientes - Capital
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="m-auto py-auto shadow-xl shadow-gray-500 xs:my-12 lg:w-3/5 xs:flex xs:h-auto xs:flex-col">
          <Image
            src={LocalImage3}
            alt="Picture of the author"
            height={480}
            width={480}
          />
          <div className="bg-white p-8 rounded-bl-md rounded-br-md xs:rounded-bl-none xs:rounded-br-none">
            <h2 className="text-sky-800 font-bold">
              Informacion general del Local
            </h2>
            <p className="text-sm text-gray-600 mt-4">
              <span className="text-gray-700 font-bold ">
                Opciones de servicio:
              </span>{" "}
              Consumo en el lugar · Para llevar · Entrega sin contacto
            </p>
            <p className="text-sm text-gray-600 mt-4 flex">
              <span className="text-gray-700 font-bold pr-2">Dirección:</span>{" "}
              Placido Martínez 1102, W3400 BIJ, Corrientes
              <a
                href="https://www.google.com/maps/place/Crist%C3%B3bal+Caf%C3%A9+Corrientes/@-27.4621727,-58.8364824,19z/data=!4m12!1m6!3m5!1s0x94456dd06ab77089:0xd7b4350150605d00!2sPaseo+Wynwood!8m2!3d-27.4622929!4d-58.8361713!3m4!1s0x0:0x125186cf4f713b02!8m2!3d-27.4620456!4d-58.836148"
                target="_blank"
              >
                <FaMapMarkedAlt className="ml-2 text-sm text-red-700" />
              </a>
            </p>
            <p className="text-sm text-gray-600 mt-4">
              <span className="text-gray-700 font-bold ">
                Horarios de Atención:
              </span>
            </p>
            <div className="flex mt-2 xs:flex xs:h-auto sm:ml-20 xs:flex-col xs:min-w-screen overflow-auto">
              <div className="flex flex-row">
                <p className="text-sm text-gray-800 ml-2 font-bold">
                  Lunes: CERRADO
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Martes:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Miercoles:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Jueves:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-slate-800">Viernes:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Sabado:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Domingo:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
              </div>
            </div>
            <div className="flex items-center mt-8">
              <div className="flex items-center">
                <Image
                  src={LogoImage}
                  alt="Picture of the author"
                  width={100}
                  height={75}
                />
                <div className="ml-4">
                  <p className="text-blue-800 text-sm font-bold">
                    La<span className="text-red-800">Mila</span>Grosa siempre
                    para servirle
                  </p>
                  <div className="flex mt-1">
                    <p className="text-gray-600 text-sm font-semibold">
                      Telefono:{" "}
                      <span className="text-sky-400 hover:border-b-2 hover:border-sky-400 ml-1">
                        +54-9-3794-588351
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-8 ml-auto mt-auto flex justify-end">
                <span className="flex items-center justify-center text-blue-800 font-bold">
                  Corrientes - Capital
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 w-full m-auto my-10 text-center overflow-hidden">
          <div className="border-2 border-orange-300 rounded-full w-full text-start"></div>
          <h1 className=" font-bold m-auto text-center text-3xl text-red-900 my-4">
            Informacion de nuestro Local en Barranqueras{" "}
          </h1>
          <div className="border-2 border-orange-300 rounded-full w-full text-start"></div>
        </div>
        <div className="m-auto py-auto shadow-xl shadow-gray-500 xs:my-12 lg:w-3/5 xs:flex xs:h-auto xs:flex-col">
          <Image
            src={LocalImage4}
            alt="Picture of the author"
            height={480}
            width={480}
          />
          <div className="bg-white p-8 rounded-bl-md rounded-br-md xs:rounded-bl-none xs:rounded-br-none">
            <h2 className="text-sky-800 font-bold">
              Informacion general del Local
            </h2>
            <p className="text-sm text-gray-600 mt-4">
              <span className="text-gray-700 font-bold ">
                Opciones de servicio:
              </span>{" "}
              Consumo en el lugar · Para llevar · Entrega sin contacto
            </p>
            <p className="text-sm text-gray-600 mt-4 flex">
              <span className="text-gray-700 font-bold pr-2">Dirección:</span>{" "}
              Av. Sarmiento 266, H3500BJC Resistencia, Chaco
              <a
                href="https://www.google.com/search?q=restaurantes+Coco%27s+Resto&tbm=lcl&sxsrf=ALiCzsaFbTbWvdJneZ8JuBtRZ85wg0KDMA%3A1657952236916&ei=7FfSYsTAN93x1sQPwOS_mAU&oq=restaurantes+Coco%27s+Resto&gs_l=psy-ab.3..33i160k1l4.6482.6723.1.7072.2.2.0.0.0.0.115.205.1j1.2.0....0...1c.1.64.psy-ab..0.2.205...35i39k1j0i512i263i20k1j0i512i457k1j0i512k1.0._6couR3XuY4#rlfi=hd:;si:14614219630458808895,l,ChlyZXN0YXVyYW50ZXMgQ29jbydzIFJlc3RvSLqgxKHKgoCACFo1EAAQARACGAAYARgCIhlyZXN0YXVyYW50ZXMgY29jbydzIHJlc3RvKgYIAhABEAIqBAgDEACSAQpyZXN0YXVyYW50,y,fHBs8Q4JCUY;mv:[[-27.449031122680974,-58.983870790326115],[-27.44939107731903,-58.984276409673875]]"
                target="_blank"
              >
                <FaMapMarkedAlt className="ml-2 text-sm text-red-700" />
              </a>
            </p>
            <p className="text-sm text-gray-600 mt-4">
              <span className="text-gray-700 font-bold ">
                Horarios de Atención:
              </span>
            </p>
            <div className="flex mt-2 xs:flex xs:h-auto sm:ml-20 xs:flex-col xs:min-w-screen overflow-auto">
              <div className="flex flex-row">
                <p className="text-sm text-gray-800 ml-2 font-bold">
                  Lunes: CERRADO
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Martes:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Miercoles:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Jueves:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-slate-800">Viernes:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Sabado:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
                <p className="text-sm text-gray-600 ml-2 font-semibold flex flex-col">
                  <span className="font-bold text-gray-800">Domingo:</span>
                  <span className="mb-2">10:00hs - 14:00hs</span>
                  <span>20:00hs - 01:30hs</span>
                </p>
              </div>
            </div>
            <div className="flex items-center mt-8">
              <div className="flex items-center">
                <Image
                  src={LogoImage}
                  alt="Picture of the author"
                  width={100}
                  height={75}
                />
                <div className="ml-4">
                  <p className="text-blue-800 text-sm font-bold">
                    La<span className="text-red-800">Mila</span>Grosa siempre
                    para servirle
                  </p>
                  <div className="flex mt-1">
                    <p className="text-gray-600 text-sm font-semibold">
                      Telefono:{" "}
                      <span className="text-sky-400 hover:border-b-2 hover:border-sky-400 ml-1">
                        +54-9-362424-7421
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-8 ml-auto mt-auto flex justify-end">
                <span className="flex items-center justify-center text-blue-800 font-bold">
                  Chaco - Resistencia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto text-center py-20">
        {islogged ? (
          <Link href="testimonios">
            <button className="bg-sky-600 w-screen text-white py-4 border-y-2 border-sky-900 hover:bg-sky-500">
              <p className="font-bold text-3xl ">Dejanos una Reseña aqui!</p>
            </button>
          </Link>
        ) : (
          <Link href="login">
            <button className="bg-sky-600 w-screen text-white py-6 border-y-2 border-sky-900 hover:text-sky-700 hover:bg-white">
              <p className="font-bold text-3xl ">
                Inicia Sesion o Registrate para dejar una reseña!
              </p>
            </button>
          </Link>
        )}
      </div>
    </Layout>
  );
}
