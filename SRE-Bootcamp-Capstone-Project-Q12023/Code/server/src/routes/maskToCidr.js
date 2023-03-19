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
      let { value } = req.query;
      let subnetMask = controllerMask.maskToCidrFunction(value);
      if (subnetMask === 'No value provided') {
        res.status(404).send('Not Found');
      } else {
        let response = {
          function: 'maskToCidr',
          input: value,
          output: subnetMask,
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

