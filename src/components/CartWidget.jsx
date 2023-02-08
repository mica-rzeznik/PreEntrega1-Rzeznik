import { Avatar, AvatarBadge} from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from "../App"

const CartWidget = () =>{
    const [cart, setCart] = useContext(CartContext)
    return (
        <Avatar src='./src/assets/img/lechuza.png'>
            <AvatarBadge boxSize='1.25em' bg='green.500' borderColor='lightgreen'>
                {cart.length}
            </AvatarBadge>
        </Avatar>
    )
}

export default CartWidget