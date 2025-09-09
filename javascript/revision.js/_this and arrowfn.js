 // *** browser ke andar global object =window object hota hai ***I.Qn
const user={
    username:"hitesh",
    price:999,
    welcomeMessage: function(){
    console.log(`${this.username},welcome to website`);
    console.log(this) //puri values print ho jaengi
}
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()
console.log(this) //yaha kuch bhi function nhi hai to empty dega
//this keval usei paranthesis me use akr sakte hai

// const chai=function(){
//     let username="hitesh"
//     console.log(this.username)
// }    
   // this function can be denoted in arrow function as

   const chai=()=>{
    let username="akash"
    console.log(this.username);
   }
chai()


  // +++++++ arrow function ++++++++++
  // curly bracket lagane par return likhna padega
  const addtwo=(num1,num2)=>{
    return num1+num2
  }
  console.log(addtwo(3,4))

                      // or isme return hata sakte hai (react me use aayega)
// const addTwo=(num1,num2)=> num1+num2     // ()laga sakte hai
const add=(num1,num2)=>({username:"hitesh"})  // object ke liye (paranthesis) lagan padega
console.log(add(3,4))                      


