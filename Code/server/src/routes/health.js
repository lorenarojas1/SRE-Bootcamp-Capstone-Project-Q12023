  import { protectFunction } from '../services/protected';

export const health = async (req, res, next) => {
    try{
        let {jwt} = req.cookies;
        let response = {
          data: await protectFunction(jwt)
        };
        if(response.data === null){
            res.status(401).render('unauthenticated');
            next();
            console.log('Unauthenticated')
        }else{
            res.status(200).render('health');
            next();
            console.log('Authenticated')
        }
    }catch(err){
        return new Error(err)
    }
  }