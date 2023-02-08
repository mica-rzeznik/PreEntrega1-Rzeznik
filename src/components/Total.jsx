import { useContext } from "react"
import { CartContext } from "../App"

const Total =() =>{
    const [cart, setCart] = useContext(CartContext)
    return(
        cart.reduce(
            (accumulator, currentValue) => accumulator + currentValue.precio,
            0)
    )
}

export default Total