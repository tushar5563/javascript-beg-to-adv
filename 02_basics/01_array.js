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

const marvel_heros=["thor","iron-man","spider-man"]
const  dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros)
// const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros)
const  another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)
console.log(Array.from("TusharTiwari12342"))

let s1=100
let s2=122
let s3=1221
console.log(Array.of(s1,s2,s3))
