import { NavLink } from "react-router-dom"
import "./Navbar.css"
function Navbar() {


    return (
        <nav className="Navbar">
            <NavLink to="/"><p>HOME</p></NavLink>
            <NavLink to="/size/large"><p>BIG STUFF</p></NavLink>
            <NavLink to="/size/medium"><p>MIDDLE STUFF</p></NavLink>
            <NavLink to="/size/small"><p>SMALL STUFF</p></NavLink>
        </nav>
    )
}

export default Navbar
