import { FormPage } from '../layout/form';
// import { mainPage } from '../layout/mainPage';
import { El } from '../library/El';
import { Login } from '../layout/form/login';
import { register } from '../layout/form/register';
import { navbar } from '../layout/navbar';
import { searchbar } from '../layout/searchbar';
import { renderfirst } from '../layout/renderFirst';
import Cookies from 'js-cookie';

const isPrivate = (routesEl, child) =>
  Cookies.get('user') && routesEl.appendChild(child());
// : routesEl.appendChild(FOFScreen());

export function Route() {
  const routes =
    document.getElementById('routes') ||
    El({
      element: 'div',
    });
  routes.innerHTML = '';
  switch (location.pathname) {
    case '/login':
      setTimeout(() => {
        const form = document.getElementById('form');
        Login(form);
      }, 100);
      return routes.appendChild(FormPage());
    case '/register':
      setTimeout(() => {
        const form = document.getElementById('form');
        register(form);
      }, 100);
      return routes.appendChild(FormPage());
    case '/home':
      routes.appendChild(navbar());
      routes.appendChild(searchbar());
      renderfirst();
      return isPrivate(routes, routes.childNodes);
    // (, , );
    default:
      break;
  }
}
