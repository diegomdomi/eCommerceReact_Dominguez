import ItemCount from "./ItemCounts"
import {useState}   from "react"
import {contexto}  from "./cartContext.js"
import {useContext} from "react"
import {NavLink}  from "react-router-dom"



const ItemDetail = ({productos}) => {
    const {agregarProducto} = useContext(contexto)
    const [mostrar ,setMostrar] = useState(false)
   
    const receiveCountFromChild=(props)=>{
        console.log(props)
        agregarProducto(productos.title , props , productos.id , productos.img , productos.price)
        setMostrar(!mostrar)

    }
        return(
        <>
        <div className="container">
          <div className="row ">
             <div className="col s4">
                <div className="card ">
                    <div className="card-image"> 
                        <h5 align="center">{productos.title}</h5> 
                        <p align="center">{productos.detail}</p>
                        <p align="center"><b>Precio $ {productos.price}</b></p>
                        <img src={productos.img} alt="img" width="150px"/> 
                        <ItemCount stock="5" initial="1" onAdd={receiveCountFromChild}/>
                        {mostrar && <NavLink  to="/cart"> <button>ver carrito</button></NavLink>} 
                    </div>
                </div>
             </div>
           </div>
        </div>

           

        </>
    )
}

export default ItemDetail
