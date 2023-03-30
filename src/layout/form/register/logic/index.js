import { Route } from '../../../../routes';
import { postData } from '../../../../library/Fetch/Jsonserver';
import { Login } from '../../login';
export function NewUser(e) {
  e.preventDefault();
  const target = e.currentTarget;
  const input = target.querySelectorAll('[data-value-form]');
  const [username, email, password] = [...input].map((el) => el.value);
  const obj = {
    ID: Date.now(),
    user: username,
    email: email,
    password: password,
  };
  postData('http://localhost:3005', 'users', obj);
  Login(form);
}
