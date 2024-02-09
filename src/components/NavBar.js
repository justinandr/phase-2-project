import { NavLink } from "react-router-dom";
import './NavBar.css'

function NavBar() {
    return(
        <nav>
            <NavLink to='/' className='nav-link' >Home</NavLink>
            <NavLink to='/wardrobe' className='nav-link' >Wardrobe</NavLink>
            <NavLink to='addgarment' className='nav-link' >Add a Garment</NavLink>
        </nav>
    )
}

export default NavBar