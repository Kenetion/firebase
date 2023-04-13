import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import '../App.css';
import { useNavigate } from "react-router-dom";



export const Login = () => {
    const navigate = useNavigate();

    const signInWithGoogle =async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate("/");
    }

    return (
        <div className="loginBody">
            <p className="loginText">To proceed:</p>
        <button type="button" className="login-with-google-btn" onClick={signInWithGoogle}>
            Sign in with Google
        </button>
        </div>
    )
};