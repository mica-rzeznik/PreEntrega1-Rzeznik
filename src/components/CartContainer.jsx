import React, { useContext, useState } from 'react'
import { CartContext } from "../App"
import Formulario from './Formulario'
import Cart from './Cart'

const CartContainer = () => {
    const [cart, setCart] = useContext(CartContext)
    // if(cart == 0){
    //     return (
    //         <>
    //             <img src='https://i.imgur.com/p2hL7R1.png' width={300}/>
    //             <p className='texto'>Lechuza en la lechucería</p>
    //         </>
    //     )
    // }else{
        return (
            <div className='contenedorCarrito'>
                <Cart/>
                <Formulario/>
            </div>
        )
    // }
}

export default CartContainer