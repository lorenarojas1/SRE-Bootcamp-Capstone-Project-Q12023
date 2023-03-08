import { protectFunction } from '../services/protected';

export const protectedRender = async (req, res, next) => {
    try{
        let {jwt} = req.cookies;
        let response = {
          data: await protectFunction(jwt)
        };
				console.log(response)
        if(response.data === null){
            res.status(403).render('forbidden');
        }else{
            res.status(200).render('protected')
            next();
        }
    }catch{
        res.status(403).render('forbidden');
    }
  }