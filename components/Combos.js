import React, { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import Image from "next/dist/client/image";
import Link from "next/link";
import FoodImg from "../public/img/menues/Doble Criminal.jpg";
import FoodImg2 from "../public/img/menues/saludable.jpg";
import FoodImg3 from "../public/img/menues/de la casa.jpg";
import FoodImg4 from "../public/img/menues/Napolitana.jpg";
import { TiStarFullOutline } from "react-icons/ti";

export default function Combos() {
  const { userGlobal, islogged } = useContext(UsuarioContext);

  return (
    <div className="my-12 py-12">
      <div className="bg-gray-100 w-full m-auto my-10 text-center overflow-hidden">
        <div className="border-2 border-orange-300 rounded-full w-full text-start"></div>
        <h1 className=" font-bold m-auto text-center text-3xl text-red-900 my-4">
          Combos Grosos:
        </h1>
        <div className="border-2 border-orange-300 rounded-full w-full text-start"></div>
      </div>
      <div className="bg-white w-full my-4  flex-wrap flex justify-evenly items-center">
        <div className="w-72 p-2 bg-red-200 rounded-xl border-4 border-dashed border-red-800 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
          <Image
            className=" object-cover rounded-xl h-40"
            src={FoodImg}
            alt="Combo Sandwiches"
          ></Image>
          <div className="flex flex-row">
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
          </div>
          <div className="p-2">
            <h2 className="font-bold text-2xl text-red-900 mb-2 flex">
              Combo Sandwiches
            </h2>
            <p className="leading-relaxed font-bold text-slate-800">
              2 Sandwiches a eleccion, con guarnicion de papas fritas con
              cheddar.
            </p>
            <p className="font-bold text-xl text-red-900">Precio: 2000$</p>
          </div>
          <div>
            {islogged ? (
              <Link href="menu">
                <button className="mt-2 p-2 w-40 font-bold text-red-900 border-2 border-red-900 bg-red-100 rounded-2xl hover:bg-red-700 hover:text-white hover:border-red-900">
                  Combo 1
                </button>
              </Link>
            ) : (
              <Link href="login">
                <button className="mt-2 p-2 w-40 font-bold text-red-900 border-2 border-red-900 bg-red-100 rounded-2xl hover:bg-red-700 hover:text-white hover:border-red-900">
                  Acceder Combo
                </button>
              </Link>
            )}
          </div>
        </div>
        <div className="w-72 p-2 my-4 bg-green-200 rounded-xl border-4 border-dashed border-green-700 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          <Image
            className="object-cover rounded-xl"
            src={FoodImg2}
            alt="Combo Saludable"
          ></Image>
          <div className="flex flex-row">
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
          </div>
          <div className="p-2">
            <h2 className="font-bold text-2xl text-green-900 mb-2 flex">
              Combo Saludable
            </h2>
            <p className="leading-relaxed font-bold text-slate-800">
              3 milanesas o Sandwiches del menu vegano, con guarnicion a
              eleccion.
            </p>
            <p className="font-bold text-xl text-green-800">Precio: 3500$</p>
          </div>
          <div>
            {islogged ? (
              <Link href="menu">
                <button className="mt-2 p-2 w-40 font-bold text-green-900 border-2 border-green-800 bg-green-100 rounded-2xl hover:bg-green-600 hover:text-white hover:border-green-800">
                  Combo 2
                </button>
              </Link>
            ) : (
              <Link href="login">
                <button className="mt-2 p-2 w-40 font-bold text-green-800 border-2 border-green-800 bg-green-100 rounded-2xl hover:bg-green-600 hover:text-white hover:border-green-800">
                  Acceder Combo
                </button>
              </Link>
            )}
          </div>
        </div>
        <div className="w-72 p-2 my-4 bg-blue-200 rounded-xl border-4 border-dashed border-blue-800 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          <Image
            className=" object-cover rounded-xl h-40"
            src={FoodImg3}
            alt="Combo Familiar"
          ></Image>
          <div className="flex flex-row">
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
          </div>
          <div className="p-2">
            <h2 className="font-bold text-2xl text-blue-800 mb-2 flex">
              Combo Familiar
            </h2>
            <p className="leading-relaxed font-bold text-slate-800">
              4 milanesas a eleccion, con dos guarniciones de papas fritas con
              cheddar.
            </p>
            <p className="font-bold text-xl text-blue-800">Precio: 4200$</p>
          </div>
          <div>
            {islogged ? (
              <Link href="menu">
                <button className="mt-2 p-2 w-40 font-bold text-blue-800 border-2 border-blue-800 bg-blue-100 rounded-2xl hover:bg-blue-600 hover:text-white hover:border-blue-800">
                  Combo 3
                </button>
              </Link>
            ) : (
              <Link href="login">
                <button className="mt-2 p-2 w-40 font-bold text-blue-800 border-2 border-blue-800 bg-blue-100 rounded-2xl hover:bg-blue-600 hover:text-white hover:border-blue-800">
                  Acceder Combo
                </button>
              </Link>
            )}
          </div>
        </div>
        <div className="w-72 p-2 my-4 bg-orange-200 rounded-xl border-4 border-dashed border-orange-700 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          <Image
            className=" object-cover rounded-xl h-40"
            src={FoodImg4}
            alt="Combo Napolitana"
          ></Image>
          <div className="flex flex-row">
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
            <TiStarFullOutline className="block text-yellow-500 text-xl w-6 h-8" />
          </div>
          <div className="p-2">
            <h2 className="font-bold text-2xl text-orange-700 mb-2 flex">
              Combo Napolitana
            </h2>
            <p className="leading-relaxed font-bold text-slate-700">
              2 milanesas del menu Napolitana, con guarnicion a eleccion.
            </p>
            <p className="font-bold text-xl text-orange-700">Precio: 1800$</p>
          </div>
          <div>
            {islogged ? (
              <Link href="menu">
                <button className="mt-2 p-2 w-40 font-bold text-orange-700 border-2 bg-orange-100 border-orange-800 rounded-2xl hover:bg-orange-600 hover:text-white hover:border-orange-700">
                  Combo 4
                </button>
              </Link>
            ) : (
              <Link href="login">
                <button className="mt-2 p-2 w-40 font-bold text-orange-700 border-2 border-orange-800 bg-orange-100 rounded-2xl hover:bg-orange-600 hover:text-white hover:border-orange-700">
                  Acceder Combo
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
