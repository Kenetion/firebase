import "../../App.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";


interface CreateFormData {
    title: string;
    description: string;
}

export const CreateForm = () => {

    const navigate = useNavigate();

    const [user] = useAuthState(auth);


    const schema = yup.object().shape({
        title: yup.string().required("You must add a title."),
        description: yup.string().required("You must add a description."),
    })

    const { register, handleSubmit, formState: {errors} } = useForm<CreateFormData>({
           resolver: yupResolver(schema)})
    

    const postRef = collection(db, "posts");

    const onCreatePost = async (data: CreateFormData) => {
        await addDoc(postRef, {
            ...data,
            username: user?.displayName,
            userId: user?.uid,

        })

        navigate("/");
    }

    return (
            <form className="form" onSubmit={handleSubmit(onCreatePost)} >
                <input className="formField title" placeholder="Title..." {...register("title")} />
                <p className="error"> {errors.title?.message} </p>
                <textarea className="formField" placeholder="Description..." {...register("description")} />
                <p className="error"> {errors.description?.message} </p>
                <input className="submit btn" type="submit"/>
            </form>
    )
}