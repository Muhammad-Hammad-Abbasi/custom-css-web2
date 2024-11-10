'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';  
import '@/css-styles/swiper-custom.css'; 
import '@/css-styles/slider.css' 


export default function Swiper_img() {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 20 },
            }}
            navigation 
            className="swiper-slider"
            loop={true}  
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            
        >
            <SwiperSlide className='slide-padding'>
                <Image                   
                    src="/slider-img7.png"
                    height={600}
                    width={350}
                    alt="Slide 1"
                />
            </SwiperSlide>

            <SwiperSlide className='slide-padding'>
                <Image
                    src="/slider-img02.png"
                    height={600}
                    width={350}
                    alt="Slide 2"
                />
            </SwiperSlide>

            <SwiperSlide className='slide-padding'>
                <Image
                    src="/slider-img6.png"
                    height={600}
                    width={350}
                    alt="Slide 3"
                />
            </SwiperSlide>

            
            <SwiperSlide className='slide-padding'>
                <Image
                    src="/slider-img04.png"
                    height={600}
                    width={350}
                    alt="Slide 4"
                />
            </SwiperSlide>

            
            <SwiperSlide className='slide-padding'>
                <Image
                    src="/slider-img05.png"
                    height={600}
                    width={350}
                    alt="Slide 5"
                />
            </SwiperSlide>


            
            <SwiperSlide className='slide-padding'>
                <Image
                    src="/slider-img03.png"
                    height={600}
                    width={350}
                    alt="Slide 6"
                />
            </SwiperSlide>

            
            <SwiperSlide className='slide-padding'>
                <Image
                    src="/slider-image-1.png"
                    height={600}
                    width={350}
                    alt="Slide 7"
                />
            </SwiperSlide>

            
            <SwiperSlide className='slide-padding'>
                <Image
                    src="/slider-img8.png"
                    height={600}
                    width={350}
                    alt="Slide 8"
                />
            </SwiperSlide>

            
        </Swiper>
    );
}
