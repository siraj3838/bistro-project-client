import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaCalculator, FaCalendar, FaEnvelope, FaHome, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import useCart from "../Hooks/useCart";
import { ImSpoonKnife } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import useAdmin from "../Hooks/useAdmin";

const Dashboards = () => {
    const [cart] = useCart();

    const [isAdmin] = useAdmin();
    return (
        <div className="flex ">
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to={'/dashboard/adminHome'}>
                                    <FaHome></FaHome> Admin Home</NavLink>

                            </li>
                            <li>
                                <NavLink to={'/dashboard/addItems'}>
                                    <ImSpoonKnife></ImSpoonKnife> Add Items</NavLink>

                            </li>
                            <li>
                                <NavLink to={'/dashboard/manageItems'}>
                                    <FiMenu></FiMenu> Manage Items</NavLink>

                            </li>
                            <li>
                                <NavLink to={'/dashboard/manageBookings'}>
                                    <FaBook></FaBook> Manage bookings</NavLink>

                            </li>
                            <li>
                                <NavLink to={'/dashboard/allUsers'}>
                                    <FaUser></FaUser> all users</NavLink>

                            </li>
                           
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to={'/dashboard/userHome'}>
                                        <FaHome></FaHome> User Home</NavLink>

                                </li>
                                <li>
                                    <NavLink to={'/dashboard/reservation'}>
                                        <FaCalendar></FaCalendar> Reservation</NavLink>

                                </li>
                                <li>
                                    <NavLink to={'/dashboard/paymentHistory'}>
                                        <FaCalendar></FaCalendar> Payment History</NavLink>

                                </li>
                                <li>
                                    <NavLink to={'/dashboard/cart'}>
                                        <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink>

                                </li>
                                <li>
                                    <NavLink to={'/dashboard/review'}>
                                        <FaAd></FaAd> Add Review</NavLink>

                                </li>
                                <li>
                                    <NavLink to={'/dashboard/myBooking'}>
                                        <FaCalculator></FaCalculator> My Booking</NavLink>

                                </li>
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to={'/'}>
                            <FaHome></FaHome> Home</NavLink>

                    </li>
                    <li>
                        <NavLink to={'/ourShop/salad'}>
                            <FaSearch></FaSearch> Menu</NavLink>

                    </li>
                    <li>
                        <NavLink to={'/ourShop/contact'}>
                            <FaEnvelope></FaEnvelope> Contact</NavLink>

                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboards;