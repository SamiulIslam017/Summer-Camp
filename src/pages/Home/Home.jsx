import InstructorSection from "./InstructorsSection/InstructorSection";
import Slider from "./Slider/Slider";
import WelcomeSection from "./WelcomSection/WelcomeSection";


const Home = () => {
    return (
        <div className="flex flex-col gap-10 md:gap-20 lg:gap-20 mb-10 md:mb-20 lg:mb-20">
            <div className="hidden md:block lg:block"><Slider></Slider></div>
            <div>
                <WelcomeSection></WelcomeSection>
            </div>
            <div>
                <InstructorSection></InstructorSection>
            </div>
        </div>
    );
};

export default Home;