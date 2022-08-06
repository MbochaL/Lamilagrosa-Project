import React, { useState } from "react";

export default function FormPago({
  formaDePago,
  setFormaDePago,
  metodoEnvio,
  handleSubmit,
  procesando,
  setProcesando,
  pagado,
  setPagado,
}) {
  const [tarjeta, setTarjeta] = useState({
    nombreTitular: "",
    DNI: "",
    NumeroDeTarjeta: "",
    vencimiento: "",
    codigoDeSeguridad: "",
  });

  const [errorFormTarjeta, setErrorFormTarjeta] = useState({
    nombreTitular: "error",
    DNI: "error",
    NumeroDeTarjeta: "error",
    vencimiento: "error",
    codigoDeSeguridad: "error",
  });

  const pagarAhora = () => {
    const respuesta = confirm("Deseas confirmar tu compra?");
    if (respuesta) {
      setProcesando(true);
      setTimeout(() => {
        setProcesando(false);
        setPagado(true);
      }, 2000);
      setPagado(false);
    }
  };

  const handleFormaDePago = (e) => {
    const forma = String(e.target.value);
    setFormaDePago(forma);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setTarjeta({
      ...tarjeta,
      [id]: value,
    });

    if (id === "nombreTitular") {
      if (value.length >= 10 && value.length <= 40) {
        setErrorFormTarjeta({
          ...errorFormTarjeta,
          nombreTitular: "correcto",
        });
      } else {
        setErrorFormTarjeta({
          ...errorFormTarjeta,
          nombreTitular: "error",
        });
      }
    }

    if (id === "DNI") {
      if (value.length == 8) {
        setErrorFormTarjeta({
          ...errorFormTarjeta,
          DNI: "correcto",
        });
      } else {
        setErrorFormTarjeta({
          ...errorFormTarjeta,
          DNI: "error",
        });
      }
    }

    if (id === "NumeroDeTarjeta") {
      if (value.length >= 16 && value.length <= 18) {
        setErrorFormTarjeta({
          ...errorFormTarjeta,
          NumeroDeTarjeta: "correcto",
        });
      } else {
        setErrorFormTarjeta({
          ...errorFormTarjeta,
          NumeroDeTarjeta: "error",
        });
      }
    }

    if (id === "vencimiento") {
      if (value.length === 7) {
        if (
          value.substring(2, 3) === "/" &&
          parseInt(value.substring(3, 7)) >= 2022 &&
          parseInt(value.substring(0, 2)) <= 12 &&
          value.substring(0, 2) != "00"
        ) {
          setErrorFormTarjeta({
            ...errorFormTarjeta,
            vencimiento: "correcto",
          });
        } else {
          setErrorFormTarjeta({
            ...errorFormTarjeta,
            vencimiento: "error",
          });
        }
      } else {
        setErrorFormTarjeta({
          ...errorFormTarjeta,
          vencimiento: "error",
        });
      }
    }
    if (id === "codigoDeSeguridad") {
      if (value.length === 3) {
        setErrorFormTarjeta({
          ...errorFormTarjeta,
          codigoDeSeguridad: "correcto",
        });
      } else {
        setErrorFormTarjeta({
          ...errorFormTarjeta,
          codigoDeSeguridad: "error",
        });
      }
    }
  };

  return (
    <>
      <div className="w-full bg-white shadow-sm shadow-gray-500 rounded-sm mt-2">
        {metodoEnvio === "enviar" && pagado ? (
          <div className="text-sm px-2 py-5 font-bold uppercase">
            <div className="py-2 text-center">
              <p className="text-red-600">Pedido realizado con exito!</p>
              <p className="text-red-600">Gracias por tu compra</p>
            </div>
            <div className="text-center py-2">
              <p>tu pedido llegara a tu puerta entre 15 y 20 minuto</p>
            </div>
          </div>
        ) : (
          ""
        )}
        {metodoEnvio === "retira" && pagado ? (
          <div className="text-sm px-2 py-5 font-bold uppercase">
            <div className="py-2 text-center">
              <p className="text-red-600">Pedido realizado con exito!</p>
              <p className="text-red-600">Gracias por tu compra</p>
            </div>
            <div className="text-center py-2">
              <p>tu pedido estara listo entre 15 y 20 minuto</p>
              <p>te esperamos!</p>
            </div>
          </div>
        ) : (
          ""
        )}
        {!pagado ? (
          <div className="flex flex-col p-3">
            <h3 className="font-bold text-lg pb-2">Elija un metodo de pago</h3>
            <hr className="text-gray-700 pb-2" />
            <div className="flex items-center justify-center gap-3 mb-4 mt-2 font-semibold">
              <input
                type="radio"
                id="pago"
                name="FormaDePago"
                value="Delivery"
                onChange={handleFormaDePago}
              />
              <label htmlFor="html">Pago al Delivery</label>
              <input
                type="radio"
                id="pago"
                name="FormaDePago"
                value="Tarjeta"
                onChange={handleFormaDePago}
              />
              <label htmlFor="css">Pago con tarjeta</label>
            </div>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-2"
              action=""
            >
              {formaDePago === "Tarjeta" ? (
                <div className="flex flex-col gap-2">
                  <div className="w-full text-center text-sm ">
                    <label className="text-center " htmlFor="nombreTitular">
                      Nombre del Titular
                    </label>
                    <input
                      onChange={handleChange}
                      className={`bg-gray-100 outline-none text-sm py-1 pl-2 rounded-md text-blue-600 capitalize border border-red-600 w-full ${
                        errorFormTarjeta.nombreTitular === "correcto"
                          ? "border-green-600"
                          : "border-red-600"
                      }`}
                      type="text"
                      id="nombreTitular"
                      name="titular"
                      placeholder="Ingrese su nombre"
                    />
                  </div>

                  <div className="w-full text-center text-sm">
                    <label htmlFor="DNI">DNI</label>
                    <input
                      onChange={handleChange}
                      className={`bg-gray-100 outline-none text-sm py-1 pl-2 rounded-md text-blue-600 capitalize border border-red-600 w-full ${
                        errorFormTarjeta.DNI === "correcto"
                          ? "border-green-600"
                          : "border-red-600"
                      }`}
                      type="number"
                      id="DNI"
                      name="dni"
                      minLength={7}
                      maxLength={8}
                      placeholder="Ingrese su DNI"
                    />
                  </div>

                  <div className="w-full text-center text-sm">
                    <label className="text-center" htmlFor="numeroDeTarjeta">
                      N° de Tarjeta
                    </label>
                    <input
                      onChange={handleChange}
                      className={`bg-gray-100 outline-none text-sm py-1 pl-2 rounded-md text-blue-600 capitalize border border-red-600 w-full ${
                        errorFormTarjeta.NumeroDeTarjeta === "correcto"
                          ? "border-green-600"
                          : "border-red-600"
                      }`}
                      type="number"
                      id="NumeroDeTarjeta"
                      name="numeroDeTarjeta"
                      placeholder="**** **** **** ****"
                      minLength={16}
                      maxLength={18}
                    />
                  </div>

                  <div className="w-full text-center">
                    <label
                      className="text-center text-sm"
                      htmlFor="vencimiento"
                    >
                      Vencimiento
                    </label>
                    <input
                      onChange={handleChange}
                      className={`bg-gray-100 outline-none text-sm py-1 pl-2 rounded-md text-blue-600 capitalize border border-red-600 w-full ${
                        errorFormTarjeta.vencimiento === "correcto"
                          ? "border-green-600"
                          : "border-red-600"
                      }`}
                      type="text"
                      id="vencimiento"
                      placeholder="mm/aaaa"
                      minLength={5}
                      maxLength={7}
                    />
                  </div>

                  <div className="w-full text-center text-sm">
                    {" "}
                    <label className="text-center" htmlFor="codigoDeSeguridad">
                      Cod. Seguridad
                    </label>
                    <input
                      onChange={handleChange}
                      className={`bg-gray-100 outline-none text-sm py-1 pl-2 rounded-md text-blue-600 capitalize border border-red-600 w-full ${
                        errorFormTarjeta.codigoDeSeguridad === "correcto"
                          ? "border-green-600"
                          : "border-red-600"
                      }`}
                      type="password"
                      id="codigoDeSeguridad"
                      placeholder="###"
                      maxLength={3}
                    />
                  </div>
                </div>
              ) : (
                <button
                  onClick={pagarAhora}
                  className={`w-full md:w-1/2 lg:w-full xl:w-1/2 mx-auto mt-5 mb-2 bg-red-600 text-white py-2 rounded-md font-semibold flex justify-center items-center ${
                    formaDePago ? "display-block" : "hidden"
                  }`}
                >
                  {procesando ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    ""
                  )}
                  {formaDePago === "Delivery" ? "Confirmar" : "Pagar Ahora"}
                </button>
              )}
              {errorFormTarjeta.nombreTitular === "correcto" &&
              errorFormTarjeta.DNI === "correcto" &&
              errorFormTarjeta.NumeroDeTarjeta === "correcto" &&
              errorFormTarjeta.vencimiento === "correcto" &&
              errorFormTarjeta.codigoDeSeguridad === "correcto" ? (
                <button
                  onClick={handleSubmit}
                  className={`w-full md:w-1/2 lg:w-full xl:w-1/2 mx-auto mt-5 mb-2 bg-red-600 text-white py-2 rounded-md font-semibold flex justify-center items-center ${
                    formaDePago ? "display-block" : "hidden"
                  }`}
                >
                  {procesando ? (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    ""
                  )}
                  {formaDePago === "Delivery" ? "Confirmar" : "Pagar Ahora"}
                </button>
              ) : null}
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
