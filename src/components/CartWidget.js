import {contexto}  from "./cartContext.js"
import {useContext} from "react"

const CartWidget = ()=> {
   const {counterWidget} = useContext(contexto)
   console.log(counterWidget())
   
    return(
    <>
    <span class="material-icons"> add_shopping_cart</span>
    {counterWidget()===0 ? null : <span>{counterWidget()}</span> } 
    </>
    
    )
}

export default CartWidget
