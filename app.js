// // // console.log("Hello world");
// // // console.log("Welcome to class");
// // // console.log("bye bye css");

// // // // JS VARRIABLES AND VALUES
// // // //let x = 2;
// // // //x = 4;
// // // //const y = 9;
// // // //console.log(x);
// // // //console.log(y);
// // // //Conventions and rules in naming var
// // // //have a logical var name
// // // //example
// // // //const b = "Mubarak"
// // // //const firstName = "Mubarak"
// // // //Compound names - camelcasing
// // // const country = "nigeria";
// // // let state = "Uyo";

// // // console.log(country);
// // // console.log(state);
// // // state = "Anambra state";
// // // console.log(state);
// // // //JS DATA TYPES-(Primitive, Complex)
// // // //Strings -quotes -text
// // // //STRINGS
// // // //E..G
// // // const firstName = "Ebuka";
// // // const lastName = "Nwankwo";
// // // const middleName = "Chris";
// // // const currentJob = "Developer";
// // // const email = "Chrisbrandford4@gmail.com";
// // // //String Concatenation= joining of Strings+++
// // // const fullName = firstName +" "+ middleName +" "+ lastName;
// // // console.log(fullName);
// // // //spacing concatenations= +""+
// // // // example =my name is Ebuka I work as a Developer
// // // const description = " My name is " + firstName + " I work as a " + currentJob
// // // console.log(description);
// // // //You can message me on this email ghhgfj@gmail.com
// // // const message = " You can message me on this " + email
// // // console.log(message);
// // // //Getting characters from strings -javascript is positioned based counting from 0-
// // // //example
// // // console.log(middleName[1]);
// // // //String length
// // // //example
// // // console.log(firstName.length);
// // // console.log(description.length);
// // // //String Method
// // // //This are functions we can perform on strings
// // // //Transform-Uppercase and Lowercase
// // // //examples

// // // console.log(fullName.toUpperCase());
// // // console.log(fullName.toLowerCase());
// // // //Extracting parts of a string --slice substring
// // // //examples
// // // const email2 = "mubarak@techstudioacademy.com"
// // // //string .slice[0, 7]
// // // console.log(email2.slice(0, 8));
// // // console.log(email2.slice(5, 12));
// // // console.log(email2.slice(-5, -1));
// // // //string .substring(start,count of characters)
// // // //example
// // // console.log(lastName.substr(0, 4));
// // // //replace string content--replace replaceALL
// // // //examples
// // // console.log(email2.replace("@", "$"));
// // // console.log(email2.replaceAll("b", "@"));
// // // //includes , indexof, lastindexof,trim, concat,
// // // //trimstart, trimend,startswidth , endswidth....
// // // //Includes Example
// // // console.log(email2.includes("arak"));
// // // //indexof example
// // // console.log(email2.indexOf("b"));
// // // //lastindexof example
// // // console.log(email2.lastIndexOf("@"));
// // // //trim example
// // // const user = "   Mubarak   ";
// // // const password = "     08146256800"
// // // console.log(user.length, password.length);

// // // const formattedUser = user.trim();
// // // const fomattedpassword = password.trimStart();
// // // //template literals
// // // const author = "chinua Achebe";
// // // const book = "Things Fall Apart";
// // // const year1 = "1996";
// // // //The book things fall apart was written by chinua achebe in the year 1996
// // // const bookDescription = " The book " + book + " was written by " + author + " in the year " + year1;
// // // console.log(bookDescription);

// // // //Example of templateb literals--
// // // const bookDescription2 = `The book ${book} was written by ${author} in the year ${year1}`;
// // // //My favourite author is Chinua achebe
// // // const fav = `My favourite author is ${author}`;
// // // console.log(fav);



// // // //Numbers
// // // //math operators
// // // //- + -*/** %
// // // console.log(6 % 2); //0
// // // console.log(5 % 2); //1

