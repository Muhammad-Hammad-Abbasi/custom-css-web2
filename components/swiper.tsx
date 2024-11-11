'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';



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
        loop={true}
    >
        {/* Slides */}
        {["/slider-img7.png", "/slider-img02.png", "/slider-img6.png", "/slider-img04.png", "/slider-img05.png", "/slider-img03.png", "/slider-image-1.png", "/slider-img8.png"].map((src, index) => (
        <SwiperSlide key={index}>
            <Image src={src} height={600} width={350} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
    ))}
    
    </Swiper>
   

            
     
    );
}
