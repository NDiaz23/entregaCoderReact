import {useEffect, useState} from 'react'
//ItemListContainer
import {Collection, getDocs, getFirestore} from "firebase/firestore"


const Collection = () => {
    const [products,setProducts] = useState([])

    return (
        <div>Collection</div>
    )
}

export default Collection