import React from "react";

export const BtnSeleccionar = ({ name, handleEnvio }) => {
  return (
    <button
      name={name}
      onClick={handleEnvio}
      className="bg-blue-600 py-1.5 px-4 text-white text-xs rounded-md"
    >
      Seleccionar
    </button>
  );
};


