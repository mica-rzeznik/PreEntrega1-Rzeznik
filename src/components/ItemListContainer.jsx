import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
const ItemListContainer = ({greeting}) => {
    return (
        <Card maxW='md'>
            <CardBody className="item" borderRadius='lg' m={2}>
                <Text>{greeting}</Text>
            </CardBody>
        </Card>
    )
}
export default ItemListContainer