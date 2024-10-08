 let a=69
 //console.log(a)//global scope
 if(true){
    let a = 39
    console.log("Inner:",a)
 }
 //Nested scope

 if(true){
    const sirName=" Tiwari "
    if(sirName===" Tiwari "){
        const sirName2=" Bais "
        console.log(sirName+ sirName2)
    }
    //console.log(sirName2)
 }
 //console.log(sirName)

 //+++++++++++++Intresting++++++++++
 //another way to call functiom
 const addTwo=function(num){
    return num +2  
 }
 addTwo(4)