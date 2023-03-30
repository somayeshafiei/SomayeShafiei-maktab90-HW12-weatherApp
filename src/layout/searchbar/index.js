import { debounce } from 'lodash/function.js';
import { El } from '../../library/El';
import { cardbox, getweather } from '../cardbox';

export const searchbar = () => {
  return El({
    element: 'div',
    className: 'w-full py-4 px-10 md:px-32 z-30',
    child: [
      El({
        element: 'div',
        className: 'relative ',
        child: [
          El({
            element: 'input',
            id: 'inputValue',
            type: 'text',
            className:
              'block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg rounded-lg border-1 border-blue-primary shadow appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer',
            placeholder: ' ',
            name: 'name',

            onkeyup: (event) => {
              debounce(render(event), 2000);
              event.target.value = '';
            },
            onclick: (event) => {
              console.log(event.target);
            },
          }),
          El({
            element: 'label',
            className:
              'absolute text-sm text-gray-800 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:bg-white peer-focus:p-1 peer-focus:rouded-full',
            child: 'search...',
          }),
        ],
      }),
      El({
        element: 'div',
        id: 'list-items',
        className: 'bg-red-400 rounded-md p-32 z-20',
        child: 'test',
      }),
    ],
  });
};

export function render(event) {
  const data = getweather();
  data.then((response) => {
    cardbox(response);
  });
  console.log(data);
  // if (event.keyCode === 13) {
  //   const data = getweather();
  //   data.then((response) => {
  //     cardbox(response);
  //   });
  //   console.log(data);
  // }
}
