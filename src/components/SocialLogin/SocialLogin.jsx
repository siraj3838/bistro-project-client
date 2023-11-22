import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLoggedIn} = useContext(AuthContext);
    const myAxios = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLoggedIn()
        .then(res =>{
            console.log(res.user);
            const userInfo = {
                email: res.user?.email,
                name: res.user?.displayName
            }
            myAxios.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/')
            })
            .catch(error =>{
                console.log(error);
            })
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className="px-9 mb-5">
            <div className="divider"></div> 
                <button onClick={handleGoogleLogin} className="btn btn-accent w-full">
                    <FaGoogle></FaGoogle> Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;