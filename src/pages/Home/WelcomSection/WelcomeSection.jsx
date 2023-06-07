import SectionTitle from "../../../components/SectionTitle";
import SectionCards from "./SectionCards";


const WelcomeSection = () => {
    return (
        <div>
            <SectionTitle
                title={'Welcome to'}
                subTitle={"Fashion design school"}
                desc={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less'}
            >
            </SectionTitle>
            <SectionCards></SectionCards>
        </div>
    );
};

export default WelcomeSection;