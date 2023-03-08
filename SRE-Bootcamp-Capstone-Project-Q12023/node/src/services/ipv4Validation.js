export const ipv4ValidationFunction = (value) => {
    var ipv4 = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if(ipv4.test(value)){
      return true;
    }else{
      console.log('You have entered an invalid IP address!')
      return false;
    }
  };