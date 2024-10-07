// //singleton

// //object literal
 const  mySym=Symbol("key1")

const  jsUser={
    name: "Sushi",
    "fullname":"Tushar Tiwari",
    [mySym]:"mykey",
    age:22,
    email:"tt@gmail.com",
    location:"gurgaon",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["fullname"])
// console.log(jsUser[mySym])

//to make change in the objects we use
jsUser.email="Zoro@chatgpt.com"

//Object.freeze(jsUser)
jsUser.email="ptajw@chatgpt.com"
console.log(jsUser)

jsUser.greeting=function(){
    console.log("hellp")
}
jsUser.greetingTwo=function(){
    console.log(`hello python,${this.name}`)
}

console.log(jsUser.greeting()) 
console.log(jsUser.greetingTwo())


//Singleton
//const  tinderUser= new Object() 
//Nonsingleton
 const tinderUser={}
 tinderUser.id="12311"
 tinderUser.name="Sammt"
 tinderUser.isLoggedIn=false
 //console.log(tinderUser)
const regularUser={
    email:"nvm@gmail.com",
    fullname:{
        userFullname:{
            firstName:"Tushar",
            lastName:"Tiwari"

        }
    }
}
console.log(regularUser.fullname)



const obj1={1:"a",2:"b"}
//const returnTarget=Object.assign(target,source)
const obj2={3:"c",4:"d"}
//const obj3=Object.assign({},obj1,obj2)
//console.log(obj3)
//but instead of this we will use spreadoperator
const  obj3={...obj1,...obj2}
console.log(obj3)
 //how to handle values from database
    const users=[
        {
            id:1,
                email:"banki!@gmail.com"
        }
    ]
    //users[1].email
    console.log(tinderUser)
    console.log(Object.keys(tinderUser))
    console.log(Object.values(tinderUser))
    console.log(Object.entries(tinderUser))
    console.log(tinderUser.hasOwnProperty('isLoggedIn'))