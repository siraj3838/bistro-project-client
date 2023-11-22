import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);

    const myAxios = useAxios();

    const { data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await myAxios.get(`/payments/${user.email}`)
            return res.data;
        }
    });
    return (
        <div>
            <h3 className="text-3xl">Total Payments: {payments.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>{payment.price}$</td>
                            <td>{payment.transactionId}</td>
                            <td>{payment.status}</td>
                        </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;