import { Link } from "react-router-dom"
import '../App.css';
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth";
import login_white  from "../images/login_white.png"
import logout_white from "../images/logout_white.png"
import { useNavigate } from "react-router-dom";



export const NavBar = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
        navigate("/");
    }

    return (
        <div className="nav">
            <div className="links">
             {!user ? (<></>) : (<Link className="lnk" to="/">POSTS</Link>)}
             {/* <Link className="lnk" to="/profile"> PROFILE </Link> */}
             {!user ? (
             <Link className="loginLnk" to="/login">LOGIN<img className="loginImg" src={login_white} alt="login"/></Link>
             ) : (
             <Link className="lnk" to="/createpost">CREATE POST</Link>
             )}
            </div>
            <div className="userCred">
                {user && (
                <>
                    <p className="userData "> { user?.displayName } </p>
                    <img className="userAvatar " src={user?.photoURL || ""} alt="user avatar" />
                    <img className="logoutImg" onClick={signUserOut} src={logout_white} alt="logout"/>
                </>)}
            </div>
        </div>
    )
}