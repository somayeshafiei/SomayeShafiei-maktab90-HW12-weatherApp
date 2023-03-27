import { El } from '../../library/El';
import { FormMaker } from '../components/formmaker';
export const loginForm = () => {
  return El({
    element: 'section',
    // style: "background-image: url('../../assets/images/test.jpg')",
    className:
      'w-[100%] h-[100%] absolute top-0 left-0 flex justify-center items-center bg-[url("https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=381093378662385") hidden ',
    child: El({
      element: 'div',
      className:
        'relative  w-11/12 transition  mx-auto rounded border flex flex-col rounded-xl  shadow-xl ',
      child: [
        El({
          element: 'div',
          child: [
            El({
              element: 'div',
              className: 'w- full h-52  rounded-t-xl ',
              child: El({
                element: 'img',
                src: 'https://cdn.dribbble.com/userupload/3074843/file/original-aaae5bd5d3ef069caa29168e6220955c.png?compress=1&resize=1200x810',
                className: 'h-full w-full  rounded-t-xl ',
              }),
            }),
          ],
          className: 'w-full  rounded-t-xl ',
        }),
        El({
          element: 'div',
          className: 'w-full text-center ',
          child: [
            El({
              element: 'div',
              className: 'flex  ',
              child: [
                El({
                  element: 'button',
                  className:
                    'w-[50%] h-full bg-gradient-to-r from-blue-500 to-green-500 p-2 rounded-bl-xl ',
                  child: 'register',
                }),
                El({
                  element: 'button',
                  className: 'w-[50%] h-full p-2',
                  child: 'sign in',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
