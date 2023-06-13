
import { Helmet } from "react-helmet-async";
import CourseCard from "../../components/CourseCard";

const Courses = () => {

    return (
        <>
            <Helmet>
                <title>Fashion Design | Courses</title>
            </Helmet>
            <CourseCard></CourseCard>
        </>
    );
};

export default Courses;