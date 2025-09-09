const clock=document.getElementById('clock');
//  or const clock=document.querySelector('#clock')
setInterval(() => { // arrow function
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();

}, 1000);