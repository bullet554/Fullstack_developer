const { calculateResultSum } = require('./calculateResultSum');
require('colors');



const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);
console.log(total >  50 ? `${total}`.red : `${total}`.green);

const total1 = calculateResultSum([12.1, 32.2], 0.9);
console.log(total1 >  50 ? `${total1}`.red : `${total1}`.green);