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

export default useAxios
