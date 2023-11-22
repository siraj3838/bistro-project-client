import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxios = () => {

    const navigate = useNavigate();
    const {logOut} = useContext(AuthContext);

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors before adding token', token);
        config.headers.authorization = `Barer ${token}`;
        return config;
    }, function(error){
        return Promise.reject(error);
    })
    axiosSecure.interceptors.response.use(function (response) {
        return response;
      }, async (error) => {
        const status = error.response.status;
        // console.log('status error in the interceptors',status);
        // logout the user if 401 and 403
        if(status === 401 || status === 403){
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error);
      });
    return axiosSecure
};

export default useAxios;