let myDate=new Date()
// console.log(myDate.toDateString())
// console.log(myDate.toString())
// console.log(myDate.toJSON())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(typeof myDate)
const myCreatedDate= new Date("2022-3-10")
// console.log(myCreatedDate.toDateString())
let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))
let newDate= new Date()
console.log(newDate);
console.log(newDate.getDay()) 
console.log(newDate.getHours())
//console.log(newDate.getVarDate())  
console.log(newDate.getMonth()+1) 
newDate.toLocaleString('default',{
    weekday: "short",
    

})