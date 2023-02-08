import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { useContext } from "react"
import { ThemeContext } from "../App"
import { CartContext } from "../App"

const ItemDetail = ({nombre, descripcion, imagen, precio, id})=>{
    const nameClass = "detail-" + useContext(ThemeContext)
    const [cart, setCart] = useContext(CartContext)
    const agregarLechuza = (id) =>{
        setCart((changuito)=>{
            const itemEncontrado = changuito.find((item)=>item.id===id)
            if(itemEncontrado){
                return changuito.map((item) => {
                    if(item.id===id){
                        return {...item, quantity: item.quantity + 1}
                    }else {
                        return item
                    }
                })
            }else{
                return [...changuito, { quantity:1, nombre, descripcion, imagen, precio, id}]
            }
        })
    }
    return(
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        size='lg'
        >
            <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={imagen}
            alt='Dulce mágico'
            />
            <Stack className={nameClass}>
                <CardBody>
                    <Heading size='md'>{nombre}</Heading>
                    <Text py='2'>{descripcion}</Text>
                    <Text fontSize='2xl'>{precio} Sickles de Plata</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='gray' className={"button-" + nameClass} onClick={agregarLechuza}>
                        Agregar a la lechuza
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
        )
    }
export default ItemDetail