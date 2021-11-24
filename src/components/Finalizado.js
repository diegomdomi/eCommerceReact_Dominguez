import {useContext} from "react"
import {contexto}  from "./cartContext.js"

const Finalizado = ({})=>{
    const {respuesta} = useContext(contexto)
    return(
        <h4>Gracias por tu compra, tu orden de compra es <p>{respuesta}</p></h4> 
        )
}

export default Finalizado