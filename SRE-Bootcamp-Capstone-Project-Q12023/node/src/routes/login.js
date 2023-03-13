import { loginFunction } from '../services/login';
import ALERT_MESSAGE from '../constants/alerts';

export const login = async (req, res, next) => {
  try{
    const {username, password} = req.body;
    if (!username || !password) {
      res.status(401).render('login', ALERT_MESSAGE.missingInformation);
      next();
      console.log('Incomplete information');
    }else{
      let result =  await loginFunction(username, password);
      const cookiesOptions = {
        expires: new Date(
          Date.now() +  60 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
      };
      if(result === null || result === undefined){
        res.status(404).render('login', ALERT_MESSAGE.loginIncorrect);
        next();
        console.log('User or/and password incorrect');
      }else{
        res.cookie('jwt', result, cookiesOptions);
        res.status(200).render('login', ALERT_MESSAGE.loginSuccesful);
        next();
        let response = {
          data: 'jwtoken_with_the_role'
        }
        console.log(response);
      }
    }
  } catch(err) {
    return new Error(err)
  }
};