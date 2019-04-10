export const judgeClient = function() {
  let u = navigator.userAgent;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // 判断是否是 android终端
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // 判断是否是 ios终端
  if(isAndroid === true) {
    return 'Android';
  } else if(isIOS === true) {
    return 'IOS';
  } else {
    return 'PC';
  }
};
