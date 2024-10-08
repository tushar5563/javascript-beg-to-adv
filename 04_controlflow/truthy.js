//truthy and falsy value
const userEmail=""
if(userEmail){
    console.log("Got  user email")
} else{
    console.log("didnt find any email")
}


// falsy values:- false,0,-0,BigInt 0n,"",null, undefined,NaN these are flasy values

//truhty values
// "0"(inside a string if we have  0 it is then truthy values),'false',"",[],{},function(){}


//Nullish COalescing  operator(??):null and defined
let val1;
val1=5 ?? 10   
val1=null ?? 10 
val1=undefined??45
console.log(val1)

//terninary operator
   //condition ? true :false
   const iceTeaPrice=100
   iceTeaPrice>=100 ? console.log("less than 80"):console.log("more then 80")