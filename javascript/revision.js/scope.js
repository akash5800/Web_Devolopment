let a=300;
if (true){  // niche ki values kevalscope ke andar hi access kar sakte hai
    let a=10
    const b=20
    console.log("inner:",a);
}
console.log(a)

function one(){
    const username="hitesh"
 function two(){
    const website="youtube"
    console.log(username);
 }
 two()
}
one()

// nexr
if(true){
    const username='akash'
    if(username==="akash"){
        const website=" youtube"
        console.log(username+website)
    }
    //console.log(website)   website ko access nahi kar paega
}
// console.log(username);  bracket ke bahar hai to access nahi kar paega
  

// ++++++++ function declare methods  +++++++++++
// is method me print upar bhi kara sakte hai
console.log(addone(5)) 
function addone(num){
    return num+1
}
 
//aese function declare karne par neeche hi print karana padega
// called hositng (declaration se pahle use nahi kar paa rahe hai)
addtwo=function(num){
    return num+2
}
console.log(addtwo(2))