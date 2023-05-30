console.log("Hello world");
console.log("Welcome to class");
console.log("bye bye css"); 

// JS VARRIABLES AND VALUES
//let x = 2;
//x = 4;
//const y = 9;
//console.log(x);
//console.log(y);
//Conventions and rules in naming var
//have a logical var name
//example
//const b = "Mubarak"
//const firstName = "Mubarak"
//Compound names - camelcasing
const country = "nigeria";
let state = "Uyo";

console.log(country);
console.log(state);
state = "Anambra state";
console.log(state);
//JS DATA TYPES-(Primitive, Complex)
//Strings -quotes -text
//STRINGS
//E..G
const firstName = "Ebuka";
const lastName = "Nwankwo";
const middleName = "Chris";
const currentJob = "Developer";
const email = "Chrisbrandford4@gmail.com";
//String Concatenation= joining of Strings+++
const fullName = firstName +" "+ middleName +" "+ lastName;
console.log(fullName);
//spacing concatenations= +""+
// example =my name is Ebuka I work as a Developer
const description = " My name is " + firstName + " I work as a " + currentJob
console.log(description);
//You can message me on this email ghhgfj@gmail.com
const message = " You can message me on this " + email
console.log(message);
//Getting characters from strings -javascript is positioned based counting from 0-
//example
console.log(middleName[1]);
//String length
//example
console.log(firstName.length);
console.log(description.length);
//String Method
//This are functions we can perform on strings
//Transform-Uppercase and Lowercase
//examples

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
//Extracting parts of a string --slice substring
//examples
const email2 = "mubarak@techstudioacademy.com"
//string .slice[0, 7]
console.log(email2.slice(0, 8));
console.log(email2.slice(5, 12));
console.log(email2.slice(-5, -1));
//string .substring(start,count of characters)
//example
console.log(lastName.substr(0, 4));
//replace string content--replace replaceALL
//examples
console.log(email2.replace("@", "$"));
console.log(email2.replaceAll("b", "@"));
//includes , indexof, lastindexof,trim, concat,
//trimstart, trimend,startswidth , endswidth....
//Includes Example
console.log(email2.includes("arak"));
//indexof example
console.log(email2.indexOf("b"));
//lastindexof example
console.log(email2.lastIndexOf("@"));
//trim example
const user = "   Mubarak   ";
const password = "     08146256800"
console.log(user.length, password.length);

const formattedUser = user.trim();
const fomattedpassword = password.trimStart();
//template literals
const author = "chinua Achebe";
const book = "Things Fall Apart";
const year1 = "1996";
//The book things fall apart was written by chinua achebe in the year 1996
const bookDescription = " The book " + book + " was written by " + author + " in the year " + year1;
console.log(bookDescription);

//Example of templateb literals--
const bookDescription2 = `The book ${book} was written by ${author} in the year ${year1}`;
//My favourite author is Chinua achebe
const fav = `My favourite author is ${author}`;
console.log(fav);



//Numbers
//boolean
//Null
//Undefined