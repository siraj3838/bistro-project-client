import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxios from "../../../Hooks/useAxios";
import { Link } from "react-router-dom";

const Card = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((pre, cur) => pre + cur.price, 0)

    const myAxios = useAxios();


    const deleteHandle = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "Delete this food!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                myAxios.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This Food has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })





            }
        });
    }

    return (
        <div className="mt-5">
            <div className="flex justify-between px-10 uppercase font-semibold">
                <h3 className="text-4xl">Total Order: {cart.length}</h3>
                <h3 className="text-4xl">Total Price: {totalPrice}$</h3>
                {cart.length ?  <Link to={'/dashboard/payment'}>
                    <button className="btn btn-primary">Pay</button>
                </Link>
                :
                <button disabled className="btn btn-primary">Pay</button>
                }
            </div>
            <div className="overflow-x-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="uppercase text-2xl">
                            <th> </th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id} className="text-xl font-medium">

                                <td>
                                    {index + 1}
                                </td>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="">
                                            <div >
                                                <img className="w-16 h-16" src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button onClick={() => deleteHandle(item._id)} className="py-2 px-2 rounded-lg bg-red-900 text-white text-2xl"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Card;