import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {

  const {carrito} = useContext(CartContext);

  return (
    <div className="container">
        <div>Carrito</div>

        {
          carrito.map((prod) => (
            <div key={prod.id}>
              <h2>{prod.nombre}</h2>
              <p>Precio por unidad: {prod.precio}</p>
              <p>Cantidad: {prod.cantidad}</p>
              <p>Precio total: {prod.precio * prod.cantidad}</p>
            </div>
            
            
          ))
        }

      

    </div>
    
    


  )
}

export default Cart