const ListadoIngredientes = ({ productoPrueba }) => {
  return (
    <>
      (
      {productoPrueba.ingredientes.map((ingrediente) => ingrediente).join(", ")}
      )
    </>
  );
};

export default ListadoIngredientes;
