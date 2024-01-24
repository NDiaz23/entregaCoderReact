import {useState,useEffect} from 'react'
import { getProductos } from '../asyncMock'
import ItemCount from './ItemCount'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import { getFirestore, getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [producto,setProducto] = useState([])

    const {productId} = useParams()

    const db = getFirestore()
    
    useEffect(() => {
        const docProd = doc(db,"products", productId);

        getDoc(docProd).then((resp) =>{
          setProducto(
            {...resp.data(), id: resp.id}
          )
        } )
      }, [productId])

    return (
        <div>
            <Container maxW='6xl' bg='black.600' centerContent>
              <ItemDetail producto = {producto}/>
            </Container>
        </div>
)
}

export default ItemDetailContainer