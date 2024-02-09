import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <nav>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/wardrobe' >Wardrobe</NavLink>
            <NavLink to='addgarment' >Add a Garment</NavLink>
        </nav>
    )
}