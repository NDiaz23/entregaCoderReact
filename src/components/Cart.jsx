import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import {Card, CardBody, Stack, Heading, Text,CardFooter,Button, Image } from '@chakra-ui/react'

const Cart = () => {

  const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

  const vaciarCarro = () => {
    vaciarCarrito();
  }


  return (
    <div className="container">
        <Text fontSize='6xl'>Carrito</Text>

        {
          carrito.map((prod) => (

          <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
          <Image objectFit='cover' maxW={{ base: '100%', sm: '400px' }} src={prod.imagen} alt={prod.nombre}/>

          <Stack>
            <CardBody>
              <Heading size='md'>{prod.nombre}</Heading>
                <Text py='2' fontSize={20}><Text as='b'>Precio:</Text>  {prod.precio}</Text>
                <Text py='2' fontSize={20}><Text as='b'>Cantidad:</Text>  {prod.cantidad}</Text>
                <Text py='2' fontSize={20}><Text as='b'>Precio total:</Text> ${prod.precio * prod.cantidad}</Text>
            </CardBody>
          </Stack>
          </Card> 
          ))
        }


        {/* Condiciono estos campos si existen datos en el carrito */}
        { 
          carrito.length > 0 ?
          <div>
              <Text fontSize='6xl'>El total de su compra es de: ${precioTotal()} </Text>
              <Button variant='solid' colorScheme='blue' onClick={vaciarCarro}>Vaciar mi carrito</Button>
          </div>
          :  <Text fontSize='4xl'>Aún no se encuentran elementos en el carrito </Text>
        }
    </div>
  )
}

export default Cart