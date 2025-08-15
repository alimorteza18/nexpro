const Footer = () => {
    return (<div className="w-full linear-footer md:py-10 py-8 mt-6">
        <div className="max-w-full justify-between md:max-w-[1100px] mx-auto md:flex hidden items-center">
            <div className="flex flex-col">
                <img src="/nexpro-logo.svg" className="w-[107px] h-[20px]" alt="" />
                <p className="max-w-[407px] text-[11px] text-[#ABB1CC] mt-4">NexPro یکی از محبوب ترین پلتفرم های برگزاری مسابقات بازی است که تا کنون بیش از 10.000 مسابقه برگزار کرده و بالغ بر 200 میلیون ریال جایزه نقدی به برندگان پرداخت کرده است.</p>
            </div>
            <div className="flex w-[445px] justify-between items-center">
                <div className="space-y-2">
                    <p className="text-[13px]">جدیدترین مسابقات</p>
                    <p className="text-[13px]">روم های پابجی</p>
                    <p className="text-[13px]">روم های کالاف</p>
                </div>
                <div className="flex flex-wrap w-[90px] gap-4">
                    <img src="/icons/telegram.svg" alt="" />
                    <img src="/icons/facebook.svg" alt="" />
                    <img src="/icons/youtube.svg" alt="" />
                    <img src="/icons/instagram.svg" alt="" />
                </div>
                <div className="flex gap-2">
                    <img src="/saman.svg" alt="" />
                    <img src="/enamad.svg" alt="" />

                </div>
            </div>
        </div>
        <div className="w-full px-6 flex md:hidden flex-col">
            <div className="flex w-full justify-between items-center">
                <img src="/up.svg" alt="" />
                <img className="w-[133px] h-[26px]" src="/nexpro-logo.svg" alt="" />
            </div>
            <div className="flex w-full justify-between items-center mt-8">
                <img className="w-10 h-10" src="/icons/telegram.svg" alt="" />
                <img className="w-10 h-10" src="/icons/facebook.svg" alt="" />
                <img className="w-10 h-10" src="/icons/youtube.svg" alt="" />
                <img className="w-10 h-10" src="/icons/instagram.svg" alt="" />
                <img className="w-10 h-10" src="/icons/x.svg" alt="" />

            </div>
            <div className="flex justify-center items-center w-full">
                <p className="text-[13px] text-[#ABB1CC] mt-8">NexPro یکی از محبوب ترین پلتفرم های برگزاری مسابقات بازی است که تا کنون بیش از 10.000 مسابقه برگزار کرده و بالغ بر 200 میلیون ریال جایزه نقدی به برندگان پرداخت کرده است.</p>
            </div>
            <div className="flex w-full justify-between items-center mt-8">
                <div className="space-y-2">
                    <p className="text-[13px]">جدیدترین مسابقات</p>
                    <p className="text-[13px]">روم های پابجی</p>
                    <p className="text-[13px]">روم های کالاف</p>
                </div>
                <div className="flex gap-2">
                    <img src="/saman.svg" alt="" />
                    <img src="/enamad.svg" alt="" />

                </div>
            </div>
        </div>
    </div>);
}

export default Footer;