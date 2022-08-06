import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Router from "next/router";

import { CarritoContext } from "../../contexts/CarritoContext";

import Layout from "../../components/Layout";
import Mensaje from "../../components/Mensaje";

import {
  TiHeartOutline
} from "react-icons/ti";


export default function DetalleGuarnicion(props) {
  const {carrito, agregarCarrito } = useContext(CarritoContext);
  const [detalleProducto, setDetalleProducto] = useState({});
  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState("");
  const [tipoError, setTipoError] = useState("");

  useEffect(() => {
    obtenerDetalleGuarnicion();
  }, [props]);

  const { ingredientes } = detalleProducto;
  
  //metodo para hacer el fetch de id guarniciones
  const obtenerDetalleGuarnicion = async () => {
    try {
      let url = `https://lamilagrosa-app.herokuapp.com/api/guarniciones/${props.id}`;
      const res = await fetch(url);
      const respuesta = await res.json();
      setDetalleProducto(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  const hendlerChangeCantidad=(e)=>{
    setCantidad(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Crea y agrega pedido al carrito
    const pedido = {
      idGuarnicion:detalleProducto._id,
      guarnicion: detalleProducto.nombre,
      imagenGuarnicion: detalleProducto.imagen,
      cantidad:cantidad,
      precio: detalleProducto.precio,
      id: Date.now().toString(36)
    };
    agregarCarrito(pedido);

    // Resetea el formulario y guarnicion seleccionada
    e.target.reset();
    setCantidad(1);
    setTipoError("correcto");
    setMensaje("Añadido correctamente");
    eliminarMensaje();
  };

  const eliminarMensaje = () => {
    setTimeout(() => {
      setTipoError("");
    }, 2500);
  };

  const volverAlMenu = () => {};

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
                />
              )}
            </article>
          </section>

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

            <span className="lg:flex justify-start pb-2 text-xs 2xl:text-sm hidden lg:block">
              (
              {ingredientes?.map((ingrediente) => ingrediente?.tipo).join(", ")}
              )
            </span>

            <div className="mb-2 md:mb-8 mt-5 xl:mt-8 flex justify-between items-center">
              <div>
                <label className="font-semibold xl:text-xl">
                  Cantidad de Guarniciones:
                </label>
                <select
                  onChange={hendlerChangeCantidad}
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
                  {detalleProducto?.precio * cantidad}
                </span>
              </p>
            </div>

            <div className="w-full flex flex-col items-center justify-center mt-5 xs:mt-10">
              {tipoError !== "" && (
                <div className="w-full my-3">
                  <Mensaje mensaje={mensaje} tipoError={tipoError} />
                </div>
              )}
              <button className="w-full md:w-2/3 lg:w-full font-black text-sm tracking-widest bg-red-600 text-white py-3 md:py-4 px-10 rounded-md shadow-sm shadow-red-900">
                Añadir al Carrito
              </button>
              <button
                onClick={() => Router.push("/menu")}
                className="w-1/2 font-semibold text-sm tracking-widest bg-blue-600 text-white py-2 md:py-3 px-10 rounded-md shadow-sm shadow-blue-900 mt-10"
              >
                Menú
              </button>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  );
}

DetalleGuarnicion.getInitialProps = (context) => {
  const { query } = context;
  const { id } = query;

  return { id };
};