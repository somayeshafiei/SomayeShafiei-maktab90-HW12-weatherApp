import { El } from '../../library/El';
import { cardbox, getweather } from '../cardbox';

import { navbar } from '../navbar';
import { searchbar } from '../searchbar';

export const mainPage = () => {
  return El({
    element: 'div',
    id: 'mainPage',
    className:
      'min-h-screen w-full bg-[url("https://avante.biz/wp-content/uploads/Sky-Wallpaper/Sky-Wallpaper-010.jpg")] bg-repeat',
    child: [navbar(), searchbar(), renderfirst()],
  });
};

function renderfirst() {
  const data = getweather();
  data.then((response) => {
    cardbox(response);
  });
}
