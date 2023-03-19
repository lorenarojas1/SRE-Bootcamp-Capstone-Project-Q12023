import express from 'express';
import cookieParser from 'cookie-parser';
import * as routes from './routes/routes';
import bodyParser from 'body-parser';

const app = express();
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes.init(app);

export default app;