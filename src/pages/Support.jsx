import { useState } from "react";
import { faqList } from "../data/fakeData";

const Support = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (<div className="w-full mt-0 md:mt-16 pb-4 ">
        <div className="w-full md:w-[940px] min-h-screen justify-start md:justify-between mx-auto flex flex-col md:flex-row ">
            <div className="md:w-[288px] mt-4  w-full flex-col md:px-0 px-6">
                <div className="flex md:justify-between justify-center w-full">
                    <p className="text-[18px] font-bold">پشتیبانی</p>
                    <img className="absolute mt-4 w-full md:hidden" src="/vector.svg" alt="" />

                    <img className="md:block hidden" src="/line-blue.svg" alt="" />
                </div>
                <div className="linearx md:mt-4 w-full flex items-center mt-12 px-6 py-4 justify-between rounded-2xl">
                    <p className="text-[11px] text-[#DDE3F0]">24 ساعته 7 روزه</p>
                    <p className="font-bold">021-8855689</p>
                </div>
            </div>
            <div className="w-full md:w-[611px] flex flex-col md:mt-0 mt-4 md:px-0 px-6">
                {faqList.map((question, index) => (
                    <div
                        key={index}
                        onClick={() => toggleAccordion(index)}
                        className="pb-4 cursor-pointer mt-4"
                        style={{ borderBottom: "1px solid #243189" }}
                    >
                        <div className="flex items-center justify-between w-full">
                            <p className="text-[#DDE3F0] text-[11px]">{question}</p>
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
        </div>
    </div>);
}

export default Support;