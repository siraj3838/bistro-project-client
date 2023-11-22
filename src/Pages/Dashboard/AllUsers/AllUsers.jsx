import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const myAxios = useAxios();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await myAxios.get('/users')
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        console.log(user);
        myAxios.patch(`/users/admin/${user?._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user?.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })

    }


    const handleDeleteUser = (user) => {
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
                myAxios.delete(`/users/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "This Food has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })





            }
        });
    }


    return (
        <div>
            <div className="flex justify-evenly my-5">
                <h3 className="text-3xl">All Users</h3>
                <h3 className="text-3xl">Total Users: {users.length}</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className="uppercase">
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user?.role === 'admin' ? 'Admin'
                                        :
                                        <button onClick={() => handleMakeAdmin(user)}  className="text-white text-2xl bg-[#D1A054] p-3 rounded-lg"><FaUser></FaUser></button>}
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user)} className="text-white bg-[#B91C1C] text-2xl p-3 rounded-lg"><FaTrash></FaTrash></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;