import { useEffect, useState } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import productos from './productos.json' 
import axios from 'axios'


function App() {
  const [Golosina, setGolosina] = useState([])
  const [Azucarado, setAzucarado] = useState([])
  const [Chocolat, setChocolat] = useState([])
  const [Pasteleri, setPasteleri] = useState([])
  const [Helado, setHelado] = useState([])
  const {Golosinas, Azucarados, Chocolate, Pasteleria, Helados} = productos
  const getGolosina = () => {
    axios.get("./src/productos.json")
    .then(res=>setGolosina(res.data.Golosinas))
  }
  const getAzucarado = () => {
    axios.get("./src/productos.json")
    .then(res=>setAzucarado(res.data.Azucarados))
  }
  const getChocolat = () => {
    axios.get("./src/productos.json")
    .then(res=>setChocolat(res.data.Chocolate))
  }
  const getPasteleri = () => {
    axios.get("./src/productos.json")
    .then(res=>setPasteleri(res.data.Pasteleria))
  }
  const getHelado = () => {
    axios.get("./src/productos.json")
    .then(res=>setHelado(res.data.Helados))
  }
  useEffect(() => {
    getGolosina()
    getAzucarado()
    getChocolat()
    getPasteleri()
    getHelado()
  }, [])
  return (
    <div className="App">
      <header>
        <Link to="/">
          <img src="./src/img/honeydukes_logo.png" width={300} alt="Honeydukes_logo"/>
        </Link>
        <div className="NavBar">
          <NavBar/>
        </div>
      </header>
      <div className='items'>
      <Routes>
        <Route path="/" element={<img src="./src/img/lechuzaVoladora.webp"/>}/>
        <Route path="/Golosinas" element={<ItemListContainer itemListContainer={Golosina}/>}/>
        <Route path="/Golosinas/:nombre" element={<ItemDetailContainer productos={productos}/>}/>
        <Route path="/Azucarados" element={<ItemListContainer itemListContainer={Azucarado}/>}/>
        <Route path="/Azucarados/:nombre" element={<ItemDetailContainer productos={productos}/>}/>
        <Route path="/Chocolate" element={<ItemListContainer itemListContainer={Chocolat}/>}/>
        <Route path="/Chocolate/:nombre" element={<ItemDetailContainer productos={productos}/>}/>
        <Route path="/Pasteleria" element={<ItemListContainer itemListContainer={Pasteleri}/>}/>
        <Route path="/Pasteleria/:nombre" element={<ItemDetailContainer productos={productos}/>}/>
        <Route path="/Helados" element={<ItemListContainer itemListContainer={Helado}/>}/>
        <Route path="/Helados/:nombre" element={<ItemDetailContainer productos={productos}/>}/>
        <Route path="/Lechuza" element={<img src="./src/img/lechuzaVoladora.webp"/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
