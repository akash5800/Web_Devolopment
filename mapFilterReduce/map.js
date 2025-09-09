// without using map method

/*let arr=[1,2,-3,4,5];
console.log(arr);
let brr=[];
for(const ele of arr){
    brr.push(ele*2);
    // brr.push(Math.abs(ele));
}
console.log(brr);
*/

//++++ using map method
let arr=[1,2,-3,4,5];
console.log(arr);
let brr=arr.map(function(ele){
    // or by arrow fun
    // let brr=arr.map((ele)=>{})
    return ele*ele;
});
console.log(brr);
