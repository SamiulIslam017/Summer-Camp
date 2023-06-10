import { useEffect, useState } from "react";

const InstructorSectionCard = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_DOMAIN}/instructors`)
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    const allInstructors = instructors.filter(instructor => instructor.role == "instructor")
    console.log(allInstructors);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {allInstructors.slice(0.6).map(instructor =>
                <div className="card shadow-xl" key={instructor._id}>
                    <figure><img src={instructor.image} className="h-[260px]" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {instructor.name}
                        </h2>
                        {/* TODO */}
                        <p>Total Courses: 0</p>
                        <div className="card-actions justify-center mt-6">
                            <button className="btn bg-blue hover:bg-transparent text-neutral-100 hover:border-blue hover:text-blue">All Courses</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InstructorSectionCard;