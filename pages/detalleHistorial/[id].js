import React, { useEffect, useState } from 'react'
import ProfileSideBar from '../../components/ProfileSideBar';
import CardDetalleHistorial from '../../components/Historial/CardDetalleHistorial';

export default function DetalleHistorial(props) {
  const [detalleVentas, setDetalleVentas] = useState([])

  const fetchDetalleVentas=async()=>{
    const res=await fetch(`https://lamilagrosa-app.herokuapp.com/api/Detallesventas/${props.id}`);
    const respuesta=await res.json();
    setDetalleVentas(respuesta);
  }

  useEffect(() => {
    fetchDetalleVentas();
  }, [setDetalleVentas])
  return (
    <div>
        <ProfileSideBar />
        {
          detalleVentas.map(detalle=>{
            if(detalle.hasOwnProperty("id_menu")){
              return(
                <CardDetalleHistorial imagen={detalle?.id_menu?.imagen} nombre={detalle?.id_menu?.nombre} precio={detalle?.id_menu?.precio} ingredientes={detalle?.id_menu?.ingredientes}/>
              )
            }
            if(detalle.hasOwnProperty("id_guarnicion")){
              return(
                <CardDetalleHistorial imagen={detalle?.id_guarnicion?.imagen} nombre={detalle?.id_guarnicion?.nombre} precio={detalle?.id_guarnicion?.precio} ingredientes={detalle?.id_guarnicion?.ingredientes}/>
              )
            }
          })
        } 
    </div>
  )
}

DetalleHistorial.getInitialProps = (context) => {
    const { query } = context;
    const { id } = query;
  
    return { id };
  };