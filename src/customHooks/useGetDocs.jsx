import { getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"

function useGetDocs(coleccion) {
    const [producto, setProducto] = useState([])
    const getProducto = async () => {
        const querySnapshot = await getDocs(coleccion)
        setProducto(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    useEffect(() => {
        getProducto()
    }, [])
    return [producto, setProducto]
}

export default useGetDocs