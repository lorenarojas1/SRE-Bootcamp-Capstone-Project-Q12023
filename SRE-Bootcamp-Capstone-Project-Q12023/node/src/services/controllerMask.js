export const cidrToMaskFunction = (value) => {
  var mask = [], i, n;
  for(i=0; i<4; i++) {
    n = Math.min(value, 8);
    mask.push(256 - Math.pow(2, 8-n));
    value -= n;
  }
  return mask.join('.');
};

export const maskToCidrFunction = (value) => {
  value.split('.').reduce((c, o) => c - Math.log2(256 - +o), 32)
  return value;
};

