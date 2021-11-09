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
            <div className="col s12 m6">
                <div className="card ">
                    <div className="card image">  
                        <p>{productos.detail}</p>
                        <h4>{productos.precio}</h4>
                        <img src={productos.img} alt="img" width="300px"/> 
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
