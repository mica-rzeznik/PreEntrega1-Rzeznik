import { Card, CardBody, CardFooter, Text, Divider, Image, Stack, Heading, Button, Center } from '@chakra-ui/react'
import { useContext } from "react"
import { ThemeContext } from "../App"
import { Link } from 'react-router-dom'

const ItemList = (item) => {
    const nameClass = "card-" + useContext(ThemeContext)
    return(
        <Card maxW='sm' key={item.id}>
            <Link to={`${item.id}`}>
                <CardBody className={nameClass}>
                    <Center>
                        <Image
                            src={item.imagen}
                            alt='Dulce mágico'
                            borderRadius='lg'
                            h={256}
                        />
                    </Center>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{item.nombre}</Heading>
                        <Text fontSize='2xl'>{item.precio} Sickles de Plata</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter className={nameClass}>
                    <Button colorScheme='gray' className={"button-" + nameClass}>
                        Accio
                    </Button>
                </CardFooter>
            </Link>
        </Card>
    )
}
export default ItemList