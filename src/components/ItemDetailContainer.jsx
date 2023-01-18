import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const ItemDetailContainer = ({productos}) => {
    const {nombre}= useParams()
    const categoria = useLocation().pathname.split("/")[1]
    const items = productos[categoria]
    const item = items.find((item) => item.nombre === nombre)
    return (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        size='lg'
        bgColor='white'
        >
            <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={item.imagen2}
            alt='Dulce mágico'
            />
            <Stack>
                <CardBody>
                    <Heading size='md'>{item.nombre}</Heading>
                    <Text py='2'>{item.descripcion}</Text>
                    <Text color='blue.600' fontSize='2xl'>{item.precio}</Text>
                </CardBody>
                <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                        Accio.
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Agregar al paquete de la lechuza.
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    )
}

export default ItemDetailContainer