import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const myAxios = useAxios();
    const [, refetch] = useCart();
    const { name, price, image, recipe, _id } = item || {};
    const handleAddToCart = () => {
        // console.log(food);
        if(user && user.email){
            // console.log(user.email, food);
            const cart = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            myAxios.post('/carts', cart)
            .then(res =>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} Added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch()
                }
            })
            .catch(err =>{
                console.log(err);
            })

        }
        else{
            Swal.fire({
                title: "You are not logged In",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 text-white absolute right-3 px-3 py-2 top-5">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;