import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import About from './components/About'
import Cart from './components/Cart'
import { useState } from 'react'
import {CartContext} from './context/CartContext'




const App = () => {

  
  const [carrito, setCarrito] = useState([]);

  const user = "NicoDiaz";
  const edad = 26;

  return (
    <div className="App" bg='black.800'>
      <CartContext.Provider value={ {carrito, setCarrito} }>

        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path= '/' greeting={"Bienvenidos a TodoDeporte!"} element = {<ItemListContainer/>}/>
            <Route exact path= '/about' element = {<About/>}/>
            <Route exact path= '/cart' element = {<Cart/>}/>
            <Route exact path= '/category/:category' element = {<ItemListContainer/>}/>
            <Route exact path= '/product/:productId' element = {<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>

      </CartContext.Provider>



      {/* <ItemListContainer greeting={"Bienvenidos a TodoDeporte!"}/> */}
    </div>
  )
}

export default App