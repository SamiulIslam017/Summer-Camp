import HomepageCourseCard from "../../../components/HomepageCourseCard";
import SectionTitle from "../../../components/SectionTitle";


const FeatureCourse = () => {

    return (
        <div>
            <SectionTitle
                title={'CheckOut'}
                subTitle={"Our Feature Courses"}
                desc={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less'}
            ></SectionTitle>
            <HomepageCourseCard></HomepageCourseCard>
        </div>
    );
};

export default FeatureCourse;