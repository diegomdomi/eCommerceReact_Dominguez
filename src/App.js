import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"

const App = ()=> {
  return(
    <>
    <NavBar/>
    {/* <ItemListContainer text="on line"/> */}
    <ItemDetailContainer id={1}/>
   </> 
  )
}

export default App

