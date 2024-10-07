function sayMyName(){
    console.log("t")
    console.log("u")
    console.log("s")
    console.log("h")
    console.log("a")
    console.log("r")
}
//sayMyName-> reference
//()-> calling a function
sayMyName()
//(number1,n2)->parameters
// function addTwoNumber(number1,n2){
//     console.log(number1 + n2)
// }
//(3,1)-> arguement
function addTwoNumber(number1,n2){
    // let result=number1+n2
    // return result
    return number1+n2
    //after declaring return you cant return anything after that 
}
const result =addTwoNumber(3,1)
//console.log("Result",result)
function loginUserMessage(username  ){
 return `${username} just logged in  `
}
console.log(loginUserMessage("mans"))
console.log(loginUserMessage())