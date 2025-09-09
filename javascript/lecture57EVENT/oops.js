function user(username,logincount,isloggedin){
    this.username=username;
    this.logincount=logincount;
    this.isloggedin=isloggedin;
    this.greeting=function(){
        console.log(`Welcome ${this.username}`)
    }
    return this
}
const userOne= new user("hitesh",12,true)
const usertwo=new user("chai aur code",11,false)
// const usertwo=user("chai aur code",11,false)
//isse value overright ho jaeingi
// isi liye new word ka use karte hai
console.log(userOne)
console.log(usertwo)