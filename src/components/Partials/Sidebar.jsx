import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-2.svg";
import logo3 from "../../assets/images/logo-3.svg";
import DarkModeContext from "../Contexts/DarkModeContext";
import Icons from "../Helpers/Icons";

export default function Sidebar({ sidebar, action, logoutModalHandler }) {
  const darkMode = useContext(DarkModeContext);
  useEffect(() => {
    const title = document.querySelectorAll(".menu-setting-items .heading");
    if (sidebar) {
      title.forEach((elm) => {
        elm.classList.add("active");
      });
    } else {
      title.forEach((elm) => {
        elm.classList.remove("active");
      });
    }
  });
  return (
    <div className="w-full h-full">
      {/* logo-area */}
      <div
        className={`w-full flex items-center transition-all duration-300 ease-in-out ${
          sidebar ? "justify-between  mb-14" : "justify-center"
        }`}
      >
        <div className={`sidebar-logo ${sidebar ? "enter" : ""}`}>
          {darkMode.theme === "light" ? (
            <img src={logo} alt="nft" />
          ) : (
            <img src={logo3} alt="nft" />
          )}
        </div>

        <span onClick={action}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="19"
            viewBox="0 0 25 19"
            fill="none"
          >
            <path
              d="M24.3544 8.45953L16.9855 0.271831C16.8283 0.0982522 16.6089 0 16.3763 0H11.4637C11.1411 0 10.848 0.189955 10.7153 0.484712C10.5843 0.781107 10.6384 1.12663 10.8545 1.36571L17.7306 9.00647L10.8545 16.6456C10.6384 16.8863 10.5827 17.2318 10.7153 17.5266C10.848 17.823 11.1411 18.0129 11.4637 18.0129H16.3763C16.6089 18.0129 16.8283 17.913 16.9855 17.7427L24.3544 9.55505C24.6344 9.24391 24.6344 8.76903 24.3544 8.45953Z"
              fill="url(#paint0_linear_159_67708)"
            />
            <path
              d="M13.7104 8.45953L6.34148 0.271831C6.18427 0.0982522 5.96484 0 5.73231 0H0.819691C0.497095 0 0.203976 0.189955 0.071335 0.484712C-0.0596682 0.781107 -0.00562942 1.12663 0.210526 1.36571L7.08656 9.00647L0.210526 16.6456C-0.00562942 16.8863 -0.0613058 17.2318 0.071335 17.5266C0.203976 17.823 0.497095 18.0129 0.819691 18.0129H5.73231C5.96484 18.0129 6.18427 17.913 6.34148 17.7427L13.7104 9.55505C13.9904 9.24391 13.9904 8.76903 13.7104 8.45953Z"
              fill="url(#paint1_linear_159_67708)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_159_67708"
                x1="10.644"
                y1="0"
                x2="28.9548"
                y2="13.8495"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F539F8" />
                <stop offset="0.416763" stopColor="#C342F9" />
                <stop offset="1" stopColor="#5356FB" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_159_67708"
                x1="0"
                y1="0"
                x2="18.3108"
                y2="13.8495"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F539F8" />
                <stop offset="0.416763" stopColor="#C342F9" />
                <stop offset="1" stopColor="#5356FB" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
      {/* menu and settings item */}
      <div className="menu-setting-items mb-11">
        {/* menus item */}
        <div
          className={`menu-item transition-all duration-300 ease-in-out ${
            sidebar ? "mb-14" : ""
          }`}
        >
          <div className="heading mb-5">
            <h1 className="title text-xl font-bold text-purple">Menu</h1>
          </div>
          <div className="items">
            <ul className="flex flex-col space-y-6">
              <li className="item group">
                <NavLink
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  } `}
                  to="/"
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-white dark:text-lighter-gray">
                    <Icons name="dashboard" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Dashboard
                  </span>
                </NavLink>
              </li>
              <li className="item group">
                <NavLink
                  to="/active-bids"
                  className={`nav-item flex items-center  ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-white dark:text-lighter-gray">
                    <Icons name="active-bids" />
                  </span>
                  <span
                    className={`item-content relative group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Active Bids
                    <span className="absolute left-24 -top-1 text-sm flex justify-center items-center w-5 h-5 primary-gradient rounded-full text-white">
                      19
                    </span>
                  </span>
                </NavLink>
              </li>
              <li className="item group">
                <NavLink
                  to="/market-place"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-white dark:text-lighter-gray">
                    <Icons name="market" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Marketplace
                    <span className="absolute left-28 -top-1 text-sm flex justify-center items-center w-5 h-5 bg-purple rounded-full text-white">
                      09
                    </span>
                  </span>
                </NavLink>
              </li>
              <li className="item group">
                <NavLink
                  to="/my-wallet"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-white dark:text-lighter-gray">
                    <Icons name="wallet-two" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    My Wallet
                  </span>
                </NavLink>
              </li>
              <li className="item group">
                <NavLink
                  to="/my-collection"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-white dark:text-lighter-gray">
                    <Icons name="star" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    My collections
                  </span>
                </NavLink>
              </li>
              <li className="item group">
                <NavLink
                  to="/sell"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-white dark:text-lighter-gray">
                    <Icons name="shop-card" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Sell
                    <span className="absolute left-10 -top-1 text-sm flex justify-center items-center w-5 h-5 bg-green-700 rounded-full text-white">
                      4k
                    </span>
                  </span>
                </NavLink>
              </li>
              <li className="item group">
                <NavLink
                  to="/saved"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-white dark:text-lighter-gray">
                    <Icons name="heart" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Saved
                    <span className="absolute left-14 -top-1 text-sm flex justify-center items-center w-5 h-5 bg-red-500 rounded-full text-white">
                      32
                    </span>
                  </span>
                </NavLink>
              </li>
              <li className="item group">
                <NavLink
                  to="/message"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-white dark:text-lighter-gray">
                    <Icons name="message-two" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Message
                    <span className="absolute left-20 -top-1 text-sm flex justify-center items-center w-5 h-5 bg-pink rounded-full text-white">
                      19
                    </span>
                  </span>
                </NavLink>
              </li>
              <li className="item group">
                <NavLink
                  to="/history"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-white dark:text-lighter-gray">
                    <Icons name="history" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    History
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="setting-item mb-11">
          <div className="heading mb-5">
            <h1 className="title text-xl font-bold text-purple">Settings</h1>
          </div>
          <div className="items">
            <ul className="flex flex-col space-y-6">
              <li className="item group">
                <NavLink
                  to="/profile"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-white dark:text-lighter-gray">
                    <Icons name="people-two" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    My Profile
                  </span>
                </NavLink>
              </li>
              <li className="item group">
                <NavLink
                  to="/settings"
                  className={`nav-item flex items-center ${
                    ((navData) => (navData.isActive ? "active" : ""),
                    sidebar ? "justify-start space-x-3.5" : "justify-center")
                  }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-white dark:text-lighter-gray">
                    <Icons name="setting" />
                  </span>
                  <span
                    className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                      sidebar ? "active flex-1" : "w-0"
                    }`}
                  >
                    Settings
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="accounts-item">
          <div className="heading mb-5">
            <h1 className="title text-xl font-bold text-purple">Accounts</h1>
          </div>
          <div className="items">
            <ul className="flex flex-col space-y-6">
              <li className="item group">
                <NavLink
                    to="/login"
                    className={`nav-item flex items-center ${
                        ((navData) => (navData.isActive ? "active" : ""),
                            sidebar ? "justify-start space-x-3.5" : "justify-center")
                    }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-white dark:text-lighter-gray">
                    <Icons name="people-two" />
                  </span>
                  <span
                      className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                          sidebar ? "active flex-1" : "w-0"
                      }`}
                  >
                   Login
                  </span>
                </NavLink>
              </li>
              <li className="item group">
                <NavLink
                    to="/signup"
                    className={`nav-item flex items-center ${
                        ((navData) => (navData.isActive ? "active" : ""),
                            sidebar ? "justify-start space-x-3.5" : "justify-center")
                    }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-white dark:text-lighter-gray">
                    <Icons name="people-two" />
                  </span>
                  <span
                      className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                          sidebar ? "active flex-1" : "w-0"
                      }`}
                  >
                    Signup
                  </span>
                </NavLink>
              </li>
              <li className="item group">
                <NavLink
                    to="/forgot-password"
                    className={`nav-item flex items-center ${
                        ((navData) => (navData.isActive ? "active" : ""),
                            sidebar ? "justify-start space-x-3.5" : "justify-center")
                    }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-white dark:text-lighter-gray">
                    <Icons name="people-two" />
                  </span>
                  <span
                      className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                          sidebar ? "active flex-1" : "w-0"
                      }`}
                  >
                    Forgot Password?
                  </span>
                </NavLink>
              </li>
              <li className="item group">
                <NavLink
                    to="/update-password"
                    className={`nav-item flex items-center ${
                        ((navData) => (navData.isActive ? "active" : ""),
                            sidebar ? "justify-start space-x-3.5" : "justify-center")
                    }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-white dark:text-lighter-gray">
                    <Icons name="people-two" />
                  </span>
                  <span
                      className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                          sidebar ? "active flex-1" : "w-0"
                      }`}
                  >
                   Update Password
                  </span>
                </NavLink>
              </li>
              <li className="item group">
                <NavLink
                    to="/verify-you"
                    className={`nav-item flex items-center ${
                        ((navData) => (navData.isActive ? "active" : ""),
                            sidebar ? "justify-start space-x-3.5" : "justify-center")
                    }`}
                >
                  <span className="item-icon group-hover:bg-purple group-hover:text-white w-8 h-8 flex justify-center items-center transition-all duration-300 ease-in-out  bg-light-purple dark:bg-dark-light-purple  rounded-full text-dark-gray dark:text-white dark:text-lighter-gray">
                    <Icons name="people-two" />
                  </span>
                  <span
                      className={`item-content group-hover:text-purple text-[18px] transition-all duration-300 ease-in-out text-lighter-gray relative font-medium ${
                          sidebar ? "active flex-1" : "w-0"
                      }`}
                  >
                   Verify you
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* signout area */}
      {sidebar ? (
        <div className="pb-5">
          <button
              onClick={logoutModalHandler}
              type="button"
              className="signout-btn flex items-center space-x-1  p-2.5 w-2/3 h-[52px] bg-purple transition duration-300 ease-in-out hover:bg-gray-900 rounded-full"
          >
          <span>
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="white" />
              <path
                  d="M10.0031 25.1669C10.0031 24.9927 10.0031 24.8189 10.0031 24.6447C10.0031 24.4701 10.0031 24.2957 10.0031 24.121C10.0031 23.9469 10.0031 23.773 10.0031 23.5989C10.0031 23.4243 10.0031 23.2499 10.0031 23.0752C10.0031 22.9011 10.0031 22.7272 10.0031 22.5531C10.0031 22.3784 10.0031 22.204 10.0031 22.0294C10.0031 21.8552 10.0031 21.6814 10.0031 21.5072C10.0031 21.3326 10.0031 21.1582 10.0031 20.9835C10.0031 20.8094 10.0031 20.6355 10.0031 20.4614C10.0031 20.2868 10.0031 20.1124 10.0031 19.9377C10.0031 19.7636 10.0031 19.5897 10.0031 19.4156C10.0031 19.2409 10.0031 19.0665 10.0031 18.8919C10.0031 18.7178 10.0031 18.5439 10.0031 18.3698C10.0031 18.1951 10.0031 18.0207 10.0031 17.8461C10.0031 17.6719 10.0031 17.4981 10.0031 17.3239C10.0031 17.1493 10.0031 16.9749 10.0031 16.8002C10.0031 16.6261 10.0031 16.4522 10.0031 16.2781C10.0031 16.1035 10.0031 15.9291 10.0031 15.7544C10.0031 15.5803 10.0031 15.4064 10.0031 15.2323C10.0031 15.0576 10.0031 14.8832 10.0031 14.7086C10.0031 14.5344 10.0031 14.3606 10.0031 14.1865C10.0031 14.0118 10.0031 13.8374 10.0031 13.6628C10.0031 13.4886 10.0031 13.3148 10.0031 13.1406C10.0031 12.966 10.0031 12.7916 10.0031 12.6169C10.0031 12.4428 10.0031 12.2689 10.0031 12.0948C10.0031 11.9201 10.0031 11.7457 10.0031 11.5711C10.0031 11.397 10.0031 11.2231 10.0031 11.049C10.0544 10.4071 10.4089 10.0526 11.0539 10C11.2281 10 11.4019 10 11.5761 10C11.7507 10 11.9251 10 12.0998 10C12.2739 10 12.4478 10 12.6219 10C12.7965 10 12.9709 10 13.1456 10C13.3197 10 13.4936 10 13.6677 10C13.8424 10 14.0168 10 14.1914 10C14.3656 10 14.5394 10 14.7136 10C14.8882 10 15.0626 10 15.2373 10C15.4114 10 15.5853 10 15.7594 10C15.934 10 16.1084 10 16.2831 10C16.4572 10 16.6311 10 16.8052 10C16.9799 10 17.1543 10 17.3289 10C17.503 10 17.6769 10 17.851 10C18.0257 10 18.2001 10 18.3747 10C18.5489 10 18.7227 10 18.8969 10C19.0715 10 19.2459 10 19.4206 10C19.5947 10 19.7686 10 19.9427 10C20.1173 10 20.2917 10 20.4664 10C20.6405 10 20.8144 10 20.9885 10C21.1632 10 21.3376 10 21.5122 10C21.6864 10 21.8602 10 22.0344 10C22.209 10 22.3834 10 22.5581 10C22.7322 10 22.9061 10 23.0802 10C23.2548 10 23.4292 10 23.6039 10C24.0643 10.0186 24.3893 10.2384 24.5799 10.6576C24.5964 10.7093 24.6131 10.7614 24.6296 10.8131C24.6338 10.8395 24.6379 10.8659 24.6421 10.8921C24.6429 12.0655 24.6437 13.2387 24.6434 14.4121C24.6434 14.4631 24.657 14.5167 24.6259 14.5648C24.4594 14.564 24.2928 14.552 24.1268 14.5713C23.9519 14.5556 23.7767 14.5559 23.6018 14.5713C23.4284 14.5559 23.2548 14.5567 23.0815 14.5711C22.9599 14.5679 22.8381 14.5572 22.7173 14.5637C22.6213 14.569 22.6035 14.5337 22.6041 14.4456C22.6077 13.84 22.6064 13.2345 22.6059 12.629C22.6059 12.5641 22.614 12.4977 22.5813 12.4368C22.5403 12.2355 22.4221 12.11 22.2187 12.0686C22.1374 12.0239 22.0487 12.0433 21.9638 12.043C19.3931 12.0417 16.824 12.042 14.2552 12.042C14.1744 12.042 14.0934 12.042 14.0126 12.042C14.0097 12.0522 14.0066 12.0621 14.0037 12.0723C14.2385 12.1894 14.4733 12.3068 14.7081 12.424C15.0555 12.6083 15.4017 12.7947 15.7594 12.9592C16.0998 13.1553 16.4517 13.3294 16.806 13.4991C16.9127 13.5637 17.0214 13.6241 17.1388 13.6677C17.3543 13.7969 17.5794 13.9077 17.8069 14.0139C17.9321 14.0808 18.0565 14.1493 18.1828 14.2142C18.4391 14.3459 18.7089 14.4573 18.8903 14.6984V14.7065L18.8974 14.7104C18.9923 14.8728 19.055 15.0466 19.0838 15.2325C19.0849 15.4069 19.0862 15.5813 19.0872 15.7557C19.0739 15.9304 19.0739 16.105 19.0872 16.2797C19.0752 16.4535 19.0752 16.6277 19.0872 16.8015C19.0739 16.9762 19.0739 17.1508 19.0872 17.3255C19.0752 17.4994 19.0752 17.6732 19.0872 17.8471C19.0739 18.0218 19.0739 18.1964 19.0872 18.3711C19.0752 18.5449 19.0752 18.7188 19.0872 18.8927C19.0739 19.0673 19.0739 19.242 19.0872 19.4169C19.0752 19.5908 19.0752 19.7646 19.0872 19.9385C19.0739 20.1132 19.0739 20.2878 19.0872 20.4625C19.0752 20.6363 19.0752 20.8102 19.0872 20.9841C19.0739 21.1587 19.0739 21.3334 19.0872 21.508C19.0752 21.6819 19.0752 21.8558 19.0872 22.0299C19.0739 22.2046 19.0739 22.3792 19.0872 22.5539C19.0752 22.7277 19.0752 22.9016 19.0872 23.0757C19.0739 23.2504 19.0739 23.425 19.0872 23.5997C19.0849 23.6125 19.0801 23.6253 19.0807 23.6379C19.0948 24.0206 18.986 23.9587 19.4193 23.9513C19.5939 23.9642 19.7686 23.9642 19.9432 23.9513C20.1168 23.9626 20.2907 23.9626 20.4643 23.9513C20.6392 23.9642 20.8144 23.9642 20.9893 23.9513C21.1629 23.9626 21.3365 23.9626 21.5104 23.9513C21.685 23.9642 21.8597 23.9644 22.0344 23.9513C22.3047 23.9676 22.4919 23.8452 22.569 23.6023C22.6098 23.5213 22.6028 23.4337 22.6028 23.3474C22.603 22.0767 22.6046 20.806 22.5996 19.5353C22.5991 19.4174 22.6328 19.3934 22.7445 19.3944C23.3275 19.3999 23.9106 19.3965 24.4939 19.397C24.5451 19.397 24.599 19.3847 24.6458 19.4187C24.6416 19.5923 24.6332 19.7662 24.6502 19.9398C24.6374 20.1139 24.6374 20.2881 24.6502 20.4622C24.6359 20.6366 24.6359 20.811 24.6502 20.9854C24.6374 21.1595 24.6374 21.3336 24.6502 21.5078C24.6359 21.6822 24.6359 21.8566 24.6502 22.0309C24.6374 22.2051 24.6374 22.3792 24.6502 22.5533C24.6359 22.7277 24.6359 22.9021 24.6502 23.0765C24.6374 23.2506 24.6374 23.4248 24.6502 23.5989C24.6359 23.7733 24.6359 23.9477 24.6502 24.1221C24.6374 24.2962 24.6374 24.4703 24.6502 24.6445C24.6413 24.8275 24.6322 25.0108 24.6233 25.1938C24.5674 25.3763 24.4779 25.541 24.3566 25.6882C24.2787 25.7483 24.201 25.8085 24.1231 25.8686C23.8991 25.9829 23.658 25.9944 23.4125 25.9938C22.0069 25.9915 20.6016 25.9923 19.196 25.9949C19.1544 25.9949 19.0909 25.9549 19.0676 26.0318C19.0561 26.0922 19.055 26.1523 19.0684 26.2124C19.0535 26.3873 19.054 26.5623 19.0684 26.7372C19.055 26.9108 19.0548 27.0844 19.0684 27.258C19.0537 27.4326 19.0537 27.6073 19.0684 27.782C19.0548 27.9556 19.055 28.1294 19.0684 28.303C19.0537 28.478 19.0537 28.6529 19.0684 28.8275C19.0548 29.0014 19.0548 29.1753 19.0684 29.3491C19.0535 29.524 19.0543 29.699 19.0679 29.8739C19.049 30.2927 18.7243 30.4878 18.3745 30.3994C18.3528 30.3785 18.3277 30.3657 18.2968 30.3667C18.1567 30.2786 18.009 30.2051 17.8576 30.1385C17.6897 30.0352 17.5138 29.9473 17.3347 29.8663C17.1637 29.7638 16.9864 29.6741 16.8049 29.5918C16.652 29.5034 16.4967 29.4195 16.3338 29.3502C16.3165 29.3251 16.2901 29.3172 16.2622 29.3123C16.1011 29.2158 15.9338 29.1308 15.7625 29.0534C15.419 28.8618 15.071 28.6793 14.7146 28.5125C14.6858 28.4853 14.6526 28.4662 14.6132 28.4594C14.5925 28.4322 14.5635 28.4204 14.5308 28.416C14.4558 28.366 14.3773 28.3229 14.2918 28.2939C14.0913 28.1713 13.8811 28.0669 13.6677 27.9689C13.327 27.7778 12.9793 27.6002 12.6279 27.4298C12.2812 27.2436 11.9345 27.0569 11.5782 26.8899C11.237 26.6938 10.8853 26.5178 10.5315 26.346C10.4698 26.3018 10.4081 26.2574 10.3467 26.2132C10.0463 25.9253 9.98406 25.5596 10.0031 25.1669Z"
                  fill="#5356FB"
              />
              <path
                  d="M30.8908 16.7526C30.894 16.769 30.8974 16.7858 30.9005 16.8022C30.9 16.8982 30.8992 16.9939 30.8987 17.0898C30.8759 17.1662 30.8534 17.2428 30.8307 17.3191C30.7426 17.5312 30.5708 17.6792 30.4257 17.8473C30.41 17.8475 30.4011 17.8551 30.4001 17.8713C30.2246 18.0282 30.0581 18.1942 29.9015 18.3697C29.8853 18.3705 29.8779 18.3793 29.8774 18.395C29.7004 18.5501 29.5352 18.7166 29.3791 18.8926C29.3634 18.8929 29.355 18.9007 29.3542 18.9166C29.1791 19.0738 29.012 19.239 28.8559 19.4155C28.8402 19.4165 28.8324 19.4252 28.8318 19.4406C28.6548 19.5959 28.4896 19.7627 28.3332 19.9384C28.3178 19.9389 28.3095 19.947 28.3087 19.9625C28.1332 20.1191 27.9659 20.2843 27.8106 20.4613C27.8025 20.4694 27.7941 20.4778 27.786 20.4859C27.6087 20.641 27.4443 20.8088 27.2869 20.9837C27.2712 20.9835 27.2628 20.9908 27.2626 21.0067C27.1078 21.1382 26.935 21.2376 26.741 21.299C26.5653 21.3262 26.3904 21.3257 26.2168 21.2839C25.8201 21.1458 25.5744 20.8739 25.4865 20.4616C25.4768 20.2848 25.4949 20.1107 25.5359 19.9387C25.5702 19.8252 25.6444 19.7329 25.6972 19.6291C25.76 19.5593 25.8227 19.4895 25.8855 19.4197C25.9982 19.3086 26.1106 19.1972 26.2233 19.0861C26.296 19.0335 26.3603 18.9723 26.4126 18.8991C26.5216 18.7917 26.6306 18.6839 26.7397 18.5765C26.8194 18.5177 26.889 18.4486 26.9488 18.3697C27.0495 18.2599 27.1502 18.1501 27.2513 18.0395C27.0845 18.0395 26.913 18.0395 26.7415 18.0395C26.5668 18.0266 26.3919 18.0269 26.2173 18.0395C26.0434 18.0274 25.8695 18.0274 25.6959 18.0395C25.5213 18.0266 25.3464 18.0269 25.1717 18.0395C24.9978 18.0274 24.824 18.0274 24.6504 18.0395C24.4757 18.0266 24.3008 18.0269 24.1261 18.0395C23.9523 18.0274 23.7784 18.0274 23.6048 18.0395C23.4301 18.0266 23.2552 18.0269 23.0806 18.0395C22.9067 18.0274 22.7331 18.0274 22.5592 18.0395C22.3843 18.0269 22.2097 18.0269 22.0347 18.0395C21.8611 18.0264 21.6875 18.0295 21.5139 18.0379C21.3346 18.0248 21.1612 17.9866 20.997 17.9121C20.9607 17.8902 20.9243 17.8682 20.8877 17.8462C20.5361 17.5521 20.3972 17.1743 20.4474 16.7228C20.4571 16.677 20.4671 16.6312 20.4767 16.5858C20.5241 16.4833 20.5714 16.3808 20.6187 16.2783C20.7201 16.1394 20.8438 16.0244 20.9892 15.9324C21.1581 15.8623 21.3286 15.8053 21.5163 15.8056C23.3907 15.8077 25.2653 15.8071 27.1397 15.8064C27.1807 15.8064 27.2249 15.8202 27.2783 15.7844C27.0994 15.6035 26.9308 15.4204 26.742 15.257C26.7337 15.2487 26.7255 15.2406 26.7172 15.2322C26.5606 15.0573 26.3956 14.8907 26.2181 14.737C26.2092 14.7281 26.2003 14.7195 26.1914 14.7106C26.0267 14.5433 25.8622 14.3759 25.6975 14.2089C25.6912 14.2002 25.6852 14.1919 25.6789 14.1832C25.5814 14.0227 25.5231 13.8473 25.4847 13.6645C25.4852 13.6172 25.4839 13.5696 25.4865 13.5225C25.4938 13.3939 25.4713 13.2598 25.5558 13.1452C25.7009 12.8519 25.9357 12.6663 26.2453 12.5695C26.4016 12.5444 26.5582 12.5457 26.7148 12.5664C26.9522 12.6378 27.1585 12.7585 27.3293 12.9408C27.415 13.0323 27.5094 13.1152 27.6001 13.2022C27.6349 13.2514 27.6762 13.2945 27.7264 13.3283C27.8501 13.4689 27.9803 13.6028 28.1236 13.7236C28.1562 13.7756 28.1991 13.8172 28.2504 13.8507C28.3714 13.9937 28.5053 14.1241 28.6459 14.2475C28.688 14.2896 28.7299 14.3317 28.772 14.3738C28.8959 14.514 29.0266 14.6476 29.1694 14.7689C29.2018 14.8212 29.246 14.8617 29.2962 14.896C29.4172 15.039 29.5511 15.1692 29.6915 15.2929C29.7273 15.3412 29.7671 15.3859 29.8186 15.4189C30.0408 15.645 30.2584 15.8759 30.4866 16.096C30.6793 16.2822 30.826 16.4908 30.8908 16.7526Z"
                  fill="#5356FB"
              />
            </svg>
          </span>
            <span
                className={`signout-btn-content text-white text-xl font-bold ${
                    sidebar ? "active" : ""
                }`}
            >
            Signout
          </span>
          </button>
        </div>
      ) : (
        <button
          onClick={logoutModalHandler}
          type="button"
          className="signout-btn w-full flex items-center justify-center"
        >
          <span className="border border-purple rounded-full">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20" cy="20" r="20" fill="white" />
              <path
                d="M10.0031 25.1669C10.0031 24.9927 10.0031 24.8189 10.0031 24.6447C10.0031 24.4701 10.0031 24.2957 10.0031 24.121C10.0031 23.9469 10.0031 23.773 10.0031 23.5989C10.0031 23.4243 10.0031 23.2499 10.0031 23.0752C10.0031 22.9011 10.0031 22.7272 10.0031 22.5531C10.0031 22.3784 10.0031 22.204 10.0031 22.0294C10.0031 21.8552 10.0031 21.6814 10.0031 21.5072C10.0031 21.3326 10.0031 21.1582 10.0031 20.9835C10.0031 20.8094 10.0031 20.6355 10.0031 20.4614C10.0031 20.2868 10.0031 20.1124 10.0031 19.9377C10.0031 19.7636 10.0031 19.5897 10.0031 19.4156C10.0031 19.2409 10.0031 19.0665 10.0031 18.8919C10.0031 18.7178 10.0031 18.5439 10.0031 18.3698C10.0031 18.1951 10.0031 18.0207 10.0031 17.8461C10.0031 17.6719 10.0031 17.4981 10.0031 17.3239C10.0031 17.1493 10.0031 16.9749 10.0031 16.8002C10.0031 16.6261 10.0031 16.4522 10.0031 16.2781C10.0031 16.1035 10.0031 15.9291 10.0031 15.7544C10.0031 15.5803 10.0031 15.4064 10.0031 15.2323C10.0031 15.0576 10.0031 14.8832 10.0031 14.7086C10.0031 14.5344 10.0031 14.3606 10.0031 14.1865C10.0031 14.0118 10.0031 13.8374 10.0031 13.6628C10.0031 13.4886 10.0031 13.3148 10.0031 13.1406C10.0031 12.966 10.0031 12.7916 10.0031 12.6169C10.0031 12.4428 10.0031 12.2689 10.0031 12.0948C10.0031 11.9201 10.0031 11.7457 10.0031 11.5711C10.0031 11.397 10.0031 11.2231 10.0031 11.049C10.0544 10.4071 10.4089 10.0526 11.0539 10C11.2281 10 11.4019 10 11.5761 10C11.7507 10 11.9251 10 12.0998 10C12.2739 10 12.4478 10 12.6219 10C12.7965 10 12.9709 10 13.1456 10C13.3197 10 13.4936 10 13.6677 10C13.8424 10 14.0168 10 14.1914 10C14.3656 10 14.5394 10 14.7136 10C14.8882 10 15.0626 10 15.2373 10C15.4114 10 15.5853 10 15.7594 10C15.934 10 16.1084 10 16.2831 10C16.4572 10 16.6311 10 16.8052 10C16.9799 10 17.1543 10 17.3289 10C17.503 10 17.6769 10 17.851 10C18.0257 10 18.2001 10 18.3747 10C18.5489 10 18.7227 10 18.8969 10C19.0715 10 19.2459 10 19.4206 10C19.5947 10 19.7686 10 19.9427 10C20.1173 10 20.2917 10 20.4664 10C20.6405 10 20.8144 10 20.9885 10C21.1632 10 21.3376 10 21.5122 10C21.6864 10 21.8602 10 22.0344 10C22.209 10 22.3834 10 22.5581 10C22.7322 10 22.9061 10 23.0802 10C23.2548 10 23.4292 10 23.6039 10C24.0643 10.0186 24.3893 10.2384 24.5799 10.6576C24.5964 10.7093 24.6131 10.7614 24.6296 10.8131C24.6338 10.8395 24.6379 10.8659 24.6421 10.8921C24.6429 12.0655 24.6437 13.2387 24.6434 14.4121C24.6434 14.4631 24.657 14.5167 24.6259 14.5648C24.4594 14.564 24.2928 14.552 24.1268 14.5713C23.9519 14.5556 23.7767 14.5559 23.6018 14.5713C23.4284 14.5559 23.2548 14.5567 23.0815 14.5711C22.9599 14.5679 22.8381 14.5572 22.7173 14.5637C22.6213 14.569 22.6035 14.5337 22.6041 14.4456C22.6077 13.84 22.6064 13.2345 22.6059 12.629C22.6059 12.5641 22.614 12.4977 22.5813 12.4368C22.5403 12.2355 22.4221 12.11 22.2187 12.0686C22.1374 12.0239 22.0487 12.0433 21.9638 12.043C19.3931 12.0417 16.824 12.042 14.2552 12.042C14.1744 12.042 14.0934 12.042 14.0126 12.042C14.0097 12.0522 14.0066 12.0621 14.0037 12.0723C14.2385 12.1894 14.4733 12.3068 14.7081 12.424C15.0555 12.6083 15.4017 12.7947 15.7594 12.9592C16.0998 13.1553 16.4517 13.3294 16.806 13.4991C16.9127 13.5637 17.0214 13.6241 17.1388 13.6677C17.3543 13.7969 17.5794 13.9077 17.8069 14.0139C17.9321 14.0808 18.0565 14.1493 18.1828 14.2142C18.4391 14.3459 18.7089 14.4573 18.8903 14.6984V14.7065L18.8974 14.7104C18.9923 14.8728 19.055 15.0466 19.0838 15.2325C19.0849 15.4069 19.0862 15.5813 19.0872 15.7557C19.0739 15.9304 19.0739 16.105 19.0872 16.2797C19.0752 16.4535 19.0752 16.6277 19.0872 16.8015C19.0739 16.9762 19.0739 17.1508 19.0872 17.3255C19.0752 17.4994 19.0752 17.6732 19.0872 17.8471C19.0739 18.0218 19.0739 18.1964 19.0872 18.3711C19.0752 18.5449 19.0752 18.7188 19.0872 18.8927C19.0739 19.0673 19.0739 19.242 19.0872 19.4169C19.0752 19.5908 19.0752 19.7646 19.0872 19.9385C19.0739 20.1132 19.0739 20.2878 19.0872 20.4625C19.0752 20.6363 19.0752 20.8102 19.0872 20.9841C19.0739 21.1587 19.0739 21.3334 19.0872 21.508C19.0752 21.6819 19.0752 21.8558 19.0872 22.0299C19.0739 22.2046 19.0739 22.3792 19.0872 22.5539C19.0752 22.7277 19.0752 22.9016 19.0872 23.0757C19.0739 23.2504 19.0739 23.425 19.0872 23.5997C19.0849 23.6125 19.0801 23.6253 19.0807 23.6379C19.0948 24.0206 18.986 23.9587 19.4193 23.9513C19.5939 23.9642 19.7686 23.9642 19.9432 23.9513C20.1168 23.9626 20.2907 23.9626 20.4643 23.9513C20.6392 23.9642 20.8144 23.9642 20.9893 23.9513C21.1629 23.9626 21.3365 23.9626 21.5104 23.9513C21.685 23.9642 21.8597 23.9644 22.0344 23.9513C22.3047 23.9676 22.4919 23.8452 22.569 23.6023C22.6098 23.5213 22.6028 23.4337 22.6028 23.3474C22.603 22.0767 22.6046 20.806 22.5996 19.5353C22.5991 19.4174 22.6328 19.3934 22.7445 19.3944C23.3275 19.3999 23.9106 19.3965 24.4939 19.397C24.5451 19.397 24.599 19.3847 24.6458 19.4187C24.6416 19.5923 24.6332 19.7662 24.6502 19.9398C24.6374 20.1139 24.6374 20.2881 24.6502 20.4622C24.6359 20.6366 24.6359 20.811 24.6502 20.9854C24.6374 21.1595 24.6374 21.3336 24.6502 21.5078C24.6359 21.6822 24.6359 21.8566 24.6502 22.0309C24.6374 22.2051 24.6374 22.3792 24.6502 22.5533C24.6359 22.7277 24.6359 22.9021 24.6502 23.0765C24.6374 23.2506 24.6374 23.4248 24.6502 23.5989C24.6359 23.7733 24.6359 23.9477 24.6502 24.1221C24.6374 24.2962 24.6374 24.4703 24.6502 24.6445C24.6413 24.8275 24.6322 25.0108 24.6233 25.1938C24.5674 25.3763 24.4779 25.541 24.3566 25.6882C24.2787 25.7483 24.201 25.8085 24.1231 25.8686C23.8991 25.9829 23.658 25.9944 23.4125 25.9938C22.0069 25.9915 20.6016 25.9923 19.196 25.9949C19.1544 25.9949 19.0909 25.9549 19.0676 26.0318C19.0561 26.0922 19.055 26.1523 19.0684 26.2124C19.0535 26.3873 19.054 26.5623 19.0684 26.7372C19.055 26.9108 19.0548 27.0844 19.0684 27.258C19.0537 27.4326 19.0537 27.6073 19.0684 27.782C19.0548 27.9556 19.055 28.1294 19.0684 28.303C19.0537 28.478 19.0537 28.6529 19.0684 28.8275C19.0548 29.0014 19.0548 29.1753 19.0684 29.3491C19.0535 29.524 19.0543 29.699 19.0679 29.8739C19.049 30.2927 18.7243 30.4878 18.3745 30.3994C18.3528 30.3785 18.3277 30.3657 18.2968 30.3667C18.1567 30.2786 18.009 30.2051 17.8576 30.1385C17.6897 30.0352 17.5138 29.9473 17.3347 29.8663C17.1637 29.7638 16.9864 29.6741 16.8049 29.5918C16.652 29.5034 16.4967 29.4195 16.3338 29.3502C16.3165 29.3251 16.2901 29.3172 16.2622 29.3123C16.1011 29.2158 15.9338 29.1308 15.7625 29.0534C15.419 28.8618 15.071 28.6793 14.7146 28.5125C14.6858 28.4853 14.6526 28.4662 14.6132 28.4594C14.5925 28.4322 14.5635 28.4204 14.5308 28.416C14.4558 28.366 14.3773 28.3229 14.2918 28.2939C14.0913 28.1713 13.8811 28.0669 13.6677 27.9689C13.327 27.7778 12.9793 27.6002 12.6279 27.4298C12.2812 27.2436 11.9345 27.0569 11.5782 26.8899C11.237 26.6938 10.8853 26.5178 10.5315 26.346C10.4698 26.3018 10.4081 26.2574 10.3467 26.2132C10.0463 25.9253 9.98406 25.5596 10.0031 25.1669Z"
                fill="#5356FB"
              />
              <path
                d="M30.8908 16.7526C30.894 16.769 30.8974 16.7858 30.9005 16.8022C30.9 16.8982 30.8992 16.9939 30.8987 17.0898C30.8759 17.1662 30.8534 17.2428 30.8307 17.3191C30.7426 17.5312 30.5708 17.6792 30.4257 17.8473C30.41 17.8475 30.4011 17.8551 30.4001 17.8713C30.2246 18.0282 30.0581 18.1942 29.9015 18.3697C29.8853 18.3705 29.8779 18.3793 29.8774 18.395C29.7004 18.5501 29.5352 18.7166 29.3791 18.8926C29.3634 18.8929 29.355 18.9007 29.3542 18.9166C29.1791 19.0738 29.012 19.239 28.8559 19.4155C28.8402 19.4165 28.8324 19.4252 28.8318 19.4406C28.6548 19.5959 28.4896 19.7627 28.3332 19.9384C28.3178 19.9389 28.3095 19.947 28.3087 19.9625C28.1332 20.1191 27.9659 20.2843 27.8106 20.4613C27.8025 20.4694 27.7941 20.4778 27.786 20.4859C27.6087 20.641 27.4443 20.8088 27.2869 20.9837C27.2712 20.9835 27.2628 20.9908 27.2626 21.0067C27.1078 21.1382 26.935 21.2376 26.741 21.299C26.5653 21.3262 26.3904 21.3257 26.2168 21.2839C25.8201 21.1458 25.5744 20.8739 25.4865 20.4616C25.4768 20.2848 25.4949 20.1107 25.5359 19.9387C25.5702 19.8252 25.6444 19.7329 25.6972 19.6291C25.76 19.5593 25.8227 19.4895 25.8855 19.4197C25.9982 19.3086 26.1106 19.1972 26.2233 19.0861C26.296 19.0335 26.3603 18.9723 26.4126 18.8991C26.5216 18.7917 26.6306 18.6839 26.7397 18.5765C26.8194 18.5177 26.889 18.4486 26.9488 18.3697C27.0495 18.2599 27.1502 18.1501 27.2513 18.0395C27.0845 18.0395 26.913 18.0395 26.7415 18.0395C26.5668 18.0266 26.3919 18.0269 26.2173 18.0395C26.0434 18.0274 25.8695 18.0274 25.6959 18.0395C25.5213 18.0266 25.3464 18.0269 25.1717 18.0395C24.9978 18.0274 24.824 18.0274 24.6504 18.0395C24.4757 18.0266 24.3008 18.0269 24.1261 18.0395C23.9523 18.0274 23.7784 18.0274 23.6048 18.0395C23.4301 18.0266 23.2552 18.0269 23.0806 18.0395C22.9067 18.0274 22.7331 18.0274 22.5592 18.0395C22.3843 18.0269 22.2097 18.0269 22.0347 18.0395C21.8611 18.0264 21.6875 18.0295 21.5139 18.0379C21.3346 18.0248 21.1612 17.9866 20.997 17.9121C20.9607 17.8902 20.9243 17.8682 20.8877 17.8462C20.5361 17.5521 20.3972 17.1743 20.4474 16.7228C20.4571 16.677 20.4671 16.6312 20.4767 16.5858C20.5241 16.4833 20.5714 16.3808 20.6187 16.2783C20.7201 16.1394 20.8438 16.0244 20.9892 15.9324C21.1581 15.8623 21.3286 15.8053 21.5163 15.8056C23.3907 15.8077 25.2653 15.8071 27.1397 15.8064C27.1807 15.8064 27.2249 15.8202 27.2783 15.7844C27.0994 15.6035 26.9308 15.4204 26.742 15.257C26.7337 15.2487 26.7255 15.2406 26.7172 15.2322C26.5606 15.0573 26.3956 14.8907 26.2181 14.737C26.2092 14.7281 26.2003 14.7195 26.1914 14.7106C26.0267 14.5433 25.8622 14.3759 25.6975 14.2089C25.6912 14.2002 25.6852 14.1919 25.6789 14.1832C25.5814 14.0227 25.5231 13.8473 25.4847 13.6645C25.4852 13.6172 25.4839 13.5696 25.4865 13.5225C25.4938 13.3939 25.4713 13.2598 25.5558 13.1452C25.7009 12.8519 25.9357 12.6663 26.2453 12.5695C26.4016 12.5444 26.5582 12.5457 26.7148 12.5664C26.9522 12.6378 27.1585 12.7585 27.3293 12.9408C27.415 13.0323 27.5094 13.1152 27.6001 13.2022C27.6349 13.2514 27.6762 13.2945 27.7264 13.3283C27.8501 13.4689 27.9803 13.6028 28.1236 13.7236C28.1562 13.7756 28.1991 13.8172 28.2504 13.8507C28.3714 13.9937 28.5053 14.1241 28.6459 14.2475C28.688 14.2896 28.7299 14.3317 28.772 14.3738C28.8959 14.514 29.0266 14.6476 29.1694 14.7689C29.2018 14.8212 29.246 14.8617 29.2962 14.896C29.4172 15.039 29.5511 15.1692 29.6915 15.2929C29.7273 15.3412 29.7671 15.3859 29.8186 15.4189C30.0408 15.645 30.2584 15.8759 30.4866 16.096C30.6793 16.2822 30.826 16.4908 30.8908 16.7526Z"
                fill="#5356FB"
              />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
