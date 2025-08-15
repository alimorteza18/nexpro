import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CommentsSlider = () => {
    return (<Swiper
        style={{  width:"100%" }}
        slidesPerView={1.5}
        spaceBetween={4}
        breakpoints={{
            0: { slidesPerView: 1.5, spaceBetween: 8 },
            769: { slidesPerView: 1.5, spaceBetween: 4 }
        }}
        className="mySwiper"
    >
        <SwiperSlide className='linear-s rounded-3xl gap-4 py-3 px-4 border border-[#243189]' style={{ width:"228px", display:"flex", }}>
            <img src="/profile-slide.svg" alt="" />
            <div className='flex flex-col'>
                <p className='text-[11px] text-right'>جواد کیلر</p>
                <p className='text-[9px] text-right mt-1'>از همه تیم حرفه ای این سایت تشکر میکنم :)</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='linear-s rounded-3xl gap-4 py-3 px-4 border border-[#243189]' style={{ width:"228px", display:"flex", }}>
            <img src="/profile-slide.svg" alt="" />
            <div className='flex flex-col'>
                <p className='text-[11px] text-right'>جواد کیلر</p>
                <p className='text-[9px] text-right mt-1'>از همه تیم حرفه ای این سایت تشکر میکنم :)</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='linear-s rounded-3xl gap-4 py-3 px-4 border border-[#243189]' style={{ width:"228px", display:"flex", }}>
            <img src="/profile-slide.svg" alt="" />
            <div className='flex flex-col'>
                <p className='text-[11px] text-right'>جواد کیلر</p>
                <p className='text-[9px] text-right mt-1'>از همه تیم حرفه ای این سایت تشکر میکنم :)</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='linear-s rounded-3xl gap-4 py-3 px-4 border border-[#243189]' style={{ width:"228px", display:"flex", }}>
            <img src="/profile-slide.svg" alt="" />
            <div className='flex flex-col'>
                <p className='text-[11px] text-right'>جواد کیلر</p>
                <p className='text-[9px] text-right mt-1'>از همه تیم حرفه ای این سایت تشکر میکنم :)</p>
            </div>
        </SwiperSlide>
        

    </Swiper>);
}

export default CommentsSlider;