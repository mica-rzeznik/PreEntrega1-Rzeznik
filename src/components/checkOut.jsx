import {  Modal,  ModalOverlay,  ModalContent,  ModalHeader,  ModalFooter,  ModalBody,  ModalCloseButton, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot, Button, useDisclosure } from '@chakra-ui/react'

const checkOut = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} size={xl}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Confirmación del paquete de la lechuza</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>Nombre y apellido: {comprador.nombre} {comprador.apellido}</p>
                        <p>Dirección para enviar la lechuza: {comprador.lechuza}</p>
                        <p>Email: {comprador.email}</p>
                        <p>Resumen de compra: </p>
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>Producto</Th>
                                        <Th>Cantidad</Th>
                                        <Th isNumeric>Precio</Th>
                                    </Tr>
                                </Thead>
                                {productos.map ((producto)=>{
                                    return (
                                        <Tbody>
                                            <Tr>
                                                <Td>{producto.nombre}</Td>
                                                <Td>{producto.quantity}</Td>
                                                <Td isNumeric>{producto.precio}</Td>
                                            </Tr>
                                        </Tbody>
                                    )
                                })}
                                <Tfoot>
                                    <Tr>
                                        <Th>Total</Th>
                                        <Th>Sickles de plata</Th>
                                        <Th isNumeric> 
                                            {productos.reduce((acc, curr) => {
                                            return acc + (curr.precio * curr.quantity)
                                            }, 0)} 
                                        </Th>
                                    </Tr>
                                </Tfoot>
                            </Table>
                        </TableContainer>
                        <p>
                            Precio total: {productos.reduce((acc, curr) => {
                                return acc + curr.precio
                            }, 0)} sickles de plata</p>
                        <p>Fecha: {fecha}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>Aceptar</Button>
                        <Button variant='ghost' onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default checkOut