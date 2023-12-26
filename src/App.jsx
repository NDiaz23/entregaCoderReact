import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import About from './components/About'
import Cart from './components/Cart'




const App = () => {
  return (
    <div className="App">
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




      {/* <ItemListContainer greeting={"Bienvenidos a TodoDeporte!"}/> */}
    </div>
  )
}

export default App