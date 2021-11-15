// import ItemCount from "./ItemCounts"
import {Link} from "react-router-dom"

const Item = ({id,nombre,description,price,img}) => {

    return(
        <>
        <div className="col s3 m6 l3">
                <div className="card ">
                    <div className="card-image">
                        <Link to={`/item/`+ id}>
                        <img src={img} alt="img" width="150px" />
                        </Link>  
                    </div>
                    <h5 align="center">{nombre}</h5>
                    <div class="card-content">
                        <p align="center">{description}</p>
                        <p align="center">$ {price}</p>
                    </div>
                    
                        {/* <ItemCount stock="5" initial="1"/> */}
                </div>
        </div>

        </>
    )
}

export default Item