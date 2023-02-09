import { Box, Button, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import { CartContext } from "../App"
import React from 'react'
import Total from './Total'
import { ImBin } from 'react-icons/Im'
import { useContext } from 'react'
import { ThemeContext } from '../App'

const Cart = () => {
    const nameClass = "cart-" + useContext(ThemeContext)
    const [cart, setCart] = useContext(CartContext)
    const quitarLechuza = (id) => {
        setCart((changuito)=>{
            if(changuito.find((item)=>item.id === id)?.quantity===1){
                return changuito.filter((item)=>item.id !== id)
            }else{
                return changuito.map ((item)=>{
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }
    const vaciarLechuza = () => {
        setCart([])
    }
    return(
        <Box w='100%' borderWidth='1px' borderRadius='lg' overflow='hidden' p={2} className={nameClass}>
            <TableContainer>
                <Table size='sm' className={nameClass}>
                    <Thead className={"h-"+nameClass}>
                        <Tr>
                            <Th>Nombre</Th>
                            <Th>Cantidad</Th>
                            <Th isNumeric>Precio</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    {cart.map((cosa) => {
                        return (
                            <Tbody key={cosa.nombre}>
                                <Tr>
                                    <Td>{cosa.nombre}</Td>
                                    <Td>{cosa.quantity}</Td>
                                    <Td isNumeric>{cosa.precio*cosa.quantity}</Td>
                                    <Td>
                                        <Button size='xs' colorScheme='gray' className={"button-" + nameClass} onClick={()=>quitarLechuza(cosa.id)}>
                                            <ImBin/>
                                        </Button>
                                    </Td>
                                </Tr>
                            </Tbody>
                        )
                    })}
                    <Tfoot className={"f-"+nameClass}>
                        <Tr>
                            <Th>Precio total</Th>
                            <Th>Sickles de plata</Th>
                            <Th isNumeric><Total/></Th>
                            <Th>
                                <Button size='xs' colorScheme='gray' className={"button-" + nameClass} onClick={()=>vaciarLechuza()}>
                                    <ImBin/>Todo
                                </Button>
                            </Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </Box>
    )
}
export default Cart