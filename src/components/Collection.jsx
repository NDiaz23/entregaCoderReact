import {useEffect, useState} from 'react'
//ItemListContainer
import {collection, getDocs, getFirestore} from "firebase/firestore"


const Collection = () => {
    const [products,setProducts] = useState([])
    
    useEffect(() => {

        const db = getFirestore()
        const itemsCollection = collection(db, "indumentaria");

        getDocs(itemsCollection).then((snapshot) =>{
            const docs = snapshot.docs.map((doc)=> doc.data())
            setProducts(docs)
        })

    })




    return (
        <div>
            {
                products.map((prod) =>(
                    <div key={prod.id}>
                        <h2>{prod.nombre}</h2>
                        <h3>{prod.precio}</h3>
                        <h3>{prod.imagen}</h3>
                    </div>
                    
                ))
            }
        </div>
    )
}

export default Collection