// let name = prompt("What is your Name");
// console.log(name);
//  //wait chawal thandy horhy hai 5mnt mai khaa k aya

// var name = "Saeed";
// console.log(name);
// var lessonAuthor = "Mark";
// // var guyWhoKeepsSayingHisOwnName = "Mark";
// // var x = "Mark";
// // console.log(lessonAuthor,guyWhoKeepsSayingHisOwnName,x);
// alert(lessonAuthor)

// document.write("Hello World")

// var num = 2 - 3 ; // 2 - 3 == -1 ; -1 + 1 = 0
// num++;
// num++;
// console.log(num);

// 5 sawal
// marks 1/5
// var num = 23;
// num--;
// console.log(numver); fail

// var num = 23;
// num = undefined;
// console.log(num); pass

// var num1 = "123";
// console.log(num1);
// // num1 = null;
// // console.log(num1);
// num1++;
// console.log(num1); fail


// num = 12;
// num2= 13;
// num3 = num2 - num;
// console.log(num3); fail

// let number = prompt("Apna Number Btao");
// console.log(number);
// number = +number + 500;
// console.log(number);

//  var name = "Jerry";
// var popularNumber = 5;
// var num = "5";
// var result = popularNumber + num;
// console.log(result);
// var resultOfComputation = (2 * 4) * (4 + 2);


// console.log(resultOfComputation);

// var name = "Jerry";
// alert("Hello" + " " + name)

//var name = "Apna Name btao";
// var defaulte = "Saeed";

// var promt = prompt(name,defaulte);
// console.log(promt);
// var myName = prompt("Please tell me your name!");

// alert("Thanks"+ " " + myName + " " + "for your input");

// var cats = undefined;
// console.log(cats);

// var userInput = prompt("tumhary pass kitni biliyan hai?");
// cats = parseInt(userInput);
// console.log(cats);
// var city = prompt("Where does the Jerry live?");
//  if (city === "Karachi") {
//  alert("Correct!");
//  }

// if(city === "Mirpurkhas"){
//     console.log("Great You're right");
// }

// var num1 = 2;
// var num2= 2;
// if (num1=== num2) {
//     console.log("Tu Sahi hai Mai galat hon");
    
// }

// var cats = 20;
// var check = "Kutta";
// var userInput = prompt("Guess What should be added?");
// if (userInput === check ) {
//     cats++;
//     console.log(cats);
// }

// console.log("abc");
// var fullName = "Saeed Ali";
// var secondName = "Jerry ";
// var count = 10;
// if (fullName === "Saeed" + " " + "Ali") {
//     console.log(fullName);
// }else{
//     console.log("Jani galat krdia kam");
    
// }

// let userInput = prompt("Guess the Animal");

// let count = 0;
// let guessAnimal = "Kutta";

// if (userInput === "Toota" &&  guessAnimal === "Kutta" ) {
//     count++;
//     console.log(count);
// }else{
//     alert("Please input Vaild Name")
// }


// if (100 == 200 || 200 == 300 || 300 == 400 ) {
//     console.log("Right");  
// }else{
//     console.log("Wrong"); 
// }
// if (100 > 200) {
//     console.log("chota");
    
// }else{
//     console.log("bada");
    
// }

// let userInput = prompt("How old are you?");

// if ( userInput > 15 && userInput <= 25) {
//     console.log("You are Eligible");
// }else{
// console.log("You're not Eligible");
// }     
// const developers = ["Saeed Ali","Jerry ", "Ayesha","Dua","Rafiq","Ali","Ahmad"];
// developers[0] = "Jerry";
// developers[1] = "Jimmi";

// console.log(developers);

//console.log("Jerry");
// const arr = [];

// arr[0] = "Saeed Ali";
// arr[1] = "Jerry"
// console.log(arr);
// arr.pop()
// console.log(arr);


// let animals = ["dog","cat","bird","lizard","lion"];
// console.log(animals);
// animals.pop()
// console.log(animals);
// animals.push("snake","lion","tiger");
// console.log(animals);
// animals.shift()
// console.log(animals);
// animals.unshift("Parrot")
// console.log(animals);
// animals.splice(3,0,"parrot","Billi");
// console.log(animals);

// let fruits = ["Apple","Banana","carrot","Mango"];
// fruits.pop()
// console.log(fruits);

// let copyFruits = fruits.slice(0,3);
// copyFruits.splice(0,0,"Rose Milk")
// console.log("Copy wala array",copyFruits);

// let userInput = prompt("Please enter Your Lucky Number!");
// parseInt(userInput);

// if (userInput % 2 == 0  ) { 
//     alert("You Entered Even Number" + " " + userInput)
// }else{
//     alert("You Entered Even Odd" + " " + userInput)
// }

//for loop if we want to repeat the certain statements
  
// let device = "Laptop";

// for(let i = 1; i<=100;i++){
//     console.log(device);
//     console.log("mouse");
// }
// 1 for(var i = 0; i <= 4; i++) {
//      if (cityToCheck === cleanestCities[i]) {
//      alert("It's one of the cleanest cities");
//     }
//      }

// loops //for



// for(let i = 1; i<=10; i++){
//     console.log("Saeed");
// }

// let data = [10,20,30,40,50];


// for(let i = 0; i < data.length; i++){
//     console.log(data[i]);
// }
// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
// var cityToCheck = "Tucson"
// var matchFound = false;
// for (var i = 0; i <= 4; i++){
//  if (cityToCheck === cleanestCities[i]) {
//  matchFound = true;
//  console.warn("It's one of the cleanest cities");
// break
//  }
//  }

//  if (matchFound === false) {
//     console.warn("It's not on the list");
//  }

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
 for (var i = 0; i < firstNames.length; i++) {
 for (var j = 0; j < lastNames.length; j++) {
 fullNames.push(firstNames[i] + lastNames[j]);
 }
}