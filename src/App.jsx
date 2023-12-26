import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'



const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
      </BrowserRouter>

      <ItemListContainer greeting={"Bienvenidos a TodoDeporte!"}/>
      <ItemDetailContainer/>
    </div>
  )
}

export default App