//Immediately  Invoked Function (IIFE)
(function chai(){
    console.log(`DB CONNECTED`)
    
})();
//to end iife we have to use ';' so to use iife again
(function chaii(){
    console.log(`DB CONNECTED AGAIN`)
    
})();
((name)=>{
    console.log(`DB CONNECTED TO ${name}`)
})('salman');