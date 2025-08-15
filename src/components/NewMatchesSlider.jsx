import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const slidesData = Array(4).fill({
    img: "/pupg-slide.png",
    title: "chehel-sq-195",
    cupText: "500 تومان برای 12 نفر",
    calendarText: "3 شنبه 25 خرداد ساعت 16:00",
    peopleText: "9 نفر باقی مانده",
    price: "19.000"
});

const NewMatchesSlider = () => {
    return (
        <Swiper
            style={{ marginTop: "24px" }}
            slidesPerView={3.15}
            spaceBetween={8}
            breakpoints={{
                0: { slidesPerView: 2.15, spaceBetween: 8 },
                769: { slidesPerView: 3.15 }
            }}
            className="mySwiper"
        >
            {slidesData.map((slide, index) => (
                <SwiperSlide key={index} className='linear-1 pb-4 rounded-3xl md' style={{ width: "160px" }}>
                    <img className='w-full' src={slide.img} alt="" />
                    <p className='font-bold mt-4'>{slide.title}</p>

                    <div className='flex px-3 justify-between mt-3 text-[#DDE3F0]'>
                        <img src="/icons/cup.svg" alt="" />
                        <p className='text-xs'>{slide.cupText}</p>
                    </div>

                    <div className='flex text-right px-3 justify-between mt-3 text-[#DDE3F0]'>
                        <img src="/icons/calendar.svg" alt="" />
                        <p className='text-xs max-w-[96px]'>{slide.calendarText}</p>
                    </div>

                    <div className='flex px-3 justify-between mt-3 text-[#DDE3F0]'>
                        <img src="/icons/people.svg" alt="" />
                        <p className='text-xs'>{slide.peopleText}</p>
                    </div>

                    <div className='w-full flex items-center justify-center gap-1 mt-3'>
                        <p className='font-semibold'>{slide.price}</p>
                        <img src="/icons/toman.svg" alt="" />
                    </div>

                    <div className='w-full px-3 mt-2'>
                        <button className='outline-none text-xs gap-1 flex justify-center items-center w-full h-8 linear-button shadow-lg rounded-lg'>
                            <p>مشاهده</p>
                            <img src="/icons/arrow-left.svg" alt="" />
                        </button>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default NewMatchesSlider;