// // // console.log(5 / 2); //2.5
// // // //order of operations - bodmas, pemdas
// // // //
// // // console.log(6 / 3 + 5);//7
// // // //example
// // // let balance = 500;
// // // const t1 = 20;
// // // const t2 = 100;
// // // const d1 = 200;
// // // console.log(balance - t1 - t2 + d1); //580
// // // //Increasing the Value of totals
// // // let likes = 0;
// // // likes += 1;
// // // likes += 1;
// // // likes += 20;
// // // likes++;
// // // likes--;
// // // likes -= 2
// // // console.log(likes);

// // // //boolean - True or False
// // // console.log(true);
// // // console.log(false);
// // //      //example
// // // const continet = "America";
// // // const country2 = "USA";
// // // let population = 2099000;
// // // const isIsland = false
// // // const language = "English"
// // // console.log(continet, country2, population);
// // // population /= 2;
// // // population+=1
// // // console.log(population);
// // // //template literals
// // // const describe = `${country2} is in ${continet} and its population of ${population} people speak ${language}`
// // // console.log(describe);
// // // const describe2 = `${country2} as a country speak majorly ${language}`
// // // console.log(describe2);
// // // // boolean true or false--comparison operators(- < > <= >= ==)
// // // console.log(6 > 3);//true
// // // console.log(6 < 3);//false
// // // console.log(5 >= 5.0);//true
// // // //logical operators and - or - not
// // // console.log(5 > 6 && 2 == 2);//AND //false
// // // console.log(6 > 7 || 2 === 2); //OR //true
// // // //Conversion and coersion
// // // //=Conversion
// // // //string To numbers
// // // const str = "90"
// // // console.log(typeof str);
// // // const converted = Number(str);
// // // console.log(typeof converted);
// // // console.log(converted);

// // // //Numbers to strings
// // // const num = 9000000;
// // // console.log(typeof num);
// // // const converted2 = String(num);
// // // console.log(typeof converted2);
// // // console.log(converted2);

// // // //Corecion

// // // //Null
// // // // means nothing
// // // let age = null;
// // // console.log(age , age + 4, `the age is ${age}`);
// // // //Undefined
// // // //means  no value
// // // let year;
// // // console.log(year);
// // // console.log(year , age + 4, `the year is ${year}`);
// // // // truthy and falsy
// // // //Truthy
// // // //console.log(Boolean("hi")); //TRUTHY=true
// // // //Falsy
// // // //values 0 null undefined

// // // //CONTROL FLOW
// // // //Conditional Statement//
// // // //Examples
// // // //if(condition){code}
// // // //const passcode = "08146256800";
// // // //if (passcode.length > 6) {
// // //     // console.log("Your passcode is strong");
// // // //}
// // // //if else
// // // //if(condition){
// // //   //CODE 1
// // //   //}else{
// // // //Code 2
// // //  // }
// // // //}
// // const country = "Canada";
// // const continet = "America";
// // const population = 20;
// // const isIsland = false;
// // const language = "igbo";
// // //sarah speaks Igbo has less than 50 people and is not an island
// // //you should live in portugal
// // //portugal does that have you criteria
// // if (language === "igbo" && population < 50 && !isIsland) {
// //      console.log(`You should live in ${country}`);
// // } else {
// //      console.log(`${country} does not meet your criteria`);
// // }
// //      //example 2
// // const age = 19;
// // //>=18 you must be above the age of 18 yes or no
// // if (age >= 18) {
// //      console.log("yes you are");
// // }
// // else {
// //      console.log("you are not");
// // }
// // const num = 11;
// // if (num > 3) {
// //      console.log(`${num} is a positive Number`);
// // }
// // else if (num < 0) {
// // console.log(`${num} is a negative number`);
// // }
// // else {
// //      console.log("this is Zero");
// // }
// // // even or odd
// // const tap = 9;
// // if (tap % 2 === 0) {
// //      console.log(`${tap} is even`);
// // }
// // else {
// //      console.log(`${tap} is Odd`);
// // }
// // const club = 79;

