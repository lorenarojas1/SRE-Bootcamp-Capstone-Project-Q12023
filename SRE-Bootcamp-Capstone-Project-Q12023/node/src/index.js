import { config } from './config';
import  app  from './server';

app.listen(config.APP_PORT, function() {
  console.log('listening at',config.APP_PORT);
});
