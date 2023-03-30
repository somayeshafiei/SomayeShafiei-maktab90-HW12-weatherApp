import { getJson } from '../../../../library/Fetch/Jsonserver';
import { Route } from '../../../../routes';
import { register } from '../../register';
import Cookies from 'js-cookie';
export async function findUser(e) {
  e.preventDefault();
  const targetValue = e.target;
  // console.log(targetValue);
  const [email, password, remember] = [...targetValue].map((el) => el.value);
  // console.log(remember);
  const users = await getJson('http://localhost:3005', 'users');
  // console.log(users);
  const arr = [...users];
  arr.find((item) => {
    if (item.email === email && item.password === password) {
      // console.log(item);
      Cookies.set('user', `${item.email}`, { expires: 1, path: '/' });
      history.pushState(null, null, '/home');
      return Route();
    } else {
      console.log('please register first');
      return register(form);
    }
  });
}
