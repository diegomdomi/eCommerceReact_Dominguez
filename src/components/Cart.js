import {contexto}  from "./cartContext.js"
import {useContext} from "react"
import{NavLink} from "react-router-dom"

const Cart = ()=>{

    const {cart , vaciarCarrito , borrarProducto,totalCount} = useContext(contexto)
    if(cart.length === 0){
        return (
            <h4>Tu carrito está vacío, para acceder al catálogo hacé
                <NavLink to="/"> click aquí</NavLink></h4>
        )
    }else
    return(
    <>
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
                                    <p align="center">Total $ {producto.cantidad * producto.price }</p>
                                </div>
                                    <button onClick={() =>borrarProducto(producto.id)}>Eliminar Producto</button>
                            </div>
                        </div>
                        </>
                    })
                    
                } 
                <div class="col s6 offset-s6">
                    <span class="flow-text">
                        <p>Total a pagar $ {totalCount()}</p>
                        <button disabled={cart <= 0} onClick={vaciarCarrito}>vaciar carrito</button>
                        <button style={{"margin": "10px", "color":"green"}}>Finalizar compra</button>
                    </span>
                </div>
            </div>
            
        </div>
      
        
        
     </>           
    )
}


export default Cart
