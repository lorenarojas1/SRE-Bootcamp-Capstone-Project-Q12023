import { loginFunction } from '../services/login';
import ALERT_MESSAGE from '../constants/alerts';

export const login = async (req, res, next) => {
  try{
    const {username, password} = req.body;

    if (!username || !password) {
      res.status(401).render('login', ALERT_MESSAGE.missingInformation);
    }else{
      let response = {
        data: await loginFunction(username, password),
      };
      console.log(response)
      if(response.data === null || response.data === undefined){
        res.status(404).render('login', ALERT_MESSAGE.loginIncorrect);
      }else{
        res.status(200).render('login', ALERT_MESSAGE.loginSuccesful);
        next();
      }
      }
  } catch(err) {
    res.status(err).render('login', ALERT_MESSAGE.loginIncorrect);
  }
  };