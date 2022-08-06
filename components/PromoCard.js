import Link from "next/link";
import Image from "next/image";

import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

const PromoCard = ({
  imagen,
  titulo,
  contenido1,
  contenido2,
  fondo,
  color,
  descuento,
  hover
}) => {
  const { islogged } = useContext(UsuarioContext);

  return (
    <div
      className={`w-full bg-gradient-to-r ${fondo} rounded-lg shadow-2xl shadow-gray-600 flex flex-col md:flex-row-reverse md:items-center px-2`}
    >
      <div className="w-full pt-2 text-center">
        <Image
          src={imagen}
          alt="imagen de Promocion"
          layout="fixed"
          height={180}
          width={180}
        />
      </div>
      <div className="p-4 lg text-center">
        <div className="rounded-full bg-gray-300 w-fit flex flex-row py-3 px-4 -mt-9 -ml-9 shadow-sm shadow-gray-500">
          <p className="font-bold text-xl flex flex-col m-0 p-0">
            {descuento}%<span className="text-sm text-center">OFF</span>
          </p>
        </div>

        <div className="pb-4">
          <h2 className={`text-3xl font-black text-${color}-900 pb-2`}>
            {titulo}
          </h2>
          <div className="md:mt-6 sm:mt-0 mb-4">
            <p className="text-white text-md font-bold ">{contenido1}</p>
            <p className="text-xs text-black font-semibold md:mt-6 sm:mt-0 ">
              ({contenido2})
            </p>
          </div>
          {islogged ? (
            <Link href="menu">
              <button
                className={`mt-4 p-2 font-bold border-2 text-gray-800 border-${color}-800 bg-white rounded-2xl ${hover}`}
              >
                Consultar
              </button>
            </Link>
          ) : (
            <Link href="login">
              <button
                className={`mt-4 p-2 font-bold text-gray-800 border-2 border-${color}-800 bg-white rounded-2xl ${hover}`}
              >
                Acceder Promo
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
