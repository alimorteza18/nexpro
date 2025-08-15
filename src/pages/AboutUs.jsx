import CommentsSlider from "../components/CommentsSlider";

const AboutUs = () => {
    return (<div className="w-full mt-0 md:mt-16 pb-4 ">
        <div className="w-full gap-12 md:w-[940px] min-h-screen mx-auto flex flex-col md:flex-row ">
            <div className="md:w-[288px] mt-4  w-full flex-col">
                <div className="flex md:justify-between justify-center w-full">
                    <p className="text-[18px] font-bold">درباره ما</p>
                    <img className="absolute mt-4 w-full md:hidden" src="/vector.svg" alt="" />

                    <img className="md:block hidden" src="/line-blue.svg" alt="" />
                </div>
                <div className=" md:mt-4 w-full flex items-center mt-12 justify-center md:px-0 px-6">
                    <img className="w-[202px] h-[39px]" src="/nexpro-logo.svg" alt="" />
                </div>
                <div className="w-full flex justify-between items-center mt-6 md:px-0 px-6">
                    <img className="w-10 h-10" src="/icons/instagram.svg" alt="" />
                    <img className="w-10 h-10" src="/icons/youtube.svg" alt="" />
                    <img className="w-10 h-10" src="/icons/x.svg" alt="" />
                    <img className="w-10 h-10" src="/icons/telegram.svg" alt="" />
                    <img className="w-10 h-10" src="/icons/facebook.svg" alt="" />

                </div>
                <div className="linear md:block hidden pb-6 w-full rounded-3xl mt-6">
                    <div className="text-center py-4 w-full">
                        <p className="font-bold z-20">نظر حرفه ای ها درباره ما</p>
                        <img className="w-full -mt-5 z-0" src="/line.svg" alt="" />
                    </div>
                    <div className="md:px-0 px-6 w-full">
                        <CommentsSlider />

                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col space-y-6 md:px-0 px-6">
                <p className="text-[11px] text-[#ABB1CC] leading-6">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                    طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                    لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
                    ابزارهای کاربردی می باشد.
                </p>

                {[...Array(5)].map((_, idx) => (
                    <div key={idx} className="w-full">
                        <div className="flex gap-2 items-center">
                            <img src="/icons/gold-dot.svg" alt="" />
                            <p className="text-[13px]">آخرین آپدیت های فیفا 25</p>
                        </div>
                        <p className="text-[#ABB1CC] text-[11px] leading-5 mt-1">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.
                        </p>
                    </div>
                ))}
                <div className="linear md:hidden block pb-6 w-full rounded-3xl mt-6">
                    <div className="text-center py-4 w-full">
                        <p className="font-bold z-20">نظر حرفه ای ها درباره ما</p>
                    </div>
         
                        <CommentsSlider />
                </div>
            </div>

        </div>
    </div>);
}

export default AboutUs;