//object declare
const mysm=Symbol("key1")

const jsuser={
    name: "akash",
    age:18,
    "full name":"akash patel",
// ** I.QN    
    [mysm]:"hhhkey1", // fuction banakar key me likhne ke liye aise likhte hai
    location:"jaipur",
    email:"hitesh@google.com",
    isloggedin:false,
    lastloginDays:['monday','tuesday']
}
console.log(jsuser.email);
console.log(jsuser['email']) //string ki tarah search karna padega
// both methods are correct but 2nd is best

console.log(jsuser["full name"]) // isko dot lagakar acces nahi kar sakte
console.log(jsuser[mysm])

jsuser.email="hitesh@chatgpt.com"
console.log(jsuser.email)
//Object.freeze(jsuser)   // isse value freeze hogai hai ab change nhi hogi
jsuser.email="akash@gmial.com"
console.log(jsuser.email)

jsuser.greeting=function(){
    console.log("hello js user");
}
 

jsuser.greetingtwo=function(){
    console.log(`hello ji,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());