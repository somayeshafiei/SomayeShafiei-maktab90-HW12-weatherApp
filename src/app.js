import { Container } from './layout/container';
import { loginForm } from './layout/login form';
import { mainPage } from './layout/mainPage';

import { El } from './library/El';

export const App = () => {
  const app = El({
    element: 'div',

    child: [loginForm(), mainPage()],
  });
  return Container(app);
};
