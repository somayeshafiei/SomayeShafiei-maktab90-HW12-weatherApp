import { El } from '../../../library/El';

export const FormMaker = ({ child, ...rest }) => {
  return El({
    element: 'form',
    child,
    onsubmit: (e) => submitHandler(e),
    ...rest,
  });
};

