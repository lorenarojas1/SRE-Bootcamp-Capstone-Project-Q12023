import { index } from './index';
import { login } from './login';
import { health } from './health';
import { cidrToMask } from './cidrToMask';
import { maskToCidr } from './maskToCidr';

export const init = (app) => {
  app.get('/login', (_, res) => {
    res.render('login', { alert: false });
  });
  app.get('/', index);
  app.post('/login', login);
  app.get('/health', health);
  app.get('/cidr-to-mask', cidrToMask);
  app.get('/mask-to-cidr', maskToCidr);
};


