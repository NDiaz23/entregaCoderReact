import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import { Image,Text,Button } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        <Flex>
            <Link to = "/">
                <Box p='4' bg='black.800' borderRadius='2px'>
                    <Image
                        boxSize='50px'
                        objectFit='cover'
                        src='data:image/png;base64,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'
                    />
                </Box>
            </Link>

            <Menu>
                <MenuButton as={Button} px={6} h={12} bg='black' borderRadius='2px' colorScheme='black'>
                <Text h='1'>Categorias</Text>
                </MenuButton>
                <MenuList>
                
                <Link to = '/category/clothes'>
                    <MenuItem>Indumentaria</MenuItem>
                </Link>

                <Link to = '/category/shoes'>
                    <MenuItem>Calzado</MenuItem>
                </Link>

                <Link to = '/category/accesories'>
                    <MenuItem>Accesorios</MenuItem>
                </Link>

                <Link to = '/category/specials'>
                    <MenuItem>Especiales</MenuItem>
                </Link>
                </MenuList>
            </Menu>

            <Spacer bg='black.800'/>


            <Link to = '/category/clothes'>
                <Box as='button' p='3' bg='#D8D8D8' borderRadius='md' borderColor='#000000' color='black' px={6} h={12}>
                <Text>Indumentaria</Text>
                </Box>
            </Link>
            <Link to = '/category/shoes'>
                <Box as='button' p='3' bg='#D8D8D8' borderRadius='md' borderColor='#000000' color='black' px={6} h={12}>
                    <Text>Calzado</Text>
                </Box>
            </Link>
            <Link to = '/category/accesories'>
                <Box as='button' p='3' bg='#D8D8D8' borderRadius='md' borderColor='#000000' color='black' px={6} h={12}>
                <Text>Accesorios</Text>
                </Box>
            </Link>
            <Link to = '/category/specials'>
                <Box as='button' p='3' bg='#D8D8D8' borderRadius='md' borderColor='#000000' color='black' px={6} h={12}>
                <Text>Especiales</Text>
                </Box>
            </Link>


            <Spacer bg='black.800'/>

            <Link to = "/cart">
                <Box p='3' bg='#D8D8D8' borderRadius='2px'>
                    <CartWidget/>
                </Box>
            </Link>
        </Flex>
    </div>
  )
}

export default NavBar