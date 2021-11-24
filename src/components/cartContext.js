import {createContext, useState} from "react"
import firebase from "firebase/app";
import {firestore}  from "./firebase"
export const contexto = createContext()
export const{Provider} = contexto

export const CustomProvider = ({children})=>{
    const [cart,setCart] = useState([])
    const [respuesta, setRespuesta] = useState([])

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


    const  finalizarCompra = ()=>{
        const usuario = {
            nombre : "Diego",
            email : "diegomdomi@gmail.com",
            telefono : "4545454545",
        }

        const orden = {
            buyer : usuario,
            items : cart,
            date : firebase.firestore.Timestamp.fromDate(new Date()),
            total :totalCount()
        }

            const db = firestore
            const collection = db.collection("ordenes")
            const query = collection.add(orden)
            query  
            .then((response)=>{
                setRespuesta(response.id)
            }) ;
                
          
         vaciarCarrito()               
    }
    const valorContexto = {
        cart : cart,
        agregarProducto : agregarProducto,
        borrarProducto : borrarProducto,
        vaciarCarrito : vaciarCarrito,
        counterWidget : counterWidget,
        totalCount : totalCount,
        finalizarCompra : finalizarCompra,
        respuesta : respuesta,
    }

    return(
        <Provider value={valorContexto}>
        {children}
        </Provider>
    )

}