class human{
    //properties
    age=13;  //public mark hai means class ke bahar use kar sakte hai
    wt=80;
    #ht=180;   //# se item private mark ho gaya hai bahar access nahihoga

    //behaviour
    walking(){
        console.log("i am walking")
    }
     
    running(){
        console.log("i am running")
    }
}

let obj=new human();
    console.log(obj.wt);
    obj.walking();
