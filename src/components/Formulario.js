import { useState} from "react";
import{NavLink} from "react-router-dom"
import {contexto}  from "./cartContext.js"
import {useContext} from "react"



const Formulario = ()=> {

    const{finalizarCompra}=useContext(contexto)

    const [datos, setDatos] = useState({
        nombre : "",
        email:"",
        telefono: "",
    })

    const handleInputChange = (event)=> {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    
   
    return(
        <>
        <div className="container "> 
        <h3>Formulario de compra</h3>
        <form className="row" >
            <div className="col s3 m6 l4">
                <input required="required"
                placeholder = "Nombre"
                className="form-control"
                type="text"
                name="nombre"
                onChange={handleInputChange} 
                ></input>
            </div>
            <div className="col s3 m6 l4">
                <input
                placeholder = "Apellido"
                className="form-control"
                type="text"
                ></input>
            </div>

            <div className="col s3 m6 l6">
                <input
                placeholder = "Email"
                className="form-control"
                type="email"
                name="email"
                onChange={handleInputChange}
                ></input>
            </div>
            <div className="col s3 m6 l6"></div>

            <div className="col s3 m6 l8">
                <input
                placeholder="telefono"
                className="form-control"
                type="text"
                name="telefono"
                onChange={handleInputChange}
                ></input>
            </div>
           
          

            <div className="col s3 m6 l8">
            {datos.telefono === ""? null : <NavLink to="/finalizado"> <button  className="btn btn" type="submit" onClick={() => finalizarCompra(datos)} >Enviar</button></NavLink>} 
           </div>
        </form>
        </div>
        </>
        
    )
}

export default Formulario