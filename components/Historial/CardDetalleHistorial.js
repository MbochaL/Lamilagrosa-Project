import React from 'react'
import Image from 'next/image';
export default function CardDetalleHistorial({imagen,nombre,precio,ingredientes}) {
    console.log(imagen);
  return (
    
        <div className="mx-auto overflow-hidden rounded-3xl bg-sky-100  shadow-xl shadow-gray-400 mt-10  lg:w-7/12 lg:flex lg:flex-row lg:h-auto">
          <Image
            src={imagen}
            alt="Picture of the author"
            height={280}
            width={360}
          />
          <div className="bg-sky-100 w-full p-2">
            <p className="flex items-start justify-start ">
              <h1 className="text-blue-600 font-bold m-auto  text-center border-b border-sky-600 text-lg">Pedido 1</h1>
            </p>
            <h3 className="text-blue-800 font-bold p-2">
              Nombre: <span className="text-md">{nombre}</span>
            </h3>
            <h3 className="text-blue-800 font-bold p-2">
              Precio: <span className="text-md">{precio}</span>
            </h3>
            <h3 className="text-blue-800 font-bold p-2">
              Ingredientes:
              {
                ingredientes.map(ingr=>{
                    return(
                        <p>*{ingr.tipo}</p>
                    )
                })
              }
            </h3>
            
          </div>
        </div>
  )
}
