class User{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`Username: ${this.username}`)
    }
    createId(){
        return `123`
    }
}
const hitesh= new User()
console.log(hitesh.createId())
