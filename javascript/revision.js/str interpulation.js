// string additon modern method
name="akash";
const repo=100;
console.log(`hello my name is ${name} and my repo is ${repo} `);

const gameName=new String("hitestic");

  // string se 5 index ki value
console.log(gameName[5]);
   //string ki length
console.log(gameName.length);
    //in capital letters
console.log(gameName.toUpperCase());
    // character at index 1
console.log(gameName.charAt(1));
    //  position of letter t
console.log(gameName.indexOf('t'));

//newstring
const newstring=gameName.substring(0,4);
console.log(newstring.toUpperCase());

// space remove  
const other="  hello world   ";
console.log(other.trimEnd());// last ka space hatayega
 
// change value
const url="www.fhfj.com"
console.log(url.replace('f','he'));

console.log(url.includes('x')); // value hai ya nahi

console.log(gameName.split('h')); // vaha se value alag karega
