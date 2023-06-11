import { useState } from "react";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const img_hosting_token = import.meta.env.VITE_IMGBB_API;
const UpdateCourse = () => {
    const updateCourses = useLoaderData();
    const [imgUpload, setImageUpload] = useState('')
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const navigate = useNavigate();
    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const course_name = form.className.value;
        const total_seats = form.seats.value;
        const image = imgUpload;
        const price = parseFloat(form.price.value);
        const updatedCourse = {
            course_name: course_name,
            total_seats: total_seats,
            image: image,
            price: price
        }

        fetch(`${import.meta.env.VITE_DOMAIN}/courses/update/${updateCourses._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCourse)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    navigate('/dashboard/myCourse');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Course Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    const handleImage = e => {
        const formData = new FormData();
        formData.append('image', e.target.files[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData,
        }).then(res => res.json()).then(imgData => { setImageUpload(imgData.data.display_url) })
    }
    console.log(imgUpload);
    return (
        <div className='w-8/12 mx-auto min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <h2 className="text-3xl text-center font-bold mb-8">Add a Course</h2>
            <form onSubmit={handleUpdate} className="w-full">
                <div className='grid grid-cols-1  gap-10'>
                    <div >
                        <div className=' text-sm'>
                            <label htmlFor='className' className='block text-gray-600'>
                                Class Name
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='className'
                                id='className'
                                type='text'
                                placeholder='className'
                                defaultValue={updateCourses.course_name}
                            />
                        </div>

                        <div className=' text-sm'>
                            <label htmlFor='seats' className='block text-gray-600'>
                                Available Seats
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='seats'
                                id='seats'
                                type='text'
                                placeholder='seats'

                                defaultValue={updateCourses.total_seats}
                            />
                        </div>

                        <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
                            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                <div className='flex flex-col w-max mx-auto text-center'>
                                    <label>
                                        <input type="file"
                                            name="image"
                                            onChange={handleImage}
                                            className="file-input file-input-bordered w-full max-w-xs" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between gap-2'>
                            <div className=' text-sm'>
                                <label htmlFor='price' className='block text-gray-600'>
                                    Price
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                    name='price'
                                    id='price'
                                    type='number'
                                    placeholder='Price'
                                    defaultValue={updateCourses.price}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-neutral-100 transition duration-200 rounded shadow-md bg-blue'
                >
                    Update course
                </button>
            </form>
        </div>
    );
};

export default UpdateCourse;