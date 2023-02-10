import { Button, ButtonGroup, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { useContext } from "react"
import { ThemeContext } from "../App"
import { CartContext } from "../App"

const ItemDetail = ({nombre, descripcion, imagen, precio, id})=>{
    const nameClass = "detail-" + useContext(ThemeContext)
    const [cart, setCart] = useContext(CartContext)
    const producto = { nombre: nombre, descripcion: descripcion, imagen: imagen, precio: precio, id: id, quantity: 0 }

    const agregarLechuza = (id) =>{
        setCart((changuito)=>{
            const itemEncontrado = changuito.find((item) => item.id === id)
            if(itemEncontrado){
                return changuito.map((item) => {
                    if(item.id===id){
                        return {...item, quantity: item.quantity + 1}
                    }else {
                        return item
                    }
                })
            }else{
                return [...changuito, { ...producto, quantity:1}]
            }
        })
    }
    const quitarLechuza = (id) => {
        setCart((changuito)=>{
            const itemEncontrado = changuito.find((item) => item.id === id)
            if(itemEncontrado?.quantity===1){
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
    if (id){
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
                        <ButtonGroup>
                            <Button colorScheme='gray' className={"button-" + nameClass} onClick={()=> agregarLechuza(id)}>
                                Agregar a la lechuza
                            </Button>
                            <Button colorScheme='gray' className={"button-" + nameClass} onClick={()=> quitarLechuza(id)}>
                                Quitar de la lechuza
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Stack>
            </Card>
        )
    }else{
        return (
            <>
                <p className='texto'>
                    Accio no trajo ningún dulce. Vuelva a lanzar el hechizo.
                </p> 
            </>
        )
    }
    
    }
export default ItemDetail