import ItemCount from "./ItemCounts"

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
                        <img src={img} alt="img" width="300px"/>
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