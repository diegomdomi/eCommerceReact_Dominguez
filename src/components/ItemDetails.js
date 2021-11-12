import ItemCount from "./ItemCounts"
import {useState}   from "react"
import {contexto}  from "./cartContext.js"
import {useContext} from "react"

const ItemDetail = ({productos}) => {
    const {agregarProducto} = useContext(contexto)
    // const [counterFromChild,setCounterFromChild] = useState([])
   
    const receiveCountFromChild=(props)=>{
        // console.log(props)
        // setCounterFromChild(props)
        agregarProducto(productos.title , props , productos.id , productos.img)

    }
        return(
        <>
        <div className="container">
         <div className="row ">
            <div class="col s3 m6 l3">
                <div className="card ">
                    <div className="card-image"> 
                        <h5>{productos.title}</h5> 
                        <p>{productos.detail}</p>
                        <h4>{productos.precio}</h4>
                        <img src={productos.img} alt="img" width="150px"/> 
                        <ItemCount stock="5" initial="1" onAdd={receiveCountFromChild}/>
                    </div>
                </div>
            </div>
        </div>
        </div>


        </>
    )
}

export default ItemDetail
