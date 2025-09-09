           /*primitive datatype*/
// 7type: String,Number,Boolean
       // Null,undefined,Symbol,
       // BigInt

           /*reference (non-primititve)*/
     //Array,Objects,Functions

     const id='123'   /*same value hai true ayegi*/
     const id2='123'
     console.log(id===id2)
    
     const id3=Symbol('123'); //Symbol ka use karne se
     const id4=Symbol('123'); //value different treat hogi
     console.log(id3===id4);

     const bignumber=132454545454445445555n //isse BigInt ban jata hai
     console.log(typeof bignumber)