import Layout from "../components/Layout";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function contact() {
  return (
    <Layout pagina={"Contacto"} >
      <div className="bg-white w-full md:mb-44">
        <div className="max-w-[95%] mx-auto flex flex-col md:flex-row md:justify-center md:max-w-[900px] mt-32 md:mt-52">
          {/* textual content */}
          <div className="md:w-[400px] flex flex-col items-center">
            <div className="">
              <h2 className="w-full text-2xl font-semibold text-sky-500 mb-4 text-center">
                Contacta con nosotros
              </h2>
              <p className="text-gray-400 font-semibold text-sm text-center max-w-[323px]">
                Llena el formulario y nuestro equipo te respondera dentro de 12
                horas!
              </p>
            </div>

            <div className="my-5">
              <div className="py-5 px-10 my-3 flex justify-center items-center gap-5 border border-gray-500 rounded-md">
                <BsTelephoneFill className="text-gray-500 text-2xl group-hover:text-sky-400" />
                <p className="text-sky-500 text-sm font-semibold">
                  +54-3794-612832
                </p>
              </div>

              <div className="py-5 px-10 flex justify-center items-center my-3 gap-5 border border-gray-500 rounded-md">
                <GrMail className="text-gray-500 text-2xl group-hover:text-sky-400" />
                <p className="text-sky-500 text-sm font-semibold">
                  laMilaGrosa@gmail.com
                </p>
              </div>

              <div className="py-5 px-10 flex justify-center items-center mt-3 gap-5 border border-gray-500 rounded-md">
                <HiLocationMarker className="text-gray-500 text-3xl group-hover:text-sky-400" />
                <p className="text-sky-500 text-sm font-semibold">
                  Pellegrini 1252, Corrientes-AR
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5 md:justify-start my-5">
              <FaInstagram className="text-2xl text-gray-500 hover:text-sky-400 cursor-pointer " />
              <FaFacebook className="text-2xl text-gray-500 hover:text-sky-400 cursor-pointer " />
              <FaTwitter className="text-2xl text-gray-500 hover:text-sky-400 cursor-pointer " />
              <FaLinkedinIn className="text-2xl text-gray-500 hover:text-sky-400 cursor-pointer " />
              <FaGithub className="text-2xl text-gray-500 hover:text-sky-400 cursor-pointer " />
            </div>
          </div>

          <hr className="w-full border border-gray-400 max-w-[250px] mx-auto my-2 md:hidden" />

          {/* contact form */}
          <div className="w-full mx-auto xs:max-w-[330px] md:max-w-[400px] mt-5 md:mt-0">
            <div className="w-full flex flex-col gap-y-5">
              <h2 className="text-xl xs:text-2xl font-semibold text-sky-500 mb-4 text-center">
                Tienes una sugerencia?
              </h2>
              <form action="#" method="GET" className="">
                <div className="flex flex-col gap-5 ">
                  <div className="flex flex-col md:flex-row gap-5">
                    <input
                      type="text"
                      name="usuario"
                      id="usuario"
                      className="w-full px-3 py-2.5 text-gray-500 bg-clip-padding border border-sky-400 rounded-md transition ease-in-out m-0 focus:text-gray-600 focus:outline-none shadow shadow-gray-400"
                      placeholder="Nombre"
                      required
                    />
                    <input
                      type="number"
                      name="numero"
                      id="numero"
                      className="w-full px-3 py-2.5 text-gray-500 bg-clip-padding border border-sky-400 rounded-md transition ease-in-out m-0 focus:text-gray-600 focus:outline-none shadow shadow-gray-400"
                      placeholder="Numeró de telefono"
                      // required
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-3 py-2.5 text-gray-500 bg-clip-padding border border-sky-400 rounded-md transition ease-in-out m-0 focus:text-gray-600 focus:outline-none shadow shadow-gray-400"
                    placeholder="Correo electronico"
                    required
                  />
                  <input
                    type="text"
                    name="recomendacion"
                    id="recomendacion"
                    className="w-full px-3 py-2.5 text-gray-500 bg-clip-padding border border-sky-400 rounded-md transition ease-in-out m-0 focus:text-gray-600 focus:outline-none shadow shadow-gray-400"
                    placeholder="Tipo de sugerencia"
                    required
                  />
                  <div className="flex justify-center">
                    <textarea
                      rows="3"
                      id="text_area"
                      className="w-full px-3 py-2.5 text-gray-500 bg-clip-padding border border-sky-400 rounded-md transition ease-in-out m-0 focus:text-gray-600 focus:outline-none shadow shadow-gray-400"
                      placeholder="Comente aqui su sugerencia"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full mx-auto text-sky-400 hover:bg-sky-400 hover:text-white border border-sky-400 font-black rounded-lg text-sm py-5 shadow-md shadow-gray-400 ease-in duration-200 my-10 md:my-0"
                  >
                    Enviar Sugerencia
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
