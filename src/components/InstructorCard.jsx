
import { useEffect, useState } from "react";

const InstructorCard = () => {

    const [instructors, setInstructors] = useState([]);


    useEffect(() => {
        fetch(`${import.meta.env.VITE_DOMAIN}/instructors`)
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    const allInstructors = instructors.filter(instructor => instructor.role == "instructor")


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {allInstructors.map(instructor =>
                <div key={instructor._id} className="hero min-h-[180px] rounded-md" style={{ backgroundImage: `url(${instructor.image})` }}>
                    <div className="hero-overlay bg-opacity-60 rounded-md"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl font-bold">{instructor.name}</h1>
                            <button className="btn btn-sm bg-blue text-neutral-100 border-0 hover:bg-transparent hover:text-blue hover:border hover:border-blue">View All Courses</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default InstructorCard;