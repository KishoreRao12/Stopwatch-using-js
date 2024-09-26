// WHILE LOOPS:-
// let username=window.prompt("enter your username");
// if (username==""){
//     console.log("you didnt enter your username");
// }
// else{
//     console.log(`hello ${username}`);
// }
// let username=""
// while(username===""){
//     username=window.prompt("enter your username");
// }

// console.log(`hello ${username}`);

// let loggedIN= false;
// let username;
// let password;
// do{
//     username=window.prompt("enter your username");
//     password=window.prompt("enter your password");

//     if(username==="bonk" && password==="bonky"){
//         loggedIN=true;
//         console.log("You are logged in")
//     }
//     else{
//         console.log("invalid credentials")
//     }
// }while(!loggedIN);

// FOR LOOPS:=
// for(let i=1;i<10;i+=2){
//     console.log(i);
// }
// for(let i=1;i<=20;i++){
//     if(i==13){
//         continue;
//     }
//     if(i==10){
//         break;
//     }
//     console.log(i);
// }

//number guessing game
// const minNum = 1;
// const maxNum = 20;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// let attempts = 0;
// let guess;
// let running = true;
// while (running) {
//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
//     guess = Number(guess);
//     if (isNaN(guess)) {
//         window.alert("Not a number. Please enter a valid number.");
//     } else if (guess < minNum || guess > maxNum) {
//         window.alert(`Please guess a number between ${minNum} and ${maxNum}`);
//     } else {
//         attempts++;
//         if (guess < answer) {
//             window.alert("Enter a bigger number.");
//         } else if (guess > answer) {
//             window.alert("Enter a smaller number.");
//         } else {
//             window.alert(`Correct! It took you ${attempts} attempts to guess the number.`);
//             running = false;
//         }
//     }
// }

// FUNCTIONS
// function hbd(username,age){
//     console.log(`happy birthday! ${username}`);
//     console.log(`you are ${age} years old`);
// }
// hbd("kishore",20);
// function add(x,y){
//     return x+y
// }
// function sub(x,y){
//     return x-y;
// }
// function mul(x,y){
//     return x*y;
// }
// function div(x,y){
//     return x/y;
// }
// // console.log(add(2,3));
// // console.log(sub(2,3));
// // console.log(mul(2,3));
// // console.log(div(2,3));
// function even(number){
//     if(number%2===0){
//         console.log("it is an even number")
//     }
//     else{
//         console.log("it is an odd number");
//     }
// }

// function isValidEmail(email){
//     if(email.includes("@"&&"gmail.com")){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// // TEMPERATURE CONVERTER
// const txtbox= document.getElementById("txtbox");
// const toF= document.getElementById("toF");
// const toC= document.getElementById("toC");
// const result= document.getElementById("result");
// let temp;
// function convert(){
//     if(toF.checked){
//         temp=Number(txtbox.value);
//         temp=temp * 9 / 5 + 32;
//         result.textContent= temp.toFixed(2)+"F";
//     }
//    else if(toC.checked){
//         temp=Number(txtbox.value);
//         temp= (temp-32)*(5/9);
//         result.textContent= temp.toFixed(1)+"C";
//     }
//     else{
//         result.textContent="select a unit";
//     }
// }
// let fruits=['apple','banana', 'orange', 'pear']

// let numbers=[232,1,232,34344,22,,434]
// fruits.push('watermelon');
// fruits.pop()
// fruits.unshift('mango');
// console.log(fruits);
// let numOfFruits= fruits.length;
// console.log(numOfFruits);
// console.log(fruits.indexOf('orange'));
// for(i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }
// fruits.sort();
// console.log(numbers.sort());

//  let fruits=['apple','banana', 'orange']
//  let vegies=['carrot','banana','potato']
// function openFridge(...foods){
//     console.log(...foods);
// }
// function getFood(...foods){
//     return foods;
// }
// const food1="pizza";
// const food2="burger";
// const food3="biryani";
// const food4="fried rice";
// const food5="ramen";
// // openFridge(food1,food2,food3,food4,food5);
// const foods(food1,food2,food3,food4,food5);
// console.log(foods)

