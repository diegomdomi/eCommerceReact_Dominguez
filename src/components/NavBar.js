import CartWidget from "./CartWidget" 
import {NavLink} from "react-router-dom"
import Contacto from "./Contacto" 

const NavBar = () => {
    return(
        <header>
            <nav className=" red lighten-2" >
                <div class="nav-wrapper container">
                <NavLink  to="/" exact class="brand-logo" > Almacén Pastelero</NavLink>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>< NavLink exact to="/item/XqwiIxpeY5BA0cm5IdiS">Chocolate</NavLink></li>
                <li>< NavLink exact to ="/item/eWD3czvxoKZjSkLEXViP">Frutal</NavLink></li>
                <li><NavLink to ="/contacto">Contacto</NavLink></li>
                <li><NavLink to="/cart"><CartWidget/></NavLink></li>
                </ul>
                </div>
            </nav>
        </header>
    )

    }
    
    export default NavBar
