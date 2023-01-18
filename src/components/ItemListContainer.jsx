import { Card, CardHeader, CardBody, CardFooter, Text, Divider, Image, Stack, Heading, ButtonGroup, Button, background, color, SimpleGrid, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const ItemListContainer = ({itemListContainer}) => {
    return itemListContainer.map(({nombre,descripcion,precio,imagen}) => (
        <div key={nombre}>
        <Card maxW='sm' bgColor='white'>
            <Link to={`${nombre}`}>
            <CardBody>
                <Image
                    src={imagen}
                    alt='Dulce mágico'
                    borderRadius='lg'
                    h={256}
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{nombre}</Heading>
                    <Text>{descripcion}</Text>
                    <Text color='blue.600' fontSize='2xl'>{precio}</Text>
                </Stack>
            </CardBody>
            </Link>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Accio.
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Agregar al paquete de la lechuza.
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
        </div>
    ))
}
export default ItemListContainer