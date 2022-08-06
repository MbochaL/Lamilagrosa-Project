import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { CarritoContext } from "../../contexts/CarritoContext";
import Layout from "../../components/Layout";
import Mensaje from "../../components/Mensaje";
import { MenuContextData } from "../../contexts/MenuContext";

import {
  TiHeartOutline,
  TiArrowDown,
  TiArrowLeft,
  TiArrowRight,
} from "react-icons/ti";
import { GiCow, GiChicken } from "react-icons/gi";

export default function DetalleProducto({ respuesta }) {
  //Estados
  const [detalleProducto, setDetalleProducto] = useState(respuesta);
  const { guarnicionGlobal } = useContext(MenuContextData);
  const { carrito, agregarCarrito } = useContext(CarritoContext);
  const [cantidad, setCantidad] = useState(1);
  const [carneMila, setCarneMila] = useState("");
  const [guarnicion, setGuarnicion] = useState({
    nombre: "",
    imagen: "",
    precio: 0,
  });
  const [mensaje, setMensaje] = useState("");
  const [tipoError, setTipoError] = useState("");

  const { ingredientes } = detalleProducto;

  //Funciones
  const handleGuarnicion = (e) => {
    setGuarnicion({
      id: e.currentTarget.dataset.id,
      nombre: e.currentTarget.dataset.nombre,
      imagen: e.currentTarget.dataset.imagen,
      precio: parseInt(e.currentTarget.dataset.precio),
    });
  };

  const handleChange = (e) => {
    if (e.target.name === "cantidad") {
      setCantidad(parseInt(e.target.value));
      return;
    } else {
      setCarneMila(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guarnicion.nombre === undefined || guarnicion.nombre === "") {
      setTipoError("error");
      setMensaje("Selecciona una guarnicion");
      eliminarMensaje();
      return;
    }
    if (!detalleProducto.nombre?.includes("Vegana")) {
      if (carneMila === undefined || carneMila === "") {
        setTipoError("error");
        setMensaje("Selecciona un tipo de carne");
        eliminarMensaje();
        return;
      }
    }
    //calcula si el menu tiene costo adicional
    const adicionalMenu =
      guarnicion.precio <= 700 ? 0 : guarnicion.precio - 700;

    //Crea y agrega pedido al carrito
    const pedido = {
      idMenu: detalleProducto._id,
      menu: detalleProducto.nombre,
      imagenMenu: detalleProducto.imagen,
      tipoCarne: carneMila,
      cantidad,
      idGuarnicion: guarnicion.id,
      guarnicion: guarnicion.nombre,
      imagenGuarnicion: guarnicion.imagen,
      adicional: adicionalMenu,
      precio: detalleProducto.precio,
      id: Date.now().toString(36),
    };
    agregarCarrito(pedido);

    // Resetea el formulario y guarnicion seleccionada
    e.target.reset();
    setCantidad(1);
    setGuarnicion({
      nombre: "",
      imagen: "",
      precio: 0,
    });
    setGuarnicion({});

    setTipoError("correcto");
    setMensaje("Añadido correctamente");
    eliminarMensaje();
  };

  const eliminarMensaje = () => {
    setTimeout(() => {
      setTipoError("");
    }, 2500);
  };

  return (
    <Layout pagina="Detalle de productos" carrito={carrito}>
      <main className="w-full h-auto mt-20 pb-10">
        <h2 className="text-center py-3 md:py-5 text-xl md:text-2xl font-semibold bg-blue-500 text-white shadow-sm shadow-blue-900">
          Personalizá
          <span className="text-black pl-3 ont-bold">
            Tu<span className="text-red-600">Mila</span>Grosa
          </span>
        </h2>

        <div className="max-w-[85%] mx-auto w-full flex flex-col lg:flex-row lg:justify-center lg:gap-x-3 pt-3">
          <div className="flex justify-between pt-1">
            <h2 className="text-center text-2xl font-semibold lg:hidden">
              {detalleProducto?.nombre}
            </h2>
            <TiHeartOutline
              size="30px"
              className="cursor-pointer md:hidden"
              onClick={() => alert("hola")}
            />
          </div>

          <div>
            <span className="flex justify-start pb-4 text-xs 2xl:text-sm lg:hidden">
              (
              {ingredientes?.map((ingrediente) => ingrediente?.tipo).join(", ")}
              )
            </span>
          </div>
          {/* -------------------------------------------------------------------------------------- */}
          {/* columna izquierda */}
          <section className="w-full lg:w-3/5 flex flex-col gap-2 ">
            <article className="w-full shadow-sm shadow-gray-800">
              {detalleProducto.imagen && (
                <Image
                  src={detalleProducto.imagen}
                  layout="responsive"
                  alt={detalleProducto.nombre}
                  objectFit="cover"
                  width="800"
                  height="500"
                  priority="true"
                />
              )}
            </article>

            <h3 className="text-center uppercase flex justify-around text-blue-600 font-semibold">
              <TiArrowLeft className="text-red-600 text-3xl" />
              <TiArrowDown className="text-red-600 text-3xl animate-bounce" />
              Elige una guarnición{" "}
              <TiArrowDown className="text-red-600 text-3xl animate-bounce" />
              <TiArrowRight className="text-red-600 text-3xl" />
            </h3>

            <section className="w-full shadow-sm shadow-gray-800">
              <ul className="snap-x snap-mandatory overflow-x-scroll grid grid-flow-col gap-1">
                {guarnicionGlobal
                  .filter((item) => item.precio <= 700)
                  .map((item, i) => (
                    <li
                      className={`min-w-[110px] max-w-[100px] md:max-w-[150px] flex-shrink-0 snap-start hover:opacity-80 ${
                        guarnicion.nombre === item.nombre
                          ? "border-2 border-red-500 rounded-sm"
                          : ""
                      }`}
                      key={i}
                      data-id={item._id}
                      data-nombre={item.nombre}
                      data-imagen={item.imagen}
                      data-precio={item.precio}
                      onClick={handleGuarnicion}
                    >
                      <Image
                        src={item.imagen}
                        alt={item.nombre}
                        layout="responsive"
                        width="500"
                        height="300"
                        objectFit="cover"
                      />
                      <p className="text-xs text-center font-semibold text-blue-600">
                        {item.nombre}
                      </p>

                      <p className="text-xs text-center font-semibold text-red-600">
                        Gratis con tu menú
                      </p>
                    </li>
                  ))}
                {guarnicionGlobal
                  .filter((item) => item.precio > 700)
                  .map((item, i) => (
                    <li
                      className={`min-w-[110px] max-w-[100px] md:max-w-[150px] flex-shrink-0 snap-start hover:opacity-80 ${
                        guarnicion.nombre === item.nombre
                          ? "border-2 border-red-500 rounded-sm"
                          : ""
                      }`}
                      key={i}
                      data-id={item._id}
                      data-nombre={item.nombre}
                      data-imagen={item.imagen}
                      data-precio={item.precio}
                      onClick={handleGuarnicion}
                    >
                      <Image
                        src={item.imagen}
                        alt={item.nombre}
                        layout="responsive"
                        width="500"
                        height="300"
                        objectFit="cover"
                      />
                      <p className="text-xs text-center font-semibold text-blue-600">
                        {item.nombre}
                      </p>

                      <p className="text-xs text-center font-semibold text-red-600">
                        ${item.precio - 700} Adicional
                      </p>
                    </li>
                  ))}
              </ul>
            </section>
          </section>
          {/* -------------------------------------------------------------------------------------- */}

          {/* -------------------------------------------------------------------------------------- */}
          {/* columna derecha */}

          <form
            onSubmit={handleSubmit}
            className="w-full mt-5 lg:px-2 lg:w-2/5"
          >
            <div className="flex justify-between">
              <h2 className="text-start text-2xl xl:text-3xl hidden lg:block font-bold">
                {detalleProducto?.nombre}
              </h2>
              <TiHeartOutline
                size="30px"
                className="cursor-pointer hidden lg:block"
                onClick={() => alert("hola")}
              />
            </div>

            <span className="lg:flex justify-start pb-2 text-xs 2xl:text-sm hidden">
              (
              {ingredientes?.map((ingrediente) => ingrediente?.tipo).join(", ")}
              )
            </span>

            {detalleProducto.nombre?.includes("Vegana") ||
            detalleProducto.nombre?.includes("Vegetariana") ? null : (
              <div className="flex-col my-5 md:my-5">
                <p className="w-fit mx-auto md:text-xl xl:text-2xl font-semibold tracking-widest mb-2 ">
                  Elija el tipo de milanesa
                </p>
                <div className="flex justify-center">
                  <div className="flex items-center gap-3 mr-2 md:mr-16">
                    <input
                      type="radio"
                      name="tipoCarne"
                      value="Ternera"
                      onChange={handleChange}
                      // checked
                    />
                    <label
                      htmlFor="Ternera"
                      className="text-red-700 md:text-lg xl:text-xl font-semibold"
                    >
                      Ternera
                    </label>
                    <GiCow className="text-red-800 text-3xl" />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="tipoCarne"
                      value="Pollo"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="pollo"
                      className="text-blue-800 md:text-lg xl:text-xl font-semibold"
                    >
                      Pollo
                    </label>
                    <GiChicken className="text-blue-800 text-2xl" />
                  </div>
                </div>
              </div>
            )}

            <div className="md:my-5 xl:my-8">
              <span className="w-fit mx-auto text-md md:text-xl font-semibold tracking-widest">
                Guarnicion seleccionada:
              </span>
              <span className="font-bold text-lg xl:text-2xl text-blue-600">
                {" "}
                {guarnicion.nombre}
              </span>
            </div>

            <div className="mb-2 md:mb-8 mt-5 xl:mt-8 flex justify-between items-center">
              <div>
                <label className="font-semibold xl:text-xl">
                  Cantidad de Menues:
                </label>
                <select
                  onChange={handleChange}
                  className="border border-gray-900 ml-1 font-bold"
                  name="cantidad"
                  value={cantidad}
                >
                  <option value="1" defaultValue>
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

              <p className="text-black font-bold xl:text-xl">
                Total:
                <span className="text-red-700 text-lg md:text-3xl font-bold py-6">
                  {" "}
                  $
                  {detalleProducto?.precio && guarnicion.precio > 700
                    ? detalleProducto?.precio * cantidad +
                      (guarnicion.precio - 700)
                    : detalleProducto?.precio * cantidad}
                </span>
              </p>
            </div>

            <div className="w-full  mt-5 xs:mt-10">
              {tipoError !== "" && (
                <div className="w-full my-3">
                  <Mensaje mensaje={mensaje} tipoError={tipoError} />
                </div>
              )}

              <button className="w-full d:w-2/3 lg:w-full font-black text-sm tracking-widest bg-red-600 text-white py-3 md:py-4 px-10 rounded-md shadow-sm shadow-red-900 mb-10">
                Añadir al Carrito
              </button>
              <Link href="/menu">
                <a className="px-5 font-semibold text-sm tracking-widest bg-blue-600 text-white py-2 md:py-3 rounded-md shadow-sm shadow-blue-900 text-center">
                  Menú
                </a>
              </Link>
            </div>
          </form>
          {/* -------------------------------------------------------------------------------------- */}
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const url = `https://lamilagrosa-app.herokuapp.com/api/comidas/${id}`;

  try {
    const res = await fetch(url);
    const respuesta = await res.json();
    return {
      props: { respuesta },
    };
  } catch (error) {
    console.log(error);
  }
}
