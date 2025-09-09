let src={
    age:17,
    wt:67,
    ht:180
};
let dest={};
//cloning using iteration
for(let key in src){
    let newkey=key;
    let newvalue=src[key];
    //inset newkey and value in dest and create a clone
    dest[newkey]=newvalue;
}
src.age=90;
console.log("src",src);
console.log("dest:",dest);