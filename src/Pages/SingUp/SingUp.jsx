import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const SingUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const myAxios = useAxiosPublic();

    const onSubmit = (data) => {
        // console.log(data)
        // reset();
        createUser(data.email, data.password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                .then(() =>{
                    const userInfo = {
                        name: data.name,
                        email: data.email
                    }

                    myAxios.post('/users', userInfo)
                    .then(res =>{
                        if(res.data.insertedId){
                            // console.log('User Added to database');
                            reset();
                            Swal.fire({
                                title: "Sign Up Successfully",
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
        
                            navigate('/');
                        }
                    })
                    .then(error =>{
                        console.log(error);
                    })

                    
                })
                .catch(err =>{
                    console.log(err);
                })
                
               
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro || Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Sing Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" &&
                                    <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === "minLength" &&
                                    <p className="text-red-600">Password minimum 6 characters</p>}
                                {errors.password?.type === "maxLength" &&
                                    <p className="text-red-600">Password maximum 20 characters</p>}
                                {errors.password?.type === "pattern" &&
                                    <p className="text-red-600">Password must have one uppercase one lower case, one number and spacial characters</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <p className="text-center mb-6"><small>Already have an account?Please <Link to={'/login'}>Login</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingUp;