let mydate=new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toTimeString());

let mycreateddate=new Date(2024,0,4)
console.log(mycreateddate.toDateString());
console.log(typeof mycreateddate);

let miTimesStamp=Date.now()
console.log(miTimesStamp)
console.log(mycreateddate.getTime())

//++ converting into seconds ++++++++++ important ques.
console.log(Math.floor(Date.now()/1000));
let date=new Date();
console.log(date);
console.log(date.getMonth()+1);  // +1 se month 1 count honge
console.log(date.getDay());
date.toLocaleString('default',{weekday:"long"})