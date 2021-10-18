import CartWidget from "./CartWidget" 
const NavBar = () => {
    return(
        <header>
            <nav className=" red lighten-2">
                <div class="nav-wrapper container">
                <a href="#" class="brand-logo">Almacén Pastelero</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
                <CartWidget/>
                </ul>
                </div>
            </nav>
        </header>
    )

    }
    
    export default NavBar
