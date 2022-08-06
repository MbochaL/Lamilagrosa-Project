import React, { useEffect, useState } from "react";
export const useFetchGuarniciones = () => {
  const [guarnicion, setGuarnicion] = useState([]);

  const obtenerGuarnicion = async () => {
    const res = await fetch(
      "https://lamilagrosa-app.herokuapp.com/api/guarniciones"
    );
    const respuesta = await res.json();
    setGuarnicion(respuesta);
  };

  useEffect(() => {
    obtenerGuarnicion();
  }, [setGuarnicion]);

  return [guarnicion];
};
