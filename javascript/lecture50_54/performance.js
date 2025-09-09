//     //code1
//     const t1=performance.now();// calculates time at this time
// for(let i=1;i<=100;i++){
//     let para=document.createElement('p');//cretes a new dom element
//     para.textContent="this is para"+i;   //content write karta hai
//     document.body.appendChild(para);  //body me insert kar raha hai
// }
//     const t2=performance.now();
//     console.log("time taken by code 1 is:"+ (t2-t1));

//     //code2  this code takes less time
// const t3=performance.now();
// let mydiv=document.createElement('div');
//     for(let i=1; i<=100; i++){
//         let para=document.createElement('p');
//         para.textContent="this is my para"+ i;
//         mydiv.appendChild(para);
//     }
//     document.body.appendChild(mydiv);
//     const t4=performance.now();
//     console.log("time in code 2 is:"+(t4-t3));

    //best code
    const t1=performance.now();
    let fragment=document.createDocumentFragment();
    for(let i=1;i<=100;i++){
        let para=document.createElement('p');
        para.textContent="this is para" + i+ "abc";
        ///no reflow and no repaint for the below line
        fragment.appendChild(para);
    }
    ///below lines takes 1 reflow and 1 repaint
    document.body.appendChild(fragment);
    const t2=performance.now();
    console.log(t2-t1);