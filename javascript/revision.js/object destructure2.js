// //const tinderUser=new Object(); // define singleton object
// const tinderUser={}   // it is non-singleton object
// console.log(tinderUser);
// tinderUser.id="123abc";
// tinderUser.name="samy";
// tinderUser.isloggedin=false;
// console.log(tinderUser)

// const regularUser={
//     email:"someone@gmail.com",
//     fullname:{
//         userfullname:{
//         firstname:"akash",
//         lastname:'patel'
//     }
// }
// }
// console.log("A",regularUser.fullname.userfullname.firstname);
// const obj1={1:"a",2:"b",3:"c"}
// const obj2={3:"a",4:"b",5:"c"}
// const obj3=Object.assign({},obj1,obj2)  //vlaue merge karega
// console.log(obj3)

// console.log(Object.keys(regularUser))
// console.log(Object.values(regularUser));

// console.log(tinderUser.hasOwnProperty('isloggedin'))
// //batata hai ki ye property hai ay nahi 

            // destructure in objects
const course={
    coursename:'js in hindi',
    price:'999',
    courseInstructor:"hitesh"
}
// console.log(course.courseInstructor);
const {courseInstructor /*kya value extract karni hai*/ :instructor /*rename*/}=course //kaha se extract krni hai
console.log(instructor)

//    ** JSON notation-javascript object notation**

// {
//     "name":"akash",
//     "coursename":"js in english",
//     "price": "999"
// };

        //  or
// [
//     {},
//     {},
//     {}
// ]

