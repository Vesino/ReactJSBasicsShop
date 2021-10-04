// React
import React from "react";
//Style
import "../style/carrito.css";

const Carrito = ({ carrito, setCarrito }) => {

    let total = carrito.reduce((total, item) => { 
            return total + item.precio
        }, 0)

    const handleDelete = id => {
        const newCarrito = carrito.filter(item => item.id !== id)
        setCarrito(
            newCarrito
        )
    }

  return (
    <div className="carrito">
      <h2>Tu carrito de compras</h2>
      <ul>
        {carrito.length === 0 ? (
          <p>No hay elementos en tu carrito</p>
        ) : (
          carrito.map((producto) => (
            <>
              <li key={producto.id}>
                {producto.nombre} ${producto.precio}
              </li>
              <button type="submit" onClick={ () => handleDelete(producto.id)}>Eliminar</button>
            </>
          ))
        )}
      </ul>
      <h1>Total $ {total}</h1>
    </div>
  );
};

export default Carrito;
