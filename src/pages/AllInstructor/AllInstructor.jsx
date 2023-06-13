
import { Helmet } from "react-helmet-async";
import InstructorCard from "../../components/InstructorCard";


const AllInstructor = () => {

    return (
        <>
            <Helmet>
                <title>Fashion Design | Instructors</title>
            </Helmet>
            <InstructorCard></InstructorCard>
        </>
    );
};

export default AllInstructor;