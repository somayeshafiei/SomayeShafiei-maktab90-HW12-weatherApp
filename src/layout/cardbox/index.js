import { El } from '../../library/El';

export const cardbox = (i) => {
  const mainPage = document.querySelector('#mainPage');
  const cardBox = document.getElementById('cardBox');
  if (cardBox) {
    cardBox.remove();
  }
  console.log(i);
  const result = El({
    element: 'div',
    className: 'min-h-[550px] px-5 py-2',
    id: 'cardBox',
    child: [
      El({
        element: 'div',
        className: 'flex flex-col sm:flex-row',
        child: [
          El({
            element: 'div',
            className:
              'hidden sm:block  sm:w-[50%] sm:h-[380px] sm:rounded-l-lg sm:relative',
            child: [
              El({
                element: 'img',
                className: 'h-full w-full rounded-l-lg',
                src: 'https://cdn.wallpapersafari.com/32/38/GZHtlo.jpg',
              }),
              El({
                element: 'h3',
                className:
                  'absolute text-2xl text-white font-bold top-5 right-[2.5rem]',
                child: `${i.location.region}.${i.location.tz_id}`,
              }),
              El({
                element: 'h3',
                className:
                  'absolute text-xl text-white font-italic top-[4rem] right-[2.5rem]',
                child: `${i.location.name}`,
              }),
              El({
                element: 'h3',
                className:
                  'absolute text-[5rem] text-white font-italic top-[10rem] right-[4.2rem]',
                child: `${i.current.temp_c}`,
              }),
              El({
                element: 'p',
                className:
                  'absolute text-[2rem] text-white font-italic top-[10rem] right-[3.6rem]',
                child: `°`,
              }),
              El({
                element: 'h6',
                className:
                  'absolute text-[2rem] text-white font-italic top-[13.5rem] right-[2.5rem]',
                child: `C`,
              }),
              El({
                element: 'h5',
                className:
                  'absolute text-[0.9rem] text-white font-italic top-[4rem] left-[2.5rem] ',
                child: `${i.location.localtime}`,
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'w-full h-full sm:w-[50%] sm:h-[380px] bg-slate-600 bg-opacity-80 flex flex-col  p-2 rounded-lg sm:rounded-r-lg sm:rounded-l-none',
            child: [
              El({
                element: 'div',
                className: 'h-[140px] w-full flex ',
                child: [
                  El({
                    element: 'div',
                    className:
                      'flex flex-col w-[33%] justify-center items-center',
                    child: [
                      El({
                        element: 'svg',
                        className: 'w-16',
                        innerHTML:
                          '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#EDEEF0;" d="M348.27,365.26V53.055c0-0.009-0.001-0.018-0.001-0.027V0h-53.054l0,0h-53.055v53.055v312.201 c-19.247,15.97-30.28,39.665-29.9,65.044c0.322,21.451,8.881,41.72,24.1,57.076c15.222,15.358,35.416,24.094,56.863,24.6 c0.674,0.016,1.345,0.023,2.017,0.023c21.799-0.001,42.309-8.341,57.943-23.612c16.119-15.745,24.997-36.824,24.997-59.354 C378.177,404.17,367.147,380.946,348.27,365.26z"></path> <path style="fill:#DCDEE2;" d="M348.27,365.26V53.055c0-0.318-0.019-0.633-0.024-0.951h0.023V0h-53.032l0,0 c-0.008,0-0.016,0-0.022,0v512l0,0c21.808,0.004,42.328-8.336,57.967-23.612c16.119-15.745,24.997-36.824,24.997-59.354 C378.177,404.17,367.147,380.946,348.27,365.26z"></path> <polygon style="fill:#61A2EF;" points="275.549,33.391 275.549,53.055 275.549,54.122 275.549,233.436 314.878,233.436 314.878,54.122 314.878,53.055 314.878,33.391 "></polygon> <polygon style="fill:#528ACF;" points="295.214,33.391 295.214,57.415 295.214,57.415 295.214,233.436 314.878,233.436 314.878,57.415 314.878,53.055 314.878,33.391 "></polygon> <path style="fill:#F74D37;" d="M322.398,387.589l-7.521-4.946V216.74h-39.328v165.901l-7.521,4.946 c-14.27,9.386-22.637,25.166-22.382,42.212c0.394,26.286,22.089,48.175,48.363,48.793c13.458,0.324,26.212-4.688,35.841-14.092 c9.633-9.409,14.938-22.005,14.938-35.467C344.786,412.303,336.417,396.809,322.398,387.589z"></path> <path style="fill:#C43D2C;" d="M344.786,429.034c0-16.731-8.37-32.225-22.388-41.445l-7.521-4.946V216.74h-19.664v261.853 c13.011,0.004,25.295-4.969,34.634-14.091C339.481,455.092,344.786,442.497,344.786,429.034z"></path> <g> <rect x="133.82" y="339.08" style="fill:#444242;" width="50.37" height="11.13"></rect> <rect x="133.82" y="307.71" style="fill:#444242;" width="69.31" height="11.13"></rect> <rect x="133.82" y="276.36" style="fill:#444242;" width="50.37" height="11.13"></rect> <rect x="133.82" y="245" style="fill:#444242;" width="69.31" height="11.13"></rect> <rect x="133.82" y="213.65" style="fill:#444242;" width="50.37" height="11.13"></rect> <rect x="133.82" y="182.29" style="fill:#444242;" width="69.31" height="11.13"></rect> <rect x="133.82" y="150.94" style="fill:#444242;" width="50.37" height="11.13"></rect> <rect x="133.82" y="119.58" style="fill:#444242;" width="69.31" height="11.13"></rect> <rect x="133.82" y="88.23" style="fill:#444242;" width="50.37" height="11.13"></rect> <rect x="133.82" y="56.876" style="fill:#444242;" width="69.31" height="11.13"></rect> </g> </g></svg>',
                      }),
                      El({
                        element: 'h3',
                        className:
                          'text-center font-bold text-neutral-200 p-2 bg-blue-600 rounded-full mt-1',
                        child: `${i.current.temp_c}°C`,
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    className:
                      'flex flex-col items-center justify-center w-[33%]',
                    child: [
                      El({
                        element: 'img',
                        className: 'h-full max-w-[120px] object-fit',
                        src: `${i.current.condition.icon}`,
                      }),
                      El({
                        element: 'h2',
                        className:
                          'border-b border-t text-2xl font-semibold text-center',
                        child: `${i.current.condition.text}`,
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    className:
                      'flex flex-col w-[33%] justify-center items-center',
                    child: [
                      El({
                        element: 'svg',
                        className: 'w-14',
                        innerHTML:
                          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="polewinddirection" viewBox="0 0 200.3854 223.3099" enable-background="new 0 0 200.3854 223.3099" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon fill="#D0E8FF" points="88,48.1029 52,54.6498 52,79.9701 88,86.517 "></polygon> <polygon fill="#5CB0FF" points="44,56.1029 8,62.6498 8,71.9701 44,78.517 "></polygon> <polygon fill="#FFFFFF" points="96,49.3763 96,85.2435 116,76.6732 116,57.9467 "></polygon> <path fill="#1C71DA" d="M124,215.3099v-136v-24V16.4227c2.3796,1.3882,4,3.9402,4,6.8872v4h8v-4c0-8.8242-7.1777-16-16-16 s-16,7.1758-16,16v4h8v-4c0-2.947,1.6204-5.499,4-6.8872v32.8215l-22.4238-9.6101c-0.1318-0.0569-0.272-0.0762-0.4077-0.1179 c-0.1003-0.0315-0.1917-0.062-0.2937-0.0852c-0.4902-0.1106-0.9871-0.127-1.4797-0.0508 c-0.0366,0.0061-0.0732-0.0112-0.1099-0.0039l-44,8l-44,8C1.3828,55.7201,0,57.3763,0,59.3099v16 c0,1.9336,1.3828,3.5898,3.2852,3.9336l44,8l44,8c0.2383,0.0469,0.4766,0.0664,0.7148,0.0664c0.5083,0,1.002-0.1155,1.4709-0.3025 c0.0342-0.0137,0.0715-0.0071,0.1052-0.0217L116,85.3756v129.9343H28v8h152v-8H124z M8,62.6498l36-6.5469V78.517L8,71.9701V62.6498 z M52,54.6498l36-6.5469V86.517l-36-6.5469V54.6498z M96,85.2435V49.3763l20,8.5703v18.7266L96,85.2435z"></path> </g> <path fill="#FF5D5D" d="M28.3854,22.1416c-1.0239,0-2.0474-0.3906-2.8286-1.1719c-1.562-1.5615-1.562-4.0947,0-5.6562 L39.6989,1.1719c1.5635-1.5615,4.0957-1.5615,5.6572,0c1.562,1.5615,1.562,4.0947,0,5.6562L31.214,20.9697 C30.4328,21.751,29.4088,22.1416,28.3854,22.1416z"></path> <path fill="#FF5D5D" d="M42.5275,22.1416c-1.0239,0-2.0474-0.3906-2.8286-1.1719L25.5568,6.8281 c-1.562-1.5615-1.562-4.0947,0-5.6562c1.5625-1.5625,4.0947-1.5625,5.6572,0l14.1421,14.1416c1.562,1.5615,1.562,4.0947,0,5.6562 C44.5749,21.751,43.5514,22.1416,42.5275,22.1416z"></path> <path fill="#00D40B" d="M186.3854,130.1416c-7.7197,0-14-6.2803-14-14s6.2803-14,14-14s14,6.2803,14,14 S194.1051,130.1416,186.3854,130.1416z M186.3854,110.1416c-3.3086,0-6,2.6914-6,6s2.6914,6,6,6s6-2.6914,6-6 S189.694,110.1416,186.3854,110.1416z"></path> <path fill="#FFC504" d="M43.6989,140.7695L43.6989,140.7695c-1.061,0-2.0786-0.4219-2.8286-1.1719l-11.3135-11.3145 c-1.562-1.5615-1.562-4.0947,0-5.6562l11.3135-11.3135c1.5625-1.5625,4.0952-1.5625,5.6567,0l11.314,11.3135 c0.7505,0.75,1.1719,1.7676,1.1719,2.8281s-0.4214,2.0781-1.1714,2.8281l-11.314,11.3145 C45.7775,140.3477,44.7599,140.7695,43.6989,140.7695z M38.0421,125.4551l5.6567,5.6572l5.6572-5.6572l-5.6572-5.6562 L38.0421,125.4551z"></path> </g></svg>',
                      }),
                      El({
                        element: 'h3',
                        className:
                          'text-center font-bold text-white p-2 bg-blue-600 rounded-full mt-1',
                        child: `${i.current.wind_mph}(mph)`,
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'pt-3 px-3 flex flex-col',
                child: [
                  El({
                    element: 'h3',
                    className: 'text-neutral-200 font-bold mx-auto pb-2',
                    child: 'Today teamprature in different hours',
                  }),
                  El({
                    element: 'div',
                    className:
                      'flex justify-between text-neutral-200 font-bold py-2 border-y',
                    child: [
                      El({
                        element: 'h4',
                        className: '',
                        child: `${i.forecast.forecastday[0].hour[0].time}`,
                      }),
                      El({
                        element: 'h4',
                        className: '',
                        child: `${i.forecast.forecastday[0].hour[0].temp_c}°C`,
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    className:
                      'flex justify-between text-neutral-200 font-bold py-2 border-b',
                    child: [
                      El({
                        element: 'h4',
                        className: '',
                        child: `${i.forecast.forecastday[0].hour[6].time}`,
                      }),
                      El({
                        element: 'h4',
                        className: '',
                        child: `${i.forecast.forecastday[0].hour[6].temp_c}°C`,
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    className:
                      'flex justify-between text-neutral-200 font-bold py-2 border-b',
                    child: [
                      El({
                        element: 'h4',
                        className: '',
                        child: `${i.forecast.forecastday[0].hour[12].time}`,
                      }),
                      El({
                        element: 'h4',
                        className: '',
                        child: `${i.forecast.forecastday[0].hour[12].temp_c}°C`,
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    className:
                      'flex justify-between text-neutral-200 font-bold py-2 border-b',
                    child: [
                      El({
                        element: 'h4',
                        className: '',
                        child: `${i.forecast.forecastday[0].hour[18].time}`,
                      }),
                      El({
                        element: 'h4',
                        className: '',
                        child: `${i.forecast.forecastday[0].hour[18].temp_c}°C`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className:
          'w-full pt-[2.5rem] flex flex-col gap-[2.5rem] sm:flex-row  sm:flex-wrap h-full ',
        child: [
          El({
            element: 'div',
            className:
              'flex flex-col shadow shadow-t p-4 relative h-[190px] gap-[1.25rem] items-center rounded-lg grow border',
            child: [
              El({
                element: 'h5',
                className:
                  'font-bold p-2 bg-neutral-300 rounded-bl-xl rounded-tr-xl absolute top-[-12px]',
                child: `${i.forecast.forecastday[1].date}`,
              }),
              El({
                element: 'img',
                className: 'w-20 pt-[20px]',
                src: `${i.forecast.forecastday[1].day.condition.icon}`,
              }),
              El({
                element: 'div',
                className: 'flex gap-2',
                child: [
                  El({
                    element: 'div',
                    className: 'flex gap-1',
                    child: [
                      El({
                        element: 'svg',
                        className: 'w-5',
                        innerHTML:
                          '<svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#d91212;" points="256,0 0,512 256,344.276 512,512 "></polygon> </g> </g></svg>',
                      }),
                      El({
                        element: 'h6',
                        className: 'font-bold text-[#d91212]',
                        child: `${i.forecast.forecastday[1].day.maxtemp_c}°C`,
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    className: 'flex gap-1',
                    child: [
                      El({
                        element: 'h6',
                        className: 'font-bold text-[#1243d9]',
                        child: `${i.forecast.forecastday[1].day.mintemp_c}°C`,
                      }),
                      El({
                        element: 'svg',
                        className: 'w-5',
                        innerHTML:
                          '<svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000" transform="matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#1243d9;" points="256,0 0,512 256,344.276 512,512 "></polygon> </g> </g></svg>',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'flex flex-col shadow shadow-t  p-4 relative h-[190px] items-center rounded-lg gap-[1.25rem] grow border',
            child: [
              El({
                element: 'h5',
                className:
                  'font-bold p-2 bg-neutral-300 rounded-bl-xl rounded-tr-xl absolute top-[-12px]',
                child: `${i.forecast.forecastday[2].date}`,
              }),
              El({
                element: 'img',
                className: 'w-20 pt-[20px]',
                src: `${i.forecast.forecastday[2].day.condition.icon}`,
              }),
              El({
                element: 'div',
                className: 'flex gap-2',
                child: [
                  El({
                    element: 'div',
                    className: 'flex gap-1',
                    child: [
                      El({
                        element: 'svg',
                        className: 'w-5',
                        innerHTML:
                          '<svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#d91212;" points="256,0 0,512 256,344.276 512,512 "></polygon> </g> </g></svg>',
                      }),
                      El({
                        element: 'h6',
                        className: 'font-bold text-[#d91212]',
                        child: `${i.forecast.forecastday[2].day.maxtemp_c}°C`,
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    className: 'flex gap-1',
                    child: [
                      El({
                        element: 'h6',
                        className: 'font-bold text-[#1243d9]',
                        child: `${i.forecast.forecastday[2].day.mintemp_c}°C`,
                      }),
                      El({
                        element: 'svg',
                        className: 'w-5',
                        innerHTML:
                          '<svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000" transform="matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#1243d9;" points="256,0 0,512 256,344.276 512,512 "></polygon> </g> </g></svg>',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'flex flex-col shadow shadow-t p-4 relative h-[190px] items-center rounded-lg gap-[1.25rem] grow border',
            child: [
              El({
                element: 'h5',
                className:
                  'font-bold p-2 bg-neutral-300 rounded-bl-xl rounded-tr-xl absolute top-[-12px]',
                child: `${i.forecast.forecastday[3].date}`,
              }),
              El({
                element: 'img',
                className: 'w-20 pt-[20px]',
                src: `${i.forecast.forecastday[3].day.condition.icon}`,
              }),
              El({
                element: 'div',
                className: 'flex gap-2',
                child: [
                  El({
                    element: 'div',
                    className: 'flex gap-1',
                    child: [
                      El({
                        element: 'svg',
                        className: 'w-5',
                        innerHTML:
                          '<svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#d91212;" points="256,0 0,512 256,344.276 512,512 "></polygon> </g> </g></svg>',
                      }),
                      El({
                        element: 'h6',
                        className: 'font-bold text-[#d91212]',
                        child: `${i.forecast.forecastday[3].day.maxtemp_c}°C`,
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    className: 'flex gap-1',
                    child: [
                      El({
                        element: 'h6',
                        className: 'font-bold text-[#1243d9]',
                        child: `${i.forecast.forecastday[3].day.mintemp_c}°C`,
                      }),
                      El({
                        element: 'svg',
                        className: 'w-5',
                        innerHTML:
                          '<svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000" transform="matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#1243d9;" points="256,0 0,512 256,344.276 512,512 "></polygon> </g> </g></svg>',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'flex flex-col shadow shadow-t  p-4 relative h-[190px] items-center rounded-lg  gap-[1.25rem] grow border',
            child: [
              El({
                element: 'h5',
                className:
                  'font-bold p-2 bg-neutral-300 rounded-bl-xl rounded-tr-xl absolute top-[-12px]',
                child: `${i.forecast.forecastday[4].date}`,
              }),
              El({
                element: 'img',
                className: 'w-20 pt-[20px]',
                src: `${i.forecast.forecastday[4].day.condition.icon}`,
              }),
              El({
                element: 'div',
                className: 'flex gap-2',
                child: [
                  El({
                    element: 'div',
                    className: 'flex gap-1',
                    child: [
                      El({
                        element: 'svg',
                        className: 'w-5',
                        innerHTML:
                          '<svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#d91212;" points="256,0 0,512 256,344.276 512,512 "></polygon> </g> </g></svg>',
                      }),
                      El({
                        element: 'h6',
                        className: 'font-bold text-[#d91212]',
                        child: `${i.forecast.forecastday[4].day.maxtemp_c}°C`,
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    className: 'flex gap-1',
                    child: [
                      El({
                        element: 'h6',
                        className: 'font-bold text-[#1243d9]',
                        child: `${i.forecast.forecastday[4].day.mintemp_c}°C`,
                      }),
                      El({
                        element: 'svg',
                        className: 'w-5',
                        innerHTML:
                          '<svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000" transform="matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#1243d9;" points="256,0 0,512 256,344.276 512,512 "></polygon> </g> </g></svg>',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'flex flex-col shadow shadow-t  p-4 relative h-[190px] items-center rounded-lg  gap-[1.25rem] border grow',
            child: [
              El({
                element: 'h5',
                className:
                  'font-bold p-2 bg-neutral-300 rounded-bl-xl rounded-tr-xl absolute top-[-12px]',
                child: `${i.forecast.forecastday[5].date}`,
              }),
              El({
                element: 'img',
                className: 'w-20 pt-[20px]',
                src: `${i.forecast.forecastday[5].day.condition.icon}`,
              }),
              El({
                element: 'div',
                className: 'flex gap-2',
                child: [
                  El({
                    element: 'div',
                    className: 'flex gap-1',
                    child: [
                      El({
                        element: 'svg',
                        className: 'w-5',
                        innerHTML:
                          '<svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#d91212;" points="256,0 0,512 256,344.276 512,512 "></polygon> </g> </g></svg>',
                      }),
                      El({
                        element: 'h6',
                        className: 'font-bold text-[#d91212]',
                        child: `${i.forecast.forecastday[5].day.maxtemp_c}°C`,
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    className: 'flex gap-1',
                    child: [
                      El({
                        element: 'h6',
                        className: 'font-bold text-[#1243d9]',
                        child: `${i.forecast.forecastday[5].day.mintemp_c}°C`,
                      }),
                      El({
                        element: 'svg',
                        className: 'w-5',
                        innerHTML:
                          '<svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000" transform="matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#1243d9;" points="256,0 0,512 256,344.276 512,512 "></polygon> </g> </g></svg>',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'flex flex-col  shadow shadow-t p-4 relative h-[190px] items-center rounded-lg border gap-[1.25rem] grow',
            child: [
              El({
                element: 'h5',
                className:
                  'font-bold p-2 bg-neutral-300 rounded-bl-xl rounded-tr-xl absolute top-[-12px]',
                child: `${i.forecast.forecastday[6].date}`,
              }),
              El({
                element: 'img',
                className: 'w-20 pt-[20px]',
                src: `${i.forecast.forecastday[6].day.condition.icon}`,
              }),
              El({
                element: 'div',
                className: 'flex gap-2',
                child: [
                  El({
                    element: 'div',
                    className: 'flex gap-1',
                    child: [
                      El({
                        element: 'svg',
                        className: 'w-5',
                        innerHTML:
                          '<svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#d91212;" points="256,0 0,512 256,344.276 512,512 "></polygon> </g> </g></svg>',
                      }),
                      El({
                        element: 'h6',
                        className: 'font-bold text-[#d91212]',
                        child: `${i.forecast.forecastday[6].day.maxtemp_c}°C`,
                      }),
                    ],
                  }),
                  El({
                    element: 'div',
                    className: 'flex gap-1',
                    child: [
                      El({
                        element: 'h6',
                        className: 'font-bold text-[#1243d9]',
                        child: `${i.forecast.forecastday[6].day.mintemp_c}°C`,
                      }),
                      El({
                        element: 'svg',
                        className: 'w-5',
                        innerHTML:
                          '<svg height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000" transform="matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon style="fill:#1243d9;" points="256,0 0,512 256,344.276 512,512 "></polygon> </g> </g></svg>',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });

  mainPage.append(result);
};

export async function getweather() {
  let city;
  const inputValue = document.getElementById('inputValue');
  if (!inputValue) {
    city = 'tehran';
  } else if (inputValue) {
    city = inputValue.value;
  }
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=31c66d443c3d4373860142932232203&q=${city}&days=7&aqi=yes&alerts=no`
  );
  return await response.json();
}
