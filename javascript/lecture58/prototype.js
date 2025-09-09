let myHeroes=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getspiderman: function(){
        console.log(`Spidy power is ${this.spiderman}`);

    }
}
Object.prototype.hitesh=function(){
    console.log(`yes present in all objects`);
}
myHeroes.hitesh()

 