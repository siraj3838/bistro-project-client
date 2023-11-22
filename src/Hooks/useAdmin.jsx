import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider';
import useAxios from './useAxios';
import { useContext } from 'react';

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const myAxios = useAxios();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            // console.log('asking or checking is Admin', user);
            const res = await myAxios.get(`/users/admin/${user?.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;