// function sum(...numbers){
//     let result=0;
//     for(let number of numbers){
//         result+=number;
//     }
//     return result;
// }
// let username="kishore";
// let letters=[...username].join("-");
// console.log(letters);
// function combinestrings(...strings){
//     return strings.join("");
// }
// const fullname=combinestrings("mr"," sponegebob"," squarepants"," III");
// console.log(fullname);

// RANDOM PW GENERATOR
// function genPW(pwlength,includelowercase,includeuppercase,includenumbers,includesymbols){
//     const lowercaseChars="abcdefghjijklmnopqrstuvwxyz";
//     const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars="1234567890";
//     const symbolchars="!@#$%^&*";
//     let allowedChars="";
//     let password="";

//     allowedChars+=includelowercase ? lowercaseChars: "";
//     allowedChars+= includeuppercase ? uppercaseChars: "";
//     allowedChars+=includenumbers ? numberChars: "";
//     allowedChars+=includesymbols ? symbolchars: "";
//      if (pwlength<=0){
//         return ` password length must be atleast 1`;
//      }    
//      if(allowedChars.length===0){
//         return `atleast one character needs to be selected`;
//      }
//      for(i=0;i<=pwlength;i++){
//         const randomIndex= Math.floor(Math.random()*allowedChars.length);
//         password+=allowedChars[randomIndex];
//      }
//      return password;
// }
//  const pwlength=12;
// const includelowercase= true;
// const includeuppercase=true;
// const includenumbers=true;
// const includesymbols=true; 
// const password=genPW(pwlength,
//                     includelowercase,
//                     includeuppercase,
//                     includenumbers,
//                     includesymbols);
// console.log(`generated password:${password}`);

// FOR EACH()
// let numbers=[1,2,3,4,5];
// numbers.forEach(triple);
// numbers.forEach(display);

// function double(element,index,array){
//     array[index]=element*2;
// }
// function display(element){
//     console.log(element);
//  }
//  function triple(element,index,array){
//     array[index]=element*3;
//  }
//  function square(element,index,array){
//     array[index]=element**2;
//  }

//  let fruits=['apple','banana', 'orange', 'pear'];
 
//  fruits.forEach(capitalize);
//  fruits.forEach(display);
//  function upperCase(element,index,array){
//     array[index]= element.toUpperCase();
//  }
//  function lowerCase(element,index,array){
//     array[index]=element.toLowerCase();
//  }
//  function capitalize(element,index,array){
//     array[index]= element.charAt(0).toUpperCase()+element.slice(1);
//  }

// Map()
// const students=["spongebob","Patrick","squidward","sandy"];
// const studUpper= students.map(lowerCase);
// function upperCase(element){
//     return element.toUpperCase();
// }
// function lowerCase(element){
//     return element.toLowerCase();
// }
// console.log(studUpper); 
// const dates=["2003-11-12","1975-7-3","1965-30-8","1998-6-20"];
// const formattedDates=dates.map(formatDates);
// function formatDates(element){
//     const parts=element.split("-")
//     return `${parts[1]}/${parts[2]}/${parts[0]}}`;
// }
// console.log(formattedDates);
// filter()
// let numbers=[1,2,3,4,5,6,7,8,9];
// let evenNum= numbers.filter(isEven);
// function isEven(element){
//     return element % 2===0;
// }
// console.log(evenNum);
// const words=["apple","mango","bananana","watermelon","pomegrenate"];
// const shortWords= words.filter(shortwords);
// console.log(shortWords);
// function shortwords(element){
//     return element.length<=6;
// }
//  const prices=[10,23,2324,43,232323232323232323];
//  const total= prices.reduce(sum);
// //  console.log(`$${total}`);
 
