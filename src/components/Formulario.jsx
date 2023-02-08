import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Button } from '@chakra-ui/react'
import { addDoc, collection, doc, getDocs } from 'firebase/firestore'
import { db } from '../../db/firebase-config'
import { useContext, useEffect, useState } from "react";
import { CartContext } from '../App';
import Total from './Total';

const Formulario = () =>{
    const [cart, setCart] = useContext(CartContext)
    const [cargando, setCargando] = useState(false)
    const [order, setOrder] = useState({})
    const [inputNombre, setInputNombre] = useState('')
    const [inputApellido, setInputApellido] = useState('')
    const [inputLechuza, setInputLechuza] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputEmail2, setInputEmail2] = useState('')
    // const [prueba, setPrueba] = useState ('')
    const crearOrden = async (e) => { 
        e.preventDefault()
        const orden = {
            nombre: inputNombre,
            apellido: inputApellido,
            lechuza: inputLechuza, 
            email: inputEmail,
            compra: [cart]
        }
        const ordersCollection = collection(db, "orders")
        await addDoc(ordersCollection, orden) 
        const data = await getDocs(ordersCollection) 
        setOrder(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        // console.log("mica kpa")
        setCargando(true)
        setTimeout(()=>{
            setCargando(false)
        },1500)
        // setInputNombre("")
        // setInputApellido("")
        // setInputLechuza("")
        // setInputEmail("")
        // setInputEmail2("")
        // setCart([])
    }
    const isError = inputEmail !== inputEmail2
    
    return(
        <form onSubmit={crearOrden}>
            <FormControl isRequired>
                <FormLabel>Nombre</FormLabel>
                <Input placeholder='Nombre' value={inputNombre} type="text" onChange={(e) => setInputNombre (e.target.value)}/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Apellido</FormLabel>
                <Input placeholder='Apellido' value={inputApellido} type="text" onChange={(e) => setInputApellido (e.target.value)}/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Dirección a donde enviar la lechuza</FormLabel>
                <Input placeholder='Lechuza' value={inputLechuza} type="text" onChange={(e) => setInputLechuza (e.target.value)}/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Dirección de email</FormLabel>
                <Input type='email' value={inputEmail} placeholder='Email' onChange={(e) => setInputEmail (e.target.value)} />
            </FormControl>
            <FormControl isInvalid={isError}>
                <FormLabel>Confirmación de email</FormLabel>
                <Input type='email' value={inputEmail2} placeholder='Email' onChange={(e) => setInputEmail2 (e.target.value) } />
                {!isError ? (
                <FormHelperText>
                    Repita su email, por favor.
                </FormHelperText>
                ) : (
                <FormErrorMessage>Los emails ingresados no coinciden.</FormErrorMessage>
                )}
            </FormControl>
            <Button isLoading={cargando} colorScheme='teal' variant='solid' type='submit'>
                Comprar
            </Button>
        </form>
    )
}
export default Formulario
