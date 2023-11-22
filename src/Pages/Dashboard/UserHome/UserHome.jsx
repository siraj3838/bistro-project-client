import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const UserHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="px-6 my-6">
           <h2 className="text-3xl font-semibold">Hi, Welcome {user?.displayName ? user?.displayName : 'Back'}</h2>
        </div>
    );
};

export default UserHome;