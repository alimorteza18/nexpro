import React from "react";

const MobileNavbar = () => {
    return (
        <div className=" w-[320px] md:hidden block h-[64px] mx-auto bottom-4 fixed left-1/2 -translate-x-1/2 z-40 rounded-[12px] overflow-hidden">
            {/* SVG arka plan */}
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 320 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <foreignObject
                    x="-10"
                    y="-10"
                    width="340"
                    height="84"
                >
                    <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                            backdropFilter: "blur(5px)",
                            clipPath: "url(#bgblur_0_612_2360_clip_path)",
                            height: "100%",
                            width: "100%",
                        }}
                    ></div>
                </foreignObject>
                <g data-figma-bg-blur-radius="10">
                    <path
                        d="M0 36.1767C0 26.2452 0 21.2795 2.29878 17.4678C3.34731 15.7292 4.76191 14.1624 6.38471 12.9422C9.94251 10.2672 14.8285 9.76707 24.6006 8.76672C57.5878 5.38987 116.978 0 160 0C203.022 0 262.412 5.38988 295.399 8.76672C305.171 9.76707 310.057 10.2672 313.615 12.9422C315.238 14.1624 316.653 15.7292 317.701 17.4678C320 21.2795 320 26.2452 320 36.1767C320 47.2441 320 52.7779 317.38 56.7734C316.177 58.6087 314.609 60.1767 312.773 61.3801C308.778 64 303.244 64 292.177 64H27.8233C16.7558 64 11.2221 64 7.2266 61.3801C5.39134 60.1767 3.82327 58.6087 2.61989 56.7734C0 52.7779 0 47.2441 0 36.1767Z"
                        fill="url(#paint0_linear_612_2360)"
                        fillOpacity="0.7"
                    />
                    <path
                        d="M160 0.25C203.008 0.25 262.387 5.63876 295.374 9.01562C300.265 9.5163 303.915 9.89021 306.788 10.4717C309.656 11.0522 311.727 11.8351 313.465 13.1416C315.062 14.3425 316.455 15.8855 317.487 17.5967C318.61 19.4582 319.178 21.6118 319.464 24.5518C319.75 27.4962 319.75 31.2063 319.75 36.1768C319.75 41.7156 319.75 45.8516 319.424 49.1025C319.098 52.3492 318.45 54.6865 317.171 56.6367C315.986 58.443 314.443 59.9864 312.637 61.1709C310.687 62.4496 308.349 63.0983 305.103 63.4238C301.852 63.7498 297.716 63.75 292.177 63.75H27.8232C22.2844 63.75 18.1484 63.7498 14.8975 63.4238C11.6508 63.0983 9.31346 62.4496 7.36328 61.1709C5.55697 59.9864 4.01358 58.443 2.8291 56.6367C1.55036 54.6865 0.901723 52.3492 0.576172 49.1025C0.250228 45.8516 0.25 41.7156 0.25 36.1768C0.25 31.2063 0.250254 27.4962 0.536133 24.5518C0.821597 21.6118 1.39004 19.4582 2.5127 17.5967C3.54467 15.8855 4.938 14.3425 6.53516 13.1416C8.27291 11.8351 10.3439 11.0522 13.2119 10.4717C16.0849 9.89021 19.7351 9.5163 24.626 9.01562C57.6134 5.63876 116.992 0.25 160 0.25Z"
                        stroke="url(#paint1_linear_612_2360)"
                        strokeOpacity="0.3"
                        strokeWidth="0.5"
                    />
                </g>
                <defs>
                    <clipPath id="bgblur_0_612_2360_clip_path" transform="translate(10 10)">
                        <path d="M0 36.1767C0 26.2452 0 21.2795 2.29878 17.4678C3.34731 15.7292 4.76191 14.1624 6.38471 12.9422C9.94251 10.2672 14.8285 9.76707 24.6006 8.76672C57.5878 5.38987 116.978 0 160 0C203.022 0 262.412 5.38988 295.399 8.76672C305.171 9.76707 310.057 10.2672 313.615 12.9422C315.238 14.1624 316.653 15.7292 317.701 17.4678C320 21.2795 320 26.2452 320 36.1767C320 47.2441 320 52.7779 317.38 56.7734C316.177 58.6087 314.609 60.1767 312.773 61.3801C308.778 64 303.244 64 292.177 64H27.8233C16.7558 64 11.2221 64 7.2266 61.3801C5.39134 60.1767 3.82327 58.6087 2.61989 56.7734C0 52.7779 0 47.2441 0 36.1767Z" />
                    </clipPath>
                    <linearGradient
                        id="paint0_linear_612_2360"
                        x1="292.308"
                        y1="64"
                        x2="292.308"
                        y2="-1.1023e-06"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#1D2766" />
                        <stop offset="1" stopColor="#171F52" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_612_2360"
                        x1="160"
                        y1="0"
                        x2="160"
                        y2="64"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#369DE4" />
                        <stop offset="1" stopColor="#045CB9" />
                    </linearGradient>
                </defs>
            </svg>

            {/* İçerik: flex container */}
            <div className="relative flex items-center justify-around h-full px-6 text-white select-none">
                {/* Sol ikon */}
                <div className="flex flex-col items-center cursor-pointer">
                    <img src="./icons/account-white.svg" alt="آیکون حساب"/>
                </div>

                {/* Orta ikon */}
                <div className="flex flex-col items-center cursor-pointer">
                    <img src="/icons/game-controller.svg" alt="" />
                    <span className="text-[9px]">بازی ها</span>
                </div>

                {/* Sağ ikon */}
                <div className="flex flex-col items-center cursor-pointer">
                    <img src="/icons/ranking-mobile.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;
