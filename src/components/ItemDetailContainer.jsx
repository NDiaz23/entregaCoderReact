import {useState,useEffect} from 'react'
import { getProductos } from '../asyncMock'
import ItemCount from './ItemCount'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { Container } from '@chakra-ui/react'

const ItemDetailContainer = () => {
    const [producto,setProducto] = useState([])

    const {productId} = useParams()


    
    useEffect(() => {
        //llamada a la API para obtener los productos
        getProductos()
          .then(response => {
            const productos = response
            if(productId > 0){
            const productoFiltrado = productos.find((producto) => producto.id == productId)
            setProducto(productoFiltrado)
            }
          })
          .catch(error => {
            console.log('Error al cargar los productos', error)
          })
      }, [])

    return (
        <div>
            <Container maxW='6xl' bg='black.600' centerContent>
              <ItemDetail producto = {producto}/>
            </Container>
        </div>
)
}

export default ItemDetailContainer