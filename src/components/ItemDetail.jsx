import React from 'react'
import {SimpleGrid,Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Image, } from '@chakra-ui/react'
import Item from './Item'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'



const ItemDetail = ({producto}) => {    
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
                <ItemCount/>
            </ButtonGroup>
        </CardFooter>
        <Divider />
    </Card>
    </SimpleGrid>

)
}

export default ItemDetail