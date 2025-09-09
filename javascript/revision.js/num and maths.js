const score=400
console.log(score);
 
const balance=new Number(100);// number update ho gaya
console.log(balance);

console.log(balance.toString().length); //string ki length

console.log(balance.toFixed(2)); // point lagakar 2 zero lagao

const otherNumber=123.556;
console.log(otherNumber.toPrecision(3)); //round off value

const hundred=1000000;
console.log(hundred.toLocaleString()); //normal us ke hsaab se comma lagega

console.log(hundred.toLocaleString('en-in')); //indian ke hisaab se comma lagega

//+++++++++ Maths start  ++++++++++++++
console.log(Math.abs(-4))     // absolute value
console.log(Math.round(4.5))  // round off
console.log(Math.ceil(4.1))   // large value than 4.1
console.log(Math.floor(4.9)) // smaall vlaue than 4.9
console.log(Math.min(8,5,6,7));
console.log(Math.max(4,3,6,18));

console.log(Math.random());     //random value le lega 0to 1
console.log(Math.random()*10);   // value ko 10 se multiply
console.log((Math.random()*10)+1); // decimal se pahle min value 1 hogi
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20; 
console.log(Math.floor(Math.random()*(max-min+1))+min)
// dono values ki beach ki value lega aur plus one se 0 avoid hoga