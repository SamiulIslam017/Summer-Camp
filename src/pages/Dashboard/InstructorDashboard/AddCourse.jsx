import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const img_hosting_token = import.meta.env.VITE_IMGBB_API;
const AddCourse = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imgUpload, setImageUpload] = useState('')
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const navigate = useNavigate();


    const onSubmit = (data) => {
        try {

            const courseData = {
                course_name: data.className,
                instructor_name: data.name,
                total_seats: data.seats,
                price: parseFloat(data.price),
                email: data.email,
                image: imgUpload,
                status: 'pending',
                total_students: 0,
                feedback: null,
                date: new Date(),
            }

            fetch(`${import.meta.env.VITE_DOMAIN}/courses`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(courseData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log("add course", data)
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Successfully Create a course status pending',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/dashboard/myCourse');
                    }

                })


        } catch (error) {
            console.log(error);
        }
    }
    const handleImage = e => {
        const formData = new FormData();
        formData.append('image', e.target.files[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData,
        }).then(res => res.json()).then(imgData => { setImageUpload(imgData.data.display_url) })
    }
    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <Helmet>
                <title>Instructor Dashboard | Add A Course</title>
            </Helmet>
            <h2 className="text-3xl text-center font-bold mb-8">Add a Course</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='space-y-6'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='className' className='block text-gray-600'>
                                Class Name
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='className'
                                id='className'
                                type='text'
                                placeholder='className'
                                {...register('className', { required: true })}

                            />
                            {errors.password?.type === 'required' && <span className="text-orange font-base">This field is required </span>}
                        </div>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='name' className='block text-gray-600'>
                                Instructor name
                            </label>
                            <input type="text"
                                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                                id="name"
                                name="name"
                                {...register('name', { required: true })}
                                defaultValue={user?.displayName} readOnly />

                        </div>

                        <div className='space-y-1'>
                            <label htmlFor='email' className='block text-gray-600'>
                                Instructor Email
                            </label>
                            <input type="email"
                                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                                name="email"
                                id="email"
                                {...register('email', { required: true })}
                                defaultValue={user?.email}
                                readOnly />
                        </div>
                    </div>
                    <div className='space-y-6'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='seats' className='block text-gray-600'>
                                Available Seats
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='seats'
                                id='seats'
                                type='text'
                                placeholder='seats'
                                {...register('seats', { required: true })}

                            />
                            {errors.password?.type === 'required' && <span className="text-orange font-base">This field is required </span>}
                        </div>

                        <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
                            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input type="file"
                                            onChange={handleImage}
                                            name="image"
                                            className="file-input file-input-bordered w-full max-w-xs" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between gap-2'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='price' className='block text-gray-600'>
                                    Price
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='price'
                                    id='price'
                                    type='number'
                                    placeholder='Price'
                                    {...register('price', { required: true })}
                                />
                                {errors.password?.type === 'required' && <span className="text-orange font-base">This field is required </span>}
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-neutral-100 transition duration-200 rounded shadow-md bg-blue'
                >
                    Add a course
                </button>
            </form>
        </div>
    );
};

export default AddCourse;