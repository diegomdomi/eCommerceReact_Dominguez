import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route,  } from "react-router-dom"
import Cart from "./components/Cart"

const App = ()=> {
  return(
    
    <BrowserRouter>
    
    <NavBar/>
    { <Route exact path="/"><ItemListContainer text="on line"/></Route> }
    { <Route exact path="/category/:id"><ItemListContainer text="on line" /></Route> }
    { <Route exact path="/item/:id" > <ItemDetailContainer text="on line" /></Route> }
    { <Route exact path="/cart"><Cart></Cart></Route>}
  

    {/* <ItemListContainer text="on line"/
    <ItemDetailContainer id={1}/>*/ }
   </BrowserRouter>
    
  )
}

export default App

