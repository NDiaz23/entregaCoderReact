import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {

  const {cantidadCarrito} = useContext(CartContext);

  return (
    <div>
      <Link to = '/cart'>
      <AiOutlineShoppingCart/>{cantidadCarrito()}
      </Link>
    </div>
  )
}

export default CartWidget