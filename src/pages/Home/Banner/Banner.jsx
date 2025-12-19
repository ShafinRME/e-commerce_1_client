import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImg1 from '../../../assets/banner/banner1.png';
import bannerImg2 from '../../../assets/banner/banner2.png';
import bannerImg3 from '../../../assets/banner/banner3.png';
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className='shadow-sm w-15/16 mx-auto rounded-4xl mb-6'>
            <Carousel showArrows={false} infiniteLoop={true} autoPlay={true} interval={3000} showThumbs={false} stopOnHover={true} showStatus={false}>
                <div>
                    <img src={bannerImg1} />

                </div>
                <div>
                    <img src={bannerImg2} />

                </div>
                <div>
                    <img src={bannerImg3} />

                </div>
            </Carousel>
        </div>
    );
};

export default Banner;