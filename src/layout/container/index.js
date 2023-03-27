import { El } from '../../library/El';
export const Container = (child) => {
  return El({
    element: 'div',
    className: ' w-full h-full',
    child,
  });
};
