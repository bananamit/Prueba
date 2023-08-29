import React, { useState } from "react";

export const Tienda = () => {
  const [productos, setProductos] = useState([]);
  const [nombreP, setNombreP] = useState("");
  const [cantidadP, setCantidadP] = useState(0);

  const agregarProd = () => {
    const nuevoProduc = {
      nombre: nombreP,
      cantidad: cantidadP,
    };
    setProductos((lista) => [...lista, nuevoProduc]);
    setNombreP("");
    setCantidadP(0);
  };

  const ponerNomProd = (e) => {
    setNombreP(e.target.value);
  };

  const aumentarCantidad = () => {
    setCantidadP(cantidadP + 1);
  };

  const disminuirCantidad = () => {
    if (cantidadP > 0) {
      setCantidadP(cantidadP - 1);
    }
  };

  return (
    <>
      <h1>Lista de productos</h1>

      <input
        type="text"
        placeholder="Nombre producto"
        value={nombreP}
        onChange={(event) => ponerNomProd(event)}
      />

      <button onClick={agregarProd}>agregar</button>

      <button onClick={aumentarCantidad}>+</button>
      <span>{cantidadP}</span>
      <button onClick={disminuirCantidad}>-</button>

      <ol>
        {productos.map((producto, indice) => {
          return (
            <li key={indice}>
              <span>{producto.nombre}</span>, cantidad:{" "}
              <span>{producto.cantidad}</span>
            </li>
          );
        })}
      </ol>
    </>
  );
};

