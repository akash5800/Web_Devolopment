// function change(){
//     let fpara=document.getElementById('fpara');
//     fpara.textContent="Hello Babbar"
// }
// let fpara=document.getElementById('fpara');
// fpara.addEventListener('click',change);
// // fpara.removeEventListener('click',change)
// // this line remove click changement


// let anchorElement=document.getElementById('fanchor');
// anchorElement.addEventListener('click',function(event){
//     event.preventDefault();
//     anchorElement.textContent="click done hai"
// })


// let paras=document.querySelectorAll('p');
function alertPara(event){
    if(event.target.nodeName==='SPAN'){ //isse keval span par click karne par kaam karega
    alert("you have clicked on para:"+ event.target.textContent)}
//target ka matlab jis element par click karoge bata dega
}
// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     console.log("event listener added");
//     para.addEventListener('click',alertPara);
        
// }  //or second method

let mydiv=document.getElementById('wrapper');
document.addEventListener('click',alertPara);//event listener se click karne par alertpar add hoga
