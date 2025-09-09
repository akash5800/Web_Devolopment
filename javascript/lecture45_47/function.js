function greetme(greet,fullname){
    console.log("hello",fullname);
    greet();
}
function greet(){
    console.log("greeting for the day");
}
greetme(greet,"babbar");