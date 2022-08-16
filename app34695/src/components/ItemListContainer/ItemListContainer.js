import './ItemListContainer.css'
import { useState, useEffect } from 'react'
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom' 
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = !categoryId 
            ? collection(db, 'products')
            : query(collection(db, 'products'), where('category', '==', categoryId))

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        // const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
        // asyncFunction(categoryId).then(response => {
        //     setProducts(response)
        // }).catch(error => {
        //     console.log(error)
        // }).finally(() => {
        //     setLoading(false)
        // })  
    }, [categoryId])


    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    // if(products.length === 0) {
    //     return categoryId ? <h1>No hay productos en nuestra categoria {categoryId}</h1> : <h1>No hay productos disponibles</h1>
    // }

    return (
        <div onClick={() => console.log('click en itemlistcontainer')}>
            <h1>{`${greeting} ${categoryId || ''}`}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer