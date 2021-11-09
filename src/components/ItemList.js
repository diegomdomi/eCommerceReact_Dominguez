import Item from "./Item.js"
import { useEffect } from "react"

const ItemList = ({productos}) => {
    useEffect(()=>{console.log(productos)}, [])
return (
    <div className="container">
        {
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
    
)    
}


export default ItemList
