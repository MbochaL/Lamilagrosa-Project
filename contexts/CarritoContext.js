import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("LMG-Carrito")) ?? [];
    carrito = carritoLS;
    setCarrito(carritoLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("LMG-Carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (pedido) => {
    setCarrito([...carrito, pedido]);
    totalCarrito();
  };

  const actualizarCarrito = (pedido) => {
    const carritoActualizado = carrito?.map((elemento) => {
      if (elemento.id === pedido.id) {
        return pedido;
      } else {
        return elemento;
      }
    });
    setCarrito(carritoActualizado);
  };

  const eliminarCarrito = (id) => {
    const respuesta = confirm("Deseas eliminar este producto?");
    if (respuesta) {
      const carritoActualizado = carrito?.filter(
        (elemento) => elemento.id !== id
      );
      setCarrito(carritoActualizado);
      totalCarrito();
    }
  };

  const eliminarTodo = () => {
    const respuesta = confirm("Deseas descartar tu carrito de compras?");
    if (respuesta) {
      setCarrito([]);
    }
  };

  const totalCarrito = () => {
    carrito?.reduce(
      (previousValue, currentValue) =>
        previousValue +
        (parseInt(currentValue.precio) +
          (currentValue.adicional ? currentValue.adicional : 0)) *
          currentValue.cantidad,
      0
    );
    return totalCarrito;
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        setCarrito,
        agregarCarrito,
        eliminarCarrito,
        actualizarCarrito,
        totalCarrito,
        eliminarTodo,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
