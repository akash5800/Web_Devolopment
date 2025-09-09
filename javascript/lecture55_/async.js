// */ async-await ka use karke asynchronous code ko synchronous code ki tarah use kar sakte hai

//synchronous code means- line by line code execute hota hai
//asynchrounous code ka matlab 1 line execute ho rahi hai sath me dusri line bhi start rahegi

async function getData(){
   //get request=async
   let response=await fetch('https://api.publicapis.org/entries');
   //parse json=async
   let data=await response.json();
   console.log(data);
}
getData();