// (IIFE) immediately invoked function expression
// **I.Qn @@ iska use global scope ke variables ko hatane ke liye karte hai
//  kabhi kabhi unse code me problem aati hai
(function chai(){  //ye named iife hai @@
    console.log(`DB CONNECTED`);
})();   // isske baad aur iifee likhne ahi to semicolon lagana padega
       // or
( (name) =>{   //unnnamed iifee hai     @@
    console.log(`dbconnected two ${name}`);
})("akash"); 