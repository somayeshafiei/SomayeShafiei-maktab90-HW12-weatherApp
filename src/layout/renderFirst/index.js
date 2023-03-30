import { cardbox, getweather } from '../cardbox';
export function renderfirst() {
  getweather().then((response) => {
    return cardbox(response);
  });
}
