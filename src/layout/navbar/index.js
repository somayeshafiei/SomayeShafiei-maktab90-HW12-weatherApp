import { El } from '../../library/El';

export const navbar = () => {
  return El({
    element: 'nav',
    className: 'w-full p-2 ',
    child: [
      El({
        element: 'div',
        className:
          'flex justify-between px-4 py-2  rounded-full bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg  sm:items-center sm:px-8',
        child: [
          El({
            element: 'div',
            className: 'h-full flex gap-2 justify-center',
            child: [
              El({
                element: 'svg',
                className: 'h-full w-8',
                innerHTML: `<svg viewBox="0 -0.5 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.6364 23.2727C18.063 23.2727 23.2727 18.063 23.2727 11.6364C23.2727 5.20978 18.063 0 11.6364 0C5.20978 0 0 5.20978 0 11.6364C0 18.063 5.20978 23.2727 11.6364 23.2727Z" fill="url(#paint0_radial_103_1432)"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4546 23.2727C17.4546 23.1537 17.4517 23.0348 17.4459 22.9159C17.44 22.797 17.4313 22.6783 17.4196 22.5599C17.4079 22.4414 17.3934 22.3233 17.3759 22.2056C17.3585 22.0879 17.3381 21.9706 17.3149 21.8539C17.2917 21.7371 17.2656 21.6211 17.2367 21.5056C17.2078 21.3901 17.176 21.2755 17.1415 21.1616C17.1069 21.0477 17.0696 20.9347 17.0295 20.8226C16.9894 20.7106 16.9466 20.5995 16.901 20.4896C16.8555 20.3796 16.8073 20.2708 16.7564 20.1632C16.7055 20.0556 16.652 19.9494 16.5959 19.8444C16.5398 19.7394 16.4811 19.6359 16.4199 19.5338C16.3587 19.4317 16.2951 19.3312 16.229 19.2322C16.1628 19.1332 16.0943 19.036 16.0234 18.9404C15.9525 18.8448 15.8793 18.751 15.8038 18.659C15.7283 18.5669 15.6506 18.4768 15.5706 18.3887C15.4907 18.3005 15.4087 18.2143 15.3245 18.1301C15.2403 18.046 15.1542 17.9639 15.066 17.884C14.9778 17.8041 14.8877 17.7263 14.7957 17.6508C14.7037 17.5753 14.6099 17.5021 14.5143 17.4312C14.4187 17.3603 14.3214 17.2918 14.2224 17.2257C14.1234 17.1595 14.0229 17.0959 13.9208 17.0347C13.8187 16.9735 13.7152 16.9149 13.6102 16.8588C13.5053 16.8026 13.399 16.7491 13.2914 16.6983C13.1838 16.6474 13.075 16.5992 12.9651 16.5536C12.8551 16.5081 12.7441 16.4652 12.632 16.4251C12.5199 16.385 12.407 16.3477 12.2931 16.3132C12.1792 16.2786 12.0645 16.2469 11.949 16.218C11.8336 16.189 11.7175 16.163 11.6007 16.1397C11.484 16.1165 11.3668 16.0962 11.249 16.0787C11.1313 16.0613 11.0132 16.0467 10.8948 16.035C10.7763 16.0234 10.6576 16.0146 10.5388 16.0088C10.4199 16.0029 10.3009 16 10.1819 16C10.0629 16 9.94393 16.0029 9.82505 16.0088C9.70617 16.0146 9.58751 16.0234 9.46905 16.035C9.3506 16.0467 9.23251 16.0613 9.11478 16.0787C8.99704 16.0962 8.8798 16.1165 8.76307 16.1397C8.64633 16.163 8.53023 16.189 8.41478 16.218C8.29932 16.2469 8.18464 16.2786 8.07075 16.3132C7.95685 16.3477 7.84387 16.385 7.7318 16.4251C7.61973 16.4652 7.50871 16.5081 7.39875 16.5536C7.28879 16.5992 7.18001 16.6474 7.07241 16.6983C6.96482 16.7491 6.85854 16.8026 6.75357 16.8588C6.6486 16.9149 6.54507 16.9735 6.44298 17.0347C6.34089 17.0959 6.24036 17.1595 6.1414 17.2257C6.04243 17.2918 5.94515 17.3603 5.84954 17.4312C5.75394 17.5021 5.66014 17.5753 5.56813 17.6508C5.47613 17.7263 5.38603 17.8041 5.29783 17.884C5.20965 17.9639 5.12348 18.046 5.03932 18.1301C4.95515 18.2143 4.8731 18.3005 4.79317 18.3887C4.71324 18.4768 4.63553 18.5669 4.56002 18.659C4.48451 18.751 4.4113 18.8448 4.3404 18.9404C4.26949 19.036 4.20098 19.1332 4.13486 19.2322C4.06873 19.3312 4.00507 19.4317 3.94388 19.5338C3.88269 19.6359 3.82404 19.7394 3.76793 19.8444C3.71183 19.9494 3.65833 20.0556 3.60744 20.1632C3.55655 20.2708 3.50833 20.3796 3.46278 20.4896C3.41723 20.5995 3.37441 20.7106 3.33431 20.8226C3.29422 20.9347 3.25689 21.0477 3.22234 21.1616C3.18779 21.2755 3.15606 21.3901 3.12713 21.5056C3.09821 21.6211 3.07214 21.7371 3.04892 21.8539C3.0257 21.9706 3.00536 22.0879 2.9879 22.2056C2.97043 22.3233 2.95587 22.4414 2.9442 22.5599C2.93253 22.6783 2.92378 22.797 2.91794 22.9159C2.9121 23.0348 2.90918 23.1537 2.90918 23.2727C2.90918 23.3917 2.9121 23.5107 2.91794 23.6296C2.92378 23.7485 2.93253 23.8671 2.9442 23.9856C2.95587 24.104 2.97043 24.2221 2.9879 24.3399C3.00536 24.4576 3.0257 24.5748 3.04892 24.6916C3.07214 24.8083 3.09821 24.9244 3.12713 25.0399C3.15606 25.1553 3.18779 25.27 3.22234 25.3839C3.25689 25.4978 3.29422 25.6108 3.33431 25.7228C3.37441 25.8349 3.41723 25.9459 3.46278 26.0559C3.50833 26.1658 3.55655 26.2746 3.60744 26.3822C3.65833 26.4898 3.71183 26.5961 3.76793 26.7011C3.82404 26.806 3.88269 26.9096 3.94388 27.0116C4.00507 27.1137 4.06873 27.2143 4.13486 27.3132C4.20098 27.4122 4.26949 27.5095 4.3404 27.6051C4.4113 27.7007 4.48451 27.7945 4.56002 27.8865C4.63553 27.9785 4.71324 28.0686 4.79317 28.1568C4.8731 28.245 4.95515 28.3312 5.03932 28.4153C5.12348 28.4995 5.20965 28.5815 5.29783 28.6615C5.38603 28.7414 5.47613 28.8191 5.56813 28.8946C5.66014 28.9701 5.75394 29.0433 5.84954 29.1142C5.94515 29.1851 6.04243 29.2536 6.1414 29.3198C6.24036 29.3859 6.34089 29.4496 6.44298 29.5107C6.54507 29.5719 6.6486 29.6306 6.75357 29.6867C6.85854 29.7428 6.96482 29.7963 7.07241 29.8472C7.18001 29.8981 7.28879 29.9463 7.39875 29.9919C7.50871 30.0374 7.61973 30.0802 7.7318 30.1203C7.84387 30.1604 7.95685 30.1977 8.07075 30.2323C8.18464 30.2668 8.29932 30.2986 8.41478 30.3275C8.53023 30.3564 8.64633 30.3825 8.76307 30.4057C8.8798 30.4289 8.99704 30.4493 9.11478 30.4667C9.23251 30.4842 9.3506 30.4988 9.46905 30.5104C9.58751 30.5221 9.70617 30.5309 9.82505 30.5367C9.94393 30.5425 10.0629 30.5455 10.1819 30.5455H21.8183V23.2727H17.4546Z" fill="url(#paint1_radial_103_1432)"></path> <path d="M21.8185 30.5455C27.4418 30.5455 32.0004 25.987 32.0004 20.3637C32.0004 14.7404 27.4418 10.1819 21.8185 10.1819C16.1953 10.1819 11.6367 14.7404 11.6367 20.3637C11.6367 25.987 16.1953 30.5455 21.8185 30.5455Z" fill="url(#paint2_radial_103_1432)"></path> <defs> <radialGradient id="paint0_radial_103_1432" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.93949 6.87074) rotate(58.6247) scale(17.2183)"> <stop stop-color="#FFDB00"></stop> <stop offset="1" stop-color="#FFBB00"></stop> </radialGradient> <radialGradient id="paint1_radial_103_1432" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.30062 19.374) rotate(43.7745) scale(11.8747 15.4371)"> <stop stop-color="#EFFCFF"></stop> <stop offset="0.999999" stop-color="#A5F2FF"></stop> </radialGradient> <radialGradient id="paint2_radial_103_1432" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.0125 14.2749) rotate(73.5439) scale(16.9656)"> <stop stop-color="white"></stop> <stop offset="1" stop-color="#AEF1FD"></stop> </radialGradient> </defs> </g></svg>`,
              }),
              El({
                element: 'span',
                className: 'text-[24px] font-semibold text-primary',
                child: 'Weatherix',
              }),
            ],
          }),
          El({
            element: 'button',
            className:
              'h-10 w-10 sm:border sm:w-16 sm:h-8 sm:rounded-lg sm:text-center  sm:w-[9rem] sm:bg-blue-800 sm:text-white',
            child: [
              El({
                element: 'svg',
                className: 'w-full h-full sm:hidden',
                innerHTML: `<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" fill="#00076b"></path><path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" fill="#00076b"></path><path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" fill="#00076b"></path></g></svg>`,
              }),
              El({
                element: 'span',
                className: 'hidden sm:block',
                child: 'logout',
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
