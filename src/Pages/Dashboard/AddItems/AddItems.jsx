import { useForm } from "react-hook-form";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
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
            const menuRes = await adminAxios.post('/menus', menuItem)
            console.log(menuRes.data);
            if(menuRes.data.insertedId){
                Swal.fire({
                    title: "Recipe Added Successfully",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                reset();
            }
        }
        // console.log(res.data);
    }
    return (
        <div>
            <SectionTittle heading={'add an item'} subHeading={"what's new?"}></SectionTittle>
            <div className="max-w-screen-sm my-10 mx-auto p-12 bg-[#F3F3F3]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Recipe Name here" className="input input-bordered w-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-7 items-center">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={'default'} {...register('category', { required: true })}
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
                            <input {...register("price", { required: true })} type="number" placeholder="Price here" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea {...register('recipe', { required: true })}
                            className="p-4 rounded-md"
                            placeholder="Recipe Details" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="form-control w-full my-6">
                        <input  {...register('image', { required: true })}
                            type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button type="submit" className="btn btn-accent">Add Item <FaUtensils className="ml-3"></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;