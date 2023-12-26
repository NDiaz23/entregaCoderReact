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