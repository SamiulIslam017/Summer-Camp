import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const CourseCard = () => {

    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const [hidden, setHidden] = useState({ user })
    useEffect(() => {
        fetch(`${import.meta.env.VITE_DOMAIN}/users/hidden/${user?.email}`)
            .then(res => res.json())
            .then(data => {

                setHidden(data)
                setIsLoading(false)
            }
            )
    }, [user])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_DOMAIN}/open`)
            .then(res => res.json())
            .then(data => {

                setCourses(data)
                setIsLoading(false)
            })
    }, [])
    return (
        <>
            {
                isLoading ? <div className="min-h-screen flex justify-center items-center"><img src="https://i.ibb.co/GMCwfS6/loading-spinner.gif" /></div> :
                    <>
                        <div className="hero h-[300px] mb-10 md:mb-20 lg:mb-20" style={{ backgroundImage: `url('https://i.ibb.co/p0Vttrh/cool-background.png')` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Welcome To Our Course Page</h1>
                                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-10 md:mb-20 lg:mb-20">
                            {
                                courses.map(course => <div key={course._id} className={`card glass ${course.total_seats < 1 && 'bg-orange opacity-50'}`}>
                                    <figure><img className="h-[200px] w-full object-cover" src={course.image} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{course.course_name}</h2>
                                        <p>Instructor: {course.instructor_name}</p>
                                        <div className="flex justify-between my-5">

                                            <p className="font-bold text-xl">Available Seats: {course.total_seats}</p>
                                            <p className="font-bold text-orange text-xl text-right">$ {course.price}</p>
                                        </div>
                                        <div className="card-actions justify-center">
                                            <button className="btn bg-blue text-neutral-100 border-0 hover:bg-transparent hover:text-blue hover:border hover:border-blue" disabled={hidden.role === "instructor" || hidden.role === "admin" || course.total_seats < 1 ? 'disable' : ''}>Join Course</button>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </>
            }
        </>
    );
};

export default CourseCard;