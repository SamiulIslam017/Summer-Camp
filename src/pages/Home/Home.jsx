import FeatureCourse from "./FeatureCourse/FeatureCourse";
import InstructorSection from "./InstructorsSection/InstructorSection";
import Slider from "./Slider/Slider";
import WelcomeSection from "./WelcomSection/WelcomeSection";


const Home = () => {
    return (
        <div className="flex flex-col gap-10 md:gap-20 lg:gap-20 mb-10 md:mb-20 lg:mb-20">
            <div className="hero min-h-[50vh] mb-10 md:hidden lg:hidden" style={{ backgroundImage: `url('https://i.ibb.co/PxVYmsr/student-online-cute-girl-glasses-sweater-studying-computer-typing-keyboard.jpg')` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-10/12 mx-auto">
                        <h1 className="mb-5 text-2xl font-bold">Become a fashion designer</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
            <div className="hidden md:block lg:block"><Slider></Slider></div>
            <div>
                <WelcomeSection></WelcomeSection>
            </div>
            <div>
                <FeatureCourse></FeatureCourse>
            </div>
            <div>
                <InstructorSection></InstructorSection>
            </div>
        </div>
    );
};

export default Home;