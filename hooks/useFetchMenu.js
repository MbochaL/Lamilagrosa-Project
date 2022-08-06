import { useEffect, useState } from "react";
export const useFetchMenu = () => {
  const [menus, setMenus] = useState([]);

  const obtenerMenus = async () => {
    const res = await fetch(
      "https://lamilagrosa-app.herokuapp.com/api/comidas"
    );
    const respuesta = await res.json();
    setMenus(respuesta);
  };

  useEffect(() => {
    obtenerMenus();
  }, [setMenus]);

  return [menus];
};
