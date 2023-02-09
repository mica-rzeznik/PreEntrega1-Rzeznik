import axios from "axios"
import { useEffect, useState } from "react"

function useAxios(url) {
    const [dulce, setDulce] = useState([])
    useEffect(() => {
        axios.get(url)
        .then((dulce) => setDulce(dulce.data))
    }, [])
    return {dulce}
}
//lo hice cuando todavía no usábamos firebase para tomar los productos desde el json. Lo dejo por las dudas
export default useAxios
