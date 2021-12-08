import {useContext} from "react"
import {contexto}  from "./cartContext.js"

const Finalizado = ()=>{
    const {respuesta,fecha} = useContext(contexto)
    console.log(fecha)
    return(
            <h5>Gracias por su compra, la orden es el número : {respuesta}</h5>
        )
}

export default Finalizado