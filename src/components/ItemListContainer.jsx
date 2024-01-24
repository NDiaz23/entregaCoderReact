import {useState,useEffect} from 'react'
import { getProductos } from '../asyncMock'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import {collection, getFirestore, getDocs, query, where} from "firebase/firestore"


const ItemListContainer = ({greeting}) => {
  const [productos,setProductos] = useState([])

  const {category} = useParams()

  const db = getFirestore()


  useEffect(() => {
    const productos = collection(db, "products");

    const queryCategory = category ? query(productos, where("categoria","==",category)) : productos;

    getDocs(queryCategory).then((resp)=> {
      setProductos(
        resp.docs.map((doc) => {
          return {...doc.data(),id: doc.id}
        } )
      );
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