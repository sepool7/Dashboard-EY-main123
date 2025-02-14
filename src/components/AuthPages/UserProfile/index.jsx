import React, { useState } from "react";
import { Link } from "react-router-dom";
import authProfilePic from "../../../assets/images/auth-profile-picture.png";
import followerProfile from "../../../assets/images/profile-2.png";
import profileBanner from "../../../assets/images/profile-cover-2.png";
import collections from "../../../data/collectionplan_data.json";
import marketPlace from "../../../data/marketplace_data.json";
import products from "../../../data/product_data.json";
import ModalCom from "../../Helpers/ModalCom";
import Layout from "../../Partials/Layout";
import ActivitiesTab from "./ActivitiesTab";
import CollectionTab from "./CollectionTab";
import CreatedTab from "./CreatedTab";
import HiddenProductsTab from "./HiddenProductsTab";
import OnSaleTab from "./OnSaleTab";
import OwnTab from "./OwnTab";

export default function UserProfile() {
  const onSaleProducts = marketPlace.data;
  const CreatedSell = marketPlace.data;
  const CreatedBits = products.datas;
  const ownProducts = products.datas;
  const collectionProducts = collections.data;

  const tabs = [
    {
      id: 1,
      name: "onsale",
      content: "On Sale",
    },
    {
      id: 2,
      name: "owned",
      content: "Owned",
    },
    {
      id: 3,
      name: "created",
      content: "Created",
    },
    {
      id: 4,
      name: "hidden",
      content: "Hidden",
    },
    {
      id: 5,
      name: "collection",
      content: "Collection",
    },
    {
      id: 6,
      name: "activity",
      content: "Activity",
    },
  ];

  const [tab, setTab] = useState(tabs[0].name);
  const tabHandler = (value) => {
    setTab(value);
  };

  const [showFollowerModal, setValue] = useState(false);
  const openFollowerModal = () => {
    setValue(!showFollowerModal);
  };
  return (
    <>
      <Layout>
        <div className="nft-userprofile-wrapper w-full">
          <div className="main-wrapper w-full">
            <div className="content-wrapper-profile-only w-full mb-6">
              <div className="auth-cover w-full">
                <div
                  className="w-full lg:h-[312px] h-[212px] sm:space-x-6 space-x-4 rounded-2xl overflow-hidden flex justify-end items-center sm:pr-10 pr-4"
                  style={{
                    background: `url(${profileBanner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <button
                    type="button"
                    className="sm:w-[111px] sm:h-[46px] w-[100px] h-[40px] rounded-[41px] flex justify-center items-center text-white sm:text-18 text-sm bg-pink"
                  >
                    Follow Me
                  </button>
                  <button
                    type="button"
                    className="sm:w-[52px] sm:h-[52px] w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white dark:bg-dark-white  "
                  >
                    <svg
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.4922 5.51801C12.4922 5.43549 12.4922 5.37668 12.4922 5.31786C12.4908 3.80698 12.4894 2.2961 12.4881 0.784769C12.4876 0.460163 12.6709 0.18525 12.97 0.0626106C13.2823 -0.0654996 13.6374 0.00562209 13.8708 0.251813C14.1079 0.50165 14.3391 0.756959 14.5725 1.00999C16.9742 3.6114 19.3723 6.216 21.7827 8.80921C22.0863 9.13564 22.0863 9.7347 21.7863 10.0579C19.1471 12.9024 16.5188 15.7568 13.8868 18.608C13.6356 18.8802 13.3069 18.9586 12.9864 18.8264C12.6668 18.6947 12.4899 18.4006 12.4899 18.0404C12.4899 16.5204 12.4844 15 12.4803 13.48C12.4803 13.449 12.4735 13.418 12.4676 13.3706C12.4092 13.3706 12.3559 13.3697 12.3021 13.3706C9.96553 13.4216 7.82231 14.1082 5.8537 15.3506C4.32002 16.3185 3.04895 17.5544 2.11206 19.1177C1.60053 19.9712 1.23261 20.8826 1.02517 21.8573C1.01788 21.8915 1.00602 21.9248 0.984596 22C0.896606 21.7821 0.818646 21.6024 0.750715 21.4196C0.0700445 19.5905 -0.16338 17.7081 0.114724 15.7728C0.385533 13.8885 1.11088 12.1857 2.25521 10.6707C4.17459 8.12899 6.70944 6.52693 9.80642 5.8107C10.6271 5.62104 11.4623 5.52804 12.3053 5.51846C12.3591 5.51755 12.4133 5.51801 12.4922 5.51801Z"
                        fill="#374557"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="auth lg:flex justify-between items-center mb-16">
                <div className="auth-user-details sm:px-10 px-0">
                  {/* profile picture */}
                  <div className=" profile-picture sm:block flex justify-center items-center mb-4">
                    <img
                      src={authProfilePic}
                      alt=""
                      className="md:w-[205px] md:h-[205px] w-[130px] h-[130px] object-cover rounded-full overflow-hidden border-[6px] border-white"
                    />
                  </div>
                  <div className="auth-user-profile-content mb-9">
                    <div className="mb-4">
                      <h1 className="text-dark-gray dark:text-white tracking-wide sm:text-26 text-xl font-bold">
                        Rafiqul Islam Suvo
                      </h1>
                    </div>
                    <div className="sm:w-[437px] w-full mb-4">
                      <p className="text-thin-light-gray sm:text-base  text-sm tracking-wide leading-2">
                        Autoglyphs are fitting the first “on-chain” to the find
                        generative art on the Ethereum blockchain
                        <span className="ml-1 text-purple">Read More</span>
                      </p>
                    </div>
                    <div className="flex text-thin-light-gray sm:text-xl text-sm">
                      <p
                        className="border-r pr-5  border-thin-light-gray"
                        onClick={openFollowerModal}
                      >
                        <span className="font-bold mr-1   text-dark-gray dark:text-white">
                          49
                        </span>
                        Followers
                      </p>
                      <p className="border-r px-5  border-thin-light-gray">
                        <span className="font-bold mr-1   text-dark-gray dark:text-white">
                          35
                        </span>
                        Following
                      </p>
                      <p className="pl-5">
                        <span className="font-bold mr-1   text-dark-gray dark:text-white">
                          914
                        </span>
                        Favorites
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <button
                      type="button"
                      className="w-[103px] h-[46px] capitalize flex justify-center items-center text-white text-18 rounded-full bg-purple"
                    >
                      message
                    </button>
                    <button
                      type="button"
                      className="w-[46px] h-[46px]  flex justify-center items-center bg-white dark:bg-dark-white   rounded-full"
                    >
                      <svg
                        width="6"
                        height="21"
                        viewBox="0 0 6 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="3.00001"
                          cy="2.91947"
                          r="2.65385"
                          fill="#374557"
                        />
                        <circle
                          cx="3.00001"
                          cy="10.3521"
                          r="2.65385"
                          fill="#374557"
                        />
                        <circle
                          cx="3.00001"
                          cy="17.7798"
                          r="2.65385"
                          fill="#374557"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="auth-tab-content relative mb-10">
                <div className="lg:flex justify-between">
                  <div className="tab-items">
                    <ul className="lg:flex lg:space-x-14 space-x-8">
                      {tabs &&
                        tabs.length > 0 &&
                        tabs.map((tabValue) => (
                          <li
                            key={tabValue.id}
                            className="relative group inline"
                            onClick={() => tabHandler(tabValue.name)}
                          >
                            <span
                              className={`py-4 sm:border-b dark:border-[#5356fb29]  border-b dark:border-[#5356fb29] -none group-hover:border-purple border-transparent lg:text-xl text-sm tracking-wide font-bold  group-hover:text-purple text-dark-gray dark:text-white relative z-10  ${
                                tab === tabValue.name
                                  ? "text-purple border-purple "
                                  : "text-dark-gray dark:text-white border-transparent "
                              }`}
                            >
                              {tabValue.content}
                            </span>
                            <span
                              className={`w-5 h-5 group-hover:bg-pink group-hover:text-white  text-[10px]  rounded-full absolute -top-2 -right-5 flex justify-center items-center ${
                                tab === tabValue.name
                                  ? "text-white bg-pink"
                                  : "text-thin-light-gray bg-[#F2B8FD]"
                              }`}
                            >
                              16
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div style={{ transform: "translateY(-22px)" }}>
                    <Link
                      to="/upload-product"
                      className="btn-gradient w-[153px] h-[46px] rounded-full text-white lg:flex hidden justify-center items-center"
                    >
                      Upload Product
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:block w-full h-[1px] bg-[#DCD5FE] absolute top-[42px] left-0"></div>
              </div>
            </div>

            <div className="tab-cotainer w-full">
              {tab === "onsale" ? (
                <OnSaleTab products={onSaleProducts} />
              ) : tab === "owned" ? (
                <OwnTab products={ownProducts} />
              ) : tab === "created" ? (
                <CreatedTab
                  marketProducts={CreatedSell}
                  mainProducts={CreatedBits}
                />
              ) : tab === "hidden" ? (
                <HiddenProductsTab
                  marketProducts={CreatedSell}
                  mainProducts={CreatedBits}
                />
              ) : tab === "collection" ? (
                <CollectionTab products={collectionProducts} />
              ) : tab === "activity" ? (
                <ActivitiesTab />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {showFollowerModal && (
          <ModalCom action={openFollowerModal} situation={showFollowerModal}>
            <div className="lg:w-[420px] w-full h-full lg:overflow-hidden lg:rounded-2xl bg-white dark:bg-dark-white  ">
              <div className="heading flex justify-between items-center py-6  md:px-[30px] px-[23px] border-b dark:border-[#5356fb29]  border-light-purple dark:border-[#5356fb29] ">
                <p className="text-26 font-bold text-dark-gray dark:text-white tracking-wide">
                  Followers
                </p>
                <button type="button" onClick={openFollowerModal}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32 14.3645C32 15.5022 32 16.6399 32 17.7779C31.8143 17.8408 31.8787 18.0048 31.8565 18.1334C30.6952 24.8402 26.8853 29.2664 20.4091 31.362C19.4672 31.6668 18.4669 31.7917 17.4935 31.9997C16.3558 31.9997 15.2181 31.9997 14.0801 31.9997C13.8574 31.741 13.5279 31.7984 13.2475 31.7416C6.90872 30.4552 2.74424 26.7311 0.684152 20.6107C0.386668 19.7268 0.396442 18.7733 0 17.9199C0 16.6399 0 15.3598 0 14.0798C0.259 13.884 0.190585 13.5694 0.240675 13.3162C1.52285 6.84244 5.35655 2.66392 11.5936 0.623067C12.4549 0.34116 13.3785 0.343909 14.2221 0C15.3125 0 16.4029 0 17.4932 0C17.525 0.110258 17.6111 0.120948 17.7089 0.130417C24.2666 0.77242 29.8064 5.52819 31.449 11.9351C31.6552 12.739 31.8174 13.5542 32 14.3645ZM29.3431 16.0699C29.3718 8.68538 23.4154 2.66942 16.0684 2.66178C8.69759 2.65445 2.66972 8.58489 2.65353 15.8601C2.63704 23.2563 8.52319 29.2979 15.7868 29.3404C23.2862 29.3846 29.3144 23.4832 29.3431 16.0699Z"
                      fill="#374557"
                      fillOpacity="0.6"
                    />
                    <path
                      d="M14.1604 16.0221C12.3843 14.2567 10.6724 12.5534 8.95837 10.8525C8.53353 10.431 8.23421 9.97162 8.46175 9.34031C8.83956 8.29209 9.95101 8.07371 10.794 8.906C12.3611 10.4536 13.9344 11.9963 15.4529 13.5909C15.9202 14.0817 16.1447 14.0005 16.5662 13.5643C18.0961 11.9804 19.6617 10.4307 21.2282 8.88248C22.0596 8.06058 23.208 8.30064 23.5522 9.35008C23.7584 9.97865 23.459 10.4383 23.0336 10.8619C21.489 12.3991 19.9531 13.9443 18.4088 15.4815C18.2421 15.6476 18.0408 15.779 17.8188 15.9558C19.629 17.7563 21.366 19.4676 23.0831 21.1987C23.934 22.0567 23.6875 23.2106 22.6072 23.556C21.9658 23.761 21.5223 23.4186 21.1067 23.0023C19.5502 21.444 17.9757 19.9031 16.448 18.3171C16.0616 17.9157 15.8854 17.9811 15.5375 18.3378C13.9835 19.9318 12.399 21.4956 10.8242 23.0692C10.4015 23.4916 9.94887 23.7768 9.30961 23.516C8.27819 23.0948 8.06073 22.0814 8.87591 21.2418C10.0307 20.0528 11.2118 18.8891 12.3895 17.7221C12.9588 17.1577 13.5462 16.6106 14.1604 16.0221Z"
                      fill="#374557"
                      fillOpacity="0.6"
                    />
                  </svg>
                </button>
              </div>
              <div className="content h-screen overflow-style-none overflow-y-scroll pt-6 pb-[16rem] md:px-[30px] px-[23px] w-full">
                <div className="content-items w-full">
                  <div className="content-item flex justify-between mb-6">
                    <div className="flex space-x-5 items-center">
                      <div className="relative w-14 h-14 rounded-full">
                        <img
                          src={followerProfile}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute right-0 top-0">
                          <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0855 16.196C14.6062 16.196 14.1265 16.1984 13.6472 16.1939C13.5565 16.193 13.5052 16.2236 13.4586 16.3004C13.0161 17.0244 12.5667 17.7443 12.128 18.4707C12.0631 18.578 12.0159 18.5712 11.9278 18.5164C11.2785 18.1127 10.6263 17.7134 9.97822 17.3074C9.89488 17.2552 9.83882 17.2543 9.75429 17.3056C9.08366 17.7126 8.408 18.1115 7.73737 18.5184C7.63831 18.5786 7.59767 18.5694 7.53717 18.4668C7.11213 17.744 6.6779 17.0262 6.2502 16.3049C6.20096 16.2215 6.14431 16.1936 6.04851 16.1939C5.1489 16.1975 4.2496 16.1963 3.34999 16.1957C3.12546 16.1957 3.15601 16.2144 3.15601 15.9943C3.15512 15.0802 3.15394 14.1658 3.15779 13.2516C3.15839 13.146 3.12962 13.0849 3.03559 13.0277C2.26472 12.5576 1.49918 12.0788 0.728303 11.6084C0.636059 11.5521 0.620636 11.518 0.679957 11.4227C1.10885 10.7367 1.52943 10.0453 1.95862 9.35957C2.01201 9.27444 2.00934 9.21957 1.95862 9.13593C1.57452 8.50327 1.19872 7.86557 0.814615 7.23321C0.758261 7.14066 0.777836 7.10596 0.863555 7.05524C1.5938 6.62309 2.32048 6.18471 3.05131 5.75315C3.13792 5.70213 3.15809 5.644 3.15779 5.55146C3.15483 4.60262 3.15839 3.65378 3.15335 2.70494C3.15275 2.57532 3.17856 2.52994 3.32033 2.53113C4.22468 2.53825 5.12903 2.5335 6.03368 2.53676C6.12859 2.53706 6.18138 2.51066 6.23299 2.42613C6.68977 1.67602 7.15425 0.930648 7.6131 0.181721C7.66856 0.0912566 7.70593 0.0607063 7.81449 0.128925C8.52872 0.577985 9.25006 1.01518 9.96547 1.46216C10.0589 1.5206 10.1256 1.52089 10.2176 1.46513C10.8333 1.09082 11.4535 0.724211 12.0684 0.34871C12.1817 0.279601 12.2303 0.287609 12.3009 0.408327C12.6913 1.07717 13.0947 1.7383 13.4885 2.40507C13.5452 2.50087 13.606 2.53854 13.7211 2.53795C14.6551 2.53231 15.5891 2.53706 16.5231 2.53202C16.6438 2.53142 16.6809 2.56049 16.68 2.68566C16.6747 3.60988 16.6785 4.5338 16.675 5.45802C16.6747 5.55739 16.7017 5.61463 16.7909 5.66921C17.5283 6.11827 18.2594 6.57801 18.9986 7.0244C19.1202 7.09795 19.1104 7.14956 19.0466 7.2513C18.6254 7.92489 18.212 8.60322 17.789 9.27563C17.7164 9.39101 17.7161 9.47435 17.7884 9.5927C18.1948 10.2574 18.5878 10.9304 18.9941 11.5954C19.0641 11.7099 19.046 11.7549 18.9375 11.8187C18.2235 12.2399 17.5147 12.6691 16.8004 13.0897C16.7067 13.1448 16.6741 13.2042 16.6747 13.3112C16.6788 14.2206 16.675 15.1297 16.6797 16.0391C16.6803 16.161 16.6483 16.2002 16.5231 16.1984C16.0444 16.1922 15.5648 16.1963 15.0855 16.196ZM7.23819 8.98644C7.18806 9.03033 7.1584 9.05495 7.13052 9.08105C6.86447 9.33169 6.59871 9.58261 6.33325 9.83384C6.14668 10.0106 6.14461 10.0133 6.3196 10.1998C7.15128 11.0855 7.98504 11.9694 8.81553 12.8559C8.88138 12.9262 8.92943 12.9348 8.99201 12.8592C9.02019 12.8254 9.05727 12.7993 9.08989 12.7687C9.85365 12.0527 10.618 11.337 11.3815 10.6207C12.3036 9.75553 13.224 8.88885 14.1485 8.02603C14.2218 7.95781 14.2022 7.92518 14.1452 7.86557C13.8996 7.60811 13.6535 7.35096 13.4188 7.08401C13.3224 6.97427 13.2673 6.98524 13.1664 7.08045C11.8326 8.33717 10.4937 9.58854 9.1593 10.8447C9.07417 10.9247 9.03235 10.9221 8.95375 10.8375C8.40563 10.2482 7.85157 9.66418 7.30018 9.07749C7.27675 9.05317 7.26132 9.02114 7.23819 8.98644Z"
                              fill="#3897EF"
                            />
                            <path
                              d="M7.23752 8.98774C7.26066 9.02244 7.27608 9.05448 7.29921 9.07909C7.8506 9.66548 8.40466 10.2498 8.95279 10.8391C9.03139 10.9237 9.07321 10.9263 9.15833 10.8463C10.4928 9.59014 11.8316 8.33906 13.1655 7.08205C13.2666 6.98684 13.3215 6.97557 13.4179 7.08561C13.6525 7.35285 13.8987 7.61001 14.1443 7.86717C14.2012 7.92678 14.2208 7.95941 14.1475 8.02763C13.223 8.89016 12.3026 9.75713 11.3805 10.6223C10.617 11.3386 9.85298 12.0543 9.08893 12.7703C9.0566 12.8006 9.01923 12.827 8.99105 12.8608C8.92847 12.9364 8.88041 12.9278 8.81457 12.8575C7.98378 11.971 7.15002 11.0871 6.31864 10.2014C6.14334 10.0149 6.14572 10.0119 6.33228 9.83544C6.59774 9.58421 6.8635 9.33328 7.12956 9.08265C7.15773 9.05626 7.18739 9.03164 7.23752 8.98774Z"
                              fill="#FDFDFE"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="">
                        <p className="text-xl font-bold tracking-wide   text-dark-gray dark:text-white">
                          Cody Fisher
                        </p>
                        <p className="text-sm text-thin-light-gray tracking-wide">
                          34.k followers
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="w-[115px] overflow-hidden text-18 tracking-wide h-[52px] rounded-full text-gradient secondary-gradient relative justify-center items-center sm:flex hidden"
                      >
                        Following
                      </button>
                      <button
                        type="button"
                        className="text-base tracking-wide text-gradient sm:hidden flex"
                      >
                        Following
                      </button>
                    </div>
                  </div>
                  <div className="content-item flex justify-between mb-6">
                    <div className="flex space-x-5 items-center">
                      <div className="relative w-14 h-14 rounded-full">
                        <img
                          src={followerProfile}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute right-0 top-0">
                          <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0855 16.196C14.6062 16.196 14.1265 16.1984 13.6472 16.1939C13.5565 16.193 13.5052 16.2236 13.4586 16.3004C13.0161 17.0244 12.5667 17.7443 12.128 18.4707C12.0631 18.578 12.0159 18.5712 11.9278 18.5164C11.2785 18.1127 10.6263 17.7134 9.97822 17.3074C9.89488 17.2552 9.83882 17.2543 9.75429 17.3056C9.08366 17.7126 8.408 18.1115 7.73737 18.5184C7.63831 18.5786 7.59767 18.5694 7.53717 18.4668C7.11213 17.744 6.6779 17.0262 6.2502 16.3049C6.20096 16.2215 6.14431 16.1936 6.04851 16.1939C5.1489 16.1975 4.2496 16.1963 3.34999 16.1957C3.12546 16.1957 3.15601 16.2144 3.15601 15.9943C3.15512 15.0802 3.15394 14.1658 3.15779 13.2516C3.15839 13.146 3.12962 13.0849 3.03559 13.0277C2.26472 12.5576 1.49918 12.0788 0.728303 11.6084C0.636059 11.5521 0.620636 11.518 0.679957 11.4227C1.10885 10.7367 1.52943 10.0453 1.95862 9.35957C2.01201 9.27444 2.00934 9.21957 1.95862 9.13593C1.57452 8.50327 1.19872 7.86557 0.814615 7.23321C0.758261 7.14066 0.777836 7.10596 0.863555 7.05524C1.5938 6.62309 2.32048 6.18471 3.05131 5.75315C3.13792 5.70213 3.15809 5.644 3.15779 5.55146C3.15483 4.60262 3.15839 3.65378 3.15335 2.70494C3.15275 2.57532 3.17856 2.52994 3.32033 2.53113C4.22468 2.53825 5.12903 2.5335 6.03368 2.53676C6.12859 2.53706 6.18138 2.51066 6.23299 2.42613C6.68977 1.67602 7.15425 0.930648 7.6131 0.181721C7.66856 0.0912566 7.70593 0.0607063 7.81449 0.128925C8.52872 0.577985 9.25006 1.01518 9.96547 1.46216C10.0589 1.5206 10.1256 1.52089 10.2176 1.46513C10.8333 1.09082 11.4535 0.724211 12.0684 0.34871C12.1817 0.279601 12.2303 0.287609 12.3009 0.408327C12.6913 1.07717 13.0947 1.7383 13.4885 2.40507C13.5452 2.50087 13.606 2.53854 13.7211 2.53795C14.6551 2.53231 15.5891 2.53706 16.5231 2.53202C16.6438 2.53142 16.6809 2.56049 16.68 2.68566C16.6747 3.60988 16.6785 4.5338 16.675 5.45802C16.6747 5.55739 16.7017 5.61463 16.7909 5.66921C17.5283 6.11827 18.2594 6.57801 18.9986 7.0244C19.1202 7.09795 19.1104 7.14956 19.0466 7.2513C18.6254 7.92489 18.212 8.60322 17.789 9.27563C17.7164 9.39101 17.7161 9.47435 17.7884 9.5927C18.1948 10.2574 18.5878 10.9304 18.9941 11.5954C19.0641 11.7099 19.046 11.7549 18.9375 11.8187C18.2235 12.2399 17.5147 12.6691 16.8004 13.0897C16.7067 13.1448 16.6741 13.2042 16.6747 13.3112C16.6788 14.2206 16.675 15.1297 16.6797 16.0391C16.6803 16.161 16.6483 16.2002 16.5231 16.1984C16.0444 16.1922 15.5648 16.1963 15.0855 16.196ZM7.23819 8.98644C7.18806 9.03033 7.1584 9.05495 7.13052 9.08105C6.86447 9.33169 6.59871 9.58261 6.33325 9.83384C6.14668 10.0106 6.14461 10.0133 6.3196 10.1998C7.15128 11.0855 7.98504 11.9694 8.81553 12.8559C8.88138 12.9262 8.92943 12.9348 8.99201 12.8592C9.02019 12.8254 9.05727 12.7993 9.08989 12.7687C9.85365 12.0527 10.618 11.337 11.3815 10.6207C12.3036 9.75553 13.224 8.88885 14.1485 8.02603C14.2218 7.95781 14.2022 7.92518 14.1452 7.86557C13.8996 7.60811 13.6535 7.35096 13.4188 7.08401C13.3224 6.97427 13.2673 6.98524 13.1664 7.08045C11.8326 8.33717 10.4937 9.58854 9.1593 10.8447C9.07417 10.9247 9.03235 10.9221 8.95375 10.8375C8.40563 10.2482 7.85157 9.66418 7.30018 9.07749C7.27675 9.05317 7.26132 9.02114 7.23819 8.98644Z"
                              fill="#3897EF"
                            />
                            <path
                              d="M7.23752 8.98774C7.26066 9.02244 7.27608 9.05448 7.29921 9.07909C7.8506 9.66548 8.40466 10.2498 8.95279 10.8391C9.03139 10.9237 9.07321 10.9263 9.15833 10.8463C10.4928 9.59014 11.8316 8.33906 13.1655 7.08205C13.2666 6.98684 13.3215 6.97557 13.4179 7.08561C13.6525 7.35285 13.8987 7.61001 14.1443 7.86717C14.2012 7.92678 14.2208 7.95941 14.1475 8.02763C13.223 8.89016 12.3026 9.75713 11.3805 10.6223C10.617 11.3386 9.85298 12.0543 9.08893 12.7703C9.0566 12.8006 9.01923 12.827 8.99105 12.8608C8.92847 12.9364 8.88041 12.9278 8.81457 12.8575C7.98378 11.971 7.15002 11.0871 6.31864 10.2014C6.14334 10.0149 6.14572 10.0119 6.33228 9.83544C6.59774 9.58421 6.8635 9.33328 7.12956 9.08265C7.15773 9.05626 7.18739 9.03164 7.23752 8.98774Z"
                              fill="#FDFDFE"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="">
                        <p className="text-xl font-bold tracking-wide   text-dark-gray dark:text-white">
                          Wade Warren
                        </p>
                        <p className="text-sm text-thin-light-gray tracking-wide">
                          34.k followers
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="w-[115px] overflow-hidden text-18 tracking-wide h-[52px] rounded-full text-white primary-gradient relative justify-center items-center sm:flex hidden"
                      >
                        Follow
                      </button>
                      <button
                        type="button"
                        className="text-base tracking-wide text-gradient sm:hidden block font-bold"
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="content-item flex justify-between mb-6">
                    <div className="flex space-x-5 items-center">
                      <div className="relative w-14 h-14 rounded-full">
                        <img
                          src={followerProfile}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute right-0 top-0">
                          <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0855 16.196C14.6062 16.196 14.1265 16.1984 13.6472 16.1939C13.5565 16.193 13.5052 16.2236 13.4586 16.3004C13.0161 17.0244 12.5667 17.7443 12.128 18.4707C12.0631 18.578 12.0159 18.5712 11.9278 18.5164C11.2785 18.1127 10.6263 17.7134 9.97822 17.3074C9.89488 17.2552 9.83882 17.2543 9.75429 17.3056C9.08366 17.7126 8.408 18.1115 7.73737 18.5184C7.63831 18.5786 7.59767 18.5694 7.53717 18.4668C7.11213 17.744 6.6779 17.0262 6.2502 16.3049C6.20096 16.2215 6.14431 16.1936 6.04851 16.1939C5.1489 16.1975 4.2496 16.1963 3.34999 16.1957C3.12546 16.1957 3.15601 16.2144 3.15601 15.9943C3.15512 15.0802 3.15394 14.1658 3.15779 13.2516C3.15839 13.146 3.12962 13.0849 3.03559 13.0277C2.26472 12.5576 1.49918 12.0788 0.728303 11.6084C0.636059 11.5521 0.620636 11.518 0.679957 11.4227C1.10885 10.7367 1.52943 10.0453 1.95862 9.35957C2.01201 9.27444 2.00934 9.21957 1.95862 9.13593C1.57452 8.50327 1.19872 7.86557 0.814615 7.23321C0.758261 7.14066 0.777836 7.10596 0.863555 7.05524C1.5938 6.62309 2.32048 6.18471 3.05131 5.75315C3.13792 5.70213 3.15809 5.644 3.15779 5.55146C3.15483 4.60262 3.15839 3.65378 3.15335 2.70494C3.15275 2.57532 3.17856 2.52994 3.32033 2.53113C4.22468 2.53825 5.12903 2.5335 6.03368 2.53676C6.12859 2.53706 6.18138 2.51066 6.23299 2.42613C6.68977 1.67602 7.15425 0.930648 7.6131 0.181721C7.66856 0.0912566 7.70593 0.0607063 7.81449 0.128925C8.52872 0.577985 9.25006 1.01518 9.96547 1.46216C10.0589 1.5206 10.1256 1.52089 10.2176 1.46513C10.8333 1.09082 11.4535 0.724211 12.0684 0.34871C12.1817 0.279601 12.2303 0.287609 12.3009 0.408327C12.6913 1.07717 13.0947 1.7383 13.4885 2.40507C13.5452 2.50087 13.606 2.53854 13.7211 2.53795C14.6551 2.53231 15.5891 2.53706 16.5231 2.53202C16.6438 2.53142 16.6809 2.56049 16.68 2.68566C16.6747 3.60988 16.6785 4.5338 16.675 5.45802C16.6747 5.55739 16.7017 5.61463 16.7909 5.66921C17.5283 6.11827 18.2594 6.57801 18.9986 7.0244C19.1202 7.09795 19.1104 7.14956 19.0466 7.2513C18.6254 7.92489 18.212 8.60322 17.789 9.27563C17.7164 9.39101 17.7161 9.47435 17.7884 9.5927C18.1948 10.2574 18.5878 10.9304 18.9941 11.5954C19.0641 11.7099 19.046 11.7549 18.9375 11.8187C18.2235 12.2399 17.5147 12.6691 16.8004 13.0897C16.7067 13.1448 16.6741 13.2042 16.6747 13.3112C16.6788 14.2206 16.675 15.1297 16.6797 16.0391C16.6803 16.161 16.6483 16.2002 16.5231 16.1984C16.0444 16.1922 15.5648 16.1963 15.0855 16.196ZM7.23819 8.98644C7.18806 9.03033 7.1584 9.05495 7.13052 9.08105C6.86447 9.33169 6.59871 9.58261 6.33325 9.83384C6.14668 10.0106 6.14461 10.0133 6.3196 10.1998C7.15128 11.0855 7.98504 11.9694 8.81553 12.8559C8.88138 12.9262 8.92943 12.9348 8.99201 12.8592C9.02019 12.8254 9.05727 12.7993 9.08989 12.7687C9.85365 12.0527 10.618 11.337 11.3815 10.6207C12.3036 9.75553 13.224 8.88885 14.1485 8.02603C14.2218 7.95781 14.2022 7.92518 14.1452 7.86557C13.8996 7.60811 13.6535 7.35096 13.4188 7.08401C13.3224 6.97427 13.2673 6.98524 13.1664 7.08045C11.8326 8.33717 10.4937 9.58854 9.1593 10.8447C9.07417 10.9247 9.03235 10.9221 8.95375 10.8375C8.40563 10.2482 7.85157 9.66418 7.30018 9.07749C7.27675 9.05317 7.26132 9.02114 7.23819 8.98644Z"
                              fill="#3897EF"
                            />
                            <path
                              d="M7.23752 8.98774C7.26066 9.02244 7.27608 9.05448 7.29921 9.07909C7.8506 9.66548 8.40466 10.2498 8.95279 10.8391C9.03139 10.9237 9.07321 10.9263 9.15833 10.8463C10.4928 9.59014 11.8316 8.33906 13.1655 7.08205C13.2666 6.98684 13.3215 6.97557 13.4179 7.08561C13.6525 7.35285 13.8987 7.61001 14.1443 7.86717C14.2012 7.92678 14.2208 7.95941 14.1475 8.02763C13.223 8.89016 12.3026 9.75713 11.3805 10.6223C10.617 11.3386 9.85298 12.0543 9.08893 12.7703C9.0566 12.8006 9.01923 12.827 8.99105 12.8608C8.92847 12.9364 8.88041 12.9278 8.81457 12.8575C7.98378 11.971 7.15002 11.0871 6.31864 10.2014C6.14334 10.0149 6.14572 10.0119 6.33228 9.83544C6.59774 9.58421 6.8635 9.33328 7.12956 9.08265C7.15773 9.05626 7.18739 9.03164 7.23752 8.98774Z"
                              fill="#FDFDFE"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="">
                        <p className="text-xl font-bold tracking-wide   text-dark-gray dark:text-white">
                          Guy Hawkins
                        </p>
                        <p className="text-sm text-thin-light-gray tracking-wide">
                          34.k followers
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="w-[115px] overflow-hidden text-18 tracking-wide h-[52px] rounded-full text-gradient secondary-gradient relative justify-center items-center sm:flex hidden"
                      >
                        Following
                      </button>
                      <button
                        type="button"
                        className="text-base tracking-wide text-gradient sm:hidden flex"
                      >
                        Following
                      </button>
                    </div>
                  </div>
                  <div className="content-item flex justify-between mb-6">
                    <div className="flex space-x-5 items-center">
                      <div className="relative w-14 h-14 rounded-full">
                        <img
                          src={followerProfile}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute right-0 top-0">
                          <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0855 16.196C14.6062 16.196 14.1265 16.1984 13.6472 16.1939C13.5565 16.193 13.5052 16.2236 13.4586 16.3004C13.0161 17.0244 12.5667 17.7443 12.128 18.4707C12.0631 18.578 12.0159 18.5712 11.9278 18.5164C11.2785 18.1127 10.6263 17.7134 9.97822 17.3074C9.89488 17.2552 9.83882 17.2543 9.75429 17.3056C9.08366 17.7126 8.408 18.1115 7.73737 18.5184C7.63831 18.5786 7.59767 18.5694 7.53717 18.4668C7.11213 17.744 6.6779 17.0262 6.2502 16.3049C6.20096 16.2215 6.14431 16.1936 6.04851 16.1939C5.1489 16.1975 4.2496 16.1963 3.34999 16.1957C3.12546 16.1957 3.15601 16.2144 3.15601 15.9943C3.15512 15.0802 3.15394 14.1658 3.15779 13.2516C3.15839 13.146 3.12962 13.0849 3.03559 13.0277C2.26472 12.5576 1.49918 12.0788 0.728303 11.6084C0.636059 11.5521 0.620636 11.518 0.679957 11.4227C1.10885 10.7367 1.52943 10.0453 1.95862 9.35957C2.01201 9.27444 2.00934 9.21957 1.95862 9.13593C1.57452 8.50327 1.19872 7.86557 0.814615 7.23321C0.758261 7.14066 0.777836 7.10596 0.863555 7.05524C1.5938 6.62309 2.32048 6.18471 3.05131 5.75315C3.13792 5.70213 3.15809 5.644 3.15779 5.55146C3.15483 4.60262 3.15839 3.65378 3.15335 2.70494C3.15275 2.57532 3.17856 2.52994 3.32033 2.53113C4.22468 2.53825 5.12903 2.5335 6.03368 2.53676C6.12859 2.53706 6.18138 2.51066 6.23299 2.42613C6.68977 1.67602 7.15425 0.930648 7.6131 0.181721C7.66856 0.0912566 7.70593 0.0607063 7.81449 0.128925C8.52872 0.577985 9.25006 1.01518 9.96547 1.46216C10.0589 1.5206 10.1256 1.52089 10.2176 1.46513C10.8333 1.09082 11.4535 0.724211 12.0684 0.34871C12.1817 0.279601 12.2303 0.287609 12.3009 0.408327C12.6913 1.07717 13.0947 1.7383 13.4885 2.40507C13.5452 2.50087 13.606 2.53854 13.7211 2.53795C14.6551 2.53231 15.5891 2.53706 16.5231 2.53202C16.6438 2.53142 16.6809 2.56049 16.68 2.68566C16.6747 3.60988 16.6785 4.5338 16.675 5.45802C16.6747 5.55739 16.7017 5.61463 16.7909 5.66921C17.5283 6.11827 18.2594 6.57801 18.9986 7.0244C19.1202 7.09795 19.1104 7.14956 19.0466 7.2513C18.6254 7.92489 18.212 8.60322 17.789 9.27563C17.7164 9.39101 17.7161 9.47435 17.7884 9.5927C18.1948 10.2574 18.5878 10.9304 18.9941 11.5954C19.0641 11.7099 19.046 11.7549 18.9375 11.8187C18.2235 12.2399 17.5147 12.6691 16.8004 13.0897C16.7067 13.1448 16.6741 13.2042 16.6747 13.3112C16.6788 14.2206 16.675 15.1297 16.6797 16.0391C16.6803 16.161 16.6483 16.2002 16.5231 16.1984C16.0444 16.1922 15.5648 16.1963 15.0855 16.196ZM7.23819 8.98644C7.18806 9.03033 7.1584 9.05495 7.13052 9.08105C6.86447 9.33169 6.59871 9.58261 6.33325 9.83384C6.14668 10.0106 6.14461 10.0133 6.3196 10.1998C7.15128 11.0855 7.98504 11.9694 8.81553 12.8559C8.88138 12.9262 8.92943 12.9348 8.99201 12.8592C9.02019 12.8254 9.05727 12.7993 9.08989 12.7687C9.85365 12.0527 10.618 11.337 11.3815 10.6207C12.3036 9.75553 13.224 8.88885 14.1485 8.02603C14.2218 7.95781 14.2022 7.92518 14.1452 7.86557C13.8996 7.60811 13.6535 7.35096 13.4188 7.08401C13.3224 6.97427 13.2673 6.98524 13.1664 7.08045C11.8326 8.33717 10.4937 9.58854 9.1593 10.8447C9.07417 10.9247 9.03235 10.9221 8.95375 10.8375C8.40563 10.2482 7.85157 9.66418 7.30018 9.07749C7.27675 9.05317 7.26132 9.02114 7.23819 8.98644Z"
                              fill="#3897EF"
                            />
                            <path
                              d="M7.23752 8.98774C7.26066 9.02244 7.27608 9.05448 7.29921 9.07909C7.8506 9.66548 8.40466 10.2498 8.95279 10.8391C9.03139 10.9237 9.07321 10.9263 9.15833 10.8463C10.4928 9.59014 11.8316 8.33906 13.1655 7.08205C13.2666 6.98684 13.3215 6.97557 13.4179 7.08561C13.6525 7.35285 13.8987 7.61001 14.1443 7.86717C14.2012 7.92678 14.2208 7.95941 14.1475 8.02763C13.223 8.89016 12.3026 9.75713 11.3805 10.6223C10.617 11.3386 9.85298 12.0543 9.08893 12.7703C9.0566 12.8006 9.01923 12.827 8.99105 12.8608C8.92847 12.9364 8.88041 12.9278 8.81457 12.8575C7.98378 11.971 7.15002 11.0871 6.31864 10.2014C6.14334 10.0149 6.14572 10.0119 6.33228 9.83544C6.59774 9.58421 6.8635 9.33328 7.12956 9.08265C7.15773 9.05626 7.18739 9.03164 7.23752 8.98774Z"
                              fill="#FDFDFE"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="">
                        <p className="text-xl font-bold tracking-wide   text-dark-gray dark:text-white">
                          Jane Cooper
                        </p>
                        <p className="text-sm text-thin-light-gray tracking-wide">
                          34.k followers
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="w-[115px] overflow-hidden text-18 tracking-wide h-[52px] rounded-full text-white primary-gradient relative justify-center items-center sm:flex hidden"
                      >
                        Follow
                      </button>
                      <button
                        type="button"
                        className="text-base tracking-wide text-gradient sm:hidden block font-bold"
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="content-item flex justify-between mb-6">
                    <div className="flex space-x-5 items-center">
                      <div className="relative w-14 h-14 rounded-full">
                        <img
                          src={followerProfile}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute right-0 top-0">
                          <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0855 16.196C14.6062 16.196 14.1265 16.1984 13.6472 16.1939C13.5565 16.193 13.5052 16.2236 13.4586 16.3004C13.0161 17.0244 12.5667 17.7443 12.128 18.4707C12.0631 18.578 12.0159 18.5712 11.9278 18.5164C11.2785 18.1127 10.6263 17.7134 9.97822 17.3074C9.89488 17.2552 9.83882 17.2543 9.75429 17.3056C9.08366 17.7126 8.408 18.1115 7.73737 18.5184C7.63831 18.5786 7.59767 18.5694 7.53717 18.4668C7.11213 17.744 6.6779 17.0262 6.2502 16.3049C6.20096 16.2215 6.14431 16.1936 6.04851 16.1939C5.1489 16.1975 4.2496 16.1963 3.34999 16.1957C3.12546 16.1957 3.15601 16.2144 3.15601 15.9943C3.15512 15.0802 3.15394 14.1658 3.15779 13.2516C3.15839 13.146 3.12962 13.0849 3.03559 13.0277C2.26472 12.5576 1.49918 12.0788 0.728303 11.6084C0.636059 11.5521 0.620636 11.518 0.679957 11.4227C1.10885 10.7367 1.52943 10.0453 1.95862 9.35957C2.01201 9.27444 2.00934 9.21957 1.95862 9.13593C1.57452 8.50327 1.19872 7.86557 0.814615 7.23321C0.758261 7.14066 0.777836 7.10596 0.863555 7.05524C1.5938 6.62309 2.32048 6.18471 3.05131 5.75315C3.13792 5.70213 3.15809 5.644 3.15779 5.55146C3.15483 4.60262 3.15839 3.65378 3.15335 2.70494C3.15275 2.57532 3.17856 2.52994 3.32033 2.53113C4.22468 2.53825 5.12903 2.5335 6.03368 2.53676C6.12859 2.53706 6.18138 2.51066 6.23299 2.42613C6.68977 1.67602 7.15425 0.930648 7.6131 0.181721C7.66856 0.0912566 7.70593 0.0607063 7.81449 0.128925C8.52872 0.577985 9.25006 1.01518 9.96547 1.46216C10.0589 1.5206 10.1256 1.52089 10.2176 1.46513C10.8333 1.09082 11.4535 0.724211 12.0684 0.34871C12.1817 0.279601 12.2303 0.287609 12.3009 0.408327C12.6913 1.07717 13.0947 1.7383 13.4885 2.40507C13.5452 2.50087 13.606 2.53854 13.7211 2.53795C14.6551 2.53231 15.5891 2.53706 16.5231 2.53202C16.6438 2.53142 16.6809 2.56049 16.68 2.68566C16.6747 3.60988 16.6785 4.5338 16.675 5.45802C16.6747 5.55739 16.7017 5.61463 16.7909 5.66921C17.5283 6.11827 18.2594 6.57801 18.9986 7.0244C19.1202 7.09795 19.1104 7.14956 19.0466 7.2513C18.6254 7.92489 18.212 8.60322 17.789 9.27563C17.7164 9.39101 17.7161 9.47435 17.7884 9.5927C18.1948 10.2574 18.5878 10.9304 18.9941 11.5954C19.0641 11.7099 19.046 11.7549 18.9375 11.8187C18.2235 12.2399 17.5147 12.6691 16.8004 13.0897C16.7067 13.1448 16.6741 13.2042 16.6747 13.3112C16.6788 14.2206 16.675 15.1297 16.6797 16.0391C16.6803 16.161 16.6483 16.2002 16.5231 16.1984C16.0444 16.1922 15.5648 16.1963 15.0855 16.196ZM7.23819 8.98644C7.18806 9.03033 7.1584 9.05495 7.13052 9.08105C6.86447 9.33169 6.59871 9.58261 6.33325 9.83384C6.14668 10.0106 6.14461 10.0133 6.3196 10.1998C7.15128 11.0855 7.98504 11.9694 8.81553 12.8559C8.88138 12.9262 8.92943 12.9348 8.99201 12.8592C9.02019 12.8254 9.05727 12.7993 9.08989 12.7687C9.85365 12.0527 10.618 11.337 11.3815 10.6207C12.3036 9.75553 13.224 8.88885 14.1485 8.02603C14.2218 7.95781 14.2022 7.92518 14.1452 7.86557C13.8996 7.60811 13.6535 7.35096 13.4188 7.08401C13.3224 6.97427 13.2673 6.98524 13.1664 7.08045C11.8326 8.33717 10.4937 9.58854 9.1593 10.8447C9.07417 10.9247 9.03235 10.9221 8.95375 10.8375C8.40563 10.2482 7.85157 9.66418 7.30018 9.07749C7.27675 9.05317 7.26132 9.02114 7.23819 8.98644Z"
                              fill="#3897EF"
                            />
                            <path
                              d="M7.23752 8.98774C7.26066 9.02244 7.27608 9.05448 7.29921 9.07909C7.8506 9.66548 8.40466 10.2498 8.95279 10.8391C9.03139 10.9237 9.07321 10.9263 9.15833 10.8463C10.4928 9.59014 11.8316 8.33906 13.1655 7.08205C13.2666 6.98684 13.3215 6.97557 13.4179 7.08561C13.6525 7.35285 13.8987 7.61001 14.1443 7.86717C14.2012 7.92678 14.2208 7.95941 14.1475 8.02763C13.223 8.89016 12.3026 9.75713 11.3805 10.6223C10.617 11.3386 9.85298 12.0543 9.08893 12.7703C9.0566 12.8006 9.01923 12.827 8.99105 12.8608C8.92847 12.9364 8.88041 12.9278 8.81457 12.8575C7.98378 11.971 7.15002 11.0871 6.31864 10.2014C6.14334 10.0149 6.14572 10.0119 6.33228 9.83544C6.59774 9.58421 6.8635 9.33328 7.12956 9.08265C7.15773 9.05626 7.18739 9.03164 7.23752 8.98774Z"
                              fill="#FDFDFE"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="">
                        <p className="text-xl font-bold tracking-wide   text-dark-gray dark:text-white">
                          Eleanor Pena
                        </p>
                        <p className="text-sm text-thin-light-gray tracking-wide">
                          34.k followers
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="w-[115px] overflow-hidden text-18 tracking-wide h-[52px] rounded-full text-white primary-gradient relative justify-center items-center sm:flex hidden"
                      >
                        Follow
                      </button>
                      <button
                        type="button"
                        className="text-base tracking-wide text-gradient sm:hidden block font-bold"
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="content-item flex justify-between mb-6">
                    <div className="flex space-x-5 items-center">
                      <div className="relative w-14 h-14 rounded-full">
                        <img
                          src={followerProfile}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute right-0 top-0">
                          <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0855 16.196C14.6062 16.196 14.1265 16.1984 13.6472 16.1939C13.5565 16.193 13.5052 16.2236 13.4586 16.3004C13.0161 17.0244 12.5667 17.7443 12.128 18.4707C12.0631 18.578 12.0159 18.5712 11.9278 18.5164C11.2785 18.1127 10.6263 17.7134 9.97822 17.3074C9.89488 17.2552 9.83882 17.2543 9.75429 17.3056C9.08366 17.7126 8.408 18.1115 7.73737 18.5184C7.63831 18.5786 7.59767 18.5694 7.53717 18.4668C7.11213 17.744 6.6779 17.0262 6.2502 16.3049C6.20096 16.2215 6.14431 16.1936 6.04851 16.1939C5.1489 16.1975 4.2496 16.1963 3.34999 16.1957C3.12546 16.1957 3.15601 16.2144 3.15601 15.9943C3.15512 15.0802 3.15394 14.1658 3.15779 13.2516C3.15839 13.146 3.12962 13.0849 3.03559 13.0277C2.26472 12.5576 1.49918 12.0788 0.728303 11.6084C0.636059 11.5521 0.620636 11.518 0.679957 11.4227C1.10885 10.7367 1.52943 10.0453 1.95862 9.35957C2.01201 9.27444 2.00934 9.21957 1.95862 9.13593C1.57452 8.50327 1.19872 7.86557 0.814615 7.23321C0.758261 7.14066 0.777836 7.10596 0.863555 7.05524C1.5938 6.62309 2.32048 6.18471 3.05131 5.75315C3.13792 5.70213 3.15809 5.644 3.15779 5.55146C3.15483 4.60262 3.15839 3.65378 3.15335 2.70494C3.15275 2.57532 3.17856 2.52994 3.32033 2.53113C4.22468 2.53825 5.12903 2.5335 6.03368 2.53676C6.12859 2.53706 6.18138 2.51066 6.23299 2.42613C6.68977 1.67602 7.15425 0.930648 7.6131 0.181721C7.66856 0.0912566 7.70593 0.0607063 7.81449 0.128925C8.52872 0.577985 9.25006 1.01518 9.96547 1.46216C10.0589 1.5206 10.1256 1.52089 10.2176 1.46513C10.8333 1.09082 11.4535 0.724211 12.0684 0.34871C12.1817 0.279601 12.2303 0.287609 12.3009 0.408327C12.6913 1.07717 13.0947 1.7383 13.4885 2.40507C13.5452 2.50087 13.606 2.53854 13.7211 2.53795C14.6551 2.53231 15.5891 2.53706 16.5231 2.53202C16.6438 2.53142 16.6809 2.56049 16.68 2.68566C16.6747 3.60988 16.6785 4.5338 16.675 5.45802C16.6747 5.55739 16.7017 5.61463 16.7909 5.66921C17.5283 6.11827 18.2594 6.57801 18.9986 7.0244C19.1202 7.09795 19.1104 7.14956 19.0466 7.2513C18.6254 7.92489 18.212 8.60322 17.789 9.27563C17.7164 9.39101 17.7161 9.47435 17.7884 9.5927C18.1948 10.2574 18.5878 10.9304 18.9941 11.5954C19.0641 11.7099 19.046 11.7549 18.9375 11.8187C18.2235 12.2399 17.5147 12.6691 16.8004 13.0897C16.7067 13.1448 16.6741 13.2042 16.6747 13.3112C16.6788 14.2206 16.675 15.1297 16.6797 16.0391C16.6803 16.161 16.6483 16.2002 16.5231 16.1984C16.0444 16.1922 15.5648 16.1963 15.0855 16.196ZM7.23819 8.98644C7.18806 9.03033 7.1584 9.05495 7.13052 9.08105C6.86447 9.33169 6.59871 9.58261 6.33325 9.83384C6.14668 10.0106 6.14461 10.0133 6.3196 10.1998C7.15128 11.0855 7.98504 11.9694 8.81553 12.8559C8.88138 12.9262 8.92943 12.9348 8.99201 12.8592C9.02019 12.8254 9.05727 12.7993 9.08989 12.7687C9.85365 12.0527 10.618 11.337 11.3815 10.6207C12.3036 9.75553 13.224 8.88885 14.1485 8.02603C14.2218 7.95781 14.2022 7.92518 14.1452 7.86557C13.8996 7.60811 13.6535 7.35096 13.4188 7.08401C13.3224 6.97427 13.2673 6.98524 13.1664 7.08045C11.8326 8.33717 10.4937 9.58854 9.1593 10.8447C9.07417 10.9247 9.03235 10.9221 8.95375 10.8375C8.40563 10.2482 7.85157 9.66418 7.30018 9.07749C7.27675 9.05317 7.26132 9.02114 7.23819 8.98644Z"
                              fill="#3897EF"
                            />
                            <path
                              d="M7.23752 8.98774C7.26066 9.02244 7.27608 9.05448 7.29921 9.07909C7.8506 9.66548 8.40466 10.2498 8.95279 10.8391C9.03139 10.9237 9.07321 10.9263 9.15833 10.8463C10.4928 9.59014 11.8316 8.33906 13.1655 7.08205C13.2666 6.98684 13.3215 6.97557 13.4179 7.08561C13.6525 7.35285 13.8987 7.61001 14.1443 7.86717C14.2012 7.92678 14.2208 7.95941 14.1475 8.02763C13.223 8.89016 12.3026 9.75713 11.3805 10.6223C10.617 11.3386 9.85298 12.0543 9.08893 12.7703C9.0566 12.8006 9.01923 12.827 8.99105 12.8608C8.92847 12.9364 8.88041 12.9278 8.81457 12.8575C7.98378 11.971 7.15002 11.0871 6.31864 10.2014C6.14334 10.0149 6.14572 10.0119 6.33228 9.83544C6.59774 9.58421 6.8635 9.33328 7.12956 9.08265C7.15773 9.05626 7.18739 9.03164 7.23752 8.98774Z"
                              fill="#FDFDFE"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="">
                        <p className="text-xl font-bold tracking-wide   text-dark-gray dark:text-white">
                          Eleanor Pena
                        </p>
                        <p className="text-sm text-thin-light-gray tracking-wide">
                          34.k followers
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="w-[115px] overflow-hidden text-18 tracking-wide h-[52px] rounded-full text-white primary-gradient relative justify-center items-center sm:flex hidden"
                      >
                        Follow
                      </button>
                      <button
                        type="button"
                        className="text-base tracking-wide text-gradient sm:hidden block font-bold"
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="content-item flex justify-between mb-6">
                    <div className="flex space-x-5 items-center">
                      <div className="relative w-14 h-14 rounded-full">
                        <img
                          src={followerProfile}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute right-0 top-0">
                          <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0855 16.196C14.6062 16.196 14.1265 16.1984 13.6472 16.1939C13.5565 16.193 13.5052 16.2236 13.4586 16.3004C13.0161 17.0244 12.5667 17.7443 12.128 18.4707C12.0631 18.578 12.0159 18.5712 11.9278 18.5164C11.2785 18.1127 10.6263 17.7134 9.97822 17.3074C9.89488 17.2552 9.83882 17.2543 9.75429 17.3056C9.08366 17.7126 8.408 18.1115 7.73737 18.5184C7.63831 18.5786 7.59767 18.5694 7.53717 18.4668C7.11213 17.744 6.6779 17.0262 6.2502 16.3049C6.20096 16.2215 6.14431 16.1936 6.04851 16.1939C5.1489 16.1975 4.2496 16.1963 3.34999 16.1957C3.12546 16.1957 3.15601 16.2144 3.15601 15.9943C3.15512 15.0802 3.15394 14.1658 3.15779 13.2516C3.15839 13.146 3.12962 13.0849 3.03559 13.0277C2.26472 12.5576 1.49918 12.0788 0.728303 11.6084C0.636059 11.5521 0.620636 11.518 0.679957 11.4227C1.10885 10.7367 1.52943 10.0453 1.95862 9.35957C2.01201 9.27444 2.00934 9.21957 1.95862 9.13593C1.57452 8.50327 1.19872 7.86557 0.814615 7.23321C0.758261 7.14066 0.777836 7.10596 0.863555 7.05524C1.5938 6.62309 2.32048 6.18471 3.05131 5.75315C3.13792 5.70213 3.15809 5.644 3.15779 5.55146C3.15483 4.60262 3.15839 3.65378 3.15335 2.70494C3.15275 2.57532 3.17856 2.52994 3.32033 2.53113C4.22468 2.53825 5.12903 2.5335 6.03368 2.53676C6.12859 2.53706 6.18138 2.51066 6.23299 2.42613C6.68977 1.67602 7.15425 0.930648 7.6131 0.181721C7.66856 0.0912566 7.70593 0.0607063 7.81449 0.128925C8.52872 0.577985 9.25006 1.01518 9.96547 1.46216C10.0589 1.5206 10.1256 1.52089 10.2176 1.46513C10.8333 1.09082 11.4535 0.724211 12.0684 0.34871C12.1817 0.279601 12.2303 0.287609 12.3009 0.408327C12.6913 1.07717 13.0947 1.7383 13.4885 2.40507C13.5452 2.50087 13.606 2.53854 13.7211 2.53795C14.6551 2.53231 15.5891 2.53706 16.5231 2.53202C16.6438 2.53142 16.6809 2.56049 16.68 2.68566C16.6747 3.60988 16.6785 4.5338 16.675 5.45802C16.6747 5.55739 16.7017 5.61463 16.7909 5.66921C17.5283 6.11827 18.2594 6.57801 18.9986 7.0244C19.1202 7.09795 19.1104 7.14956 19.0466 7.2513C18.6254 7.92489 18.212 8.60322 17.789 9.27563C17.7164 9.39101 17.7161 9.47435 17.7884 9.5927C18.1948 10.2574 18.5878 10.9304 18.9941 11.5954C19.0641 11.7099 19.046 11.7549 18.9375 11.8187C18.2235 12.2399 17.5147 12.6691 16.8004 13.0897C16.7067 13.1448 16.6741 13.2042 16.6747 13.3112C16.6788 14.2206 16.675 15.1297 16.6797 16.0391C16.6803 16.161 16.6483 16.2002 16.5231 16.1984C16.0444 16.1922 15.5648 16.1963 15.0855 16.196ZM7.23819 8.98644C7.18806 9.03033 7.1584 9.05495 7.13052 9.08105C6.86447 9.33169 6.59871 9.58261 6.33325 9.83384C6.14668 10.0106 6.14461 10.0133 6.3196 10.1998C7.15128 11.0855 7.98504 11.9694 8.81553 12.8559C8.88138 12.9262 8.92943 12.9348 8.99201 12.8592C9.02019 12.8254 9.05727 12.7993 9.08989 12.7687C9.85365 12.0527 10.618 11.337 11.3815 10.6207C12.3036 9.75553 13.224 8.88885 14.1485 8.02603C14.2218 7.95781 14.2022 7.92518 14.1452 7.86557C13.8996 7.60811 13.6535 7.35096 13.4188 7.08401C13.3224 6.97427 13.2673 6.98524 13.1664 7.08045C11.8326 8.33717 10.4937 9.58854 9.1593 10.8447C9.07417 10.9247 9.03235 10.9221 8.95375 10.8375C8.40563 10.2482 7.85157 9.66418 7.30018 9.07749C7.27675 9.05317 7.26132 9.02114 7.23819 8.98644Z"
                              fill="#3897EF"
                            />
                            <path
                              d="M7.23752 8.98774C7.26066 9.02244 7.27608 9.05448 7.29921 9.07909C7.8506 9.66548 8.40466 10.2498 8.95279 10.8391C9.03139 10.9237 9.07321 10.9263 9.15833 10.8463C10.4928 9.59014 11.8316 8.33906 13.1655 7.08205C13.2666 6.98684 13.3215 6.97557 13.4179 7.08561C13.6525 7.35285 13.8987 7.61001 14.1443 7.86717C14.2012 7.92678 14.2208 7.95941 14.1475 8.02763C13.223 8.89016 12.3026 9.75713 11.3805 10.6223C10.617 11.3386 9.85298 12.0543 9.08893 12.7703C9.0566 12.8006 9.01923 12.827 8.99105 12.8608C8.92847 12.9364 8.88041 12.9278 8.81457 12.8575C7.98378 11.971 7.15002 11.0871 6.31864 10.2014C6.14334 10.0149 6.14572 10.0119 6.33228 9.83544C6.59774 9.58421 6.8635 9.33328 7.12956 9.08265C7.15773 9.05626 7.18739 9.03164 7.23752 8.98774Z"
                              fill="#FDFDFE"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="">
                        <p className="text-xl font-bold tracking-wide   text-dark-gray dark:text-white">
                          Robert Fox
                        </p>
                        <p className="text-sm text-thin-light-gray tracking-wide">
                          34.k followers
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="w-[115px] overflow-hidden text-18 tracking-wide h-[52px] rounded-full text-white primary-gradient relative justify-center items-center sm:flex hidden"
                      >
                        Follow
                      </button>
                      <button
                        type="button"
                        className="text-base tracking-wide text-gradient sm:hidden block font-bold"
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="content-item flex justify-between mb-6">
                    <div className="flex space-x-5 items-center">
                      <div className="relative w-14 h-14 rounded-full">
                        <img
                          src={followerProfile}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute right-0 top-0">
                          <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0855 16.196C14.6062 16.196 14.1265 16.1984 13.6472 16.1939C13.5565 16.193 13.5052 16.2236 13.4586 16.3004C13.0161 17.0244 12.5667 17.7443 12.128 18.4707C12.0631 18.578 12.0159 18.5712 11.9278 18.5164C11.2785 18.1127 10.6263 17.7134 9.97822 17.3074C9.89488 17.2552 9.83882 17.2543 9.75429 17.3056C9.08366 17.7126 8.408 18.1115 7.73737 18.5184C7.63831 18.5786 7.59767 18.5694 7.53717 18.4668C7.11213 17.744 6.6779 17.0262 6.2502 16.3049C6.20096 16.2215 6.14431 16.1936 6.04851 16.1939C5.1489 16.1975 4.2496 16.1963 3.34999 16.1957C3.12546 16.1957 3.15601 16.2144 3.15601 15.9943C3.15512 15.0802 3.15394 14.1658 3.15779 13.2516C3.15839 13.146 3.12962 13.0849 3.03559 13.0277C2.26472 12.5576 1.49918 12.0788 0.728303 11.6084C0.636059 11.5521 0.620636 11.518 0.679957 11.4227C1.10885 10.7367 1.52943 10.0453 1.95862 9.35957C2.01201 9.27444 2.00934 9.21957 1.95862 9.13593C1.57452 8.50327 1.19872 7.86557 0.814615 7.23321C0.758261 7.14066 0.777836 7.10596 0.863555 7.05524C1.5938 6.62309 2.32048 6.18471 3.05131 5.75315C3.13792 5.70213 3.15809 5.644 3.15779 5.55146C3.15483 4.60262 3.15839 3.65378 3.15335 2.70494C3.15275 2.57532 3.17856 2.52994 3.32033 2.53113C4.22468 2.53825 5.12903 2.5335 6.03368 2.53676C6.12859 2.53706 6.18138 2.51066 6.23299 2.42613C6.68977 1.67602 7.15425 0.930648 7.6131 0.181721C7.66856 0.0912566 7.70593 0.0607063 7.81449 0.128925C8.52872 0.577985 9.25006 1.01518 9.96547 1.46216C10.0589 1.5206 10.1256 1.52089 10.2176 1.46513C10.8333 1.09082 11.4535 0.724211 12.0684 0.34871C12.1817 0.279601 12.2303 0.287609 12.3009 0.408327C12.6913 1.07717 13.0947 1.7383 13.4885 2.40507C13.5452 2.50087 13.606 2.53854 13.7211 2.53795C14.6551 2.53231 15.5891 2.53706 16.5231 2.53202C16.6438 2.53142 16.6809 2.56049 16.68 2.68566C16.6747 3.60988 16.6785 4.5338 16.675 5.45802C16.6747 5.55739 16.7017 5.61463 16.7909 5.66921C17.5283 6.11827 18.2594 6.57801 18.9986 7.0244C19.1202 7.09795 19.1104 7.14956 19.0466 7.2513C18.6254 7.92489 18.212 8.60322 17.789 9.27563C17.7164 9.39101 17.7161 9.47435 17.7884 9.5927C18.1948 10.2574 18.5878 10.9304 18.9941 11.5954C19.0641 11.7099 19.046 11.7549 18.9375 11.8187C18.2235 12.2399 17.5147 12.6691 16.8004 13.0897C16.7067 13.1448 16.6741 13.2042 16.6747 13.3112C16.6788 14.2206 16.675 15.1297 16.6797 16.0391C16.6803 16.161 16.6483 16.2002 16.5231 16.1984C16.0444 16.1922 15.5648 16.1963 15.0855 16.196ZM7.23819 8.98644C7.18806 9.03033 7.1584 9.05495 7.13052 9.08105C6.86447 9.33169 6.59871 9.58261 6.33325 9.83384C6.14668 10.0106 6.14461 10.0133 6.3196 10.1998C7.15128 11.0855 7.98504 11.9694 8.81553 12.8559C8.88138 12.9262 8.92943 12.9348 8.99201 12.8592C9.02019 12.8254 9.05727 12.7993 9.08989 12.7687C9.85365 12.0527 10.618 11.337 11.3815 10.6207C12.3036 9.75553 13.224 8.88885 14.1485 8.02603C14.2218 7.95781 14.2022 7.92518 14.1452 7.86557C13.8996 7.60811 13.6535 7.35096 13.4188 7.08401C13.3224 6.97427 13.2673 6.98524 13.1664 7.08045C11.8326 8.33717 10.4937 9.58854 9.1593 10.8447C9.07417 10.9247 9.03235 10.9221 8.95375 10.8375C8.40563 10.2482 7.85157 9.66418 7.30018 9.07749C7.27675 9.05317 7.26132 9.02114 7.23819 8.98644Z"
                              fill="#3897EF"
                            />
                            <path
                              d="M7.23752 8.98774C7.26066 9.02244 7.27608 9.05448 7.29921 9.07909C7.8506 9.66548 8.40466 10.2498 8.95279 10.8391C9.03139 10.9237 9.07321 10.9263 9.15833 10.8463C10.4928 9.59014 11.8316 8.33906 13.1655 7.08205C13.2666 6.98684 13.3215 6.97557 13.4179 7.08561C13.6525 7.35285 13.8987 7.61001 14.1443 7.86717C14.2012 7.92678 14.2208 7.95941 14.1475 8.02763C13.223 8.89016 12.3026 9.75713 11.3805 10.6223C10.617 11.3386 9.85298 12.0543 9.08893 12.7703C9.0566 12.8006 9.01923 12.827 8.99105 12.8608C8.92847 12.9364 8.88041 12.9278 8.81457 12.8575C7.98378 11.971 7.15002 11.0871 6.31864 10.2014C6.14334 10.0149 6.14572 10.0119 6.33228 9.83544C6.59774 9.58421 6.8635 9.33328 7.12956 9.08265C7.15773 9.05626 7.18739 9.03164 7.23752 8.98774Z"
                              fill="#FDFDFE"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="">
                        <p className="text-xl font-bold tracking-wide   text-dark-gray dark:text-white">
                          Jacob Jones
                        </p>
                        <p className="text-sm text-thin-light-gray tracking-wide">
                          34.k followers
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="w-[115px] overflow-hidden text-18 tracking-wide h-[52px] rounded-full text-white primary-gradient relative justify-center items-center sm:flex hidden"
                      >
                        Follow
                      </button>
                      <button
                        type="button"
                        className="text-base tracking-wide text-gradient sm:hidden block font-bold"
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="content-item flex justify-between mb-6">
                    <div className="flex space-x-5 items-center">
                      <div className="relative w-14 h-14 rounded-full">
                        <img
                          src={followerProfile}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute right-0 top-0">
                          <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0855 16.196C14.6062 16.196 14.1265 16.1984 13.6472 16.1939C13.5565 16.193 13.5052 16.2236 13.4586 16.3004C13.0161 17.0244 12.5667 17.7443 12.128 18.4707C12.0631 18.578 12.0159 18.5712 11.9278 18.5164C11.2785 18.1127 10.6263 17.7134 9.97822 17.3074C9.89488 17.2552 9.83882 17.2543 9.75429 17.3056C9.08366 17.7126 8.408 18.1115 7.73737 18.5184C7.63831 18.5786 7.59767 18.5694 7.53717 18.4668C7.11213 17.744 6.6779 17.0262 6.2502 16.3049C6.20096 16.2215 6.14431 16.1936 6.04851 16.1939C5.1489 16.1975 4.2496 16.1963 3.34999 16.1957C3.12546 16.1957 3.15601 16.2144 3.15601 15.9943C3.15512 15.0802 3.15394 14.1658 3.15779 13.2516C3.15839 13.146 3.12962 13.0849 3.03559 13.0277C2.26472 12.5576 1.49918 12.0788 0.728303 11.6084C0.636059 11.5521 0.620636 11.518 0.679957 11.4227C1.10885 10.7367 1.52943 10.0453 1.95862 9.35957C2.01201 9.27444 2.00934 9.21957 1.95862 9.13593C1.57452 8.50327 1.19872 7.86557 0.814615 7.23321C0.758261 7.14066 0.777836 7.10596 0.863555 7.05524C1.5938 6.62309 2.32048 6.18471 3.05131 5.75315C3.13792 5.70213 3.15809 5.644 3.15779 5.55146C3.15483 4.60262 3.15839 3.65378 3.15335 2.70494C3.15275 2.57532 3.17856 2.52994 3.32033 2.53113C4.22468 2.53825 5.12903 2.5335 6.03368 2.53676C6.12859 2.53706 6.18138 2.51066 6.23299 2.42613C6.68977 1.67602 7.15425 0.930648 7.6131 0.181721C7.66856 0.0912566 7.70593 0.0607063 7.81449 0.128925C8.52872 0.577985 9.25006 1.01518 9.96547 1.46216C10.0589 1.5206 10.1256 1.52089 10.2176 1.46513C10.8333 1.09082 11.4535 0.724211 12.0684 0.34871C12.1817 0.279601 12.2303 0.287609 12.3009 0.408327C12.6913 1.07717 13.0947 1.7383 13.4885 2.40507C13.5452 2.50087 13.606 2.53854 13.7211 2.53795C14.6551 2.53231 15.5891 2.53706 16.5231 2.53202C16.6438 2.53142 16.6809 2.56049 16.68 2.68566C16.6747 3.60988 16.6785 4.5338 16.675 5.45802C16.6747 5.55739 16.7017 5.61463 16.7909 5.66921C17.5283 6.11827 18.2594 6.57801 18.9986 7.0244C19.1202 7.09795 19.1104 7.14956 19.0466 7.2513C18.6254 7.92489 18.212 8.60322 17.789 9.27563C17.7164 9.39101 17.7161 9.47435 17.7884 9.5927C18.1948 10.2574 18.5878 10.9304 18.9941 11.5954C19.0641 11.7099 19.046 11.7549 18.9375 11.8187C18.2235 12.2399 17.5147 12.6691 16.8004 13.0897C16.7067 13.1448 16.6741 13.2042 16.6747 13.3112C16.6788 14.2206 16.675 15.1297 16.6797 16.0391C16.6803 16.161 16.6483 16.2002 16.5231 16.1984C16.0444 16.1922 15.5648 16.1963 15.0855 16.196ZM7.23819 8.98644C7.18806 9.03033 7.1584 9.05495 7.13052 9.08105C6.86447 9.33169 6.59871 9.58261 6.33325 9.83384C6.14668 10.0106 6.14461 10.0133 6.3196 10.1998C7.15128 11.0855 7.98504 11.9694 8.81553 12.8559C8.88138 12.9262 8.92943 12.9348 8.99201 12.8592C9.02019 12.8254 9.05727 12.7993 9.08989 12.7687C9.85365 12.0527 10.618 11.337 11.3815 10.6207C12.3036 9.75553 13.224 8.88885 14.1485 8.02603C14.2218 7.95781 14.2022 7.92518 14.1452 7.86557C13.8996 7.60811 13.6535 7.35096 13.4188 7.08401C13.3224 6.97427 13.2673 6.98524 13.1664 7.08045C11.8326 8.33717 10.4937 9.58854 9.1593 10.8447C9.07417 10.9247 9.03235 10.9221 8.95375 10.8375C8.40563 10.2482 7.85157 9.66418 7.30018 9.07749C7.27675 9.05317 7.26132 9.02114 7.23819 8.98644Z"
                              fill="#3897EF"
                            />
                            <path
                              d="M7.23752 8.98774C7.26066 9.02244 7.27608 9.05448 7.29921 9.07909C7.8506 9.66548 8.40466 10.2498 8.95279 10.8391C9.03139 10.9237 9.07321 10.9263 9.15833 10.8463C10.4928 9.59014 11.8316 8.33906 13.1655 7.08205C13.2666 6.98684 13.3215 6.97557 13.4179 7.08561C13.6525 7.35285 13.8987 7.61001 14.1443 7.86717C14.2012 7.92678 14.2208 7.95941 14.1475 8.02763C13.223 8.89016 12.3026 9.75713 11.3805 10.6223C10.617 11.3386 9.85298 12.0543 9.08893 12.7703C9.0566 12.8006 9.01923 12.827 8.99105 12.8608C8.92847 12.9364 8.88041 12.9278 8.81457 12.8575C7.98378 11.971 7.15002 11.0871 6.31864 10.2014C6.14334 10.0149 6.14572 10.0119 6.33228 9.83544C6.59774 9.58421 6.8635 9.33328 7.12956 9.08265C7.15773 9.05626 7.18739 9.03164 7.23752 8.98774Z"
                              fill="#FDFDFE"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="">
                        <p className="text-xl font-bold tracking-wide   text-dark-gray dark:text-white">
                          Robert Fox
                        </p>
                        <p className="text-sm text-thin-light-gray tracking-wide">
                          34.k followers
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="w-[115px] overflow-hidden text-18 tracking-wide h-[52px] rounded-full text-white primary-gradient relative justify-center items-center sm:flex hidden"
                      >
                        Follow
                      </button>
                      <button
                        type="button"
                        className="text-base tracking-wide text-gradient sm:hidden block font-bold"
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="content-item flex justify-between mb-6">
                    <div className="flex space-x-5 items-center">
                      <div className="relative w-14 h-14 rounded-full">
                        <img
                          src={followerProfile}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute right-0 top-0">
                          <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0855 16.196C14.6062 16.196 14.1265 16.1984 13.6472 16.1939C13.5565 16.193 13.5052 16.2236 13.4586 16.3004C13.0161 17.0244 12.5667 17.7443 12.128 18.4707C12.0631 18.578 12.0159 18.5712 11.9278 18.5164C11.2785 18.1127 10.6263 17.7134 9.97822 17.3074C9.89488 17.2552 9.83882 17.2543 9.75429 17.3056C9.08366 17.7126 8.408 18.1115 7.73737 18.5184C7.63831 18.5786 7.59767 18.5694 7.53717 18.4668C7.11213 17.744 6.6779 17.0262 6.2502 16.3049C6.20096 16.2215 6.14431 16.1936 6.04851 16.1939C5.1489 16.1975 4.2496 16.1963 3.34999 16.1957C3.12546 16.1957 3.15601 16.2144 3.15601 15.9943C3.15512 15.0802 3.15394 14.1658 3.15779 13.2516C3.15839 13.146 3.12962 13.0849 3.03559 13.0277C2.26472 12.5576 1.49918 12.0788 0.728303 11.6084C0.636059 11.5521 0.620636 11.518 0.679957 11.4227C1.10885 10.7367 1.52943 10.0453 1.95862 9.35957C2.01201 9.27444 2.00934 9.21957 1.95862 9.13593C1.57452 8.50327 1.19872 7.86557 0.814615 7.23321C0.758261 7.14066 0.777836 7.10596 0.863555 7.05524C1.5938 6.62309 2.32048 6.18471 3.05131 5.75315C3.13792 5.70213 3.15809 5.644 3.15779 5.55146C3.15483 4.60262 3.15839 3.65378 3.15335 2.70494C3.15275 2.57532 3.17856 2.52994 3.32033 2.53113C4.22468 2.53825 5.12903 2.5335 6.03368 2.53676C6.12859 2.53706 6.18138 2.51066 6.23299 2.42613C6.68977 1.67602 7.15425 0.930648 7.6131 0.181721C7.66856 0.0912566 7.70593 0.0607063 7.81449 0.128925C8.52872 0.577985 9.25006 1.01518 9.96547 1.46216C10.0589 1.5206 10.1256 1.52089 10.2176 1.46513C10.8333 1.09082 11.4535 0.724211 12.0684 0.34871C12.1817 0.279601 12.2303 0.287609 12.3009 0.408327C12.6913 1.07717 13.0947 1.7383 13.4885 2.40507C13.5452 2.50087 13.606 2.53854 13.7211 2.53795C14.6551 2.53231 15.5891 2.53706 16.5231 2.53202C16.6438 2.53142 16.6809 2.56049 16.68 2.68566C16.6747 3.60988 16.6785 4.5338 16.675 5.45802C16.6747 5.55739 16.7017 5.61463 16.7909 5.66921C17.5283 6.11827 18.2594 6.57801 18.9986 7.0244C19.1202 7.09795 19.1104 7.14956 19.0466 7.2513C18.6254 7.92489 18.212 8.60322 17.789 9.27563C17.7164 9.39101 17.7161 9.47435 17.7884 9.5927C18.1948 10.2574 18.5878 10.9304 18.9941 11.5954C19.0641 11.7099 19.046 11.7549 18.9375 11.8187C18.2235 12.2399 17.5147 12.6691 16.8004 13.0897C16.7067 13.1448 16.6741 13.2042 16.6747 13.3112C16.6788 14.2206 16.675 15.1297 16.6797 16.0391C16.6803 16.161 16.6483 16.2002 16.5231 16.1984C16.0444 16.1922 15.5648 16.1963 15.0855 16.196ZM7.23819 8.98644C7.18806 9.03033 7.1584 9.05495 7.13052 9.08105C6.86447 9.33169 6.59871 9.58261 6.33325 9.83384C6.14668 10.0106 6.14461 10.0133 6.3196 10.1998C7.15128 11.0855 7.98504 11.9694 8.81553 12.8559C8.88138 12.9262 8.92943 12.9348 8.99201 12.8592C9.02019 12.8254 9.05727 12.7993 9.08989 12.7687C9.85365 12.0527 10.618 11.337 11.3815 10.6207C12.3036 9.75553 13.224 8.88885 14.1485 8.02603C14.2218 7.95781 14.2022 7.92518 14.1452 7.86557C13.8996 7.60811 13.6535 7.35096 13.4188 7.08401C13.3224 6.97427 13.2673 6.98524 13.1664 7.08045C11.8326 8.33717 10.4937 9.58854 9.1593 10.8447C9.07417 10.9247 9.03235 10.9221 8.95375 10.8375C8.40563 10.2482 7.85157 9.66418 7.30018 9.07749C7.27675 9.05317 7.26132 9.02114 7.23819 8.98644Z"
                              fill="#3897EF"
                            />
                            <path
                              d="M7.23752 8.98774C7.26066 9.02244 7.27608 9.05448 7.29921 9.07909C7.8506 9.66548 8.40466 10.2498 8.95279 10.8391C9.03139 10.9237 9.07321 10.9263 9.15833 10.8463C10.4928 9.59014 11.8316 8.33906 13.1655 7.08205C13.2666 6.98684 13.3215 6.97557 13.4179 7.08561C13.6525 7.35285 13.8987 7.61001 14.1443 7.86717C14.2012 7.92678 14.2208 7.95941 14.1475 8.02763C13.223 8.89016 12.3026 9.75713 11.3805 10.6223C10.617 11.3386 9.85298 12.0543 9.08893 12.7703C9.0566 12.8006 9.01923 12.827 8.99105 12.8608C8.92847 12.9364 8.88041 12.9278 8.81457 12.8575C7.98378 11.971 7.15002 11.0871 6.31864 10.2014C6.14334 10.0149 6.14572 10.0119 6.33228 9.83544C6.59774 9.58421 6.8635 9.33328 7.12956 9.08265C7.15773 9.05626 7.18739 9.03164 7.23752 8.98774Z"
                              fill="#FDFDFE"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="">
                        <p className="text-xl font-bold tracking-wide   text-dark-gray dark:text-white">
                          Wade Warren
                        </p>
                        <p className="text-sm text-thin-light-gray tracking-wide">
                          34.k followers
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="w-[115px] overflow-hidden text-18 tracking-wide h-[52px] rounded-full text-white primary-gradient relative justify-center items-center sm:flex hidden"
                      >
                        Follow
                      </button>
                      <button
                        type="button"
                        className="text-base tracking-wide text-gradient sm:hidden block font-bold"
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="content-item flex justify-between mb-6">
                    <div className="flex space-x-5 items-center">
                      <div className="relative w-14 h-14 rounded-full">
                        <img
                          src={followerProfile}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute right-0 top-0">
                          <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.0855 16.196C14.6062 16.196 14.1265 16.1984 13.6472 16.1939C13.5565 16.193 13.5052 16.2236 13.4586 16.3004C13.0161 17.0244 12.5667 17.7443 12.128 18.4707C12.0631 18.578 12.0159 18.5712 11.9278 18.5164C11.2785 18.1127 10.6263 17.7134 9.97822 17.3074C9.89488 17.2552 9.83882 17.2543 9.75429 17.3056C9.08366 17.7126 8.408 18.1115 7.73737 18.5184C7.63831 18.5786 7.59767 18.5694 7.53717 18.4668C7.11213 17.744 6.6779 17.0262 6.2502 16.3049C6.20096 16.2215 6.14431 16.1936 6.04851 16.1939C5.1489 16.1975 4.2496 16.1963 3.34999 16.1957C3.12546 16.1957 3.15601 16.2144 3.15601 15.9943C3.15512 15.0802 3.15394 14.1658 3.15779 13.2516C3.15839 13.146 3.12962 13.0849 3.03559 13.0277C2.26472 12.5576 1.49918 12.0788 0.728303 11.6084C0.636059 11.5521 0.620636 11.518 0.679957 11.4227C1.10885 10.7367 1.52943 10.0453 1.95862 9.35957C2.01201 9.27444 2.00934 9.21957 1.95862 9.13593C1.57452 8.50327 1.19872 7.86557 0.814615 7.23321C0.758261 7.14066 0.777836 7.10596 0.863555 7.05524C1.5938 6.62309 2.32048 6.18471 3.05131 5.75315C3.13792 5.70213 3.15809 5.644 3.15779 5.55146C3.15483 4.60262 3.15839 3.65378 3.15335 2.70494C3.15275 2.57532 3.17856 2.52994 3.32033 2.53113C4.22468 2.53825 5.12903 2.5335 6.03368 2.53676C6.12859 2.53706 6.18138 2.51066 6.23299 2.42613C6.68977 1.67602 7.15425 0.930648 7.6131 0.181721C7.66856 0.0912566 7.70593 0.0607063 7.81449 0.128925C8.52872 0.577985 9.25006 1.01518 9.96547 1.46216C10.0589 1.5206 10.1256 1.52089 10.2176 1.46513C10.8333 1.09082 11.4535 0.724211 12.0684 0.34871C12.1817 0.279601 12.2303 0.287609 12.3009 0.408327C12.6913 1.07717 13.0947 1.7383 13.4885 2.40507C13.5452 2.50087 13.606 2.53854 13.7211 2.53795C14.6551 2.53231 15.5891 2.53706 16.5231 2.53202C16.6438 2.53142 16.6809 2.56049 16.68 2.68566C16.6747 3.60988 16.6785 4.5338 16.675 5.45802C16.6747 5.55739 16.7017 5.61463 16.7909 5.66921C17.5283 6.11827 18.2594 6.57801 18.9986 7.0244C19.1202 7.09795 19.1104 7.14956 19.0466 7.2513C18.6254 7.92489 18.212 8.60322 17.789 9.27563C17.7164 9.39101 17.7161 9.47435 17.7884 9.5927C18.1948 10.2574 18.5878 10.9304 18.9941 11.5954C19.0641 11.7099 19.046 11.7549 18.9375 11.8187C18.2235 12.2399 17.5147 12.6691 16.8004 13.0897C16.7067 13.1448 16.6741 13.2042 16.6747 13.3112C16.6788 14.2206 16.675 15.1297 16.6797 16.0391C16.6803 16.161 16.6483 16.2002 16.5231 16.1984C16.0444 16.1922 15.5648 16.1963 15.0855 16.196ZM7.23819 8.98644C7.18806 9.03033 7.1584 9.05495 7.13052 9.08105C6.86447 9.33169 6.59871 9.58261 6.33325 9.83384C6.14668 10.0106 6.14461 10.0133 6.3196 10.1998C7.15128 11.0855 7.98504 11.9694 8.81553 12.8559C8.88138 12.9262 8.92943 12.9348 8.99201 12.8592C9.02019 12.8254 9.05727 12.7993 9.08989 12.7687C9.85365 12.0527 10.618 11.337 11.3815 10.6207C12.3036 9.75553 13.224 8.88885 14.1485 8.02603C14.2218 7.95781 14.2022 7.92518 14.1452 7.86557C13.8996 7.60811 13.6535 7.35096 13.4188 7.08401C13.3224 6.97427 13.2673 6.98524 13.1664 7.08045C11.8326 8.33717 10.4937 9.58854 9.1593 10.8447C9.07417 10.9247 9.03235 10.9221 8.95375 10.8375C8.40563 10.2482 7.85157 9.66418 7.30018 9.07749C7.27675 9.05317 7.26132 9.02114 7.23819 8.98644Z"
                              fill="#3897EF"
                            />
                            <path
                              d="M7.23752 8.98774C7.26066 9.02244 7.27608 9.05448 7.29921 9.07909C7.8506 9.66548 8.40466 10.2498 8.95279 10.8391C9.03139 10.9237 9.07321 10.9263 9.15833 10.8463C10.4928 9.59014 11.8316 8.33906 13.1655 7.08205C13.2666 6.98684 13.3215 6.97557 13.4179 7.08561C13.6525 7.35285 13.8987 7.61001 14.1443 7.86717C14.2012 7.92678 14.2208 7.95941 14.1475 8.02763C13.223 8.89016 12.3026 9.75713 11.3805 10.6223C10.617 11.3386 9.85298 12.0543 9.08893 12.7703C9.0566 12.8006 9.01923 12.827 8.99105 12.8608C8.92847 12.9364 8.88041 12.9278 8.81457 12.8575C7.98378 11.971 7.15002 11.0871 6.31864 10.2014C6.14334 10.0149 6.14572 10.0119 6.33228 9.83544C6.59774 9.58421 6.8635 9.33328 7.12956 9.08265C7.15773 9.05626 7.18739 9.03164 7.23752 8.98774Z"
                              fill="#FDFDFE"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="">
                        <p className="text-xl font-bold tracking-wide   text-dark-gray dark:text-white">
                          Jerome Bell
                        </p>
                        <p className="text-sm text-thin-light-gray tracking-wide">
                          34.k followers
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className="w-[115px] overflow-hidden text-18 tracking-wide h-[52px] rounded-full text-white primary-gradient relative justify-center items-center sm:flex hidden"
                      >
                        Follow
                      </button>
                      <button
                        type="button"
                        className="text-base tracking-wide text-gradient sm:hidden block font-bold"
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalCom>
        )}
      </Layout>
    </>
  );
}
