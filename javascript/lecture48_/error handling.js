try{
    console.log("try block start here");
    //error-> reference error
    console.log(x);
    console.log("try block ends here");
}
catch(error){
    console.log("i am inside catch block");
    console.log("your error is here:",error);
}
finally{
    console.log("i will run everytime,as i am finally")
}