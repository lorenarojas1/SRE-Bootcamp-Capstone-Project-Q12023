import * as controllerMask from  '../services/controllerMask';

export const cidrToMask = (req, res, next) => {
  let value = req.query.value ? req.query.value : false;
  if (!value) {
    res.send(422, 'No value provided');
  } else {
    let response = {
      function: 'cidrToMask',
      input: value,
      output: controllerMask.cidrToMaskFunction(value),
    };
    res.send(response);
    next();
  }
};

export const maskToCidr = (req, res, next) => {
  let value = req.query.value ? req.query.value : false;
  if (!value) {
    res.status(422).send('No value provided');
  } else {
    let response = {
      function: 'maskToCidr',
      input: value,
      output: controllerMask.maskToCidrFunction(value),
    };
    res.send(response);
    next();
  }
};

