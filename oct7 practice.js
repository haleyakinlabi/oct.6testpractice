
//create function that returns 'hello'
function hello(){
    return 'hello'
}
let sayHello = hello()
console.log(sayHello)

// create arrow function that takes a name
let hi = (name) => {
    return 'hi ' + name
}
console.log(hi('Cam'))

//creat an array of names 

let nameArr = ['john', 'jim', 'jake', 'jared']
//console.log(hi(nameArr))

// create a function that takes in an array of names in its params
// loop over the names and return a new array of welcome messages
// by invoking the hi funciton
function getWelcomMessages(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.push(hi(arr[i])) 
    }   
    return newArr
}
console.log(getWelcomMessages(nameArr))

// create a function that takes in a callback function
// the callback will return an array of welcome messages
// then iterate over the the result of invoking the callback 
// then console.log value of each entry in the array 
function logWelcomeMessages(callback){
    let result = callback()
    for(let i = 0; i < result.length; i++){
        console.log(result[i])
    }
}
logWelcomeMessages(() =>{
    return getWelcomMessages(['nate', 'haley'])
})
