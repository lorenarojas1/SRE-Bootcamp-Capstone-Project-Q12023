export const ipv4ValidationFunction = (value) => {
  var ipv4 = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  if(ipv4.test(value)){
    return true;
  }else{
    console.log('You have entered an invalid IP address!')
    return false;
  }
};

export const cidrToMaskFunction = (value) => {
  if(isNaN(value)) {
    return 'No value provided';
  } else {
    let mask = [], i, n;
    for(i=0; i<4; i++) {
      n = Math.min(value, 8);
      mask.push(256 - Math.pow(2, 8-n));
      value -= n;
    }
    return mask.join('.');
  }
};

export const maskToCidrFunction =  (value) => {
  let maskToCidr = value.split('.').reduce((c, o) => c - Math.log2(256 - +o), 32)
  return maskToCidr;
};



