const promiseOne=new Promise(function(resolve,reject){
    //Do any async task
    //Db calls,networkcall,cryptography
    setTimeout(function(){
            console.log('Async Task is Complete')
            resolve()
    },1000)

})
promiseOne.then(function(){
    console.log("Promise Consumed")
})

const PromiseTwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async task 2 is co")
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Tushar",emai:"luffy@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
 console.log(user)
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Panoti",password:"12@tus"})
        }else{
            reject('ERROR:something went wrong')
        }
    },1000)
})

const username=promiseFour.then((user)=>{
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log("The Promise is either resolved or rejected"))

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"javascript",password:"12@tus"})
        }else{
            reject('ERROR:something went wrong')
        }
    },1000)
})
// async function consumePromiseFive() {
//     const response  =await promiseFive
//     console.log(response);
    
// }
// consumePromiseFive()
//now lets try catch method
// async function consumePromiseFive() {
//     try {
//         const response=await promiseFive
//         console.log(response)
        
//     } catch (error) {
//         console.log(error)
//     }
    
// }
// consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response=await fetch('http://jsonplaceholder.typicode.com/users')
//   const data=  await response.json()
//   console.log(data)
//     } catch (error) {
//         console.log('E:',error)
//     }
    
// }
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))