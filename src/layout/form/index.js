import { El } from '../../library/El';
import { Route } from '../../routes';
// import { FormMaker } from '../components/formmaker';
export const FormPage = () => {
  return El({
    element: 'section',
    className: 'w-screen h-screen flex justify-center items-center ',
    child: [
      // El({
      //   element: 'div',
      //   innerHTML:
      //     'https://gifdb.com/gif/animated-sunny-day-sun-shining-blue-sky-pmmi9f63tshlbmxu.html',
      //   className: 'w-[200px]',
      // }),
      El({
        element: 'div',
        className: 'bg-white bg-blur bg-blue-700 bg-opacity-30  rounded-xl',
        child: El({
          element: 'div',
          className:
            'flex flex-col gap-10 items-center justify-center p-3 w-72 sm:w-[400px]',
          child: [
            El({
              element: 'div',
              className: 'flex gap-5 text-[#354458] font-Lobster',
              child: [
                El({
                  element: 'button',
                  className: 'hover:text-black hover:text-xl  ',
                  child: 'Register',
                  eventListener: [
                    {
                      event: 'click',
                      callback: changeForm,
                    },
                  ],
                }),
                El({
                  element: 'span',
                  child: '/',
                }),
                El({
                  element: 'button',
                  className: 'hover:text-black hover:text-xl',
                  child: 'Login',
                  eventListener: [
                    {
                      event: 'click',
                      callback: changeForm,
                    },
                  ],
                }),
              ],
            }),
            El({
              element: 'div',
              className: 'w-full',
              id: 'form',
            }),
          ],
        }),
      }),
    ],
  });
  function changeForm(event) {
    const form = document.getElementById('form');
    const targetText = event.target.innerText;
    targetText === 'Register'
      ? history.pushState(null, null, '/register')
      : targetText === 'Login'
      ? history.pushState(null, null, '/login')
      : null;
    Route();
  }
};
