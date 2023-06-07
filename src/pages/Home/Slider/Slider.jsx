// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';
import Slider1 from '../../../assets/Slider/cloth-gd0e3770fd_1280.jpg'
import Slider2 from '../../../assets/Slider/room-ge6d6e0ac5_1280.jpg'
import Slider3 from '../../../assets/Slider/sewing-g37c191327_1280.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { useRef } from 'react';

const Slider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide className='relative' style={{ backgroundImage: `url(${Slider1})` }}>
                    <div className="overlay"></div>
                    <div className='relative text-neutral-100'>

                        <div className=" text-center ">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn bg-blue border-2 border-blue text-neutral-100 hover:bg-transparent hover:border-2 hover:border-blue hover:text-blue hover:font-bold transition-all duration-500">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative' style={{ backgroundImage: `url(${Slider2})` }}>
                    <div className="overlay"></div>
                    <div className='relative text-neutral-100'>

                        <div className=" text-center ">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn bg-blue border-2 border-blue text-neutral-100 hover:bg-transparent hover:border-2 hover:border-blue hover:text-blue hover:font-bold transition-all duration-500">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative' style={{ backgroundImage: `url(${Slider3})` }}>
                    <div className="overlay"></div>
                    <div className='relative text-neutral-100'>

                        <div className=" text-center ">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn bg-blue border-2 border-blue text-neutral-100 hover:bg-transparent hover:border-2 hover:border-blue hover:text-blue hover:font-bold transition-all duration-500">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
};

export default Slider;