// // if (club < 18 ) {
// //      console.log("welcone to the baby section");
// // }
// // else if (club <= 50 ) {
// // console.log("welcome to the vvip");
// // }
// // else  {
// //      console.log("welcone to the club");
// // }
// // //SWITCH STATEMENT
// // const day = 4;
// // switch (day) {
// //      case 1:
// //           console.log("MONDAY");
// //           break;
// //  case 2:
// //           console.log("TUESDAY");
// //           break;
// //       case 3:
// //           console.log("WEDNESDAY");
// //           break;
// //       case 4:
// //           console.log("THURSDAY");
// //           break;
// //       case 5:
// //           console.log("FRIDAY");
// //           break;
// //       case 6:
// //           console.log("SATURDAY");
// //           break;
// //       case 7:
// //           console.log("SUNDAY");
// //           break;
// //      default:
// //           console.log("NOT A VALID ENTRY");
// //           break;
// // }
// // const grade = "A"
// // switch (grade) {
// //      case "A":
// //                case "a":

// //           console.log("EXCELLENT");
// //           break;
// //      case "B":
// //                case "b":

// //           console.log("VERY GOOD");
// //           break;
// //      case "C":
// //                case "c":

// //           console.log("GOOD");
// //           break;
// //      case "D":
// //                case "d":

// //           console.log("FAIR");
// //           break;
// //      case "E":
// //                case "e":

// //           console.log("POOR");
// //           break;
// //      case "F":
// //                case "f":

// //           console.log("FAIL");
// //           break;
      
// //      default:
// //           console.log("NOT A VALID ENTRY");
// //           break;
// // }
// // // Ternary operators
// // // This is more morden way of writting if else statement
// // //if (condition){code 1}else{code 2}

// // //condition ? action 1 : action 2
// // //example
// // // 15 > 7 ? console.log("Yes") : console.log("No");
// // // const num2 = 46;
// // // num2 % 2 === 0
// // // ? console.log("This is An EVEN number") :console.log("This is an ODD number");
// // // //LOOPS
// // // // repitive task -- for , while , do ..while loop
// // // //For
// // // //example
// // // //for( initializer let i = 0; i++){code}
// // // for (let i = 0; i < 10; i++){ console.log(`in the loop ${i}`); }

// // // console.log("outside of the loop");
// // // //sum of
// // // let sum = 0
// // // for (let i = 0; i <= 10; i++){
// // //      console.log(i);
// // // }
// // // let x = 0;
// // // while (x < 20) { console.log("HELLO"); x++; }

// // //Functions
// // // fuction declaraction--
// // function myFunction() { console.log("Hello CLASS");
// //      console.log("YOU ARE WELCOME");
// // }
// // myFunction();

// // function greet(name) {
// //      console.log("Welcome" + name);
// // }
// // greet("EBUKA");
// // greet("Emmanuel")

// // function greet(name = USER ) {
// //      console.log("welcome to you" + name);
// // }
// //    function myOwn(name = "user" , age = 18) {
// //      console.log("welcome" + name +  age);
// // }
// // myOwn("John", 76);
// // myOwn();
// // //calculate the age of users
// // //2023 - YEAR
// // function calcage(year) {
// //      const age = 2023 - year;
// //      console.log(`your age is ${age}`);
// // }
// // // calcage(1960);
// // // calcage(2000);
// // // function sumNums(a, b) {
// // //    console.log(`the sum of ${a} and ${b} is ${a + b}`);
// // // }
// // // sumNums(4.5, 78)
// // // sumNums(-45, 87)
// // // writting a function called describecountry it takes 3 parameters country , population , and capitalcity
// // function describeCountry(country, population, capitalCity) {
// //     console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
// // }
// // describeCountry("nigeria", 12, "FCT");
// // describeCountry("Canada", 52, "Ottawa");
// // describeCountry("Southafrica", 12, "johansburg");
// // describeCountry("Kenya", 5, "Nariaobi");
// // //Email validation using function***
// // function checkEmail(email) {
// //      if (email.includes("@")) {
// //        console.log(`${email} is a a valid address`);
// //      }
// //      else {
// //           console.log(`${email} is not a valid email address`);
// //      }
// // };
// // checkEmail("afdgf@gmail.com")
// // checkEmail("fgytgmail.com")
// // //FUNCTION EXPRESSION
// // const myAge = 980
// // console.log(myAge);

