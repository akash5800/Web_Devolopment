let src={
    age:17,
    wt:67,
    ht:180
};
let dest=Object.assign({},src);
src.value=90;
console.log("src:",src);
console.log("dest:",dest);