import GameSlider from "../components/GameSlider";

const Game = () => {
    return (
        <div className="w-full mt-0 md:mt-16 pb-4">
            <div className="max-w-full md:max-w-[1100px] mx-auto flex flex-col items-center">
                <div className="w-full justify-center flex md:flex-row flex-col px-6 md:px-0 gap-16 ">
                    <div className="flex flex-col md:w-[533px] w-full">
                        <div className="w-full linear gap-6 border border-[#3b4aa7] rounded-2xl md:flex hidden p-4">
                            <img src="/cod.svg" alt="" />
                            <div className="space-y-2">
                                <h1 className="text-2xl font-bold">Call of Duty Mobile</h1>
                                <p className="text-[11px] text-[#ABB1CC]">NexPro یکی از محبوب ترین پلتفرم های برگزاری مسابقات بازی است که تا کنون بیش از 10.000 مسابقه برگزار کرده و بالغ بر 200 میلیون ریال جایزه نقدی به برندگان پرداخت کرده است.</p>
                            </div>
                        </div>
                        <div className="w-full flex-col flex md:hidden justify-center items-center mt-4">
                            <img className="z-10" src="/cod.svg" alt="" />
                            <img className="absolute -mt-8 w-full" src="/vector.svg" alt="" />
                            <p className="text-[18px] font-bold mt-4">Call of Duty Mobile</p>
                        </div>
                        <div className="md:w-[533px] md:flex-row flex-col gap-4 w-full flex mt-4">
                            <div className="md:w-[259px] px-4 py-3 justify-between w-full flex linear border border-[#3b4aa7] rounded-2xl">
                                <p className="text-[#DDE3F0] font-bold">45</p>
                                <div className="flex gap-2 items-center">
                                    <p className="text-[13px] text-[#ABB1CC]">Tornaments</p>
                                    <img src="/icons/controller-gold.svg" alt="" />
                                </div>
                            </div>
                            <div className="md:w-[259px] px-4 py-3 justify-between w-full flex linear border border-[#3b4aa7] rounded-2xl">
                                <p className="text-[#DDE3F0] font-bold">20.000</p>
                                <div className="flex gap-2 items-center">
                                    <p className="text-[13px] text-[#ABB1CC]">Players</p>
                                    <img src="/icons/people-gold-outline.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <img src="/pubg-1.png" className="mt-4 w-full hidden md:block" alt="" />
                        <img src="/pubg-1-mobile.png" className="mt-4 w-full block md:hidden" alt="" />
                    </div>
                    <div className="flex flex-col md:w-[342px] w-full">
                        <div className="flex justify-between w-full text-xs">
                            {[
                                { img: "/player-2.svg", name: "Geralt-987x" },
                                { img: "/player-1.svg", name: "Kaneki-s621x" },
                                { img: "/player-3.svg", name: "Ghost-1209" },
                            ].map((player, i) => (
                                <div key={i} className={`flex flex-col items-center ${i === 1 ? "-mt-4" : ""}`}>
                                    <img src={player.img} alt="" />
                                    <p className="-mt-8">{player.name}</p>
                                </div>
                            ))}
                        </div>
                        <div className=" w-full scrollbar-hidden max-h-[143px] space-y-3 px-4 overflow-y-auto py-6 linear border border-[#3b4aa7] mt-6 rounded-2xl">
                            <div className="flex w-full justify-between px-5 py-2 rounded-[50px] border border-white">
                                <p className="text-[11px] text-[#DDE3F0]">04</p>
                                <p className="text-[13px] text-[#DDE3F0]">pashe.kosh</p>
                            </div>
                            <div className="flex w-full justify-between px-5 py-2 rounded-[50px] border border-white">
                                <p className="text-[11px] text-[#DDE3F0]">05</p>
                                <p className="text-[13px] text-[#DDE3F0]">pashe.kosh</p>
                            </div>
                            <div className="flex w-full justify-between px-5 py-2 rounded-[50px] border border-white">
                                <p className="text-[11px] text-[#DDE3F0]">06</p>
                                <p className="text-[13px] text-[#DDE3F0]">pashe.kosh</p>
                            </div>
                            <div className="flex w-full justify-between px-5 py-2 rounded-[50px] border border-white">
                                <p className="text-[11px] text-[#DDE3F0]">07</p>
                                <p className="text-[13px] text-[#DDE3F0]">pashe.kosh</p>
                            </div>
                            <div className="flex w-full justify-between px-5 py-2 rounded-[50px] border border-white">
                                <p className="text-[11px] text-[#DDE3F0]">08</p>
                                <p className="text-[13px] text-[#DDE3F0]">pashe.kosh</p>
                            </div>

                        </div>
                        <div className="w-full flex justify-center items-center py-3 border border-white rounded-lg mt-2">
                            <p className="text-[13px]">رتبه شما</p>
                        </div>
                    </div>
                </div>
                <div className=" mt-10 md:w-[940px] px-6 md:px-0 w-full">
                    <div className="w-full flex justify-between items-center">
                        <p className="font-bold">روم های دوئل</p>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <p className="text-xs text-[#ABB1CC]">بیشتر</p>
                            <img src="/icons/arrow-left.svg" alt="" />
                        </div>
                    </div>
                    <GameSlider />
                </div>
                <div className=" mt-10 md:w-[940px] px-6 md:px-0 w-full">
                    <div className="w-full flex justify-between items-center">
                        <p className="font-bold">روم های 100 نفره</p>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <p className="text-xs text-[#ABB1CC]">بیشتر</p>
                            <img src="/icons/arrow-left.svg" alt="" />
                        </div>
                    </div>
                    <GameSlider />
                </div>
                <div className=" mt-10 md:w-[940px] px-6 md:px-0 w-full">
                    <div className="w-full flex justify-between items-center">
                        <p className="font-bold">روم های تیم 2 نفره</p>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <p className="text-xs text-[#ABB1CC]">بیشتر</p>
                            <img src="/icons/arrow-left.svg" alt="" />
                        </div>
                    </div>
                    <GameSlider />
                </div>
            </div>
        </div>
    );
}

export default Game;