import React from 'react';

const Producto = ({producto, carrito, setCarrito, productos}) => {
    const {id, nombre, precio} = producto

    const handleSelectItem = id => {
        const producto = productos.filter(producto => producto.id === id)[0]
        const produtoInCarrito = carrito.find(item => item.id === producto.id)
        if (!produtoInCarrito) {
            setCarrito([
                ...carrito, producto
            ])
        } else {
            alert('The item is already in your carrito!')
        }
        
    }

    return (
        <>
            <h3>{nombre}</h3>
            <p>${precio}</p>
            <button
                type='submit'
                onClick={ () => handleSelectItem(id) }
            >
                Comprar
            </button>
        </>
    )
}
 
export default Producto;