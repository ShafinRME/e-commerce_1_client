import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './reviw.css'; // Your custom CSS for styling
import { EffectCoverflow, Pagination } from 'swiper/modules';
import reviewsData from '../../../../public/revs.json';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setReviews(reviewsData);
    })

    return (
        <div className="w-full mx-auto p-4 overflow-hidden min-h-screen">
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
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {reviews.map((review) => (
                    <SwiperSlide >
                        <ReviewCard
                            review={review}
                            key={review.id}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;
