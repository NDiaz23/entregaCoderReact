import React from 'react'
import { useState } from 'react'
import {Button} from '@chakra-ui/react'

const ItemCount = () => {

    const[contador,setContador] = useState(0)

    const sumar = () => {
        if (contador < 10){
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 0){
            setContador(contador - 1)
        }
    }

return (
    <div>   
        <Button colorScheme='teal' size='xs' onClick={sumar}>
            +
        </Button>
        <Button>
            Agregar al carrito {contador}
        </Button>
        <Button colorScheme='teal' size='xs'onClick={restar}>
            -
        </Button>
    </div>
)
}

export default ItemCount