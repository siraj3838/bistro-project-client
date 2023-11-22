
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = useMenu()
    const myAxios = useAxios();

    const handleDeleteItem = (item) => {
        console.log(item);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await myAxios.delete(`/menus/${item._id}`)
                console.log(res.data);

                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has delete`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            }
        });
    }
    return (
        <div>
            <SectionTittle heading={'MANAGE ALL ITEMS'} subHeading={'Hurry Up!'}></SectionTittle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <td>
                                        <Link to={`/dashboard/itemUpdate/${item?._id}`}>
                                            <button>
                                                <FaEdit className="text-2xl"></FaEdit>
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)}>
                                            <FaTrashAlt className="text-red-700 text-2xl"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;