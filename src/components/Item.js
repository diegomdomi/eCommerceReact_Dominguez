import ItemCount from "./ItemCounts"
import {Link} from "react-router-dom"

const Item = ({id,nombre,description,price, img}) => {

    return(
        <>
        <div className="container">
        <div className="row ">
            <div className="col s12 m6">
                <div className="card ">
                    <div className="card image">  
                        {/* <p>{id}</p> */}
                        <h4>{nombre}</h4>
                        <p>{description}</p>
                        <p>{price}</p>
                    <Link to={`/item/`+ id}>
                        <img src={img} alt="img" width="300px"/>
                    </Link>
                        <ItemCount stock="5" initial="1"/>
                    </div>
                </div>
            </div>
        </div>
        </div>

        </>
    )
}

export default Item