const marvel_hereos=['thor','ironman','spiderman']
const dc_hereos=['superman','batman','flash']
// marvel_hereos.push(dc_hereos)
// console.log(marvel_hereos);
// console.log(marvel_hereos[3][0]) // 3rd index ke andar se 0 index lega

 //++ ther method to add ++
// is method se new array alag alag hokar element ki tarah store hogi
 const allhero=marvel_hereos.concat(dc_hereos)
 console.log(allhero);

 //*** best method to add (spread method) ***
// concat ki tarah hi store karta hai lekin isme kai sare array ad kar sakte hai
 const allnew=[...marvel_hereos,...dc_hereos,...['akash']]
 console.log(allnew)

 // same array me merge ke liye
 const another_array=[1,2,3,[4,5],6,[7,8,9]];
 const real_anarray=another_array.flat(); 
 console.log(real_anarray)

console.log(Array.isArray("HITESH")) // array hai ya nahi
console.log(Array.from("HITESH"))  // convert into array

    //** I.Qn */

console.log(Array.from({name:"hitesh"}))
// above line provide empty array kyoki isme key ko convert karna ya value ko batana padega

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
// above values ka array bana dega