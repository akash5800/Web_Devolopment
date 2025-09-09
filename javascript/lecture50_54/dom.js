// let mydiv=document.querySelector('#mydiv');
// let newelement=document.createElement('span');
// newelement.textContent="love babbar"
// mydiv.insertAdjacentElement('afterend',newelement);
// fours types can insert
//beforebegin,afterbegin,beforeend,afterend
let parent=document.querySelector("#mydiv");
let child=document.querySelector('#fpara');
parent.removeChild(child);
//remove an item