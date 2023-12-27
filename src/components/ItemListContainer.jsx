import {useState,useEffect} from 'react'
import { getProductos } from '../asyncMock'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { Container } from '@chakra-ui/react'


const ItemListContainer = ({greeting}) => {
  const [productos,setProductos] = useState([])

  const {category} = useParams()
  
  useEffect(() => {
    //llamada a la API para obtener los productos
    getProductos()
      .then(response => {
        const productos = response
        const productosPorCategoria = productos.filter((producto) => producto.categoria == category)
        
        category ? setProductos(productosPorCategoria) : setProductos(productos)
      })
      .catch(error => {
        console.log('Error al cargar los productos', error)
      })
  }, [category])
  
  return (
    <div id="navBarItems">
      <h2>{greeting}</h2>
      <Container maxW='6xl' bg='black.600' centerContent>
        <ItemList productos = {productos}/>
      </Container>
    </div>
    
  )
}

export default ItemListContainer