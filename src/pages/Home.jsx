import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import NewMatchesSlider from "../components/NewMatchesSlider";
import NewsSlider from "../components/NewsSlider";
import CommentsSlider from "../components/CommentsSlider";
import { faqList } from "../data/fakeData";
import codBg from '../assets/call-of-duty-bg.jpg';
import LastNewsSlider from "../components/LastNewsSlider";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [games, setGames] = useState([]);

    const toggleAccordion = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await axios.get("https://edwardvolkov.pythonanywhere.com/api/games/");
        setGames(res.data.results || []);
      } catch (error) {
        console.error("failed:", error);
      }
    };

    fetchGames();
  }, []);

    return (
        <div className="w-full mt-0 md:mt-16 pb-4">
            <div className="max-w-full md:max-w-[1100px] mx-auto flex flex-col items-center">
                <motion.img
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    src="game.png"
                    className="hidden md:block"
                    alt="image"
                />
                <motion.img
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    src="game-mobile.png"
                    className="block md:hidden w-full px-6"
                    alt="image"
                />

                {/* Games Listesi API'den */}
                <div className="flex flex-wrap w-full md:w-auto justify-center mt-4 gap-2 md:gap-3">
                    {games.map((game, i) => (
                        <motion.div
                            key={game.id}
                            className="flex flex-col items-center text-xs text-white cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <Link to="/game" className="flex justify-center flex-col items-center">
                                <img className="w-[108px] h-[108px] rounded-xl shadow-lg" src={game.logo} alt={game.name} />
                                <p className="mt-4">{game.name}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Top Gamers & New Matches */}
                <div className="w-full flex mt-16 gap-6 md:flex-row flex-col">
                    <motion.div
                        className="md:w-[383px] w-full md:h-[356px] h-auto linear rounded-3xl flex flex-col items-center relative"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="font-bold mt-6">برترین گیمرها</p>
                        <img className="absolute mt-7 w-full sm:w-auto" src="/line.svg" alt="" />
                        <div className="flex justify-between px-6 w-full mt-12 text-xs">
                            {[
                                { img: "/player-2.svg", name: "Geralt-987x" },
                                { img: "/player-1.svg", name: "Kaneki-s621x" },
                                { img: "/player-3.svg", name: "Ghost-1209" },
                            ].map((player, i) => (
                                <motion.div
                                    key={i}
                                    className={`flex flex-col items-center ${i === 1 ? "-mt-6" : ""}`}
                                    whileHover={{ y: -8, scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    <img src={player.img} alt="" />
                                    <p className="-mt-8">{player.name}</p>
                                </motion.div>
                            ))}
                        </div>
                        <button className="outline-none border border-white flex gap-2 justify-center items-center w-[232px] h-8 md:mt-16 mt-6 text-xs rounded-lg">
                            <p>مشاهده بیشتر</p>
                            <img src="/icons/arrow-left.svg" alt="" />
                        </button>
                    </motion.div>

                    <motion.div
                        className="md:w-[625px] md:mt-0 mt-6 px-6 md:px-0 w-full"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="w-full flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <img src="/icons/new.svg" alt="" />
                                <p className="font-bold">جدیدترین مسابقات</p>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-400 transition">
                                <p className="text-xs text-[#ABB1CC]">بیشتر</p>
                                <img src="/icons/arrow-left.svg" alt="" />
                            </div>
                        </div>
                        <NewMatchesSlider />
                    </motion.div>
                </div>

                {/* Stats + Popular Matches */}
                <div className="w-full flex mt-16 gap-10 md:flex-row flex-col">
                    <motion.img
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="md:block hidden" src="/match-rule.svg" alt=""
                    />
                    <motion.img
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="md:hidden block w-full" src="/match-rule-mobile.svg" alt=""
                    />

                    <motion.div
                        className="md:w-[500px] w-full flex flex-col"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
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
                                <motion.div
                                    key={i}
                                    className="flex w-full justify-between items-center mt-6"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                >
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
                                </motion.div>
                            ))}
                        </div>

                        <div className="w-full mt-6 px-6 md:px-0">
                            <div className="w-full flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <img src="/icons/star-gold.svg" alt="" />
                                    <p className="font-bold">محبوب ترین مسابقات</p>
                                </div>
                                <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-400 transition">
                                    <p className="text-xs text-[#ABB1CC]">بیشتر</p>
                                    <img src="/icons/arrow-left.svg" alt="" />
                                </div>
                            </div>
                            <NewsSlider />
                        </div>
                    </motion.div>
                </div>

                {/* About + FAQ + Last News */}
                <div className="w-full flex mt-16 gap-10 md:flex-row flex-col">
                    <Link to="/about-us">
                        <motion.div
                            className="flex md:w-[320px] w-full flex-col items-center"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img className="md:block hidden cursor-pointer w-full" src="/about-nexpro.svg" alt="" />
                            <img className="md:hidden block cursor-pointer w-full" src="/about-nexpro-mobile.svg" alt="" />
                            <div className="linear pb-6 w-full rounded-3xl mt-6">
                                <div className="text-center">
                                    <p className="font-bold mt-6">نظر حرفه ای ها درباره ما</p>
                                    <img className="w-full -mt-5" src="/line.svg" alt="" />
                                </div>
                                <CommentsSlider />
                            </div>
                        </motion.div>
                    </Link>

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
                                    className="pb-4 cursor-pointer mt-4 border-b border-[#243189]"
                                >
                                    <div className="flex items-center justify-between w-full">
                                        <p className="text-[#DDE3F0] text-[13px]">{question}</p>
                                        <motion.img
                                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            src="/icons/arrow-down.svg"
                                            alt=""
                                        />
                                    </div>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                className="flex mt-2 overflow-hidden"
                                            >
                                                <p className="mb-2 text-xs font-light text-[#ABB1CC]">
                                                    تصور اکثر مامان بابا هامون اینه که نمیشه! ولی ما یه کاری کردیم که بتونیم بهشون ثابت کنیم اشتباه می‌کنن. فقط کافیه داخل مسابقات شرکت کنی و شرایط لازم برای بردن جایزه رو داشته باشی. همین!
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                        <div className="w-full">
                            <div className="w-full flex justify-between items-center mt-10">
                                <div className="flex gap-2 items-center">
                                    <img src="/icons/news-gold.svg" alt="" />
                                    <p className="font-bold">آخرین اخبار</p>
                                </div>
                                <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-400 transition">
                                    <p className="text-xs text-[#ABB1CC]">بیشتر</p>
                                    <img src="/icons/arrow-left.svg" alt="" />
                                </div>
                            </div>
                            <LastNewsSlider />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;
