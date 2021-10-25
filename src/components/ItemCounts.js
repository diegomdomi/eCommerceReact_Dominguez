import {useState} from "react"
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
        <button onClick={incrementar} >Sumar</button>
        <button onClick={decrementar} >Restar</button>
        <button  disabled={contador <= 0} onClick={() => onAdd(contador)} className="waves-effect waves-light btn">Agregar al Carrito</button>
        <p>{contador}</p>
        </>

    )
}

export default ItemCount
