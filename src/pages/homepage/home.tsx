import '../../App.css';
import { getDocs, collection } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { useEffect, useState } from 'react';
import { Post } from './post';
import { useAuthState } from 'react-firebase-hooks/auth';




export interface IPost {
    id: string;
    userId: string;
    title: string;
    username: string;
    description: string;
}

export const Home = () => {

    const [user] = useAuthState(auth);

    const [postsList, setPostsList] = useState<IPost[] | null>(null);
    const postsRef = collection(db, "posts");

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostsList(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as IPost[]);
    };

    useEffect (() => {
        getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    


    return (
    <div>
        {!user ? (<div>
            <h1 className='homeText'>Share your story with us!</h1>
        </div>) : (
        <div className='homePosts'>{postsList?.map((post) => (
        <Post post={post} />
        ))}
        </div>)}
    </div>
    );
};