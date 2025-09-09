class user{
    constructor(username){
        this.username=username
    }
    logMe(){ 
        console.log(`USERNAME is${this.username}`);
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

 addcourse(){
    console.log(`A new course was added by ${this.username}`);
 }
}
 const chai= new teacher("chai","chai@teacher.com","123")
 chai.addcourse()
 
 const masalachai=new user("masalachai")
 masalachai.logMe()
//  console.log(chai===teacher); or
console.log(chai instanceof user)
