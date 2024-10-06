const myArr=[1,2,3,4,5]
console.log(myArr[0])
//another way to declare array is
const  myArr2= new Array(1,2,2,33,1)
console.log(myArr2[3])
//array methods
myArr.push(1)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(10)
console.log(myArr)
myArr.shift()
console.log(myArr)
console.log(myArr.includes(30))
console.log(myArr.indexOf(30))
const  newArr=myArr.join()
console.log(newArr)
console.log(typeof newArr)


//SLice and splice
//splice manipulates the arry 
//slice doesnt manipulate the original array