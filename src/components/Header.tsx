import { useState } from "react";
import Modal from "./Modal";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 sm:px-[80px] sm:py-[28px] bg-white flex justify-between items-center">
      <img src="assets/images/logo.svg" alt="" className="cursor-pointer hidden sm:block" />
      <img src="assets/images/logo-mobile.svg" alt="" className="cursor-pointer sm:hidden" />
      <div className="items-center gap-10 hidden sm:flex">
        <p className="text-secondary">Content</p>
        <button
          className="flex items-center gap-3 bg-primary-color border border-solid border-[#333333] rounded-[30px] py-[18px] px-5"
          onClick={() => setIsOpen(true)}
        >
          <img src="assets/images/wallet-solid.svg" alt="" />
          <span>Connect Wallet</span>
        </button>
      </div>
      <img src="assets/images/menu.svg" alt="" className={`${isShowMenu ? "hidden" : "block"} sm:hidden`} onClick={() => setIsShowMenu(!isShowMenu)} />
      <img src="assets/images/close.svg" alt="" className={`${isShowMenu ? "block" : "hidden"} sm:hidden`} onClick={() => setIsShowMenu(!isShowMenu)} />
      {isShowMenu && (
        <nav className="mt-[45px] sm:hidden absolute right-4 w-[270px] top-[20px] py-10 px-8 bg-secondary-color rounded-[4px]">
          <button
            className="flex items-center gap-[10px] bg-primary-color border border-solid border-[#333333] rounded-[30px] py-[18px] px-5 mb-8 font-bold text-[16px]"
            onClick={() => setIsOpen(true)}
          >
            <img src="assets/images/wallet-solid.svg" alt="" />
            <span className="leading-4">Connect Wallet</span>
          </button>
          <p className="text-white">Content</p>
        </nav>
      )}
      <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)} />
    </header>
  );
};

export default Header;
