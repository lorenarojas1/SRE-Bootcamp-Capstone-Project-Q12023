import * as controllerMask from  '../services/controllerMask';
import { protectFunction } from '../services/protected'

export const maskToCidr = async (req, res, next) => {
  try{
    let { jwt } = req.cookies;
    let response = {
      data: await protectFunction(jwt)
    };
    if(response.data === null) {
      res.status(401).render('unauthenticated');
      next();
      console.log('Unauthenticated')
    } else {
      let value = req.query.value ? req.query.value : false;
      let validation =  controllerMask.ipv4ValidationFunction(value);
      if (!validation) {
        res.status(404).send('Not Found');
        console.log('No value provided')
      } else {
        let response = {
          function: 'maskToCidr',
          input: value,
          output: controllerMask.maskToCidrFunction(value),
        };
        res.status(200).send(response);
        next();
        console.log('Authenticated')
      }
      }
  } catch(err){
    return new Error(err);
  }
};

