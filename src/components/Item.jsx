import React from 'react'
import {Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Image} from '@chakra-ui/react'
import ItemCount from './ItemCount'

const Item = ({nombre,descripcion,precio,imagen}) => {
return (
    <Card maxW='sm'>
        <CardBody>
            <Image
                src={imagen}
                alt={nombre}
                borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>{nombre}</Heading>
            <Text>
                {descripcion}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
                ${precio}
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
)
}

export default Item