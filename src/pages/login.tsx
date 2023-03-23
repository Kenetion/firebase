import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import '../App.css';



export const Login = () => {

    const signInWithGoogle =async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
    }

    return (
    <div>
        <p>Login With Google To Continue</p>
        <button className="btn" onClick={signInWithGoogle}> Sign In With Google </button>
    </div>
    )
};