//  function sum(accumulator,element){
//     return accumulator+element;
//  }
// const numbers=[1,2,3,4,5];
// const squares=numbers.map(function(element){
//     return Math.pow(element,2);
// });
// console.log(squares);

// const cubes=numbers.map(function(element){
//     return Math.pow(element,3);
// });
// console.log(cubes);
// const hello=(name,age) => {console.log(`hello ${name}`)
//                             console.log(`your age is ${age}`)};
// hello("kishore",18);
// const numbers=[1,2,3,4,5,6,7,8,9]
// const squares= numbers.map((element)=> Math.pow(element,2));
// const evenNum= numbers.filter((element)=> element%2===0);
// const total=numbers.reduce((accumulator,element)=>accumulator+element);
// console.log(`the sum of the array is ${total}`);
// console.log(evenNum); 
// console.log(squares);
// const person={
//     name:"kishore",
//     age:20,
//     work:"4i Apps solutions",
//     sayHello:function(){console.log(`hi im ${this.name}`)},
// }
// person.sayHello();

// CONSTRUCTORS
// function Car(make,model,year,color){
//     this.make=make,
//     this.model=model,
//     this.year=year,
//     this.color=color
//     this.drive= function(){console.log(`your car is ${this.year},${this.make}`);
//     }
// }
// const car1= new Car("BMW","M5",2024,"black");
// const car2= new Car("Merc","GLS400",2025,"blue");
// const car3= new Car("dodge","hellcat",2026,"red");

// car1.drive();
// car2.drive();
// car3.drive();

// CLASSES
// class product{
//     constructor(name,price){
//         this.name= name;
//         this.price=price;
//     }
    
//     displayProduct(){
//         console.log(`Product:${this.name}`);
//         console.log(`price:${this.price}`);
//     }
//     calculateTotal(salesTax){
//         return this.price+(this.price*salesTax);
//     }
// }
// const salesTax= 0.05;
// const product1= new product("shirt",2000);
// product1.displayProduct();

// const total=product1.calculateTotal(salesTax);
// console.log(`Total price including tax:${total}`);

// STATIC KEYWORD
// class MathUtil{
//     static PI=3.14;
//     static getDiameter(r){
//         return r*2;
//     }
//     static getCircumference(r){
//         return this.PI* r*2;
//     }
// }
// console.log(MathUtil.getDiameter(5));
// console.log(MathUtil.getCircumference(10));

// class user{
//     static userCount=0;
//     constructor(username){
//         this.username= username;
//         user.userCount++;
//     }
// }
// const user1= new user("kishore");
// const user2= new user("shanjith");
// const user3= new user("dhanush");
// console.log(user1.username);
// console.log(user.userCount);

//  class Animal{
//     alive= true;
//     eat(){
//         console.log(`this ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`this ${this.name} is sleeping`);
//     }
//  }
// class Rabit extends Animal{
//     name="rabbit";
// }
// class Fish extends Animal{
//     name="fish";
// }
// const rabbit= new Rabit();
// const fish= new Fish();

// console.log(rabbit.alive);
// rabbit.eat();

// fish.sleep();

// SUPER KEYWORD
// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }
// class Rabbit extends Animal{
//     constructor(name,age, runSpeed){
//         super(name,age);
//         this.runSpeed=runSpeed;
//     }
// }
// class Fish extends Animal{
//     constructor(name,age,swimSpeed){
//         super(name,age);
//         this.swimSpeed=swimSpeed;
//     }
// }
// class Hawk extends Animal{
//     constructor(name,age,flySpeed){
//         super(name,age);
//         this.flySpeed=flySpeed;
//     }
// }
// const rabbit= new Rabbit("nigga",21,25);
// const fish= new Fish("nigga1",23,2);
// const hawk= new Hawk("nigga2",27,45);
// console.log(hawk.name);

