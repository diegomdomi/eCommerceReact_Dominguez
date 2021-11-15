import CartWidget from "./CartWidget" 
import {NavLink, Switch, Link} from "react-router-dom"


const NavBar = () => {
    return(
        <header>
            <nav className=" red lighten-2">
                <div class="nav-wrapper container">
                <NavLink  to="/" exact class="brand-logo" > Almacén Pastelero</NavLink>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>< NavLink exact to="/category/1">Chocolate</NavLink></li>
                <li>< NavLink exact to ="/category/2">Frutal</NavLink></li>
                <li><NavLink to ="/Contacto/">Contacto</NavLink></li>
                <li><NavLink to="/cart"><CartWidget/></NavLink></li>
                </ul>
                </div>
            </nav>
        </header>
    )

    }
    
    export default NavBar
