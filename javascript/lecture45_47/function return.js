function solve(number){
    return function(number){
        return number*number;
    }
}
let ans=solve(5);
let finalans=ans(10);
console.log(finalans); 





