import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const myAxiosPublic = useAxiosPublic();
    // const [menu, setmenu] = useState([]);
    // const [loading, setLoading] = useState(true) 
    // useEffect(() => {
    //     fetch('http://localhost:5000/menus')
    //         .then(res => res.json())
    //         .then(data => {
    //             setmenu(data)
    //             setLoading(false)
    //         })
    // }, [])

    const { data: menu = [], isPending: loading , refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await myAxiosPublic.get('/menus')
            return res.data;
        }
    })

    return [menu, loading, refetch]
};

export default useMenu;