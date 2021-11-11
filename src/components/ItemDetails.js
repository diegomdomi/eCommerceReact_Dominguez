import ItemCount from "./ItemCounts"
import {useState}   from "react"

const ItemDetail = ({productos}) => {
    const [counterFromChild,setCounterFromChild] = useState([])
   
    const receiveCountFromChild=(props)=>{
        console.log(props)
        setCounterFromChild(props)

    }
        return(
        <>
        <div className="container">
        <div className="row ">
        <div class="col s12 m6 l3">
                <div className="card ">
                    <div className="card-image"> 
                    <h5>{productos.title}</h5> 
                        <p>{productos.detail}</p>
                        <h4>{productos.precio}</h4>
                        <img src={productos.img} alt="img" width="150px"/> 
                    </div>
                        <ItemCount stock="5" initial="1" onAdd={receiveCountFromChild}/>
                </div>
            </div>
        </div>
        </div>


        </>
    )
}

export default ItemDetail
