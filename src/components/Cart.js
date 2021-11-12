import {contexto}  from "./cartContext.js"
import {useContext} from "react"

const Cart = ()=>{

    const {cart , vaciarCarrito , borrarProducto } = useContext(contexto)
    console.log(cart)
    return(
        <div className="container">
            <div className="row">
                {
                    cart.map(producto =>{
                        return <>
                        <div className="col s3 m6 l3">
                            <div className="card ">
                                <div className="card-image">
                                    <img src={producto.img} alt="img" width="150px" />
                                </div>
                                <h5 align="center">{producto.producto}</h5>
                                <div class="card-content">
                                    <p align="center">Cantidad {producto.cantidad}</p>
                                </div>
                                    <button onClick={() =>borrarProducto(producto.id)}>Eliminar Producto</button>
                            </div>
                        </div>
                        </>
                    })
                    
                } 
            </div>
            <button disabled={cart <= 0} onClick={vaciarCarrito}>vaciarCarrito</button>
        </div>
        
                
    )
}


export default Cart