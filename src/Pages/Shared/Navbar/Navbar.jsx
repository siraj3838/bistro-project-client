import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    const navLists = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            HOME
        </NavLink>
        <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            CONTACT US
        </NavLink>
        {user && isAdmin && <NavLink
            to="/dashboard/adminHome"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            DASHBOARD
        </NavLink>}
        {user && !isAdmin && <NavLink
            to="/dashboard/userHome"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            DASHBOARD
        </NavLink>}
        <NavLink
            to="/ourMenu"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            OUR MENU
        </NavLink>
        <NavLink
            to="/ourShop/salad"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            OUR SHOP
        </NavLink>
    </>
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Logout Successfully",
                    icon: "success"
                });
            })
            .catch(err => {
                console.log(err);
            })
    }



    return (
        <div className="navbar fixed z-10 max-w-screen-xl mx-auto bg-opacity-30 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLists}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex items-center gap-7 font-semibold px-1">
                    {navLists}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <>
                    <Link to={'/dashboard/cart'}>
                        <button className="btn">
                            <FaShoppingCart className="text-2xl"></FaShoppingCart>
                            <div className="badge badge-secondary">+{cart.length}</div>
                        </button>
                    </Link>
                    <button onClick={handleLogout} className="btn btn-outline btn-accent mx-3">Logout</button>
                    <img className="w-24 h-24 rounded-full" src={user?.photoURL} alt="" />
                </>
                    :
                    <Link to={'/login'}>
                        <button className="btn btn-outline btn-accent">Login</button>
                    </Link>}
            </div>
        </div>
    );
};

export default Navbar;