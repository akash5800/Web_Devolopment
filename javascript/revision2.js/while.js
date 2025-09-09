let arr=0;
while(arr<3){
    console.log(`value is ${arr}`);
        arr=arr+1;
}
   /* while loop me condition pahle check hoti hai then kaam hota hai
      do while loop me pahle kaam hota hai phir condition check hoti hai
      */
let score=5;
do {
    console.log(`score is${score}`);
    score++
} while(score<=10);

    //++ high order loops +++ 
const arre=[1,2,3,4,5]
// for (const element of object)
for(const num of arre){
    console.log(num);
}

const greetings="hello world"
for(const k/*any name*/ of greetings){
    console.log(`each char is ${k}`)
}

// ++ Map object ++ it holds key value pairsand remember original insertion order
const map=new Map()
map.set('in',"india")
map.set('usa',"united america")
map.set('in',"india")  //dubara print nahi hogi
// console.log(map)
for(const[key,value] of map){
    console.log(key,':-',value);
}

const myobject={
    is:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'"swift by apple'
}
for(const [key,value] in myobject){
    console.log(`${key} shortcut is for ${myobject[value]}`);
}