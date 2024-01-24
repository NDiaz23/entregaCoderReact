import { getDoc, getFirestore, doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Document = () => {

    const {id} = useParams()
    const [product,setProduct] = useState([])


    useEffect(() => {

        const db = getFirestore()
        const oneItem = doc(db,"indumentaria",`b5sORVzt5ak49DJPmwta`)
        console.log(oneItem)

        getDoc(oneItem).then((snapshot) =>{
            if(snapshot.exists()){
                const doc = snapshot.data()
                setProduct(doc)
            }
        })
    },[])




  return (
    <div>
        Producto: {product.nombre}
        Precio:   {product.precio}
    </div>
  )
}

export default Document