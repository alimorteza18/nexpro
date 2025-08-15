import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const NewsSlider = () => {
    return (<Swiper
        style={{ marginTop: "24px", }}
        slidesPerView={2.5}
        spaceBetween={8}
        breakpoints={{
            0: { slidesPerView: 2.15, spaceBetween: 8 },
            769: { slidesPerView: 2.5 }
        }}
        className="mySwiper"
    >
        <SwiperSlide className='linear-1 pb-4 rounded-3xl md' style={{ width: "160px" }}>
            <img className='w-full' src="/pupg-slide.png" alt="" />
            <p className='font-bold text-[15px] mt-4'>Free for all</p>
            <p className='font-light text-xs text-[#ABB1CC] mt-[10px]'>Call of Duty mobile</p>
        </SwiperSlide>
        <SwiperSlide className='linear-1 pb-4 rounded-3xl md' style={{ width: "160px" }}>
            <img className='w-full' src="/pupg-slide.png" alt="" />
            <p className='font-bold text-[15px] mt-4'>Free for all</p>
            <p className='font-light text-xs text-[#ABB1CC] mt-[10px]'>Call of Duty mobile</p>
        </SwiperSlide>
        <SwiperSlide className='linear-1 pb-4 rounded-3xl md' style={{ width: "160px" }}>
            <img className='w-full' src="/pupg-slide.png" alt="" />
            <p className='font-bold text-[15px] mt-4'>Free for all</p>
            <p className='font-light text-xs text-[#ABB1CC] mt-[10px]'>Call of Duty mobile</p>
        </SwiperSlide>
        <SwiperSlide className='linear-1 pb-4 rounded-3xl md' style={{ width: "160px" }}>
            <img className='w-full' src="/pupg-slide.png" alt="" />
            <p className='font-bold text-[15px] mt-4'>Free for all</p>
            <p className='font-light text-xs text-[#ABB1CC] mt-[10px]'>Call of Duty mobile</p>
        </SwiperSlide>

    </Swiper>);
}

export default NewsSlider;