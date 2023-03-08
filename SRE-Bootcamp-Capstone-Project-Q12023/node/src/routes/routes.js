import * as controllerMask from './controllerMaks';
import { login } from './login';
import { health } from './health';

export const init = (app) => {
  app.get('/login', (_, res) => {
    res.render('login', { alert: false });
  });
  app.post('/login', login);
  app.get('/health', health);
  app.get('/cidr-to-mask', controllerMask.cidrToMask);
  app.get('/mask-to-cidr', controllerMask.maskToCidr);
};


