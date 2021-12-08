import Item from "./Item.js"

const ItemList = ({productos}) => {
return (
    
    <div className="container">
        <div className="row">{
            productos.map(producto =>{
                return <>
                        <Item
                        id ={producto.id}
                        nombre={producto.title} 
                        description={producto.description}
                        price={producto.price}
                        img= {producto.img}

                        />
                    </>
            })
        } 
        </div>
    </div>
    
)    
}


export default ItemList
