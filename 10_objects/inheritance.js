class User{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`logg me in ${this.username}` )
    }
}
class  Teacher  extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A  new course has been added by ${this.username}`)
    }
}
const chai=new Teacher("chai","Chai@new.com","123")
chai.addCourse()
const masalaChai=new User("masalachai")
masalaChai.logme()
//console.log(chai===masalaChai())
console.log(chai instanceof User)