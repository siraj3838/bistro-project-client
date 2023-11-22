import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();
    if(loading || isAdminLoading){
        return <div className="max-w-screen-xl mx-auto flex justify-center mt-20"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user || isAdmin){
        return children
    }
    return <Navigate to={'/'} state={{from: location}} replace></Navigate>
};

export default AdminRoute;