// // //myFunction2(4, 5);
// // const myFunction2 = function (a, b) {
// //      console.log("Anything");
// //      console.log(a + b);
// // }
// // myFunction2(7, 8);
// // //Return keyword

// // const precious = function (a, b) {
// //      return a * b;
// // };
// // precious(9, 6);
// // const test = precious(10, 10);
// // console.log(test);

// // //create a function thats calculates the average of the two teams
// // //D--103, 98, 89
// // //K--110, 87, 95
// // const calcAverage = function (a, b, c) {
// //      const avg = (a + b + c) / 3;
// //      return Number(avg.toFixed(2));
// // };
// // const avgDolphin = calcAverage(123, 98, 89);
// // const avgKaola = calcAverage(110, 87, 95);
// // console.log(avgDolphin, avgKaola);


// // function checkWinner(teamA, teamB) {
// //      if (teamA > teamB) {
// //       console.log("First Team Won");
// //      } else if (teamB > teamA) {
// //           console.log("Second Team Won");
// //      } else {
// //           console.log("No Winner");
// //      }
// // }
// // console.log(avgDolphin, avgKaola);
// //***Arrow  FUNCTION */
// //Arrow fuctions are used for smpilifying functions using => the arrow symbol
// //const name = ()=>{}
// const logger = (a, b, c) => {
//      const total = a + b + c;
//      return total;
// };
// console.log(logger(4, 5, 7));
// const difference = (a, b) => {
//      return a - b;
// };
// console.log(difference(67, 50));

// const calAvg = (a, b, c) => {
//      const avg = (a + b + c) / 3;
//      return Number(avg.toFixed(2));
// };

// //VARRIABLE SCOOPING--global / local varriables
// //Global
// const a = 51;
// console.log(a);
// //Local
// const local = () => {
//      const a = 7;
//      const b = 8;
//      console.log(a);
// }
// local()
// // // Ararrys [elements, elements, elements]
// const students = ["mofe", "peter", "ebuka",];
// console.log(students);
// //Ararry properties and methods
// //** properties */
// console.log(students.length);
// //get element in an arrary
// console.log(students[0]);
// // picking element position
// console.log(students[students.length -1]);
// // METHODS
// // includes , sort, pop, push, shift, unshift,
// // slice, splice, concat, join, tostring

// // filter find map for each
// // Method 1 converting to string(tostring, join)
// //TOSTRING
// console.log(students.toString());
// //JOIN
// //with join you can pick what you want to seperate it with
// console.log(students.join(" "));
// // Adding elements to an array--(Push and unshift)
// //push
// students.push("ola");
// students.push("nike");
// console.log(students);
// //unshift
// students.unshift("Ebuka");
// students.unshift("Preker");
// console.log(students);
// //Removing elements from an arrary(pop shift)
// //POP REMOVES FROM THE BACK
// students.pop()
// students.pop()
// console.log(students);
// //SHIFT REMOVES FROM THE FRONT
// students.shift();
// console.log(students);
// //SORT arranges element alphabectically
// console.log(students.sort());
// //RESERSE arranges the elemment alphabectically from behind
// console.log(students.reverse());
// //Concat
// //lastindexof / indexof
// const anotherStudent = ["solo", "Zainab"];
// console.log(students.concat(anotherStudent, ["Ayo", "Ade", "Bobby"]));
// //slice
// console.log(students.slice(0, 2));

