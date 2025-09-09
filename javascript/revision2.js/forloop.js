// ` ` backtics symbol
/* for(let i=0; i<5; i++){
    console.log(`outer loop value: ${i}`);
    for(let j=0;j<=5;j++){
        //console.log(`inner loop value ${j} and inner loop ${i}`);
     console.log(i+'*'+j+'='+i*j);
    }
}
    */

let myarray=["flash","batsman","superman"]
console.log(myarray.length);
for (let index =0; index <myarray.length; index++){
    const element = myarray[index];
    console.log(element);
}
// break se uske baad ka print nahi hoga
// continue se keval usi condition ki line print nahi hogi
 
const mycoding=[
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"java",
        languagefilename:"java"
    },
    {
        languagename:"python",
        languagefilename:"py"
    }
]
// mycoding object ke langauagefilename se item nikaalo
mycoding.forEach((item)=>{
    console.log(item.languagefilename)
})
mycoding.forEach((item)=>{
    console.log(item)
})
//foreach se value return kar loop ke baahar use nahi akr sakte

// filter se bhi har value pejaakr foreach ki trah hi karenge lekin isme value return kara kar aage use kar sakte hai
const myNums=[1,2,3,4,5,6]
// const newNums=myNums.filter((num)=>{
//     return num>4
// })  or
const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums)
//{} means scope use karne par return lagana padega

const mydata=[1,2,3]
// const mytotal=mydata.reduce(function(acc,currvalue){
//     console.log(`acc:${acc} and currentvalue: ${currvalue}`);
//     return acc+currvalue
// },0//means acc ki initial value 0 hai
// )   or
const mytotal=mydata.reduce((acc,currvalue)=>acc+currvalue,0)
console.log(mytotal)

const shoppingcart=[
    {
        itemname: "js course",
        price:2999
    },
    {
        itemname: "python course",
        price:999
    },
    {
        itemname: "mobile course",
        price:5999
    },
    {
        itemname: "data course",
        price:9999
    }
]
const pricetoday=shoppingcart.reduce((acc/*initial value*/,item/*object ke data se lega*/)=> acc+item.price,0)
console.log(pricetoday)
// loop lagakar sabhi value add hongi