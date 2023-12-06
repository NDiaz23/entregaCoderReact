import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        <Flex>
            <Box p='4' bg='blue.400'>
                TodoDeporte
            </Box>
            <Spacer />

            <Menu>
                <MenuButton p='4' bg='blue.400'>
                    Categorias
                </MenuButton>
                <MenuList>
                    <MenuItem>Indumentaria</MenuItem>
                    <MenuItem>Calzado</MenuItem>
                    <MenuItem>Accesorios</MenuItem>
                    <MenuItem>Marcas</MenuItem>
                    <MenuItem>Especiales</MenuItem>
                </MenuList>
            </Menu>
            <Spacer />

            <Box p='4' bg='blue.400'>
                <CartWidget/>
            </Box>
        </Flex>
    </div>
  )
}

export default NavBar