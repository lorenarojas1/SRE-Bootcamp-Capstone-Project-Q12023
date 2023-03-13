import * as controllerMask from  '../services/controllerMask';
import { protectFunction } from '../services/protected'

export const cidrToMask = async (req, res, next) => {
  let value = req.query.value ? req.query.value : false;
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
      if(isNaN(value)) {
        res.status(404).send('Not Found');
        next();
        console.log('No value provided')
      } else {
        let response = {
          function: 'cidrToMask',
          input: value,
          output: controllerMask.cidrToMaskFunction(value),
        };
        res.status(200).send(response);
        next();
        console.log('Authenticated')
      }
    }
  } catch(err) {
      return new Error(err);
  }
};
