import React, { useRef } from "react";
import Guarnicion from "./Guarnicion";

const ListadoGuarniciones = ({ guarniciones }) => {
  const scroll = useRef(null);
  console.log(scroll.current);
  return (
    <ul
      className="snap-x snap-mandatory overflow-x-scroll grid grid-flow-col gap-x-1 h-[100px]"
      ref={scroll}
    >
      {guarniciones.map((guarnicion, i) => (
        <Guarnicion key={i} guarnicion={guarnicion} />
      ))}
    </ul>
  );
};

export default ListadoGuarniciones;
