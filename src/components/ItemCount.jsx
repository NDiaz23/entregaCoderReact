import React from 'react'
import { useState } from 'react'
import {Button} from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemCount = ({cantidad, sumar, restar, agregarProducto}) => {

return (
    <div>   
        <p>Unidades:</p>
        <Button colorScheme='teal' size='xs' onClick={sumar}>
            +
        </Button>
        <Button>
            {cantidad}
        </Button>
        <Button colorScheme='teal' size='xs'onClick={restar}>
            -
        </Button>
        <Button className= "btnAgregar" onClick= {agregarProducto}>Agregar al carrito</Button>
    </div>
)
}

export default ItemCount