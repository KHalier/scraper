//________________________oo0oo_
//______________________o8888888o
//______________________88" . "88
//______________________(| -_- |)
//______________________0\  =  /0
//_______________________/`---'\___
//__________________.' \\|     |// '.
//_________________/ \\|||  :  |||// \
//________________/ _||||| -:- |||||- \
//_______________|   | \\\  -  /// |   |
//_______________| \_|  ''\---/''  |_/ |
//_______________\  .-\__  '-'  ___/-. /
//________________'. .'  /--.--\  `. .'___
//__________."" '<  `.___\_<|>_/___.' >' "".
//_________| | :  `- \`.;`\ _ /`;.`/ - ` : | |
//_________\  \ `_.   \_ __\ /__ _/   .-` /  /
//_____=====`-.____`.___ \_____/___.-`___.-'=====
//_______________________`=---='
//_____~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });