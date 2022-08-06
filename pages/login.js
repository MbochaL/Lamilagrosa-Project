
import Link from "next/link";
import Image from "next/image";

import Error from "../components/Error";

import {
  FaFacebook,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useLogin } from "../hooks/useLogin";

export default function Login() {

  const [handleChangeInputs,handleSubmitFormLogin,error,user]=useLogin()

  return (
    <div className="w-full h-screen bg-gray-200 flex items-center">
      <main className="w-[800px] mx-auto flex flex-col-reverse md:flex-row justify-center text-center max-w-[85%]">
        <div className="w-full md:w-1/2 max-w-[400px] mx-auto bg-white py-6 flex justify-center items-center rounded-l-lg ">
          <form
            className="w-full px-9 py-6"
          >
            <Link href="/">
              <a>
                <Image
                  src="/img/logo-web-LaMilaGrosa2.png"
                  alt="logo milagrosa"
                  width={190}
                  height={120}
                />
              </a>
            </Link>
            <h2 className="text-2xl font-semibold text-sky-500 pt-5 pb-5 ">
              Iniciar Sesión
            </h2>
            {/* muestra el error de usuario y contraseña */}
            {error && <Error />}
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-full py-2 flex items-center mb-3 rounded-sm">
                <FaRegEnvelope className="text-sky-400 mx-2" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full bg-gray-100 outline-none text-sm mr-2 border-sky-400"
                  required={true}
                  value={user.email}
                  onChange={handleChangeInputs}
                />
              </div>
              <div className="bg-gray-100 w-full py-2 flex items-center mb-1 rounded-sm">
                <MdLockOutline className="text-sky-400 mx-[6px]" size="20px" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full bg-gray-100 outline-none text-sm mr-2 border-sky-400"
                  required={true}
                  value={user.password}
                  onChange={handleChangeInputs}
                />
              </div>
              <div className="flex justify-around w-full py-3">
                <label className="text-xs md:text-xs flex items-center ">
                  <input
                    type="checkbox"
                    name="remember"
                    className="mr-1 cursor-pointer"
                  />
                  Recordar Sesión
                </label>
                <Link href="/password">
                  <a className="text-xs hover:text-sky-400 ease-in duration-200 border-sky-400">
                    Olvidaste tu contraseña?
                  </a>
                </Link>
              </div>

              <button className="px-24 py-[10px] text-xs mb-12 mt-6 text-sky-400 font-bold border-2 border-sky-400 rounded-full hover:bg-sky-500 ease-in duration-200 hover:text-white tracking-wide uppercase" onClick={handleSubmitFormLogin}>
                Iniciar Sesión
              </button>

              <p className="text-gray-400 pb-3 ">o inicia con</p>

              {/* Social login section */}
              <div className="flex justify-center gap-x-6">
                <Link href="/">
                  <a className="rounded-full bg-blue-600 shadow-sm shadow-gray-800 p-2 cursor-pointer flex ease-in duration-200 hover:text-blue-600 hover:shadow-md hover:shadow-black">
                    <FaFacebook size="15px" color="white" className="" />
                  </a>
                </Link>
                <Link href="/">
                  <a className="rounded-full bg-blue-500 shadow-sm shadow-gray-800 p-2 cursor-pointer flex ease-in duration-200 hover:text-blue-500 hover:shadow-md hover:shadow-black">
                    <FaLinkedinIn size="15px" color="white" className="" />
                  </a>
                </Link>
                <Link href="/">
                  <a className="rounded-full bg-red-600 shadow-sm shadow-gray-800 p-2 cursor-pointer flex ease-in duration-200 hover:text-red-600 hover:shadow-md hover:shadow-black">
                    <FaGoogle size="15px" color="white" className="" />
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>

        {/* Sign in section */}
        <div className="hidden w-full md:w-1/2 bg-sky-500 text-white md:flex justify-center items-center rounded-r-lg px-9">
          <form action="#" method="Get">
            <h2 className="text-3xl font-semibold pb-5 tracking-wide">
              Bienvenido!
            </h2>
            <p>
              Todavia no sos parte de{" "}
              <span className="text-black font-semibold">La </span>
              <span className="text-red-600 font-semibold">Mila </span>
              <span className="text-black font-semibold">Grosa?</span>
            </p>
            <p className="mb-7 mt-2">
              Registrate ya y accede a todas nuestras promociones y descuentos
              exclusivos para los Grosos como vos!{" "}
            </p>
            <Link href="/register">
              <button className="border-2 border-white rounded-full px-24 py-[10px] text-xs inline-block font-semibold hover:bg-white hover:text-sky-500 ease-in duration-200 uppercase">
                Registrate
              </button>
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
}
