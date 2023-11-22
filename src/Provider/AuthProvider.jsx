import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const myAxios = useAxiosPublic();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loggedInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLoggedIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('Current User', currentUser);
            if(currentUser){
                const userInfo = {email: currentUser.email}
                myAxios.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token);
                        setLoading(false)
                    }
                })
            }
            else{
                localStorage.removeItem('access-token');
                setLoading(false)
            }
            
        });
        return ()=>{
           return unSubscribe();
        }
    },[myAxios])
    const myAuth = {
        user,
        loading,
        createUser,
        loggedInUser,
        googleLoggedIn,
        logOut,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={myAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;