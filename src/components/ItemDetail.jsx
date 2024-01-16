import React, { useContext } from 'react'
import {SimpleGrid,Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Image, } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { useState } from 'react'



const ItemDetail = ({producto}) => {
    
    const {carrito, setCarrito} = useContext(CartContext);
    console.log(carrito)

    const[contador,setContador] = useState(1)

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


    const agregarProducto = () => {
        const prodAgregado = {...producto,cantidad: contador};

        //Verifico primero si me agregan el mismo producto en diferente momento
        const nuevoCarrito  = [...carrito];
        const prodEnCarrito = nuevoCarrito.find((producto) => producto.id === prodAgregado.id);


        if(prodEnCarrito){
            prodEnCarrito.cantidad = prodEnCarrito.cantidad + contador;
            setCarrito(nuevoCarrito);
        }else{
            nuevoCarrito.push(prodAgregado);
        }

        setCarrito(nuevoCarrito);
    }

return (
    <SimpleGrid spacing = {10} templateColumns='repeat(auto-fill,minmax(300px,1fr))'>
        <Card maxW='sm' borderColor='black' borderRadius='md' borderWidth='2px' align="center">
        <CardBody align="center">
            <Image
                src={producto.imagen}
                alt={producto.nombre}
                borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>{producto.nombre}</Heading>
            <Text>
                {producto.descripcion}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
                ${producto.precio}
            </Text>
            </Stack>
        </CardBody>
        <CardFooter>
            <ButtonGroup spacing='2'>
                <ItemCount cantidad={contador} sumar={sumar} restar={restar} agregarProducto = {agregarProducto}/>
            </ButtonGroup>
        </CardFooter>
        <Divider />
    </Card>
    </SimpleGrid>

)
}

export default ItemDetail