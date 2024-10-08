const user={
    userName:"Tushar",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.userName},welcome to the website`);
        console.log(this)
    }
}
// user.welcomeMessage()
// user.userName="Bahadur"
// user.welcomeMessage()
//console.log(this)

// function chai(){
//     console.log(this)
// }
// chai()

// const chai=function(){
//     let userName="chum"
//     console.log(this.userName)
// }
// chai()
const chai=()=>{
    let userName="chum"
    console.log(this)
}
//chai()

// const  addTwo=(num1,num2)=>{
//     return num1 + num2
// }
//const  addTwo=(num1,num2)=> num1 + num2
// const  addTwo=(num1,num2)=>{num1 + num2}
const  addTwo=(num1,num2)=>({userName:"Zoro"})
console.log(addTwo(3,4))