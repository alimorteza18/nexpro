import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const LastNewsSlider = () => {
    return (<Swiper
        style={{ marginTop: "24px", }}
        slidesPerView={3.5}
        spaceBetween={8}
        breakpoints={{
            0: { slidesPerView: 2.15, spaceBetween: 8 },
            769: { slidesPerView: 3.5 }
        }}
        className="mySwiper"
    >
        <SwiperSlide className='linear-1 pb-4 rounded-3xl md' style={{ width: "160px", }}>
            <img className='w-full' src="/news.png" alt="" />
            <p className='font-bold text-[13px] mt-4 text-right px-3'>آخرین آپدیت های پابجی موبایل</p>
            <p className='font-light text-xs text-[#ABB1CC] mt-[11px] px-3 text-right'>دیشب آخرین آپدیت پابجی موبایل منتشر شد که تو این نسخه</p>
        </SwiperSlide>
         <SwiperSlide className='linear-1 pb-4 rounded-3xl md' style={{ width: "160px", }}>
            <img className='w-full' src="/news.png" alt="" />
            <p className='font-bold text-[13px] mt-4 text-right px-3'>آخرین آپدیت های پابجی موبایل</p>
            <p className='font-light text-xs text-[#ABB1CC] mt-[11px] px-3 text-right'>دیشب آخرین آپدیت پابجی موبایل منتشر شد که تو این نسخه</p>
        </SwiperSlide>
         <SwiperSlide className='linear-1 pb-4 rounded-3xl md' style={{ width: "160px", }}>
            <img className='w-full' src="/news.png" alt="" />
            <p className='font-bold text-[13px] mt-4 text-right px-3'>آخرین آپدیت های پابجی موبایل</p>
            <p className='font-light text-xs text-[#ABB1CC] mt-[11px] px-3 text-right'>دیشب آخرین آپدیت پابجی موبایل منتشر شد که تو این نسخه</p>
        </SwiperSlide>
         <SwiperSlide className='linear-1 pb-4 rounded-3xl md' style={{ width: "160px", }}>
            <img className='w-full' src="/news.png" alt="" />
            <p className='font-bold text-[13px] mt-4 text-right px-3'>آخرین آپدیت های پابجی موبایل</p>
            <p className='font-light text-xs text-[#ABB1CC] mt-[11px] px-3 text-right'>دیشب آخرین آپدیت پابجی موبایل منتشر شد که تو این نسخه</p>
        </SwiperSlide>
        


    </Swiper>);
}

export default LastNewsSlider;