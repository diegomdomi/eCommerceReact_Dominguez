

const Item = ({id,nombre,description,price, img}) => {

    return(
        <div>
           <p>{id}</p>
           <p>{nombre}</p>
           <p>{description}</p>
           <p>{price}</p>
            <p>{img}</p> 
            <img src={img} alt="img"/>
        </div>


    )
}

export default Item