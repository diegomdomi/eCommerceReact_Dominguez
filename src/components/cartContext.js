import {createContext, useState} from "react"

export const contexto = createContext()
export const{Provider} = contexto

export const CustomProvider = ({children})=>{
    const [cart,setCart] = useState([])

    const agregarProducto = (producto , cantidad, id , img ) => {
        if(isInCart(id)){
            setCart(cart.map(item=>{
                if(item.id === id){
                    item.cantidad += cantidad
                }
                return item
            }))
        }else{
            setCart([...cart , {producto , cantidad , id , img }])

        }
    }
    const isInCart=(id)=> {
        return cart.find(item=>item.id === id)
    }

    const borrarProducto = (id) =>{
        const nuevoArray = cart.filter(elemento=>elemento.id !== id)
        setCart(nuevoArray)
       
    }
    const vaciarCarrito = () => { setCart([])}

    const valorContexto = {
        cart : cart,
        agregarProducto : agregarProducto,
        borrarProducto : borrarProducto,
        vaciarCarrito : vaciarCarrito
    }

    return(
        <Provider value={valorContexto}>
        {children}
        </Provider>
    )

}