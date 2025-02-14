import React from "react";
import CounterUp from "../Helpers/CounterUp";

export default function CounterSection({ className }) {
  return (
    <>
      <div
        id="counterSection"
        className={`counter-section w-full ${className || ""}`}
      >
        <div className="counter-section-wrapper w-full flex flex-col justify-center bg-purple sm:h-[147px] rounded-lg px-8 py-5 sm:py-0">
          <div className="sm:flex justify-between">
            {/* artworkd */}
            <div className="flex items-center space-x-2.5 mb-2 sm:mb-0">
              <div className="w-20 h-20 flex justify-center items-center bg-white    rounded-full">
                <svg
                  width="27"
                  height="37"
                  viewBox="0 0 27 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7891 0.0191884C17.7891 1.39727 17.7891 2.71017 17.7891 4.02308C17.7899 7.06137 19.9647 9.23868 23.0021 9.24126C24.3142 9.24211 25.6253 9.24126 26.9991 9.24126C26.9991 9.45907 26.9991 9.63916 26.9991 9.81839C26.9991 13.4192 27 17.0209 27 20.6218C27 24.6625 27 28.7033 26.9991 32.7441C26.9991 34.8313 25.784 36.0491 23.7019 36.0499C16.8998 36.0499 10.0969 36.0499 3.29481 36.0499C1.24527 36.0499 0.0224076 34.8236 0.02155 32.7646C0.0198349 30.0205 0.0224076 27.2772 0.02155 24.533C0.02155 17.4763 0.0515642 10.4195 0.000111352 3.36277C-0.014467 1.39212 1.40392 -0.0245465 3.37027 0.000322344C7.98559 0.0603507 12.6018 0.0191884 17.218 0.0191884C17.3869 0.0191884 17.5558 0.0191884 17.7891 0.0191884ZM3.53406 31.8702C10.1981 31.8702 16.8346 31.8702 23.4798 31.8702C23.4798 31.2682 23.4798 30.6945 23.4798 30.1105C16.8158 30.1105 10.1886 30.1105 3.53406 30.1105C3.53406 30.704 3.53406 31.2819 3.53406 31.8702ZM3.52377 27.2429C10.1998 27.2429 16.8355 27.2429 23.4806 27.2429C23.4806 26.6409 23.4806 26.0663 23.4806 25.5046C16.8089 25.5046 10.1741 25.5046 3.52377 25.5046C3.52377 26.0946 3.52377 26.6495 3.52377 27.2429ZM8.00103 14.9405C7.55425 14.9405 7.13319 14.9405 6.75587 14.9405C6.52176 15.3101 6.97626 15.8144 6.35454 16.0708C5.71481 16.3349 5.70709 15.5845 5.27917 15.5399C4.9919 15.8229 4.68918 16.1222 4.40791 16.4001C4.46022 16.84 5.19342 16.8631 4.93787 17.496C4.68232 18.1289 4.13778 17.6315 3.80419 17.8948C3.80419 18.3072 3.80419 18.7292 3.80419 19.1142C4.1575 19.3783 4.67117 18.899 4.93187 19.507C5.20371 20.1407 4.47051 20.169 4.40791 20.6098C4.68832 20.897 4.99275 21.2092 5.27231 21.4956C5.66679 21.3713 5.71738 20.813 6.20533 20.8936C6.93253 21.0128 6.62381 21.638 6.75844 22.0702C7.17092 22.0702 7.57483 22.0702 7.92214 22.0702C8.21627 21.7126 7.71804 21.2032 8.36034 20.9408C9.01122 20.6758 9.02408 21.4141 9.45629 21.4416C9.75386 21.1637 10.0694 20.8687 10.3378 20.6183C10.2435 20.157 9.55834 20.1304 9.80874 19.5112C10.0626 18.8818 10.6123 19.3929 10.9476 19.1176C10.9476 18.7043 10.9476 18.2815 10.9476 17.8913C10.5788 17.6521 10.0454 18.1263 9.79759 17.4711C9.55919 16.8426 10.3035 16.828 10.3378 16.4661C10.0223 16.1265 9.73328 15.8144 9.46658 15.5271C9.05496 15.6163 9.03952 16.238 8.4924 16.1076C7.77207 15.937 8.18026 15.3376 8.00103 14.9405ZM8.56101 12.3722C8.38264 12.0532 8.08936 11.7702 8.10308 11.5026C8.13652 10.8157 8.7754 11.1767 9.15357 11.0258C9.15357 10.6459 9.15357 10.2669 9.15357 9.91958C8.83542 9.6606 8.33976 10.11 8.11251 9.53025C7.88955 8.96255 8.53014 8.93254 8.59445 8.57408C8.31661 8.29967 8.03705 8.0244 7.78236 7.77313C7.4016 7.80229 7.39817 8.45231 6.84248 8.24564C6.26621 8.03126 6.67183 7.53902 6.45744 7.21144C6.08527 7.21144 5.69594 7.21144 5.34949 7.21144C5.11367 7.54674 5.54073 8.04155 4.94302 8.2465C4.38904 8.43688 4.37875 7.8143 4.00143 7.75255C3.74674 8.01325 3.47146 8.29538 3.20219 8.57151C3.26222 8.9394 3.91739 8.96513 3.67299 9.5414C3.43459 10.1039 2.94493 9.65974 2.64307 9.90929C2.64307 10.2772 2.64307 10.6554 2.64307 11.061C2.95093 11.061 3.23392 11.061 3.5272 11.061C3.61296 11.2634 3.80076 11.4957 3.74502 11.6175C3.62239 11.8859 3.37713 12.0986 3.19876 12.313C3.48175 12.6148 3.74931 12.9004 3.99114 13.1594C4.37961 13.0539 4.4182 12.4228 4.9979 12.6809C5.54587 12.9253 5.08365 13.4201 5.33663 13.7031C5.72167 13.7031 6.10156 13.7031 6.45487 13.7031C6.67955 13.3712 6.25506 12.8798 6.84334 12.662C7.40761 12.4536 7.42476 13.1182 7.76177 13.1542C8.05334 12.8687 8.3269 12.6011 8.56101 12.3722ZM10.0789 13.3541C10.3764 13.5221 10.7529 13.2228 10.9313 13.6696C11.1148 14.1267 10.5874 14.161 10.5479 14.3814C10.7846 14.661 10.9913 14.9062 11.1714 15.118C11.5084 15.0271 11.5478 14.5443 11.9955 14.7287C12.4508 14.9156 12.0761 15.3401 12.3025 15.5691C12.6112 15.5691 12.9191 15.5691 13.1943 15.5691C13.3804 15.2964 13.0554 14.9225 13.4979 14.7304C13.9687 14.5255 13.9953 15.0709 14.4172 15.1335C14.4635 15.0683 14.5475 14.9345 14.6479 14.8145C14.7525 14.6875 14.8726 14.5735 14.9566 14.4843C14.8734 14.1481 14.3906 14.1087 14.5707 13.6593C14.7542 13.2014 15.1821 13.5762 15.4205 13.3283C15.4205 13.0471 15.4205 12.7529 15.4205 12.4768C15.1547 12.2735 14.7439 12.6114 14.5638 12.1415C14.3889 11.6853 14.936 11.6553 14.948 11.416C14.6933 11.157 14.4772 10.9375 14.2534 10.7102C13.9927 10.7574 13.9678 11.2608 13.5193 11.0927C13.046 10.9152 13.3839 10.507 13.2029 10.2514C12.8925 10.2514 12.5752 10.2514 12.2905 10.2514C12.1207 10.5362 12.4337 10.9169 11.9766 11.0918C11.529 11.2625 11.5041 10.7583 11.1842 10.6999C11.1439 10.7334 11.0796 10.7874 11.0153 10.8397C10.8292 10.9924 10.6423 11.1442 10.5162 11.2471C10.602 11.6604 11.1225 11.6973 10.9253 12.1646C10.7357 12.6123 10.3207 12.2547 10.0789 12.4768C10.0789 12.7692 10.0789 13.0642 10.0789 13.3541ZM23.4918 13.2143C23.4918 12.6037 23.4918 12.0403 23.4918 11.4597C22.8923 11.4597 22.3178 11.4597 21.7364 11.4597C21.7364 12.0583 21.7364 12.6243 21.7364 13.2143C22.3246 13.2143 22.8889 13.2143 23.4918 13.2143ZM21.7338 17.8853C22.3521 17.8853 22.9164 17.8853 23.4952 17.8853C23.4952 17.2911 23.4952 16.7268 23.4952 16.1368C22.8975 16.1368 22.3229 16.1368 21.7338 16.1368C21.7338 16.7311 21.7338 17.2971 21.7338 17.8853ZM23.4909 22.565C23.4909 21.9655 23.4909 21.3936 23.4909 20.7993C22.8932 20.7993 22.3195 20.7993 21.7424 20.7993C21.7424 21.4056 21.7424 21.981 21.7424 22.565C22.3358 22.565 22.8983 22.565 23.4909 22.565Z"
                    fill="url(#paint0_linear_25_21030)"
                  />
                  <path
                    d="M19.7895 0.090332C22.1821 2.48375 24.5232 4.82485 26.8926 7.19511C26.7803 7.2054 26.6645 7.22599 26.5487 7.22599C25.3207 7.2277 24.0919 7.23456 22.8638 7.22513C21.099 7.21141 19.8084 5.92937 19.7921 4.16711C19.7793 2.82677 19.7895 1.48813 19.7895 0.090332Z"
                    fill="url(#paint1_linear_25_21030)"
                  />
                  <path
                    d="M8.62547 18.5079C8.62461 19.2042 8.07493 19.7548 7.37774 19.7582C6.68313 19.7616 6.12315 19.2128 6.11629 18.5208C6.10857 17.8099 6.68141 17.2344 7.38632 17.243C8.07407 17.2524 8.62719 17.8167 8.62547 18.5079Z"
                    fill="url(#paint2_linear_25_21030)"
                  />
                  <path
                    d="M5.8947 9.30909C6.52842 9.31081 7.04295 9.82362 7.04381 10.4539C7.04467 11.0851 6.53014 11.5953 5.89555 11.5936C5.25411 11.5919 4.75158 11.0902 4.75244 10.4531C4.75244 9.8159 5.26011 9.30652 5.8947 9.30909Z"
                    fill="url(#paint3_linear_25_21030)"
                  />
                  <path
                    d="M13.6848 12.9201C13.6788 13.451 13.2517 13.854 12.7132 13.8377C12.2055 13.8223 11.7947 13.3944 11.8059 12.8918C11.817 12.3825 12.2321 11.9734 12.7415 11.97C13.2732 11.9674 13.6908 12.3876 13.6848 12.9201Z"
                    fill="url(#paint4_linear_25_21030)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_25_21030"
                      x1="0"
                      y1="0"
                      x2="36.3183"
                      y2="26.6223"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_25_21030"
                      x1="19.7856"
                      y1="0.090332"
                      x2="27.3256"
                      y2="7.43605"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_25_21030"
                      x1="6.11621"
                      y1="17.2429"
                      x2="8.77267"
                      y2="19.8366"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_25_21030"
                      x1="4.75244"
                      y1="9.30908"
                      x2="7.16545"
                      y2="11.6778"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_25_21030"
                      x1="11.8057"
                      y1="11.97"
                      x2="13.7791"
                      y2="13.9127"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="">
                <p className="text-18 font-bold text-white">
                  <CounterUp endValue={43} sectionId="counterSection" />K
                </p>
                <p className="text-sm text-white">Artworks</p>
              </div>
            </div>
            <div className="w-[2px] h-full bg-white-opacity sm:block hidden"></div>
            {/* Auction */}
            <div className="flex items-center space-x-2.5 mb-2 sm:mb-0">
              <div className="w-20 h-20 flex justify-center items-center bg-white    rounded-full">
                <svg
                  width="42"
                  height="37"
                  viewBox="0 0 42 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.4569 30.0183C20.7283 27.3508 20.9092 27.2006 23.7016 27.2006C27.2842 27.2006 30.8667 27.2006 34.4492 27.1949C36.3973 27.1891 36.9702 27.7087 37.0185 29.5564C37.0245 29.7065 37.0426 29.8566 37.0547 30.001C39.5637 30.3185 40.0281 30.919 39.6722 33.396C32.3986 33.396 25.1129 33.396 17.8393 33.396C17.4111 31.0229 18.0082 30.255 20.4569 30.0183Z"
                    fill="url(#paint0_linear_25_21041)"
                  />
                  <path
                    d="M16.1151 14.6772C17.074 15.6588 18.0149 16.6173 19.0161 17.645C18.9618 17.7085 18.8231 17.8875 18.6663 18.055C14.0524 22.7433 9.45062 27.4317 4.83073 32.1143C3.75718 33.2056 2.27954 33.321 1.10949 32.4665C-0.000247531 31.6582 -0.325931 30.2262 0.361624 29.0657C0.524466 28.7943 0.741588 28.5461 0.976804 28.3324C5.89825 23.8692 10.8318 19.4118 15.7592 14.9544C15.8557 14.862 15.9703 14.7869 16.1151 14.6772Z"
                    fill="url(#paint1_linear_25_21041)"
                  />
                  <path
                    d="M24.1251 4.59595C26.0008 6.38007 27.8704 8.15842 29.6858 9.8848C26.9356 12.5177 24.1371 15.191 21.3567 17.8527C19.5715 16.1263 17.7018 14.3191 15.8442 12.5235C18.5643 9.91945 21.3507 7.2577 24.1251 4.59595Z"
                    fill="url(#paint2_linear_25_21041)"
                  />
                  <path
                    d="M21.5854 0C22.5504 0.109703 23.3345 0.58316 23.6662 1.37995C24.0341 2.26335 23.7989 3.03127 23.1113 3.68949C20.928 5.77963 18.7448 7.86977 16.5675 9.9599C16.0006 10.5026 15.4517 11.0512 14.8667 11.5766C13.95 12.408 12.6653 12.4138 11.827 11.6112C11.0188 10.8375 10.9947 9.60192 11.8571 8.76471C14.6375 6.051 17.43 3.35461 20.2526 0.681315C20.5903 0.357979 21.1331 0.22518 21.5854 0Z"
                    fill="url(#paint3_linear_25_21041)"
                  />
                  <path
                    d="M34.5632 12.2634C34.3038 12.7369 34.141 13.3027 33.767 13.6665C31.0108 16.3571 28.2244 19.0188 25.4259 21.669C24.4911 22.5524 23.1883 22.5236 22.3379 21.6633C21.4875 20.8087 21.5358 19.7059 22.4827 18.7879C25.2148 16.1492 27.953 13.5164 30.6851 10.8719C31.3847 10.1964 32.1869 10.0232 33.0976 10.3407C33.8756 10.6179 34.4003 11.38 34.5632 12.2634Z"
                    fill="url(#paint4_linear_25_21041)"
                  />
                  <path
                    d="M28.6175 35.9652C24.9264 35.9652 21.2353 35.9652 17.5442 35.9652C17.297 35.9652 17.0195 36.0056 16.8145 35.9133C16.6275 35.8324 16.3923 35.5899 16.3983 35.4225C16.4043 35.2146 16.5853 34.9375 16.7783 34.822C16.9652 34.7123 17.2547 34.7469 17.502 34.7469C24.8842 34.7469 32.2664 34.7412 39.6485 34.7585C40.1672 34.7585 40.9935 34.4987 41.0055 35.3416C41.0176 36.2712 40.1431 35.9537 39.6123 35.9537C35.9454 35.9768 32.2784 35.9652 28.6175 35.9652Z"
                    fill="url(#paint5_linear_25_21041)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_25_21041"
                      x1="17.7119"
                      y1="27.1948"
                      x2="21.1875"
                      y2="39.299"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_25_21041"
                      x1="0.00219727"
                      y1="14.6772"
                      x2="19.3893"
                      y2="34.3347"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_25_21041"
                      x1="15.8442"
                      y1="4.59595"
                      x2="29.8457"
                      y2="18.904"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_25_21041"
                      x1="11.2156"
                      y1="0"
                      x2="24.1101"
                      y2="13.0511"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_25_21041"
                      x1="21.7344"
                      y1="10.187"
                      x2="34.5446"
                      y2="23.4435"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_25_21041"
                      x1="16.3982"
                      y1="34.7207"
                      x2="16.5427"
                      y2="37.4286"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="">
                <p className="text-18 font-bold text-white">
                  <CounterUp endValue={34} sectionId="counterSection" />K
                </p>
                <p className="text-sm text-white">Auction</p>
              </div>
            </div>
            <div className="w-[2px] h-full bg-white-opacity sm:block hidden"></div>
            {/* Creators */}
            <div className="flex items-center space-x-2.5 mb-2 sm:mb-0">
              <div className="w-20 h-20 flex justify-center items-center bg-white    rounded-full">
                <svg
                  width="26"
                  height="38"
                  viewBox="0 0 26 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.16034 37C1.44304 33.3767 0.725738 29.7449 0 26.1047C8.67511 26.1047 17.3249 26.1047 26 26.1047C25.2743 29.7449 24.557 33.3767 23.8397 37.0084C16.616 37 9.3924 37 2.16034 37ZM13.038 29.3573C12.6751 29.3573 12.1941 29.2141 11.9916 29.391C11.7637 29.5932 11.9325 30.0904 11.9241 30.4611C11.9156 30.7982 11.8059 31.2448 11.9747 31.4386C12.1688 31.6577 12.6329 31.4976 12.9705 31.506C13.3333 31.5144 13.8143 31.6408 14.0169 31.4555C14.2447 31.2448 14.0759 30.7561 14.0844 30.3853C14.0928 30.0483 14.2025 29.6017 14.0338 29.4079C13.8397 29.1888 13.3755 29.3742 13.038 29.3573Z"
                    fill="url(#paint0_linear_25_21052)"
                  />
                  <path
                    d="M19.5021 0C19.5021 1.4072 19.5021 2.81439 19.5021 4.22159C19.5021 5.58665 18.5823 6.50512 17.2152 6.50512C14.4726 6.50512 11.73 6.50512 8.98734 6.51355C8.70886 6.51355 8.64979 6.43771 8.65823 6.1765C8.67511 5.60351 8.66667 5.02209 8.66667 4.44067C8.67511 3.09246 9.5865 2.17399 10.9283 2.16557C12.3122 2.16557 13.6962 2.16557 15.0802 2.16557C16.3713 2.16557 17.2827 1.28923 17.3418 0C18.0591 0 18.7764 0 19.5021 0Z"
                    fill="url(#paint1_linear_25_21052)"
                  />
                  <path
                    d="M13.021 23.9224C9.7383 23.9224 6.44716 23.9224 3.16446 23.9224C2.84379 23.9224 2.40497 24.0319 2.22775 23.8634C2.02522 23.6696 2.16868 23.2314 2.16868 22.8944C2.15181 22.0265 2.37965 21.226 2.85223 20.5013C3.70455 19.2205 4.90286 18.5464 6.44716 18.4958C6.93662 18.479 7.43451 18.5042 7.92396 18.4874C8.13493 18.479 8.27839 18.5548 8.42185 18.6981C9.85645 20.139 11.2995 21.5714 12.7341 23.0208C12.9366 23.223 13.0379 23.2567 13.2573 23.0292C14.6835 21.5799 16.1265 20.1474 17.5611 18.6981C17.7214 18.538 17.8733 18.4705 18.0927 18.479C18.9197 18.5211 19.7467 18.4116 20.5737 18.6222C22.4387 19.1025 23.7974 20.8046 23.8311 22.7258C23.8396 23.0039 23.8143 23.282 23.8396 23.56C23.8649 23.8297 23.7889 23.9224 23.4936 23.914C20.0083 23.914 16.5147 23.9224 13.021 23.9224Z"
                    fill="url(#paint2_linear_25_21052)"
                  />
                  <path
                    d="M13.0211 8.67078C14.3545 8.67078 15.6962 8.67921 17.0296 8.66235C17.2743 8.66235 17.3502 8.71291 17.3502 8.97413C17.3334 9.98529 17.3502 10.9964 17.3418 12.0076C17.3249 14.2574 15.6456 16.0859 13.384 16.3219C11.2659 16.541 9.24055 15.0495 8.76797 12.9092C8.64983 12.3784 8.67514 11.8307 8.67514 11.2914C8.67514 10.5077 8.68358 9.72407 8.66671 8.94042C8.65827 8.71291 8.72578 8.66235 8.94519 8.66235C10.2954 8.67921 11.654 8.67078 13.0211 8.67078Z"
                    fill="url(#paint3_linear_25_21052)"
                  />
                  <path
                    d="M11.0464 18.2178C11.3924 18.2852 11.7384 18.361 12.0928 18.4284C12.962 18.5885 13.8143 18.4958 14.6582 18.2599C14.751 18.2346 14.8354 18.1841 14.962 18.2431C14.3375 18.875 13.7215 19.4902 13.1055 20.1053C13.0295 20.1811 12.9704 20.1895 12.8945 20.1053C12.2869 19.4649 11.6033 18.8919 11.0464 18.2009C11.0548 18.2094 11.0464 18.2178 11.0464 18.2178Z"
                    fill="url(#paint4_linear_25_21052)"
                  />
                  <path
                    d="M11.0549 18.2093C11.038 18.2008 11.0127 18.1924 10.9958 18.184C11.0127 18.1755 11.0296 18.1671 11.038 18.1587C11.038 18.1755 11.038 18.1924 11.0465 18.2093C11.0465 18.2177 11.0549 18.2093 11.0549 18.2093Z"
                    fill="url(#paint5_linear_25_21052)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_25_21052"
                      x1="0"
                      y1="26.1047"
                      x2="8.34015"
                      y2="45.5689"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_25_21052"
                      x1="8.65747"
                      y1="0"
                      x2="14.7925"
                      y2="9.99717"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_25_21052"
                      x1="2.11938"
                      y1="18.4783"
                      x2="4.91676"
                      y2="29.3339"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_25_21052"
                      x1="8.66602"
                      y1="8.66235"
                      x2="16.7388"
                      y2="17.5955"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_25_21052"
                      x1="11.0464"
                      y1="18.2009"
                      x2="12.7312"
                      y2="21.4878"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_25_21052"
                      x1="10.9958"
                      y1="18.1587"
                      x2="11.0531"
                      y2="18.2196"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="">
                <p className="text-18 font-bold text-white">
                  <CounterUp endValue={19} sectionId="counterSection" />K
                </p>
                <p className="text-sm text-white">Creators</p>
              </div>
            </div>
            <div className="w-[2px] h-full bg-white-opacity sm:block hidden"></div>
            {/* canceled */}
            <div className="flex items-center space-x-2.5 ">
              <div className="w-20 h-20 flex justify-center items-center bg-white   rounded-full">
                <svg
                  width="34"
                  height="36"
                  viewBox="0 0 34 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.4692 34.7385C28.5535 33.3623 34.894 24.9264 33.8969 15.5222C33.1472 8.45772 28.0451 2.40515 21.3267 0.62892C20.3934 0.382956 19.4419 0.208602 18.498 0C17.639 0 16.78 0 15.9196 0C15.8756 0.168127 15.7405 0.15256 15.6191 0.149446C14.6251 0.126095 13.6675 0.364275 12.722 0.622693C5.86405 2.497 0.722473 8.59627 0.129097 15.544C0.136684 16.436 0.168552 17.3295 0.138203 18.22C0.124542 18.6263 0.318798 19.0715 0.000102997 19.4451C0.000102997 19.4965 0.000102997 19.5494 0.000102997 19.6008C0.299068 19.8686 0.227741 20.2562 0.282375 20.5909C1.50555 28.2049 8.20872 34.4551 15.6085 34.8646C16.4705 34.9097 17.3476 34.6793 18.196 35.0016L19.4692 34.7385ZM22.2327 25.63C21.9034 25.5927 21.6561 25.3654 21.4239 25.1303C20.1445 23.8413 18.8409 22.5742 17.6086 21.2369C17.1215 20.7076 16.8681 20.759 16.4082 21.2509C15.1851 22.5602 13.9133 23.8227 12.6386 25.0805C11.8798 25.8293 11.6825 25.8215 10.9343 25.1085C10.4532 24.6508 9.98885 24.1729 9.54572 23.6763C8.91592 22.9696 8.90378 22.7423 9.56241 22.0371C10.822 20.6905 12.0937 19.3548 13.4019 18.0596C13.8344 17.6315 13.8966 17.4074 13.4247 16.945C12.0907 15.6389 10.8266 14.2597 9.51992 12.924C8.98118 12.3729 8.97359 11.867 9.5184 11.3252C9.97216 10.8753 10.3925 10.3896 10.8554 9.95063C11.6885 9.15825 11.8646 9.14424 12.6735 9.94129C13.9664 11.2163 15.2518 12.5021 16.4947 13.8269C16.9121 14.2721 17.1306 14.241 17.5343 13.816C18.8379 12.4414 20.1931 11.1197 21.5164 9.76538C22.0081 9.261 22.471 9.26411 22.9551 9.7576C23.4559 10.2698 23.978 10.7601 24.4545 11.2956C25.0828 12.0008 25.0934 12.2593 24.456 12.9427C23.2343 14.2534 22.0081 15.5642 20.7273 16.8127C20.1931 17.3327 20.1354 17.6113 20.7106 18.1624C22.0203 19.4171 23.2434 20.7684 24.5061 22.0745C25.0038 22.5897 25.0433 23.0988 24.5273 23.6234C23.9886 24.1698 23.4574 24.724 22.9111 25.2611C22.7305 25.4417 22.5196 25.5942 22.2327 25.63Z"
                    fill="url(#paint0_linear_25_21063)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_25_21063"
                      x1="34"
                      y1="0"
                      x2="-2.92931"
                      y2="35.1092"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F539F8" />
                      <stop offset="0.416763" stopColor="#C342F9" />
                      <stop offset="1" stopColor="#5356FB" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="">
                <p className="text-18 font-bold text-white">
                  <CounterUp endValue={24} sectionId="counterSection" />K
                </p>
                <p className="text-sm text-white">Canceled</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
