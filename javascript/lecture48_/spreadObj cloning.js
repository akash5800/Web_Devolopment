let obj={
    age:12,
    wt:68,
    ht:180,
};
 
let dest={...obj}
obj.color="white";
console.log("obj:",obj)
console.log("dest",dest);