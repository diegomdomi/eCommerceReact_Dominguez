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
        <div className="container contador"> 
        <div className="divider"></div>
        <div className="section"> 
        <button onClick={incrementar} >+</button>
        <button onClick={decrementar} >-</button>
        <button disabled={contador <= 0} onClick={() => onAdd(contador)} className="waves-effect waves-light btn contador">Confirmar</button>
        <p>Cantidad : {contador}</p>
        </div>
        </div>
        </>

    )
}

export default ItemCount
