import { getDoc } from 'firebase/firestore'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

function useGetDoc(eldoc) {
    const { id }= useParams()
    const [item, setItem] = useState({})
    const getItem = async (id) => {
        const itemDoc = await getDoc(eldoc)
        if (itemDoc.exists()) {
            setItem(itemDoc.data())
        } else {
            console.log("El ítem no existe")
        }
    }
    useEffect(() => {
        getItem(id)
    }, [])
    return [item]
}

export default useGetDoc