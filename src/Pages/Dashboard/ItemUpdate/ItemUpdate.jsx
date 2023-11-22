import { useLoaderData } from "react-router-dom";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxios from "../../../Hooks/useAxios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const ItemUpdate = () => {
    const {name, category, recipe, price, _id} = useLoaderData();
    

    const myAxiosPublic = useAxiosPublic();
    const adminAxios = useAxios();
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        console.log(data)

        const imageFile = { image: data.image[0] }
        const res = await myAxiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await adminAxios.patch(`/menus/${_id}`, menuItem)
            console.log(menuRes.data);
            if(menuRes.data.modifiedCount > 0){
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                
            }
        }
        // console.log(res.data);
    }
    return (
        <div>
            <SectionTittle heading={'UPDATE ITEM'} subHeading={'Update here'}></SectionTittle>
            <div className="max-w-screen-sm my-10 mx-auto p-12 bg-[#F3F3F3]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input {...register("name", { required: true })}
                         defaultValue={name}
                         type="text" placeholder="Recipe Name here" className="input input-bordered w-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-7 items-center">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value={'default'}>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input {...register("price", { required: true })} 
                            defaultValue={price}
                            type="number" placeholder="Price here" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea {...register('recipe', { required: true })}
                            defaultValue={recipe}
                            className="p-4 rounded-md"
                            placeholder="Recipe Details" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-control w-full my-6">
                        <input  {...register('image', { required: true })}
                            type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button type="submit" className="btn btn-accent">Update menu Item </button>
                </form>
            </div>
        </div>
    );
};

export default ItemUpdate;