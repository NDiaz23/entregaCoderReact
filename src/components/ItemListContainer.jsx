import {useState,useEffect} from 'react'
import { getProductos } from '../asyncMock'
import ItemList from './ItemList'


const ItemListContainer = ({greeting}) => {
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
      <h2>{greeting}</h2>
      <ItemList productos = {productos}/>
    </div>
    
  )
}

export default ItemListContainer