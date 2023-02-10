import { createContext, useState } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { ItemDetailContainerAzucarados, ItemDetailContainerChocolate, ItemDetailContainerGolosinas, ItemDetailContainerPasteleria, ItemDetailContainerHelados } from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { Button } from '@chakra-ui/react'
import { collection } from 'firebase/firestore'
import useGetDocs from './customHooks/useGetDocs'
import { db } from "../db/firebase-config"
import CartContainer from './components/CartContainer'

export const ThemeContext = createContext(null)
export const CartContext = createContext()

function App() {
  const [golosinas, setGolosinas] = useGetDocs(collection(db, "Golosinas"))
  const [azucarados, setAzucarados] = useGetDocs(collection(db, "Azucarados"))
  const [chocolate, setChocolate] = useGetDocs(collection(db,"Chocolate"))
  const [pasteleria, setPasteleria] = useGetDocs(collection(db, "Pastelería"))
  const [helados, setHelados] = useGetDocs(collection(db, "Helados"))
  const [orders, setOrders] = useGetDocs(collection(db, "orders"))
  const [theme, setTheme] = useState("light")
  const [cart, setCart] = useState ([])
  const productos = [golosinas, azucarados, chocolate, pasteleria, helados]
  const nameClass = "app-" + theme 
  console.log(cart)
  return (
    <ThemeContext.Provider value={theme}>
      <CartContext.Provider value={[cart, setCart]}>
        <div className={nameClass}>
          <header>
            <Link to="/">
              <img src="https://i.imgur.com/lkKGKU4.png" width={300} alt="Honeydukes_logo"/>
            </Link>
            <div className='barra'>
              <NavBar orders={orders}/>
              <Button className={"button-" + nameClass} colorScheme='blackAlpha' onClick={()=>setTheme((theme ==="light") ? "dark" : "light")}>{(theme ==="light") ? "Nox" : "Lumos"}</Button>
            </div>
          </header>
          <div className='items'>
          <Routes>
            <Route path="/" element={<><img src="https://i.imgur.com/sRujgff.png"/> <p className='texto'>Bienvenidos Magos y brujas</p></>}/>
            <Route path="/Golosinas" element={<ItemListContainer itemListContainer={golosinas} setGolosinas={setGolosinas}/>}/>
            <Route path="/Golosinas/:id" element={<ItemDetailContainerGolosinas/>}/>
            <Route path="/Azucarados" element={<ItemListContainer itemListContainer={azucarados} setAzucarados={setAzucarados}/>}/>
            <Route path="/Azucarados/:id" element={<ItemDetailContainerAzucarados/>}/>
            <Route path="/Chocolate" element={<ItemListContainer itemListContainer={chocolate} setChocolate={setChocolate}/>}/>
            <Route path="/Chocolate/:id" element={<ItemDetailContainerChocolate/>}/>
            <Route path="/Pasteleria" element={<ItemListContainer itemListContainer={pasteleria} setPasteleria={setPasteleria}/>}/>
            <Route path="/Pasteleria/:id" element={<ItemDetailContainerPasteleria/>}/>
            <Route path="/Helados" element={<ItemListContainer itemListContainer={helados} setHelados={setHelados}/>}/>
            <Route path="/Helados/:id" element={<ItemDetailContainerHelados/>}/>
            <Route path="/Lechuza" element={<CartContainer orders={orders} setOrders={setOrders}/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
          </div>
        </div>
      </CartContext.Provider>
    </ThemeContext.Provider>
  )
}
export default App