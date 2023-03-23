import { Link } from "react-router-dom"
import '../App.css';


export const NavBar = () => {
    return (
        <div className="nav">
             <Link className="lnk" to="/"> HOME </Link>
             <Link className="lnk" to="/profile"> PROFILE </Link>
             <Link className="lnk" to="/login"> LOGIN </Link>
             <Link className="lnk" to="/contact"> CONTACT </Link>
        </div>
  
    )
}