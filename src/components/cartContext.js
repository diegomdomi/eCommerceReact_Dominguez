import {createContext, useState} from "react"

export const contexto = createContext()
export const{Provider} = contexto

export const CustomProvider = ({children})=>{
    const [cart,setCart] = useState([])

    const agregarProducto = (producto,cantidad,id,img,price ) => {
        if(isInCart(id)){
            setCart(cart.map(item=>{
                if(item.id === id){
                item.cantidad += cantidad
                }
                return item
            }))
        }else{
            setCart([...cart , {producto,cantidad,id,img,price }])

        }
    }

    const isInCart=(id)=> {
        return cart.find(item=>item.id === id)
    }

    const borrarProducto = (id) =>{
        const nuevoArray = cart.filter(elemento=>elemento.id !== id)
        setCart(nuevoArray)
       
    }

    const counterWidget = () => {
        return cart.reduce((a,b)=>  (a += b.cantidad),0)
    }
    
    const totalCount =()=> {
        return cart.reduce((a,b)=>(a += (b.cantidad*b.price)),0)
    }

    const vaciarCarrito = () => { setCart([])}

    const valorContexto = {
        cart : cart,
        agregarProducto : agregarProducto,
        borrarProducto : borrarProducto,
        vaciarCarrito : vaciarCarrito,
        counterWidget : counterWidget,
        totalCount : totalCount,
    }

    return(
        <Provider value={valorContexto}>
        {children}
        </Provider>
    )

}