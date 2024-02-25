
// console.log("Debayan Praihar")
// fruit = 500
// console.log(fruit)
// console.log('hello world')
/*food =Number(prompt("Enter the food amount you want to eat"))
tipPercentage = Number(prompt("Enter the tip percentage ")/100)
tipAmount = food * tipPercentage
total = food + tipAmount*/
// console.log("The tip amoutn is this ")
//  console.log("Tip amout",tipAmount)
//  alert(tipAmount)
// console.log("The total amount is this ")
// console.log("Total amount",total)
// data type string and numbers
//functions 
//type casting

// weather = prompt("Is it a rainy day? type y or n")

// if(weather== "y"){
//     console.log("Go with an umbrella ")
// }
// if(weather=="n"){
//     console.log("Not required any umbrella clear weather")
// } else{
//     console.log("Wrong input !!!")
// }


// Floor - Rounds down 
//Ceil - Rounds up
// random - gives you a random number


// function sayMyname(name){
//     console.log(name)
//    console.log(name)
// }

// // sayMyname("Debayan Pratihar")
// //This is a function called "say my name it has one argument called `name"
// function greeting(name){

//     // templet leterel
//     greet = `Hi ${name}, Nice to meet you!`
// //    greet = 'Hi ' + name +', Nice to meet you'
//     console.log(greet)
// }

// // greeting("Ayan")

// function sum(a,b){
//     //return
//     return console.log(a+b)
// }
// // console.log(sum(1,2))
// // num = sum(1,2)
// // console.log(num)
// sum(1,2)

// const person = {
//     name:"debayan",
//     shirt:"white"
// }

// console.log(person.name)
// console.log(person.shirt)
// console.log(person['name'])
// console.log(person['shirt'])

// //assign object

// person.phone ='123456789'
// console.log(person.phone)
// console.log(person)

// //person2

// const person2 = {
//     name:"kazi",
//     shirt:"white",
//     phone:"675465772"
// }

// console.log(person2.name)
// console.log(person2.phone)
// console.log(person2.shirt)
// console.log(person2)
//es6 error function 
//object
//template literls
// const introducer = (name,shirt)=>{
//     const person ={
//         name:name,
//         shirt:shirt,
//         assets: 1000,
//         liability:500,
//         networth: function(){
//             return this.assets - this.liability
//         }
//     }

//    const intro= `Hi, my name is ${person.name} and the colour of my shirt is ${person.shirt}
//    and my net worth is ${person.networth()}/RS`
//    return intro
// }

// console.log(introducer("debayan","black"))
// // console.log(introducer("Debyani","white"))

// //loops

// const fruits = ['apple','banana','orange','lichi','banana','orange','lichi','banana','orange','lichi','banana','orange','lichi','banana','orange','lichi','banana','orange','lichi','banana','orange','lichi','banana','orange','lichi','banana','orange','lichi']
// // console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])

// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i])
// }

// for(const fruit of fruits){
//     console.log(fruit)
// }
// const doubble=(numbers)=>{


// let result =[]
// for(let num of numbers){
//     // console.log(num*2)
//     result.push(num*2)
// }
// return result
// }

// console.log(doubble([1,2,3,4,5,6]))

//Higher order function
//map - loops and return an array
//filter 
//reduce
// let result=[1,2,3,4].map(number =>number*2)
// console.log(result)


// const doubbleMap = (numbers) => {
//     return numbers.map(number => number * 2)
// }

// console.log(doubbleMap([1, 2, 3, 4]))


// const filter = (numbers, graterThan) => {
//     let result = []
//     for (const number of numbers) {
//         if (number > graterThan) {
//             result.push(number)
//         }
//     } return result
// }

//console.log(filter([1, 2, 3, 4, 5, 6], 3))

// const nums=[1,2,3,4,5,6,7,8,9]
// console.log(nums.filter(num=>num>=3*2))


// const actors = [
//     {name: 'joney', networth:200000},
//     {name:'amber', networth: 10},
//     {name:'leonarho', networth: 1000000},
//     {name:'mukesh', networth: 91000000},
//     {name:'lokesh', networth: 17000000},
//     {name:'debyani', networth: 991000000},
//     {name:'debayan', networth: 9991000000}
// ]
// result = actors.filter(actor =>actor.networth > 10)
// // if (userIsAuthintcated || userIsPayingMember){
// //   show youtube video
// // }else{
// //
// //}
// let names = result.map(actor =>actor.name).join(', ')

// console.log(result)

//reduce

// sum all of the net worths
//SUM Thingk reduce
//reduce takes in a function as an argument
// const nums =[1,2,3,4,5]
// const result = nums.reduce(sssss(prev,curr){
//     return prev + curr
// })

// console.log(result)
// console.log("hello")
// let titleDiv = document.getElementById("titleDiv")


// console.log("before:",titleDiv.innerText)

// let massage = 'Good bye my lover'
// titleDiv.innerText = massage
// console.log("after:",titleDiv.innerText)

// titleDiv.innerHTML = `<p>${massage}</p>`


// titleDiv.style.backgroundColor = 'blue'

// let redDiv = document.getElementById('red')
// let yellowDiv = document.getElementById('yellow')
// let greenDiv = document.getElementById('green')

// // redDiv.onclick = () => console.log("user chose : rock")
// // // getComputerChoise ---> 'paper'
// // // userchoise vs. computerChoise ---> result
// // // -1 , 0 , 1
// // // show everything on the screen (DOM)
// // yellowDiv.onclick = () => console.log("yellow")
// // greenDiv.onclick = () => console.log("green")


// const squares = document.querySelectorAll('.colorSquare')
// console.log(squares)

// // console.log(squares[0].value)
// // console.log(squares[1].value)
// // console.log(squares[2].value)

// // forEach
// squares.forEach(square => {
//     square.onclick = () =>console.log(square.value)
// })



// const randomHero =()=>{
// const numberOfHeros =731
// Math.random()
// }


//+++++++++(Recvise Javascript)++++++++?//

// console.log("Hello")
// console.log("Hello Debayan wellcome to my javascript coouse")
// variables   -- comments
// console.log("Debayan Pratihar")
// name = "debayan is very good boy and he love to do coding and other thig like flut with rimi"
// console.log(name)


// operators

food = 20
console.log(food)
tipPercentage = 0.2
tipAmount = food + tipPercentage

console.log(tipAmount)
const value= 353
let myObj = {
    name : "Debayan",
    schoolName:"Ramakrishana"
}

const heros = ["debayan","rimi"]

let myFunction = function(){
    console.log("Hello world")
}
console.log(typeof heros);