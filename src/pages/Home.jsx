import { useState } from "react";
import CountUp from "react-countup";
import NewMatchesSlider from "../components/NewMatchesSlider";
import NewsSlider from "../components/NewsSlider";
import CommentsSlider from "../components/CommentsSlider";
import { faqList, games } from "../data/fakeData";
import codBg from '../assets/call-of-duty-bg.jpg';
import LastNewsSlider from "../components/LastNewsSlider";



const Home = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="w-full mt-0 md:mt-16 pb-4">
            <div className="max-w-full md:max-w-[1100px] mx-auto flex flex-col items-center">
                <img src="game.svg" className="hidden md:block" alt="image" />
                <img src="game-mobile.svg" className="block md:hidden w-full px-6" alt="image" />

                <div className="flex flex-wrap w-full md:w-auto justify-center mt-4 gap-2 md:gap-3">
                    {games.map((game) => (
                        <div key={game.name} className="flex flex-col items-center text-xs text-white">
                            <img className="w-[108px] h-[108px]" src={game.img} alt={game.name} />
                            <p className="mt-4">{game.name}</p>
                        </div>
                    ))}
                </div>

                <div className="w-full flex mt-16 gap-6 md:flex-row flex-col">
                    <div className="md:w-[383px] w-full md:h-[356px] h-auto linear rounded-3xl flex flex-col items-center relative">
                        <p className="font-bold mt-6">برترین گیمرها</p>
                        <img className="absolute mt-7 w-full sm:w-auto" src="/line.svg" alt="" />
                        <div className="flex justify-between px-6 w-full mt-12 text-xs">
                            {[
                                { img: "/player-2.svg", name: "Geralt-987x" },
                                { img: "/player-1.svg", name: "Kaneki-s621x" },
                                { img: "/player-3.svg", name: "Ghost-1209" },
                            ].map((player, i) => (
                                <div key={i} className={`flex flex-col items-center ${i === 1 ? "-mt-6" : ""}`}>
                                    <img src={player.img} alt="" />
                                    <p className="-mt-8">{player.name}</p>
                                </div>
                            ))}
                        </div>
                        <button className="outline-none border border-white flex gap-2 justify-center items-center w-[232px] h-8 md:mt-16 mt-6 text-xs rounded-lg">
                            <p>مشاهده بیشتر</p>
                            <img src="/icons/arrow-left.svg" alt="" />
                        </button>
                    </div>

                    <div className="md:w-[625px] md:mt-0 mt-6 px-6 md:px-0 w-full">
                        <div className="w-full flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <img src="/icons/new.svg" alt="" />
                                <p className="font-bold">جدیدترین مسابقات</p>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <p className="text-xs text-[#ABB1CC]">بیشتر</p>
                                <img src="/icons/arrow-left.svg" alt="" />
                            </div>
                        </div>
                        <NewMatchesSlider />
                    </div>
                </div>

                <div className="w-full flex mt-16 gap-10 md:flex-row flex-col">
                    <img className="md:block hidden" src="/match-rule.svg" alt="" />
                    <img className="md:hidden block w-full" src="/match-rule-mobile.svg" alt="" />

                    <div className="md:w-[500px] w-full flex flex-col">
                        <div
                            className="w-full bg-cover bg-center md:mt-0 mt-6 md:rounded-3xl rounded-none px-6 pb-6"
                            style={{ backgroundImage: `url(${codBg})` }}
                        >
                            {[
                                {
                                    icon: "/icons/gift-gold.svg",
                                    label: "جایزه اهدا شده",
                                    count: 2000000,
                                    unit: <img className="md:w-6 md:h-[35px] w-5 h-7" src="/icons/toman.svg" alt="" />,
                                },
                                {
                                    icon: "/icons/gun-gold.svg",
                                    label: "مسابقه برگزار شده",
                                    count: 1000,
                                },
                                {
                                    icon: "/icons/people-gold.svg",
                                    label: "شرکت کننده",
                                    count: 15000,
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex w-full justify-between items-center mt-6">
                                    <div className="flex gap-2">
                                        <img className="w-5 h-5" src={item.icon} alt="" />
                                        <p className="text-[13px] text-[#DDE3F0]">{item.label}</p>
                                    </div>
                                    <div className="flex gap-2 items-center whitespace-nowrap">
                                        {item.unit}
                                        <p className="text-[30px] md:text-[40px] font-black">
                                            <CountUp enableScrollSpy scrollSpyOnce start={0} end={item.count} duration={5} />+
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="w-full mt-6 px-6 md:px-0">
                            <div className="w-full flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <img src="/icons/star-gold.svg" alt="" />
                                    <p className="font-bold">محبوب ترین مسابقات</p>
                                </div>
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <p className="text-xs text-[#ABB1CC]">بیشتر</p>
                                    <img src="/icons/arrow-left.svg" alt="" />
                                </div>
                            </div>
                            <NewsSlider />
                        </div>
                    </div>
                </div>

                <div className="w-full flex mt-16 gap-10 md:flex-row flex-col">
                    <div className="flex md:w-[320px] w-full flex-col items-center">
                        <img className="md:block hidden cursor-pointer w-full" src="/about-nexpro.svg" alt="" />
                        <img className="md:hidden block cursor-pointer w-full" src="/about-nexpro-mobile.svg" alt="" />
                        <div className="linear pb-6 w-full rounded-3xl mt-6">
                            <div className="text-center">
                                <p className="font-bold mt-6">نظر حرفه ای ها درباره ما</p>
                                <img className="w-full -mt-5" src="/line.svg" alt="" />
                            </div>
                            <CommentsSlider />
                        </div>
                    </div>

                    <div className="md:w-[675px] px-6 md:px-0 w-full flex flex-col">
                        <div className="w-full flex md:justify-between justify-center items-center md:items-start">
                            <p className="font-bold whitespace-nowrap">سؤالات متداول</p>
                            <img className="md:block hidden" src="/line-2.svg" alt="" />
                        </div>

                        <div className="w-full flex flex-col mt-10">
                            {faqList.map((question, index) => (
                                <div
                                    key={index}
                                    onClick={() => toggleAccordion(index)}
                                    className="pb-4 cursor-pointer mt-4"
                                    style={{ borderBottom: "1px solid #243189" }}
                                >
                                    <div className="flex items-center justify-between w-full">
                                        <p className="text-[#DDE3F0] text-[13px]">{question}</p>
                                        <img
                                            className={`${openIndex === index ? 'rotate-180' : ''}`}
                                            src="/icons/arrow-down.svg"
                                            alt=""
                                        />
                                    </div>
                                    {openIndex === index && (
                                        <div className="flex mt-2">
                                            <p className="mb-2 text-xs font-light text-[#ABB1CC]">
                                                تصور اکثر مامان بابا هامون اینه که نمیشه! ولی ما یه کاری کردیم که بتونیم بهشون ثابت کنیم اشتباه می‌کنن. فقط کافیه داخل مسابقات شرکت کنی و شرایط لازم برای بردن جایزه رو داشته باشی. همین!
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="w-full">
                            <div className="w-full flex justify-between items-center mt-10">
                                <div className="flex gap-2 items-center">
                                    <img src="/icons/news-gold.svg" alt="" />
                                    <p className="font-bold">آخرین اخبار</p>
                                </div>
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <p className="text-xs text-[#ABB1CC]">بیشتر</p>
                                    <img src="/icons/arrow-left.svg" alt="" />
                                </div>
                            </div>
                            <LastNewsSlider />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
