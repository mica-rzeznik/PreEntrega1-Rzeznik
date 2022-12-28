import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
const CartWidget = () =>{
    return (
        <Avatar src='./src/img/lechuza.png'>
            <AvatarBadge boxSize='1.25em' bg='green.500' borderColor='lightgreen'>
                7
            </AvatarBadge>
        </Avatar>
    )
}

export default CartWidget