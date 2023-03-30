import { Container } from './layout/container';
// import { loginForm } from './layout/form';
// import { mainPage } from './layout/mainPage';

import { El } from './library/El';
import { Route } from './routes';

export const App = () => {
  const app = El({
    element: 'div',
    className:
      'min-h-screen w-full  bg-[url("https://avante.biz/wp-content/uploads/Sky-Wallpaper/Sky-Wallpaper-010.jpg")] ',
    id: 'routes',
  });
  return Container(app);
};
