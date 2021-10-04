// React
import {Fragment, useState} from 'react';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
// Style



function App() {

  // Crear listado de productos
  const [ productos ] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 40 },
    { id: 3, nombre: 'Camisa Node.js', precio: 30 },
    { id: 4, nombre: 'Camisa Angular', precio: 20 },
  ]);
  
  const [carrito, setCarrito] = useState([])

  const fecha = new Date().getFullYear();
  console.log(carrito)
  return (
    <Fragment>
      <Header titulo='Tienda!'/>

      <h2>Lista de productos</h2>
        {productos.map(producto => (
          <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          setCarrito={setCarrito}
          />
        ))}
        <Carrito carrito={carrito} setCarrito={setCarrito}/>
      <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;
