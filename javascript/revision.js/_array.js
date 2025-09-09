const myarr=[0,1,2,3,4,5];  //array store method 1
const myheroes=['shaktiman','naagraj']
const myarr2=new Array(1,2,3,4); //array store method 2
console.log(myarr2[1])

//array methods
myarr.push(6); //6 last me add hoga
myarr.push(9)
myarr.pop()  //last se 1 value hata dega
myarr.unshift(9) //starting me 9 add kar dega
myarr.shift()    //atarting se ek value hata dega
console.log(myarr)
console.log(myarr.includes(9)) //tells 9 hai ya nahi

const arr=myarr.join()  //string me convert hoga
console.log(myarr)
console.log(typeof myarr)
console.log(arr)
console.log(typeof arr)

// slice and splice
        //+++++++++++ important ques +++++++++
//** slice se last range nhi print hoti hai aur old array store rahti hai
// **splice me last value bhi print hoti hai aur old value se piece cut ho jata hai
console.log("A",myarr);
const myn1=myarr.slice(1,3);

console.log(myn1);
console.log("B",myarr);

const myn2=myarr.splice(1,3);
console.log(myn2);
console.log(myarr)


