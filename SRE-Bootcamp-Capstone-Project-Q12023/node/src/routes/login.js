import { loginFunction } from '../services/login';
import ALERT_MESSAGE from '../constants/alerts';

export const login = async (req, res, next) => {
  try{
    const {username, password} = req.body;
    
    const cookiesOptions = {
      expires: new Date(
        Date.now() + 90 * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    if (!username || !password) {
      res.status(401).render('login', ALERT_MESSAGE.missingInformation);
    }else{
      let response = {
        data: await loginFunction(username, password)
      }

        const cookiesOptions = {
          expires: new Date(
            Date.now() +  60 * 24 * 60 * 60 * 1000
          ),
          httpOnly: true,
        };
        if(response.data === null || response.data === undefined){
          res.status(404).render('login', ALERT_MESSAGE.loginIncorrect);
        }else{
          res.cookie('jwt', response.data, cookiesOptions);
          res.status(200).render('login', ALERT_MESSAGE.loginSuccesful);
          next();
        }


      }
  } catch(err) {
    res.status(err).render('login', ALERT_MESSAGE.loginIncorrect);
  }

  };