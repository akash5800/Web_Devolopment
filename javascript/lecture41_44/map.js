                                  // problem 1
let arr=[10,20,30];
/*arr.map((number,index) => {
    console.log(number);
    console.log(index);
})*/
                                  //problem 2
/*let ansarray=arr.map((number)=>{
    return number*number;
})
console.log(ansarray);*/
                                   //problem3
let ar=[10,20,30,11,21,44,51];
let evenarray=ar.filter((number)=>{
//     if(number%2===0){
// return true;
//     }
//     else{
//         return false;
//     } 
return number%2==0;
});
console.log(evenarray);