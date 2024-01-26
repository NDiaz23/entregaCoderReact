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

  const agregarProducto = (producto, contador) => {
    const prodAgregado = {...producto,cantidad: contador};

    //Verifico primero si me agregan el mismo producto en diferente momento
    const nuevoCarrito  = [...carrito];
    const prodEnCarrito = nuevoCarrito.find((producto) => producto.id === prodAgregado.id);


    if(prodEnCarrito){
        prodEnCarrito.cantidad = prodEnCarrito.cantidad + contador;
        setCarrito(nuevoCarrito);
    }else{
        nuevoCarrito.push(prodAgregado);
    }

    setCarrito(nuevoCarrito);
  }


  const cantidadCarrito = () => {
    return carrito.reduce((inc, prod) => inc + prod.cantidad, 0);
  }

  const precioTotal = () => {
    return carrito.reduce((inc, prod) => inc + prod.precio * prod.cantidad, 0);
  }

  const vaciarCarrito = () => {
    setCarrito([]);
  }

  return (
    <div className="App" bg='black.800'>
      <CartContext.Provider value={ {carrito, agregarProducto, cantidadCarrito, precioTotal, vaciarCarrito} }>

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