import {useState,useEffect} from 'react'
import { getProductos } from '../asyncMock'
import ItemCount from './ItemCount'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [productos,setProductos] = useState([])
    
    useEffect(() => {
        //llamada a la API para obtener los productos
        getProductos()
          .then(response => {
            setProductos(response)
          })
          .catch(error => {
            console.log('Error al cargar los productos', error)
          })
      }, [])

    return (
        <div>
            <ItemDetail productos = {productos}/>
        </div>
)
}

export default ItemDetailContainer