import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import Item from './Item'

const ItemList = ({productos}) => {

  return (
    <SimpleGrid minChildWidth='120px' spacing='40px' templateColumns='repeat(auto-fill, minmax(400px, 1fr))' align='center'>
        {productos.map(prod => <Item key={prod.id} {...prod} />)}
    </SimpleGrid>
  )
}

export default ItemList