import { Link } from "react-router-dom"
import '../App.css';
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth";


export const NavBar = () => {
    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    }

    return (
        <div className="nav">
            <div className="links">
             <Link className="lnk" to="/"> HOME </Link>
             <Link className="lnk" to="/profile"> PROFILE </Link>
             {!user ? (
             <Link className="lnk" to="/login"> LOGIN </Link>
             ) : (
             <Link className="lnk" to="/createpost"> CREATE POST </Link>
             )}
            </div>
            <div className="userCred">
                {user && (
                <>
                    <p className="userData "> { user?.displayName } </p>
                    <img className="userAvatar " src={user?.photoURL || ""} alt="user avatar" />
                    <button className="btn" onClick={signUserOut}> LOG OUT </button>
                </>)}
            </div>
        </div>
    )
}