// const countries = ["Canada", "America", "Germany", "London"]
// console.log(countries.length);
// if (countries.length > 5) {
//      console.log(`"Yes it is more than "`);
// } else {
//      console.log(`"No"`);
// };
// let savings = 20000;
// const transaction = [5000, -10000, -100]
// transaction.push(-2000)
// transaction.push(50000)
// transaction.push(-3000)
// transaction.pop();

// console.log(transaction);
// let debit = 0;
// let credit = 0;
// for (i = 0; i < transaction.length; i++) {
//      // console.log(transaction[i]);
//      savings += transaction[i];
//      if (transaction[i] < 0) {
//           debit += transaction[i];
//           console.log(`You have been debited ${transaction[i]}`);
          
//      } else {
//           credit += transaction[i];
//          console.log(`You have been credited ${transaction[i]}`);
//      }
// }
// console.log(`Your account balance is ${savings}`);
// console.log(`The total debit is ${debit}`);
// console.log(`The total credit is ${credit}`);
// //FILTER FIND MAP FOREACH
// //Foreach--higher order function, call back function
// const friends = ["John", "Jane", "Adam", "Jennifer", "Owen"];
// friends.includes("Lester");

// friends.forEach((friend, index) => {
//      console.log(`${index}The name of my friend is ${friend}`);
// });
// friends.forEach((f, index) => {
//      console.log(f, index);
// });
// //Map
// friends.map((val) => {
//      if (val === "Jane" || val ==="Adam") {
//           console.log(`${val} is my best friend`);
//      } else {
//           console.log(`${val} is just my friend`);
//      }
// });
// // Filter/ find
// const filteredFriends = friends.filter((friend) => {
//      return friend.length > 6;
// });
// console.log(filteredFriends);
// //FIND--
// const foundUser = friends.find((friend) => {
//      return friend.startsWith("J")
// });
// console.log(foundUser);
// //USING ARROW FUNCTION ON IT
// const result = friends.filter((friend) => friend.length > 3);
// const result2 = friends.find((f) => f.startsWith("O"));

// console.log(result, result2);
// const movement = [300, -50, 700, 400, -300];
// const total = movement.reduce((acc, val) => {
//      return acc + val;
// }, 0);
// console.log(`Your total bill is ${total}`);
// // //Objects
// //example -- properties ,, methods
// const desc = ["Mubarak","Ola", 39,"Developer",["Shola", "Toyin"].concat,]
// //car key-value properties ===
// const user = {
//      fristName: "Ebuka",
//      lastName: "chuks",
//      age: 50,
//      job: "Fullstack Engineer",
//      friends:["solo", "ikotun BJ", "smooker" ]
// }
// console.log(user);
// //Access properties from anm object== DOT NOTATION ,, BRACKET
// console.log(user.fristName.toUpperCase());
// console.log(user.age);
// //object name["propertyBName"]
// console.log(user["friends"].includes("steven"));

// const nameKey = "Name";
// console.log(user["last" + nameKey]);

// //Adding into the object
// user.hasAcar = true;
// user.status = "Married";
// console.log(user);
// // deleting
// delete user.friends;
// console.log(user);

// // object methods the are functions working on an object (addig functions inside of an object)
// const book = {
//      title: "Rich Dad Poor Dad",
//      author: "Robert Kiyosaki",
//      year: 2001,
//      pages: 207,
//      similarBooks: [
//           "Richest Man in Babylon",
//           "The Monk sold his Ferrari",
//           "Think ang Grow Rich",
//      ],
//      publisher: "Macmillan",
//      getSummary: function () {
//           return `The title of the book is ${this.title} written by ${this.author} in the year${this.year}`
//      //the title is rich poor dad written by the robert in the year 2001
//      },
// };
// console.log(book);
// console.log(book.getSummary());

// //Object destructing == This are used for picking more than one properties from an object ay a time
// //const {properties}  =objectnames
// //publisher, author, year
// const { publisher, author, pages, year } = book;
// console.log(publisher);

