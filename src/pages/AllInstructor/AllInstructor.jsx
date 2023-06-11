import InstructorCard from "../../components/InstructorCard";


const AllInstructor = () => {
    return (
        <>
            <div className="hero h-[300px] mb-10 md:mb-20 lg:mb-20" style={{ backgroundImage: `url('https://i.ibb.co/p0Vttrh/cool-background.png')` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Our Master Class Instructors</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
            <InstructorCard></InstructorCard>
        </>
    );
};

export default AllInstructor;