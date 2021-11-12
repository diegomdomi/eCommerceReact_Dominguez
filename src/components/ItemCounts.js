import {useState} from "react"
import {NavLink}  from "react-router-dom"

const ItemCount = ({stock, initial, onAdd}) =>{

    const [contador, setContador] = useState (parseInt(initial))
    
    const incrementar = () =>{
        if(contador < stock) {
            setContador(contador + 1)
        }
    }

    const decrementar = ()=>{
        if(contador > 0) {
            setContador(contador - 1)
        }
    }

        
    return(
        <>
        <div className="container"> 
        <button onClick={incrementar} >+</button>
        <button onClick={decrementar} >-</button>
        <NavLink  to="/cart">
        <button  disabled={contador <= 0} onClick={() => onAdd(contador)} className="waves-effect waves-light btn">Comprar</button>
        </NavLink>
        <p>Cantidad {contador}</p>
        </div>
        </>

    )
}

export default ItemCount