// GETTERS AND SETTERS
// class Rectangle{
//     constructor(width,height){
//         this.width=width;
//         this.height=height;
//     }
//     set width(newWidth){
//         if(newWidth>0){
//             this._width= newWidth;
//         }
//         else{
//             console.error("width must be a positive number");
//         }
//     }
//     set height(newHeight){
//         if(newHeight>0){
//             this._height= newHeight;
//         }
//         else{
//             console.error("Height must be a positive number");
//         }
//     }
//     get width(){
//         return this._width;
//     }
//     get height(){
//         return this._height;
//     }
//     get area(){
//         return this._width*this._height;
//     }
// }
// const rectangle= new Rectangle(3,5);
  
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);
//q2)
// class Persons{
//     constructor(firstName,lastName,age){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age;
//     }
//     set firstName(newFirstName){
//         if( typeof newFirstName==="string"&& newFirstName.length>0){
//             this._firstName=newFirstName
//         }
//         else{
//             console.error("invalid input");
//         }
//     }
//     set lastName(newLasttName){
//         if( typeof newLasttName==="string"&& newLasttName.length>0){
//             this._lastName=newLasttName
//         }
//         else{
//             console.error("invalid input");
//         }
//     }
//     set age(newAge){
//         if( typeof newAge==="number"&& newAge>=0){
//             this._age=newAge
//         }
//         else{
//             console.error("invalid input");
//         }
//     }
//     get firstName(){
//         return this._firstName;
//     }
//     get lastName(){
//         return this._lastName;
//     }
//     get age(){
//         return this._age;
//     }
// }
// const person= new Persons("kishore","rao",20);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
//  const person={
//     fullname:"spongebob sqp",
//     age: 30,
//     isStudent: true,
//     hobbies:['karate','swimming','fishing'],
//     address:{
//         street:"124 conch st",
//         city:"bikini bhottom",
//     }
//  }
//  console.log(person.city);
// let fruits=[,9,5,7,3,2,4,1,,5,5456,33];
// fruits.sort((a,b)=>a-b) 
// console.log(fruits);
// const people=[{name:'sponegbob',age:19,gpa:9},
//     {name:'kishore',age:20,gpa:3},
//     {name:'dhanush',age:19,gpa:10},
//     {name:'shanjith',age:30,gpa:8}]
// people.sort((a,b)=>a.name.localeCompare(b.name));
// console.log(people)

// DIGITAL CLOCK
// function updateClock(){
//     const now= new Date();
//     let hours= now.getHours()
//     const meridian= hours>=12?"PM":"AM";
//     hours=hours%12||12;
//     hours=hours.toString().padStart(2,0);
//     const minutes= now.getMinutes().toString().padStart(2,0);
//     const seconds= now.getSeconds().toString().padStart(2,0);
//     const timeString= `${hours}:${minutes}:${seconds}:${meridian}`;
//     document.getElementById("clock").textContent=timeString;
// }
// updateClock();
// setInterval(updateClock,1000);

const display= document.getElementById("display");
let timer=null;
let startTime=0;
let elapsedTime=0;
let isRunning= false;

function start(){
    if(!isRunning){
        startTime= Date.now()-elapsedTime;
        timer=setInterval(update,10);
        isRunning=true;
    }

}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime= Date.now()- startTime;
        isRunning= false;
    }
}

function reset(){
    clearInterval(timer);
    startTime=0;
    elapsedTime=0;
    isRunning= false;
    display.textContent=("00:00:00:00");
}
function update(){
    const currentTime= Date.now();
    elapsedTime= currentTime- startTime;

    let hours= Math.floor(elapsedTime/ (1000 * 60 * 60));
    let minutes= Math.floor(elapsedTime/(1000 * 60) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60); // Correct
    let ms = Math.floor((elapsedTime % 1000) / 10);

    hours= String(hours).padStart(2,"0");
    minutes= String(minutes).padStart(2,"0");
    seconds= String(seconds).padStart(2,"0");
    ms= String(ms).padStart(2,"0");

    display.textContent= `${hours}:${minutes}:${seconds}:${ms}`;
}

