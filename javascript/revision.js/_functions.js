// function addtwo(number1,number2){ //( are called parameters)
//     console.log(number1+number2)
// }
//  addtwo(2,"5") // called arguments

function addtwo(number1,number2){
      let result=number1+number2;
    // return result;  // iske baad ki line print nahi hogi
    // console.log("jfsjh")   OR can use
return number1+number2;
    }
    const result=addtwo(3,5);
    console.log("result: ",result);


function loginUsermess(username){
    if(username===undefined){
// or can write if(!username){}
        console.log("please enter a username")
        return // isse baad ki value print nahi hogi
    }
    return `${username /*variable name*/} just logged in`
}
console.log(loginUsermess("akash"))
console.log(loginUsermess())   //undefined ayega...IQn

function calculateCrtPrice(v1,...num1){
    return num1
}
console.log(calculateCrtPrice(200,400,500,600))
// num1 return kara rahe hai means v1 me 200 chala
//  gaya hai vo nhi print hoga


const user ={
    username:"hitesh",
    price:199
}
function handleObject(anyobject){
     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)

handleObject({
    username:"sam",
    price:399
})
const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)) 
console.log("")                 