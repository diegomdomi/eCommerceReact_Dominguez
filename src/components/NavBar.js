import CartWidget from "./CartWidget" 
import {NavLink  } from "react-router-dom"
const NavBar = () => {
    return(
        <header>
            <nav className=" red lighten-2">
                <div class="nav-wrapper container">
                <NavLink  to="/" exact class="brand-logo" > Almacén Pastelero</NavLink>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><NavLink to="/category/1 " exact >Chocolate</NavLink></li>
                <li><NavLink to ="/category/2"exact>Frutas</NavLink></li>
                <li><NavLink to ="/Contacto/">Contacto</NavLink></li>
                <CartWidget/>
                </ul>
                </div>
            </nav>
        </header>
    )

    }
    
    export default NavBar
