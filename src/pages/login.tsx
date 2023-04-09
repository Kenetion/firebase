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
    <div className="login">
        <p className="loginText">Login With Google To Continue</p>
        <button className="btn" onClick={signInWithGoogle}> Login With Google </button>
    </div>
    )
};