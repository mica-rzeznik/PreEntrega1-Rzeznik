import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <img src="./src/img/honeydukes_logo.png" width={300} alt="Honeydukes_logo"/>
        <div className="NavBar">
          <NavBar/>
        </div>
      </header>
      <div className='items'>
      <ItemListContainer greeting={"Juro solemnmente que mis intenciones no son buenas"}/>
      <ItemListContainer greeting={"Travesura realizada"}/>
      </div>
    </div>
  )
}

export default App
