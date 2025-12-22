import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './reviw.css'; // Your custom CSS for styling
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import reviewsData from '../../../../public/revs.json';
import ReviewCard from './ReviewCard';
import customerBg from '../../../assets/customer-top.png';

const Reviews = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setReviews(reviewsData);
    }, []);

    return (
        <div data-aos="fade-right" data-aos-offset="300" data-aos-duration="2000" className="w-full mx-auto p-4 overflow-hidden">
            <div className="w-2/3 mx-auto mt-10 mb-6 flex flex-col items-center justify-center gap-4">
                <img className='mb-6' src={customerBg} alt="" />
                <h1 className='text-4xl font-bold text-base-200 text-center'>
                    What our customers are saying
                </h1>
                <p className='text-accent text-center'>
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500, // Slide changes every 2.5 seconds
                    disableOnInteraction: false, // Keeps autoplay running even after interaction
                }}
                loop={true} // Infinite loop for auto-scrolling
                modules={[Autoplay, Pagination, EffectCoverflow]}
                className="mySwiper"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        <ReviewCard review={review} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;
