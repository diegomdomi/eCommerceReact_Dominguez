import { useState} from "react";
import{NavLink} from "react-router-dom"


const Formulario = ()=> {

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
    
    const enviarDatos = (event)=> {
        event.preventDefault();
        console.log({datos})
    }
    return(
        <>
        <div className="container "> 
        <h1>Formulario</h1>
        <form className="row" onSubmit={enviarDatos}>
            <div className="col s4">
                <input required="required"
                     placeholder = "Nombre"
                     className="form-control"
                     type="text"
                     name="nombre"
                     onChange={handleInputChange} 
                ></input>
            </div>
            <div className="col-md-3">
                <input
                placeholder = "Email"
                className="form-control"
                type="email"
                name="email"
                onChange={handleInputChange}
                
                ></input>
            </div>
            <div className="col-md-3">
                <input
            placeholder="telefono"
            className="form-control"
            type="text"
            name="telefono"
            onChange={handleInputChange}
            
            ></input>
            </div>
            <div className="col-md-3">
            {datos.nombre === ""? null : <NavLink to="/finalizado"> <button  className="btn btn" type="submit">Enviar</button></NavLink>} 
            </div>
        </form>
        </div>
        </>
    )
}

export default Formulario