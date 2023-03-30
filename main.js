import { App } from './src/app';
import { Route } from './src/routes';
const app = document.getElementById('app');
import Cookies from 'js-cookie';
Cookies.get('user')
  ? history.pushState(null, null, '/home')
  : history.pushState(null, null, '/login');
app.appendChild(App());
Route();
window.addEventListener('popstate', Route);
