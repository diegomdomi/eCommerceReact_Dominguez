import {contexto}  from "./cartContext.js"
import {useContext} from "react"

const CartWidget = ()=> {
   const {cart} = useContext(contexto)
   console.log(cart)
    return(
      
    <span class="material-icons">
        add_shopping_cart
    </span>
    )
}

export default CartWidget
