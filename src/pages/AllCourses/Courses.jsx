import { useEffect, useState } from "react";

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_DOMAIN}/open`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
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
                    courses.map(course => <div key={course._id} className="card glass">
                        <figure><img className="h-[200px] w-full object-cover" src={course.image} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{course.course_name}</h2>
                            <p>Instructor: {course.instructor_name}</p>
                            <div className="flex justify-between my-5">

                                <p className="font-bold text-xl">Available Seats: {course.total_seats}</p>
                                <p className="font-bold text-orange text-xl text-right">$ {course.price}</p>
                            </div>
                            <div className="card-actions justify-center">
                                <button className="btn bg-blue text-neutral-100 border-0 hover:bg-transparent hover:text-blue hover:border hover:border-blue">Join Course</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default Courses;