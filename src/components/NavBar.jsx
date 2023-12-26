import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Flex>
            <Link to = "/">
                <Box p='4' bg='blue.400' borderRadius='2px'>
                    TodoDeporte
                </Box>
            </Link>

            <Spacer bg='black.200'/>

            <Menu>
                <MenuButton p='4' bg='blue.400' borderRadius='2px'>
                    Categorias
                </MenuButton>
                <MenuList>
                
                <Link to = '/category/1'>
                    <MenuItem>Indumentaria</MenuItem>
                </Link>

                <Link to = '/category/2'>
                    <MenuItem>Calzado</MenuItem>
                </Link>

                <Link to = '/category/3'>
                    <MenuItem>Accesorios</MenuItem>
                </Link>

                <Link to = '/category/4'>
                    <MenuItem>Especiales</MenuItem>
                </Link>
                </MenuList>
            </Menu>


            <Spacer bg='black.200'/>

            <Link to = "/cart">
                <Box p='3' bg='blue.400' borderRadius='2px'>
                    <CartWidget/>
                </Box>
            </Link>
        </Flex>
    </div>
  )
}

export default NavBar