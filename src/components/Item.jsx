import React from 'react'
import {Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Image, SimpleGrid,CardHeader} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'

const Item = ({id,nombre,descripcion,precio,imagen}) => {
return (
    <SimpleGrid spacing={20} borderColor='black' borderRadius='md' borderWidth='2px' templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
        <Card align="center">
            <CardHeader>
            <Heading size='lg'>{nombre}</Heading>
            </CardHeader>
            <CardBody>
            <Link to = {`/product/${id}`}>
                <Image
                    src={imagen}
                    alt={nombre}
                    borderRadius='lg'
                />
            </Link>  
            </CardBody>
            <CardFooter>
            <Link to = {`/product/${id}`}>
                <Button colorScheme='blue' variant='outline'>
                    Más info
                </Button>
            </Link>
            </CardFooter>
        </Card>
        </SimpleGrid>
)
}

export default Item