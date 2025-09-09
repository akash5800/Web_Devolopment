let fruit=['apple','banana','mango'];
fruit.push('kiwi');//add items at last
console.log(fruit);
fruit.pop();      //delete from last
fruit.unshift("grapes");  //add items at begining
console.log(fruit);
fruit.splice(1,2,'orange');//means 1 index se 2 values hata do aur 1 par hi orange add kardo
console.log(fruit);