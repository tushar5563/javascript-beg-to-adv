// let name = "hitesh  ";
// console.log(name.length); // Output: 8 (includes the spaces)
// console.log(name.trim().length); // Output: 6 (ignores trailing spaces)
let myHeros=['bankai','gear5']
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderman:function(){
        console.log(`spider man power is ${this.spiderman}`);
    }
}
Object.prototype.tushar=function(){
    console.log(`Tushar is present in all objects`)
}
Array.prototype.myTushar=function(){
    console.log(`Tushar is present in all`)
}
heroPower.tushar()
myHeros.myTushar() 

const User={
    name:"chai",
    email:"kaido@gmail.com"
}
const Teacher={
    makeVideo:true
}
const teachingSupport={
    isAvailable: false
    
}
const TASupport={
    makeAssignment:"JS Assignment",
    fullTime: true,
    __proto__:teachingSupport
}
Teacher.__proto__=User

//modern syntax
Object.setPrototypeOf(teachingSupport,Teacher)

let anotherUserName="ChaiAurCode"
String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(`We have another user ${this.name}`)
    console.log(`True length is :${this.trim().length}`)
}
anotherUserName.trueLength()