import Item from "./Item.js"
import ItemCount from "./ItemCounts.js"
import { useEffect } from "react"

const ItemList = ({productos}) => {
    useEffect(()=>{console.log(productos)}, [])
return (
    <div>
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
                        <ItemCount stock="5" initial="1"/>
                    </>
            })
            
        } 
    </div>
    
)    
}


export default ItemList
