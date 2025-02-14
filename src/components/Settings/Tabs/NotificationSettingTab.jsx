import React, { useState } from "react";
import SwitchCom from "../../Helpers/SwitchCom";

export default function NotificationSettingTab() {
  const [updateNotification, setUpdateNotification] = useState(false);
  const [uploadProduct, setUploadProduct] = useState(true);
  const [saleProduct, setSaleProduct] = useState(true);
  const [getProduct, setGetProduct] = useState(false);
  const [authLevel, setAuthLevel] = useState(true);
  return (
    <div className="notification-setting-tab w-full">
      <div className="notification-settings-wrapper w-full">
        <ul className="notification-settings-items w-full">
          <li className="notification-settings-item sm:flex justify-between items-center mb-4 pb-4 border-b dark:border-[#5356fb29]  border-light-purple dark:border-[#5356fb29] ">
            <div className="sm:flex sm:space-x-4 items-center">
              <div className="w-16 h-16">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="30"
                    cy="30"
                    r="30"
                    fill="url(#paint0_linear_41_74037)"
                  />
                  <path
                    d="M29.9703 43.9959C27.4494 43.9959 24.9286 44.0078 22.4077 43.9919C20.2721 43.9799 19.0338 42.7656 19.0197 40.6347C18.9955 37.2735 18.9915 33.9123 19.0197 30.5511C19.0378 28.4521 20.3265 27.2158 22.4481 27.2118C27.4212 27.2019 32.3964 27.2039 37.3695 27.2118C39.604 27.2158 40.8564 28.4641 40.8644 30.6909C40.8745 33.9862 40.8786 37.2815 40.8644 40.5767C40.8544 42.7616 39.6242 43.9819 37.43 43.9939C34.9434 44.0058 32.4569 43.9959 29.9703 43.9959ZM27.5321 33.9722C27.6108 34.1699 27.6592 34.789 27.9919 35.0466C28.8954 35.7476 28.7542 36.6544 28.7563 37.567C28.7563 37.9984 28.6272 38.5057 28.8107 38.8412C29.0467 39.2706 29.5367 39.8358 29.9219 39.8398C30.3131 39.8438 30.8496 39.3026 31.0613 38.8752C31.261 38.4698 31.1319 37.9006 31.1319 37.4053C31.1319 36.5525 31.0936 35.7716 31.868 35.0706C32.6041 34.4036 32.4871 33.1354 31.8841 32.3086C31.2811 31.4817 30.2002 31.1262 29.2019 31.4258C28.2521 31.7114 27.5483 32.6621 27.5321 33.9722Z"
                    fill="white"
                  />
                  <path
                    d="M37.5315 26.2691C36.3356 26.2691 35.2466 26.2691 34.0345 26.2691C34.0345 25.4044 34.0446 24.5856 34.0325 23.7647C33.9982 21.3202 32.2397 19.4709 29.9467 19.4589C27.6497 19.4469 25.8851 21.2803 25.8448 23.7368C25.8306 24.5596 25.8427 25.3844 25.8427 26.2672C24.6448 26.2672 23.5558 26.2672 22.4729 26.2672C21.7126 21.3322 23.5054 17.6674 27.7546 16.3473C32.5603 14.8535 37.3984 18.3624 37.5274 23.3493C37.5516 24.304 37.5315 25.2606 37.5315 26.2691Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_41_74037"
                      x1="0"
                      y1="0"
                      x2="63.3708"
                      y2="62.0225"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <p className="text-xl tracking-wide text-dark-gray dark:text-white font-bold">
                  All Notifcation update off
                </p>
                <p className="text-base tracking-wide text-thin-light-gray">
                  Unlockable content, only revealed by the owner of the item.
                </p>
              </div>
            </div>
            <div className="mt-5 sm:mt-0">
              <SwitchCom
                value={updateNotification}
                handler={() => setUpdateNotification(!updateNotification)}
              />
            </div>
          </li>
          <li className="notification-settings-item sm:flex justify-between items-center mb-4 pb-4 border-b dark:border-[#5356fb29]  border-light-purple dark:border-[#5356fb29] ">
            <div className="sm:flex sm:space-x-4 items-center">
              <div className="w-16 h-16">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="30" cy="30" r="30" fill="#5356FB" />
                  <path
                    d="M29.9407 28.117C29.3978 27.9377 28.8874 27.8356 28.4342 27.6115C24.4201 25.6243 20.4135 23.6173 16.4044 21.6202C16.1106 21.4733 15.884 21.2841 15.879 20.933C15.874 20.5669 16.1006 20.3627 16.4094 20.2083C20.3911 18.2237 24.3728 16.2341 28.352 14.2445C29.4974 13.6718 30.6255 13.7365 31.756 14.3068C34.3133 15.5942 36.8806 16.8691 39.443 18.149C40.7503 18.8014 42.0551 19.4563 43.3599 20.1112C43.4346 20.1486 43.5093 20.1834 43.5865 20.2208C43.8853 20.3602 44.092 20.5769 44.092 20.923C44.092 21.2741 43.8704 21.4708 43.5766 21.6153C41.7214 22.5391 39.8688 23.4679 38.0136 24.3917C35.8721 25.46 33.7406 26.5432 31.5866 27.5841C31.0737 27.8331 30.4935 27.9426 29.9407 28.117Z"
                    fill="white"
                  />
                  <path
                    d="M28.9083 38.6004C28.9083 40.8266 28.9108 43.0527 28.9058 45.2789C28.9033 46.0707 28.4576 46.3496 27.728 46.0135C24.0775 44.3326 20.4245 42.6568 16.7814 40.9635C15.6086 40.4182 15.0109 39.4645 15.006 38.1746C14.996 33.9314 15.001 29.6883 15.0035 25.4451C15.0035 24.6259 15.4641 24.3221 16.1962 24.6607C19.9713 26.4013 23.7438 28.1519 27.5213 29.885C28.48 30.3257 28.9232 31.0429 28.9158 32.0912C28.9008 34.2626 28.9108 36.4315 28.9108 38.6029C28.9108 38.6004 28.9108 38.6004 28.9083 38.6004Z"
                    fill="white"
                  />
                  <path
                    d="M31.0596 38.5382C31.0596 36.3544 31.0646 34.1705 31.0571 31.9867C31.0546 31.0006 31.5054 30.3208 32.3894 29.9124C36.1893 28.1594 39.9917 26.4113 43.7916 24.6608C44.4839 24.342 44.9595 24.6284 44.9595 25.3829C44.9644 29.6684 44.9719 33.9514 44.9545 38.2369C44.9495 39.5492 44.2772 40.4655 43.0944 41.0134C40.1411 42.378 37.1853 43.74 34.232 45.1021C33.5995 45.3935 32.9695 45.6848 32.3395 45.9762C31.4829 46.3696 31.0571 46.1032 31.0571 45.1719C31.0571 42.9606 31.0571 40.7469 31.0571 38.5357C31.0596 38.5382 31.0596 38.5382 31.0596 38.5382Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xl tracking-wide text-dark-gray dark:text-white font-bold">
                  When you upload prodcuts
                </p>
                <p className="text-base tracking-wide text-thin-light-gray">
                  Evey new prodcuts upload seccessfullly doen you can get
                  notifcation
                </p>
              </div>
            </div>
            <div className="mt-5 sm:mt-0">
              <SwitchCom
                value={uploadProduct}
                handler={() => setUploadProduct(!uploadProduct)}
              />
            </div>
          </li>
          <li className="notification-settings-item sm:flex justify-between items-center mb-4 pb-4 border-b dark:border-[#5356fb29]  border-light-purple dark:border-[#5356fb29] ">
            <div className="sm:flex sm:space-x-4 items-center">
              <div className="w-16 h-16">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="30" cy="30" r="30" fill="#F539F8" />
                  <path
                    d="M41.8287 28.0141C41.4077 29.4703 41.0646 30.8583 40.5811 32.1937C40.4622 32.5232 39.8851 32.8897 39.5147 32.8936C35.1811 32.9443 30.8474 32.9267 26.5138 32.9287C25.8724 32.9287 25.463 32.6129 25.3168 31.9988C24.6306 29.1292 23.9385 26.2596 23.2835 23.3841C23.0847 22.5146 23.4804 21.9785 24.3187 21.9727C27.8511 21.9493 31.3835 21.9629 35.0037 21.9629C34.9608 23.8383 35.4716 25.4778 36.8927 26.7274C38.2827 27.9575 39.9261 28.324 41.8287 28.0141Z"
                    fill="white"
                  />
                  <path
                    d="M24.4176 33.9331C27.334 33.9331 30.1997 33.9331 33.0654 33.9331C34.9408 33.9331 36.8162 33.9292 38.6915 33.9351C39.5649 33.937 40.0601 34.3289 40.0835 35.0053C40.1069 35.7169 39.5961 36.1497 38.6877 36.1497C33.7224 36.1536 28.759 36.1536 23.7938 36.1497C22.7878 36.1497 22.5091 35.904 22.2888 34.8884C21.3452 30.5255 20.3939 26.1645 19.4679 21.7977C19.3587 21.285 19.1579 20.9965 18.6296 20.8347C17.419 20.4643 16.2318 20.0159 15.0368 19.5948C14.0328 19.24 13.6605 18.6981 13.9334 18.0021C14.2024 17.314 14.7853 17.1385 15.7386 17.4699C17.2221 17.9846 18.692 18.5382 20.1912 19.0061C20.9476 19.242 21.3082 19.6689 21.4681 20.4331C22.3824 24.7746 23.3317 29.1082 24.2733 33.4438C24.3006 33.5725 24.3474 33.7012 24.4176 33.9331Z"
                    fill="white"
                  />
                  <path
                    d="M35.6934 22.6285C35.6798 19.9227 37.8729 17.7237 40.5788 17.7334C43.23 17.7412 45.4134 19.9441 45.4095 22.609C45.4056 25.2662 43.2144 27.4632 40.5573 27.469C37.9022 27.4749 35.7071 25.2915 35.6934 22.6285ZM42.6257 20.4685C41.7465 21.4101 40.8848 22.3342 39.8614 23.4317C39.3721 22.7669 38.9763 22.2328 38.524 21.6207C38.0698 22.0963 37.7696 22.4102 37.5747 22.6168C38.4051 23.4746 39.1986 24.2914 39.9316 25.0498C41.1207 23.8567 42.345 22.6305 43.6726 21.299C43.4562 21.1274 43.1969 20.9208 42.9357 20.7142C42.8538 20.6459 42.77 20.5835 42.6257 20.4685Z"
                    fill="white"
                  />
                  <path
                    d="M37.4854 37.0509C39.2068 37.0353 40.6104 38.3882 40.6436 40.096C40.6767 41.8329 39.2653 43.258 37.5147 43.258C35.805 43.258 34.4072 41.868 34.3994 40.1662C34.3936 38.4565 35.7699 37.0685 37.4854 37.0509ZM38.8929 40.1447C38.891 39.3903 38.2984 38.7781 37.5537 38.7625C36.7817 38.745 36.1384 39.3825 36.1423 40.1603C36.1462 40.907 36.7485 41.5269 37.4854 41.5464C38.2574 41.5659 38.8968 40.9303 38.8929 40.1447Z"
                    fill="white"
                  />
                  <path
                    d="M24.8751 43.2571C23.1556 43.2434 21.7754 41.8613 21.7793 40.1555C21.7852 38.3951 23.179 37.0286 24.9491 37.0481C26.6569 37.0676 28.0273 38.4751 28.0078 40.1886C27.9864 41.9022 26.5906 43.2688 24.8751 43.2571ZM26.2709 40.1574C26.2728 39.3738 25.6334 38.7441 24.8556 38.7636C24.1226 38.7831 23.4968 39.4167 23.4968 40.1458C23.4948 40.8768 24.1148 41.5182 24.8439 41.5435C25.6178 41.5708 26.2689 40.9372 26.2709 40.1574Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xl tracking-wide text-dark-gray dark:text-white font-bold">
                  You got sell your prodcuts
                </p>
                <p className="text-base tracking-wide text-thin-light-gray">
                  Evey new prodcuts sell you can get notifcation
                </p>
              </div>
            </div>
            <div className="mt-5 sm:mt-0">
              <SwitchCom
                value={saleProduct}
                handler={() => setSaleProduct(!saleProduct)}
              />
            </div>
          </li>
          <li className="notification-settings-item sm:flex justify-between items-center mb-4 pb-4 border-b dark:border-[#5356fb29]  border-light-purple dark:border-[#5356fb29] ">
            <div className="sm:flex sm:space-x-4 items-center">
              <div className="w-16 h-16">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="30" cy="30" r="30" fill="#56CCF2" />
                  <path
                    d="M26.6593 16.1563C28.3179 16.165 29.6518 16.3439 30.8831 16.9656C33.0228 18.0459 34.1639 19.8365 34.4921 22.1742C34.7023 23.6678 34.5338 25.144 34.176 26.5977C33.7436 28.3484 33.16 30.0452 32.2326 31.603C31.6404 32.5982 30.904 33.4701 29.9106 34.0936C28.0678 35.252 25.8396 35.1339 24.0264 33.7931C22.9322 32.9838 22.1559 31.9157 21.5428 30.719C20.6658 29.0031 20.1743 27.1656 19.8356 25.2795C19.6428 24.2079 19.5768 23.1381 19.7505 22.0595C20.1986 19.2668 21.8103 17.4658 24.4502 16.5401C25.2612 16.2553 26.0984 16.1372 26.6593 16.1563Z"
                    fill="white"
                  />
                  <path
                    d="M36.2459 45.0001C36.166 45.0001 36.0982 45.0001 36.0288 45.0001C28.7239 45.0001 21.4191 45.0001 14.1143 45.0001C13.8538 45.0001 13.8451 45.0001 13.8468 44.7448C13.8538 43.6993 13.8382 42.6503 13.8833 41.6065C13.9319 40.5227 14.4929 39.696 15.3352 39.0482C16.1689 38.4091 17.131 38.0409 18.1227 37.7352C20.1061 37.1239 22.1451 36.8095 24.2066 36.6324C26.0059 36.4778 27.8087 36.4709 29.6114 36.5681C30.0977 36.5942 30.5805 36.6567 31.0668 36.688C31.2388 36.7001 31.2787 36.7678 31.2787 36.9328C31.2735 38.5498 31.6243 40.0816 32.4493 41.4832C33.3125 42.9507 34.516 44.0605 36.0288 44.8403C36.093 44.8733 36.1573 44.9046 36.2215 44.9393C36.2302 44.9463 36.2302 44.9619 36.2459 45.0001Z"
                    fill="white"
                  />
                  <path
                    d="M33.9961 35.6042C34.0881 35.6042 34.1663 35.6042 34.2444 35.6042C35.4098 35.6042 36.5734 35.6042 37.7388 35.6042C37.9993 35.6042 38.0011 35.6042 38.0011 35.3332C38.0011 34.1678 38.0011 33.0042 38.0011 31.8389C38.0011 31.7624 38.0011 31.6843 38.0011 31.5957C39.1473 31.5957 40.2675 31.5957 41.4155 31.5957C41.4155 32.9295 41.4155 34.2529 41.4155 35.6024C42.7667 35.6024 44.0902 35.6024 45.4257 35.6024C45.4257 36.7296 45.4257 37.8324 45.4257 38.9596C44.0954 38.9596 42.7702 38.9596 41.4173 38.9596C41.4173 40.316 41.4173 41.6463 41.4173 42.9906C41.327 42.9958 41.2627 43.0028 41.1984 43.0028C40.205 43.0028 39.2116 42.9993 38.2182 43.008C38.0445 43.0097 37.9959 42.9611 37.9959 42.7874C38.0028 41.6029 37.9993 40.4185 37.9993 39.234C37.9993 39.1558 37.9993 39.0777 37.9993 38.9717C36.6568 38.9717 35.3334 38.9717 33.9961 38.9717C33.9961 37.8394 33.9961 36.7383 33.9961 35.6042Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xl tracking-wide text-dark-gray dark:text-white font-bold">
                  Got new follower
                </p>
                <p className="text-base tracking-wide text-thin-light-gray">
                  Evey new follower you can get notifcation
                </p>
              </div>
            </div>
            <div className="mt-5 sm:mt-0">
              <SwitchCom
                value={getProduct}
                handler={() => setGetProduct(!getProduct)}
              />
            </div>
          </li>
          <li className="notification-settings-item sm:flex justify-between items-center mb-4 pb-4 border-b dark:border-[#5356fb29]  border-light-purple dark:border-[#5356fb29] ">
            <div className="sm:flex sm:space-x-4 items-center">
              <div className="w-16 h-16">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="30" cy="30" r="30" fill="#9B51E0" />
                  <path
                    d="M37.9128 13.8507C38.2013 13.9992 38.2864 14.246 38.2814 14.5546C38.2714 15.1718 38.2781 15.7906 38.2781 16.4478C38.4182 16.4478 38.5299 16.4478 38.6417 16.4478C40.1145 16.4495 41.5857 16.4495 43.0586 16.4511C43.9126 16.4528 44.2879 16.8431 44.2696 17.6955C44.2229 19.7822 44.0077 21.8471 43.4005 23.8538C42.9368 25.39 42.283 26.8245 41.0787 27.9404C40.3331 28.6309 39.4523 29.0513 38.4415 29.1764C38.2514 29.1997 38.1863 29.2681 38.1463 29.4566C37.4691 32.6492 35.5742 34.7325 32.4467 35.6866C32.3116 35.7283 32.2032 35.76 32.2032 35.9485C32.2099 37.9251 32.2099 39.9017 32.2115 41.8783C32.2115 41.9083 32.2249 41.9383 32.2399 41.9984C32.345 42.0034 32.4567 42.0134 32.5685 42.0134C33.2307 42.0151 33.8929 42.0184 34.5551 42.0117C34.842 42.0084 35.0538 42.1101 35.2206 42.352C35.8878 43.3211 36.565 44.2852 37.2389 45.2493C37.3773 45.4478 37.5125 45.6797 37.3306 45.8798C37.2005 46.0216 36.9637 46.1384 36.7735 46.1401C32.4 46.1551 28.0248 46.1501 23.6513 46.1534C23.4178 46.1534 23.2109 46.1134 23.0858 45.8899C22.9524 45.6497 23.0491 45.4495 23.1892 45.2493C23.8581 44.2936 24.5287 43.3395 25.1875 42.377C25.3677 42.1151 25.5945 42.0084 25.9031 42.0117C26.6587 42.0201 27.4143 42.0134 28.2033 42.0134C28.21 41.8783 28.22 41.7665 28.22 41.6548C28.2216 39.7933 28.2166 37.9334 28.225 36.0719C28.2266 35.8368 28.1633 35.7383 27.9214 35.6633C24.8823 34.7158 22.9974 32.6909 22.3119 29.5767C22.2502 29.2965 22.1551 29.2014 21.8598 29.1547C20.407 28.9295 19.3128 28.1239 18.4738 26.9446C17.5047 25.5818 16.9993 24.0289 16.659 22.4159C16.3287 20.8497 16.1769 19.2601 16.1536 17.6588C16.1419 16.8214 16.5255 16.4478 17.3679 16.4461C18.8291 16.4445 20.2919 16.4428 21.7531 16.4428C21.8682 16.4428 21.9833 16.4428 22.1484 16.4428C22.1484 16.1476 22.1484 15.869 22.1484 15.5904C22.1484 15.2435 22.1567 14.8965 22.1467 14.5496C22.1367 14.241 22.2268 13.9925 22.5154 13.8457C27.6478 13.8507 32.7803 13.8507 37.9128 13.8507ZM30.2132 19.1633C29.8947 19.8072 29.561 20.361 29.3425 20.9581C29.109 21.5969 28.7154 21.8538 28.0482 21.8805C27.4177 21.9072 26.7922 22.0523 26.1116 22.1524C26.2217 22.2692 26.2901 22.3442 26.3635 22.4159C26.8972 22.938 27.4393 23.4518 27.9581 23.9872C28.0548 24.0873 28.1165 24.2791 28.1015 24.4176C28.0565 24.8346 27.9631 25.2449 27.8914 25.6586C27.8196 26.0839 27.7513 26.5109 27.6729 26.9913C28.4652 26.5743 29.2041 26.199 29.9297 25.7987C30.1415 25.6819 30.3 25.6936 30.5051 25.8053C31.2307 26.2023 31.968 26.5793 32.7236 26.9746C32.7236 26.8812 32.7319 26.8195 32.7219 26.7628C32.5902 25.9972 32.4667 25.2299 32.3183 24.4676C32.2749 24.2424 32.3233 24.0973 32.4884 23.9438C32.9338 23.5285 33.3624 23.0932 33.8011 22.6695C33.9629 22.5127 34.1331 22.3642 34.3649 22.1541C33.4609 22.024 32.6652 21.9005 31.8662 21.7971C31.6077 21.7637 31.4409 21.6837 31.3225 21.4201C30.9872 20.6829 30.6086 19.959 30.2132 19.1633ZM42.2813 18.4761C40.9219 18.4761 39.6075 18.4761 38.3014 18.4761C38.3014 21.3884 38.3014 24.2724 38.3014 27.2365C38.6517 27.088 38.9753 26.9913 39.2555 26.8228C40.1512 26.2841 40.6617 25.43 41.057 24.4993C41.5991 23.2249 41.8943 21.8838 42.0745 20.5177C42.1612 19.8422 42.2112 19.165 42.2813 18.4761ZM22.1301 27.1781C22.1301 24.2608 22.1301 21.3684 22.1301 18.4694C20.8023 18.4694 19.4963 18.4694 18.1819 18.4694C18.1785 18.5311 18.1719 18.5712 18.1735 18.6112C18.2753 20.2826 18.4988 21.9339 19.0142 23.5318C19.3278 24.5026 19.7198 25.445 20.4287 26.2107C20.8874 26.7077 21.4262 27.0664 22.1301 27.1781Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xl tracking-wide text-dark-gray dark:text-white font-bold">
                  Auther leavel up
                </p>
                <p className="text-base tracking-wide text-thin-light-gray">
                  Evey new prodcuts sell you can get notifcation
                </p>
              </div>
            </div>
            <div className="mt-5 sm:mt-0">
              <SwitchCom
                value={authLevel}
                handler={() => setAuthLevel(!authLevel)}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
