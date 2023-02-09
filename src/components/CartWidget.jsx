import { Avatar, AvatarBadge} from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from "../App"

const CartWidget = () =>{
    const [cart, setCart] = useContext(CartContext)
    const cantidadTotal = cart.reduce((acc, curr) => {
        return acc + curr.quantity
    }, 0)
    return (
        <Avatar src='./src/assets/img/lechuza.png'>
            <AvatarBadge boxSize='1.25em' bg='green.500' borderColor='lightgreen'>
                {cantidadTotal}
            </AvatarBadge>
        </Avatar>
    )
}

export default CartWidget