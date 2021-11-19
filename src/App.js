import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route,  } from "react-router-dom"
import Cart from "./components/Cart"
import {CustomProvider} from "./components/cartContext.js"

const App = ()=> {
  return(
    
    <BrowserRouter>
    <CustomProvider>
    <NavBar/>
    { <Route exact path="/"><ItemListContainer text="on line"/></Route> }
    { <Route exact path="/category/:id"><ItemListContainer text="on line" /></Route> }
    { <Route exact path="/item/:id" > <ItemDetailContainer text="del producto" /></Route> }
    { <Route exact path="/cart"><Cart></Cart></Route>}
    </CustomProvider> 
    </BrowserRouter>
    
  )
}

export default App

