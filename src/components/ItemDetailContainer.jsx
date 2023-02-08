import { useParams } from 'react-router-dom'
import useGetDoc from '../customHooks/useGetDoc'
import { doc } from 'firebase/firestore'
import { db } from '../../db/firebase-config'
import { useEffect, useState } from 'react'
import { CircularProgress } from '@chakra-ui/react'
import ItemDetail from './ItemDetail'

export const ItemDetailContainerGolosinas = ({hola}) => {
    const [loading, setLoading] = useState(true)
    const { id }= useParams()
    const [item]  = useGetDoc(doc(db, "Golosinas" , id))
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },500)
    },[])
    return (
        <>{loading?<CircularProgress isIndeterminate color='green.300' />:<ItemDetail nombre={item.nombre} descripcion={item.descripcion} imagen={item.imagen} precio={item.precio} id={item.id}/>}</>
        
    )
}
export const ItemDetailContainerAzucarados = ({hola}) => {
    const [loading, setLoading] = useState(true)
    const { id }= useParams()
    const [item]  = useGetDoc(doc(db, "Azucarados" , id))
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },500)
    },[])
    return (
        <>{loading?<CircularProgress isIndeterminate color='green.300' />:<ItemDetail nombre={item.nombre} descripcion={item.descripcion} imagen={item.imagen} precio={item.precio} id={item.id}/>}</>
    )
}
export const ItemDetailContainerChocolate = ({hola}) => {
    const [loading, setLoading] = useState(true)
    const { id }= useParams()
    const [item]  = useGetDoc(doc(db, "Chocolate" , id))
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },500)
    },[])
    return (
        <>{loading?<CircularProgress isIndeterminate color='green.300' />:<ItemDetail nombre={item.nombre} descripcion={item.descripcion} imagen={item.imagen} precio={item.precio} id={item.id}/>}</>
    )
}
export const ItemDetailContainerPasteleria = ({hola}) => {
    const [loading, setLoading] = useState(true)
    const { id }= useParams()
    const [item]  = useGetDoc(doc(db, "Pastelería" , id))
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },500)
    },[])
    return (
        <>{loading?<CircularProgress isIndeterminate color='green.300' />:<ItemDetail nombre={item.nombre} descripcion={item.descripcion} imagen={item.imagen} precio={item.precio} id={item.id}/>}</>
    )
}
export const ItemDetailContainerHelados = ({hola}) => {
    const [loading, setLoading] = useState(true)
    const { id }= useParams()
    const [item]  = useGetDoc(doc(db, "Helados" , id))
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },500)
    },[])
    return (
        <>{loading?<CircularProgress isIndeterminate color='green.300' />:<ItemDetail nombre={item.nombre} descripcion={item.descripcion} imagen={item.imagen} precio={item.precio} id={item.id}/>}</>
    )
}

const Hola = ({hola}) => {
    console.log("hola")
}
export default Hola