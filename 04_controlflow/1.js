// // 1 if
// const isUserLoggedIn= true
// const  temperature= 41
// if(temperature <50){
//     console.log("exceuted")
// }
// console.log("temp is greater than 50")

//const score=200
// if(score>100){
//     let power="fly"
//     console.log(`User Power: ${power}`)
// }
// console.log(`User Power: ${power}`)
// }
// const balance=1000
// //if(balance>500) console.log("test");//implicit scope
// if(balance<500){
// console.log("less than")
// }else if(balance<750){
//     console.log("less than  750")
// }else if(balance<900){
//     console.log("less than  900")
// }else{
//     console.log("less than 750")
// }
const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle= false
const loggedInFromGmail=true
if(userLoggedIn && debitCard){
    console.log("allow  to buy course")
}
if(loggedInFromGmail || loggedInFromGoogle){
    console.log('user logged in')
}