import React from 'react'
import Link from 'next/link'

export default function CardHistorial({index,fecha,nombre,montoTotal,formaDePago,id}) {
  return (
    <div className="mx-auto overflow-hidden rounded-3xl bg-sky-100  shadow-xl shadow-gray-400 mt-10  lg:w-7/12 lg:flex lg:flex-row lg:h-auto">
          <div className="bg-sky-100 w-full p-2">
            <p className="flex items-start justify-start ">
              <h1 className="text-blue-600 font-bold m-auto  text-center border-b border-sky-600 text-lg">Pedido {index}</h1>
            </p>
            <h3 className="text-blue-800 font-bold p-2">
              Fecha: <span className="text-md">{fecha}</span>
            </h3>
            <h3 className="text-blue-800 font-bold p-2">
              Nombre: <span className="text-md">{nombre}</span>
            </h3>
            <h3 className="text-blue-800 font-bold p-2">
              Forma de Pago: <span className="text-md">{formaDePago}</span>
            </h3>
            <h3 className="text-blue-800 font-bold p-2">
              Monto del Total:{montoTotal}
            </h3>
            <div className="flex justify-end">
              <Link href={`/detalleHistorial/${id}`}>
                <a className="text-base py-1 mr-10 text-blue-600 hover:text-sky-500 font-bold hover:border-b hover:border-sky-400">
                  Ver Detalles
                </a>
              </Link>
            </div>
          </div>
        </div>
  )
}
