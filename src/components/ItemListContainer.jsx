import { Card, CardBody, CardFooter, Text, Divider, Image, Stack, Heading, Button, Center } from '@chakra-ui/react'
import { useContext } from "react"
import { ThemeContext } from "../App"
import { Link } from 'react-router-dom'
import ItemList from './ItemList'


const ItemListContainer = ({itemListContainer}) => {
    const nameClass = "card-" + useContext(ThemeContext)
    return (
        <>
            {itemListContainer.map((item) => {
                return (
                    <ItemList {...item}/>
                )
            })}
        </>
    )
}
export default ItemListContainer