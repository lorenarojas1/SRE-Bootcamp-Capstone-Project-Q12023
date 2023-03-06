import * as controllerMask from './controllerMaks';
import { login } from './login';
import { health } from './health';

export const init = (app) => {
  app.post('/login', login);
  app.get('/_health', health);
  app.get('/cidr-to-mask', controllerMask.cidrToMask);
  app.get('/mask-to-cidr', controllerMask.maskToCidr);
};


