import React, { useEffect, useState } from "react";
import ProfileSideBar from "../components/ProfileSideBar";
import CardHistorial from '../components/Historial/CardHistorial'

export default function historial() {
  const [ventas, setVentas] = useState([])

  const fetchVentas=async()=>{
    const user=JSON.parse(localStorage.getItem('LMG-user'));
    const res=await fetch(`https://lamilagrosa-app.herokuapp.com/api/ventas/${user.id}`);
    const respuesta=await res.json();
    setVentas(respuesta);
  }

  useEffect(() => {
    fetchVentas();
  }, [setVentas])
  


  return (
    <>
      <ProfileSideBar />
      <div>
        <div className="bg-blue-500 h-full py-4">
          <h1 className="text-center font-bold text-2xl  text-white m-auto">
            Historial de Compras
          </h1>
        </div>
        {
          ventas.map((venta,index)=>{
            return(
              <CardHistorial key={index} id={venta._id} index={index+1} fecha={venta.fecha} nombre={venta.nombre} montoTotal={venta.montoTotal} formaDePago={venta.formaDePago} />
            )
          })
        }
      </div>
    </>
  );
}