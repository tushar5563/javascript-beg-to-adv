function calculateCartPrice(...num1){
return num1

}
//console.log(calculateCartPrice(200,400,100,122))
const user={
    username:"chimtpakdumdum",
    price:100
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username}and price is ${anyObject.price}`);
}
handleObject(user)
//how to return and array through function
const myNewArray=[40000,12000,12221]
function returnArray(getArray){
    return getArray[2]
}
console.log(returnArray(myNewArray))