// const users = [
//      { owner: "Peter", userName: "Johnny123", password: "35634ggg", age: 17 },
//      { owner: "Jane", userName: "Janegirl%123", password: "35634uugg", age: 45 },
//      { owner: "Mario", userName: "Marioany1993", password: "35634glllgg", age: 87 },

// ];// >= 18
// const canView = users.filter((user) => {
//      return user.age >= 18;
// });
// console.log(canView);
// //J
// const search = users.filter((user) => {
//      return user.owner.includes("J") || user.userName.includes("J");
// });
// console.log(search);

// //Left hand rest - Righthand spread
// //Rest
// const ages = [32, 54, 16, 65, 89];
// const newAge = [2, ...ages, 76, 80]
// console.log(newAge);

// //const [varNames] = arrName
// const [...rest] = ages;
// console.log(rest);

// //MATH OBJECT
// //(math constants)
// //MATH METHODS==
// // squreroot(squrt),
// console.log(Math.sqrt(65789));
// //TRUNC METHHOD
// console.log(Math.trunc(9.789));
// //Round Method
// console.log(Math.round(7.34));//7
// console.log(Math.round(0.23));//0
// console.log(Math.round(67.98));//68
// console.log(Math.round(2.56));//3
// // CEIL METHOD =just like rounding up  too
// console.log(Math.ceil(1.1));//2
// //FLOOR METHOD== rounding down
// console.log(Math.floor(6.7));
// //RANDOM METHOD
// console.log(Math.random() * 2 + 1); // 0 1 2 3 4 5
// console.log(Math.trunc(Math.random() * 6));


// //Example
// const computer = ["rock", "paper", "scissors",];
// const randomNum = Math.trunc(Math.random() * 3); //0 1 2
// const computerChoice = computer[randomNum]

// const playerChoice = "rock"

// const playerChoice1 = prompt("Enter a choice (rock, paper, scissors)");

// const checkWin = function (computer, player) {
//      if (computer === player) {
//           return "This is a tie";
//      } else if (player === "rock") {
//           if (computer === "Scissors") {
//                return "Rock smashes scissors,You Win!!";
//           } else {
//                return "Paper covers rock ,You lose!"
//           }
          
//      } else if (player === "paper") {
//           if (computer === "rock") {
//                return "Paper covers rock, You Win!!"
//           } else {
//                return "Scissors cuts paper You Lose!"
//           }
//      } else if (player === "Scissors") {
//           if (computer === "paper") {
//                return "Scissors cut paper, You Win!!"
//           } else {
//                return "Rock smashes scisors you Lose!!"
//           }
//      }
// }
// const result3 = checkWin(computerChoice, playerChoice);
// console.log(result3);

// ASYNCHRONOUS JS
console.log(1);
//taking time log(take time)
console.log(2);

//for(i = 0; i < 1000; i++) {
 //    console.log(i) 
//}
//console.log("ANOTHER THING");

console.log("A");
console.log("B");
setTimeout(() => {
     console.log("IN THE TIMEOUT");
}, 5000);

console.log("C after the timeout");

const myInterval = setInterval(() => {
     console.log("Welcome User");
}, 3000);

setTimeout(() => {
     clearInterval(myInterval)
}, 15000);

//promises
const url = "https://jsonplaceholder.typicode.com/users";
//FETCH
// fetch(url).then((Response) => {
//      return Response.json();
// })
// .then((data) => {
//      console.log(data);
// });

const fetchData = (site) => {
     fetch(site)
          .then((res) => res.json())
          .then((data) => console.log(data))
     .catch((err) => {
          console.log(err);
});
};
fetchData(url);
fetchData("https://jsonplaceholder.typicode.com/posts");

//try and catch block
try {
  console.log(fghjkl);   
} catch (error) {
  console.log(error);   
}
// Async Await
const getData = async (site) => {
     try {
          const response = await fetch(site);  
          const data = await response.json();
          console.log(data);
     } catch (error) {
          console.log(error);
     }
}