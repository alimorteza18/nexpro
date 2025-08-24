import { useState } from "react";
import { menuItems } from "../data/fakeData";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const handleClose = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setMenuOpen(false);
      setAnimateOut(false);
    }, 300);
  };

  return (
    <>
      <header className="top-0 right-0 fixed w-full z-50 backdrop-blur-md text-white py-4">
        <div className="lg:max-w-[1100px] max-w-full mx-auto flex justify-between items-center lg:px-4 px-6 lg:flex-row flex-row-reverse">
          {/* Logo */}
          <img
            src="/nexpro-logo.svg"
            alt="لوگو"
            className="w-32 lg:w-auto h-auto"
          />

          {/* Masaüstü Menü ve Hesap Butonu */}
          <div className="hidden lg:flex items-center justify-between flex-1 rtl:mr-8">
            {/* Menü */}
            <nav className="flex items-center space-x-reverse space-x-6 text-xs">
              {menuItems.map((item, index) => (
                <Link
                  to={item.link}
                  key={index}
                  className="flex items-center space-x-reverse space-x-2 cursor-pointer whitespace-nowrap hover:text-gray-300 transition"
                >
                  <img src={`./icons/${item.icon}.svg`} alt={item.label} className="w-4 h-4" />
                  <p>{item.label}</p>
                </Link>
              ))}
            </nav>

            {/* Hesap Butonu */}
            <div className=" flex gap-2">
              <div className="border flex items-center cursor-pointer  gap-2 rounded-lg border-[#DDE3F0] px-3 py-[10px]">
                <p className="text-[13px]">100.000.000</p>
                <img src="/icons/toman.svg" alt="" />
              </div>
              <div className="px-[12px] cursor-pointer flex justify-center rounded-lg items-center border-[#DDE3F0] border">
                <img src="./icons/user.svg" alt="آیکون حساب" className="w-[16px] h-[16px]" />
              </div>
              <Link to="/notification">
                <img src="/icons/notify.svg" alt="" />
              </Link>
            </div>
          </div>

          {/* Mobilde Burger Menü */}
          <div className="flex lg:hidden gap-1">
            <img
              src="./icons/burger.svg"
              alt="منو"
              className="cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
            <Link to="/notification">
              <img src="/icons/notify.svg" alt="" />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Menü kutusu */}
          <div
            className={`bg-[#0A1C3D]/80 backdrop-blur-[5px] text-white overflow-hidden transition-all duration-300 ease-out ${animateOut ? "animate-slide-up-menu" : "animate-slide-down-menu"}`}
            style={{ height: `${menuItems.length * 56 + 132}px` }}
          >
            <div className="flex flex-row-reverse justify-between items-center px-6 py-4 border-b border-[#ffffff1a]">
              <img src="/nexpro-logo.svg" alt="لوگو" className="w-32 h-auto" />
              <button
                className="flex items-center justify-center"
                onClick={handleClose}
              >
                <img src="/icons/close.svg" alt="" />
              </button>
            </div>

            <div className="flex flex-col items-center text-sm">
              <div className="border-b border-[#ffffff1a] flex justify-center items-center w-full h-[56px]">
                ورود
              </div>
              <div className="w-full flex flex-col">
                {menuItems.map((item, index) => (
                  <Link
                    to={item.link}
                    key={index}
                    className="flex items-center justify-between px-6 h-[56px] w-full border-b  border-[#ffffff1a]"
                    onClick={handleClose}
                  >
                    <p>{item.label}</p>
                    <img
                      src={`./icons/${item.icon}.svg`}
                      alt={item.label}
                      className="w-5 h-5"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Geri kalan blur alan */}
          <div
            className={`w-full h-full bg-[#0A1C3D]/60 backdrop-blur-[2px] transition-opacity duration-300 ease-out ${animateOut ? "animate-fade-out" : "animate-fade-in"}`}
            onClick={handleClose}
          />
        </div>
      )}

      {/* Animation Styles */}
      <style jsx>{`
        .animate-slide-down-menu {
          animation: slideDownMenu 0.3s ease-out forwards;
        }
        .animate-slide-up-menu {
          animation: slideUpMenu 0.3s ease-in forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-fade-out {
          animation: fadeOut 0.3s ease-in forwards;
        }

        @keyframes slideDownMenu {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes slideUpMenu {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
