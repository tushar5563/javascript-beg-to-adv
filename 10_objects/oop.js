const user={
    name:"tushar",
    password:"123@123",
    signedIn:true,
    getUserDetails:function(){
       // console.log("Got user details from database")
       console.log(this);
    }
}
//console.log(user.name)
//console.log(user.getUserDetails());
//console.log(this)
//const promiseOne=new Promise()
const date=new Date()

function  User(username,loginCount,isLoggedIn){
    this.username=username
    return this
}

const  userOne= new User("hitesh",12,true)
const  userTwo= new User("luffy",12,false)

console.log(userOne)
console.log(userTwo)
