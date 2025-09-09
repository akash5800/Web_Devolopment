// prints number from 1 to 10 with delay of 1 sec each
for(let i=1;i<=10;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000)
}