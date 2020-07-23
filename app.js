//****************************** Chapter 1 ******************************

//Task 1
alert("Hello Visitors!");

//Task 2
alert("Error! Please enter a valid password.");

//Task 3
alert("Welcome to JS Land...\nHappy Coding!");

//Task 4 
alert("Welcome to JS Land...");
alert("Happy Coding!");

//Task 5
alert ("Hello... I  can run JS through my web browser's console"); // run in browser console and working fine.

//Task 6
// I have used alert in my existing HTML CSS project and it is working fine.

//Task 7 
// I had placed <script></script> tag in my Head, Before Body, Inside pages HTML and after pages HTML and it is also working fine.

//****************************** Chapter 2 ******************************

//Task 1 
let username;

//Task 2
let myName = "Umer Waqas";

//Task 3
let message = "Hello World";
alert(message);

//Task 4
let name = "Jhone Doe";
let checkAge = "15 years old";
let course = "Certified Mobile Application Development";

alert(name);
alert(checkAge);
alert(course);

// Task 5
let food = "PIZZA";
alert(food + "\n" + "PIZZ\nPIZ\nPI\nP");

//Task 6
let email = "waqasumer30@gmail.com";
alert("My email address is " + email);

//Task 7
let book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

//Task 8 
document.write("Yah! I can write HTML content through JavaScript" + "<br>");

//Task 9
let a = "“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”";
alert(a);

//****************************** Chapter 3 ******************************

//Task 1
let age = 24
alert("I am " + age + " years old ");

//Task 2
let visitors = 14;
alert("You have visited this site " + visitors + " times");

//Task 3
let birthyear = 1996;
document.write("My birth year is " + birthyear);
document.write("Data type of my declared letiable is number");

//Task 4
let visitorsName = "John Doe";
let product = "T-shirt";
let quantity = "5";

document.write("<br>" + visitorsName + " ordered " + quantity + " " + product + "(s)" + " on XYZ Clothing Store");

//****************************** Chapter 4 ******************************

//Task 1
var j = 0, k = 5, l = 5;

//Task 2

// Legal Variables

// var name;
// var $name;
// var _name
// var $my_1stVariable;


// illegal Variables

// var 2number;
// var 2;
// var 3_myname;
// var .name;
// var 2,b;

//Task 3
document.write("<h1>Rules for naming JS letiables</h1>" + "<br>");
document.write("letiable names can only contain , numbers, $ and _ . For Example: $my_1stletiable" + "<br>");
document.write("letiable names must begin with a letter, $ or _ . For example $name, _name or name" + "<br>");
document.write("letiable names are case Sensitive" + "<br>");
document.write("letiable names should not be JS Keywords");

// ****************************** Chapter 5 ******************************

//Task 1
let input1 = +prompt("Enter number 1");
let input2 = +prompt("Enter number 2");
let sum = input1 + input2;
document.write("<br>" + "Sum of " + input1 + " " + "and " + input2 + " is " + sum);

//Task 2

//Subtraction
let input1 = +prompt("Enter number 1");
let input2 = +prompt("Enter number 2");
let sum = input1 - input2;
document.write("<br>" + "Answer of " + input1 + " Minus " + input2 + " is " + sum);

//Multiplication
let input1 = +prompt("Enter number 1");
let input2 = +prompt("Enter number 2");
let sum = input1 * input2;
document.write("<br>" + "Answer of " + input1 + " Multiply " + input2 + " is " + sum);

//Division
let input1 = +prompt("Enter number 1");
let input2 = +prompt("Enter number 2");
let sum = input1 / input2;
document.write("<br>" + "Answer of " + input1 + " Divide " + input2 + " is " + sum);

//Modulus
let input1 = +prompt("Enter number 1");
let input2 = +prompt("Enter number 2");
let sum = input1 / input2;
document.write("<br>" + "Answer of " + input1 + " Modulus " + input2 + " is " + sum);

//Task 3
let number;
number = 5;
number = 5 + 1;
number = number + 7;
number = number - 1;
number = number % 3;
document.write("<br><br><br>" + "Value after letiable declaration is Undefined");
document.write("<br>" + "Initial value: 5");
document.write("<br>" + "Value after increment is: 6 ");
document.write("<br>" + "Value after addition is: 13");
document.write("<br>" + "Value after decrement is: 12");
document.write("<br>" + "The remainder is : " + number);

//Task 4
let ticketPrice = 600;
let buying = 5;
let cost = ticketPrice * buying;
document.write("<br><br>" + "Total cost to buy " + buying + " tickets to a movie is " + cost + " PKR");

//Task 5
let n = 4;
let result;

for (let i = 1; i <= 10; i++) {
    result = n * i;
    document.write("<br><br>" + n + " x" + " " + i + " = " + result);
}

//Task 6
let temp = 70;
let C = (temp - 32) * 5 / 9;
let F = (temp * 9 / 5) + 32;
document.write("<br><br>" + temp + "°C" + " is " + F + "°F" + "<br>");
document.write(temp + "°F" + " is " + C + "°C" + "<br>");

//Task 7
let item1 = 650;
let quanitem1 = 3;
let item2 = 100;
let quanitem2 = 7;
let shippingCharges = 100;

let totalcost = item1 * quanitem1 + item2 * quanitem2 + shippingCharges;

document.write("<br><br>" + "Price of item 1 is: " + item1 + "<br>");
document.write("Quantity of item 1 is: " + quanitem1 + "<br>");
document.write("Price of item 2 is: " + item2 + "<br>");
document.write("Quantity of item 2 is: " + quanitem2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + "<br><br>");
document.write("Total cost of your order is: " + totalcost + "<br>");

//Task 8
let totalmarks = 980;
let marksObtained = 804;
let percentage = 100 * marksObtained / totalmarks;

document.write("<br><br>" + "<h1>Marks Sheet</h1>" + "<br><br>");
document.write("Total Marks: " + totalmarks + "<br>");
document.write("Total Marks: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%" + "<br>");

//Task 9
let amountinDollar = 10;
let amountinRiyal = 25;
let dollar = 104.80;
let riyal = 28;

let conversionPKR = amountinDollar * dollar + amountinRiyal * riyal;
document.write("<br><br>" + "<h1>Currency in PKR</h1>" + "<br>");
document.write("Total Currency in PKR: " + conversionPKR + "<br>");


//Task 10
let m = 1;
m = 5 * 10 / 2;
document.write("Result: " + m);


//Task 11
let currentYear = 2020;
let birthYear = 1996;
let yourAge = currentYear - birthYear;
let supposeAge = currentYear - birthYear - 1;

document.write("<br><br>" + "<h1>Age Calculator</h1>" + "<br>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + supposeAge + " or " + yourAge + " years old " + "<br>");

//Task 12
let radius = 20;
let Cirumference = 2 * 3.142 * radius;
let areaOfCircle = 3.142 * radius * radius;
document.write("<br><br>" + "<h1>The Geometrizer</h1>" + "<br>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The Cirumference is: " + Cirumference + "<br>");
document.write("he Area is: " + areaOfCircle + "<br>");

//Task 13
let favouriteSnack = "Chocolate Chip";
let currentAge = 15;
let estimatedAge = 65;
let days = 18250;
let amountOfSnacksPerDay = 3;
let need = amountOfSnacksPerDay * days;


document.write("<br><br>" + "<h1>The Lifetime Supply Calculator:</h1>" + "<br>");
document.write("Favourite Snack: " + radius + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + estimatedAge + "<br>");
document.write("Amount of Snacks per day: " + amountOfSnacksPerDay + "<br>");
document.write("You will need: " + need + " " + favouriteSnack + " to last you until the ripe old age of " + estimatedAge + "<br>");

// ****************************** Chapter 6 - 9 ******************************

//Task 1
let a = +prompt("Enter value");
document.write("<br><br>" + "Result: " + "<br>");
document.write("The value of a is: " + a);
document.write("<br><br>" + "************************************************************" + "<br>");

document.write("<br>" + "The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("<br>" + "The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("<br>" + "The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("<br>" + "The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br>");

//Task 2
let a = 2;
let b = 1;

let result = --a - --b + ++b + b--;
document.write("<br>" + "a is: " + a);
document.write("<br>" + "b is: " + b);
document.write("<br>" + "result is: " + result + "<br>");

// --a;  The output is 1
// --a - --b; The output is 1 
//--a - --b + ++b; The output is 2
// --a - --b + ++b + b--; The output is 3

//Task 3
let getInput = prompt("Enter something");
document.write(getInput);


//Task 4 Task 5
let getNumber = +prompt("Enter number to generate table");
let result;

for (let i = 1; i <= 10; i++) {
    result = getNumber * i;
    document.write("<br><br>" + getNumber + " x" + " " + i + " = " + result);
}

//Task 6
let getSubject1 = prompt("Enter Subject 1");
let getSubject2 = prompt("Enter Subject 2");
let getSubject3 = prompt("Enter Subject 3");
let totalSubjectMarks = 100;
let ObtainedMarksSubject1 = +prompt("Enter Obtained Marks of Subject 1");
let ObtainedMarksSubject2 = +prompt("Enter Obtained Marks of Subject 2");
let ObtainedMarksSubject3 = +prompt("Enter Obtained Marks of Subject 3");
let totalPercentageSubject1 = 100 * ObtainedMarksSubject1 / totalSubjectMarks;
let totalPercentageSubject2 = 100 * ObtainedMarksSubject2 / totalSubjectMarks;
let totalPercentageSubject3 = 100 * ObtainedMarksSubject3 / totalSubjectMarks;

let allSubjectsTotalMarks = 300;
let allSubjectsObtainedMarks = ObtainedMarksSubject1 + ObtainedMarksSubject2 + ObtainedMarksSubject3;
let overallPercentage = 100 * allSubjectsObtainedMarks / allSubjectsTotalMarks;

document.write("<table>");
document.write("<tr>");
document.write("<td><h3>Subjects</h3></td>");
document.write("<td><h3>Total Marks</h3></td>");
document.write("<td><h3>Obtained Marks</h3></td>");
document.write("<td><h3>Percentage</h3></td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + getSubject1 + "</td>");
document.write("<td>" + totalSubjectMarks + "</td>");
document.write("<td>" + ObtainedMarksSubject1 + "</td>");
document.write("<td>" + totalPercentageSubject1 +  "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + getSubject2 + "</td>");
document.write("<td>" + totalSubjectMarks + "</td>");
document.write("<td>" + ObtainedMarksSubject2 + "</td>");
document.write("<td>" + totalPercentageSubject2 +  "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + getSubject3 + "</td>");
document.write("<td>" + totalSubjectMarks + "</td>");
document.write("<td>" + ObtainedMarksSubject3 + "</td>");
document.write("<td>" + totalPercentageSubject3 +  "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td></td>");
document.write("<td>" + "<b>"+ allSubjectsTotalMarks + "</b>" + "</td>");
document.write("<td>" + "<b>" + allSubjectsObtainedMarks + "</b>" + "</td>");
document.write("<td>" + "<b>" + overallPercentage + "%" + "</b>" + "</td>");
document.write("</tr>");
document.write("</table>")


// ****************************** Chapter 9 - 11 ******************************

//Task 1
let city = prompt("Enter City");

if (city == "Karachi") {
    alert("Welcome to city of lights");
}

else {
    alert("Wrong city");
}

//Task 2
let gender = prompt("Enter Gender ");

if (gender == "Male" || gender == "male") {
    alert("Good Morning Sir.");

} else if (gender == "Female" || gender == "female") {
    alert("Good Morning Ma’am.");
}

//Task 3
let color = prompt("Enter Trafiic Color");

document.write("<br><br>" + "<table border=2px>");
document.write("<tr>");
document.write("<td>" + "<h4>Signal Color</h4>" + "</td>");
document.write("<td>" + "<h4>Message</h4>" + "</td>");
document.write("</tr>");

if (color == "Red" || color == "red") {
    document.write("<tr>");
    document.write("<td>" + color + "</td>");
    document.write("<td>" + "Must Stop" + "</td>");
    document.write("</tr>");

} else if (color == "Yellow" || color == "yellow") {
    document.write("<tr>");
    document.write("<td>" + color + "</td>");
    document.write("<td>" + "Ready to move" + "</td>");
    document.write("</tr>");

} else if (color == "Green" || color == "green") {
    document.write("<tr>");
    document.write("<td>" + color + "</td>");
    document.write("<td>" + "Move now" + "</td>");
    document.write("</tr>");
} else {
    alert("No color found");
}

document.write("</tr>");
document.write("</table>");

//Task 4
let fuel = +prompt("Enter Fuel");

if (fuel <= 0.25) {
    alert("Please refill the fuel in your car");
}

else {
    alert("No need to refill");
}

//Task 5 a
let a = 4; if (++a === 5) { 
    alert("given condition for letiable a is true"); 
} // Output is given condition for letiable a is true;

// //Task 5 b
let b = 82; if (b++ === 83) { 
    alert("given condition for letiable b is true"); 
} // No Output (Undefined)

// //Task 5 c
let c = 12; if (c++ === 13) { 
    alert("condition 1 is true"); 
} if (c === 13) { 
    alert("condition 2 is true");
} if (++c < 14) { 
    alert("condition 3 is true"); 
} if (c === 14) {
    alert("condition 4 is true"); 
}
// // coniditon 2 is true
// // condition 4 is true

//Task 5 d
let materialCost = 20000; 
let laborCost = 2000; 
let totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost) { 
    alert("The cost equals"); 
}
// The cost equals

//Task 5 e  
if (true) { 
    alert("True"); 
} if (false) { 
    alert("False"); 
} // True

//Task 5 f
if ("car" < "cat") { 
    alert("car is smaller than cat"); 
} 
// Car is smaller than cat

//Task 6
let enterMarksObtained1 = +prompt("Enter marks obtained in Subject 1");
let enterMarksObtained2 = +prompt("Enter marks obtained in Subject 2");
let enterMarksObtained3 = +prompt("Enter marks obtained in Subject 3");
let enterTotalMarks = +prompt("Enter Total Marks");

let totalMarksObtained = enterMarksObtained1 + enterMarksObtained2 + enterMarksObtained3;
let totalPercentage = 100 * totalMarksObtained / enterTotalMarks;

let grade;
let remarks;

if (totalPercentage >= 80) {
    grade = "A-One";
    remarks = "Excellent";
}

else if (totalPercentage >= 70) {
    grade = "A";
    remarks = "Good";
}

else if (totalPercentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}

else if (totalPercentage < 60) {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<br>" + "<h1>Mark Sheet</h1>");
document.write("<br>" + "Total Marks: " + enterTotalMarks);
document.write("<br>" + "Marks Obtained: " + totalMarksObtained);
document.write("<br>" + "Percentage: " + totalPercentage + "%");
document.write("<br>" + "Grade: " + grade);
document.write("<br>" + "Remarks: " + remarks);

document.write("<table cellspacing=5 border=2>");
document.write("<br><br><br>" + "<tr>");
document.write("<th>Percentage %</th>");
document.write("<th>Grade</th>");
document.write("<th>Remarks</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td> Greater than or equals to 80 </td>");
document.write("<td> A-one </td>");
document.write("<td> Excellent </td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td> Greater than or equals to 70 </td>");
document.write("<td> A </td>");
document.write("<td> Good </td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td> Greater than or equals to 60 </td>");
document.write("<td> B </td>");
document.write("<td> You need to improve </td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td> less than 60 </td>");
document.write("<td> Fail </td>");
document.write("<td> Sorry </td>");
document.write("</tr>");

//Task 7
let secretNumber = +prompt("Enter Secret Number");

if (secretNumber <= 10) {
    alert("Bingo! Correct");
} else if (secretNumber <= 11) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry! Your number is incorrect");
}

//Task 8
var givenNum = +prompt("Enter number to check if its divisible by 3");

if (givenNum % 3 == 0) {
    alert("Yes! Your number is divisible by 3");
}else {
    alert("Sorry! Your number is not divisible by 3")
}

// Task 9
var checkNum = +prompt("Check number if it is Even or Odd");

if (checkNum % 2 == 0) {
    alert("Your number is Even");
}else {
    alert("Your number is Odd");
}

// Task 10
var checkTemperature = +prompt("Enter Temperature");

if (checkTemperature > 40) {
    alert("It is too hot outside.")
}
else if (checkTemperature > 30) {
    alert("The Weather today is Normal.");

}
else if (checkTemperature > 20) {
    alert("Today’s Weather is cool.");

}
else if (checkTemperature > 10) {
    alert("OMG! Today’s weather is so Cool.");

}

// Task 11
var enterNum1 = +prompt("Enter Number 1");
var operation = prompt("Enter operator for which you want to do calculation");
var enterNum2 = +prompt("Enter Number 2");
var total;

if (operation == '+') {
    total = enterNum1 + enterNum2;
    document.write("Answer is: " + total);
}if (operation == '-') {
    total = enterNum1 - enterNum2;
    document.write("Answer is: " + total);
}if (operation == '*') {
    total = enterNum1 * enterNum2;
    document.write("Answer is: " + total);
}if (operation == '/') {
    total = enterNum1 / enterNum2;
    document.write("Answer is: " + total);
}if (operation == '%') {
    total = enterNum1 % enterNum2;
    document.write("Answer is: " + total);
}

// ****************************** Chapter 12 - 13 ******************************

//Task 1
var ch = prompt("Enter any Character");
var a = ch.charCodeAt();

if (a >= 65 && a <= 90) {
    alert("It is an Uppercase letter");
}else if (a >= 97 && a <= 122) {
    alert("It is an lowercase Letter");
} else if (a >= 48 && a <= 57) {
    alert("It is an Number");
}

//Task 2
var checkGreaterNum1 = +prompt("Enter number 1");
var checkGreaterNum2 = +prompt("Enter number 2");

if (checkGreaterNum1 > checkGreaterNum2) {
    alert("Number 1 is larger number which is " + checkGreaterNum1);
}else if (checkGreaterNum2 > checkGreaterNum1) {
    alert("Number 2 is larger number which is " + checkGreaterNum2);
}else if (checkGreaterNum1 == checkGreaterNum2 || checkGreaterNum2 == checkGreaterNum1) {
    alert("both numbers are same");
}

// Task 3
var checknumber = +prompt("Enter number to check it is positive, negative or zero");

if (checknumber > 0) {
    alert("The number is positive");
}else if (checknumber < 0) {
    alert("The number is negative");
}else if (checknumber == 0) {
    alert("The number is zero");
}

//Task 4
var checkVowel = prompt("Enter something to check if it is vowel");

if (checkVowel == "a" || checkVowel == "e" || checkVowel == "i" || checkVowel == "o" || checkVowel == "u" ||
    checkVowel == "A" || checkVowel == "E" || checkVowel == "I" || checkVowel == "O" || checkVowel == "U") {
    alert("Vowel Found");
}
else {
    alert("Vowel not found");
}
//Task 5
var password = "admin123";
var checkPassword = prompt("Enter correct password");

if (checkPassword == password) {
    alert("Correct! The password you entered matches the original password");
}else if (checkPassword == "") {
    alert("Please enter your password");
}else {
    alert("Show “Incorrect password");
}

// Task 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
}
else {
    greeting = "Good evening";
    alert(greeting);
}

//Task 7
var checkTime = +prompt("Enter time in this format eg: 1900");

if (checkTime >= 0000 && checkTime < 1200) {
    alert("Good Morning!");
}else if (checkTime >= 1200 && checkTime < 1700) {
    alert("Good Afternoon!");
}else if (checkTime >= 1700 && checkTime < 2100) {
    alert("Good Evening!");

}else if (checkTime >= 2100 && checkTime <= 2359) {
    alert("Good Night");

}

//****************************** Chapter 14 - 16 ******************************

// //Task 1
var studentNames = [];
console.log(studentNames);

 //Task 2
 var studentsName = new Array();
 console.log(studentsName);

//Task 3
var stringArray = ["Mango", "Orange", "Banana", "Apple", "Grapes"];
document.write(stringArray + "<br>");

//Task 4
var numbersArray = [1, 2, 3, 4, 5];
document.write(numbersArray + "<br>");

//Task 5 
var booleanArray = [true, false]
document.write(booleanArray + "<br>");

//Task 6
var mixedArray = [1, "Umer", 2, "Waqas", true, 3, false];
document.write(mixedArray + "<br>");

//Task 7
var qualificationArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
for (var i=0; i < qualificationArray.length; i++) {
    document.write("<br>" + (i + 1) + ") " +qualificationArray[i]);
}

document.write("<br>");

//Task 8
var studentNamesArray = ["Michael", "John", "Tony"];
var studentScoreArray = [320, 230, 480];
var assumíngMarks = 500;

for (var i=0; i < studentNamesArray.length; i++) {
    for (var j=0; j < studentScoreArray.length; j++);
    var calc = 100 * studentScoreArray[i] / assumíngMarks;
    document.write("<br>" + "Score of " + studentNamesArray[i] + "is " +studentScoreArray[i] + "." + "Percentage is " + calc + "%");
}
document.write("<br><br>");

//Task 9
var colorsArray = ['Blue', 'Red', 'Blue', 'Purple', 'Green'];
document.write("<b>Default Colors in Array : </b>" + colorsArray + "<br><br>");

var addColorInBeginning = prompt("Which color do you like to add to the beginning?");
colorsArray.unshift(addColorInBeginning);
document.write("<b>Color Added to the Beginning : </b>" + colorsArray + "<br><br>");

var addColorInEnd = prompt("Which color do you like to add to the End?");
colorsArray.push(addColorInEnd);
document.write("<b>Color Added to the End : </b>" + colorsArray + "<br><br>");

var addTwoMoreColors1 = prompt("Enter two more colors to the beginning? Enter your first color?");
colorsArray.unshift(addTwoMoreColors1);

var addTwoMoreColors2 = prompt("Enter two more colors to the beginning? Enter your second color?");
colorsArray.unshift(addTwoMoreColors2);
document.write("<b>Two more colors added to the Beginning : </b>" + colorsArray + "<br><br>");

colorsArray.shift();
document.write("<b>First color deleted : </b>" + colorsArray + "<br><br>");

colorsArray.pop();
document.write("<b>Last color deleted : </b>" + colorsArray + "<br><br>");

var addColoronSpecficIndex = +prompt("Enter the index at which you want to add the color?");
var colorstobeAdded = prompt("Enter the name of color which you want to add on specific index");
var changetoStr = colorstobeAdded.toString();
colorsArray.splice(addColoronSpecficIndex, 0, changetoStr);
document.write("<b>The color " + changetoStr +  " is added on specified index : </b>" + colorsArray + "<br><br>");


var deleteColoronSpecficIndex = +prompt("Enter the index at which you want to delete the color?");
var colorstobeDeleted = +prompt("How many colors do you want to delete?");
colorsArray.splice(deleteColoronSpecficIndex, colorstobeDeleted);
document.write("<b>The color is deleted from specified index : </b>" + colorsArray + "<br><br>");

//Task 10
var scoreofStudents = [320, 230, 480, 120];
var orderedScoreOfStudents = [120, 230, 320, 480];
orderedScoreOfStudents.sort();

document.write("Scores of student : " + scoreofStudents + "<br>");
document.write("Ordered Scores of student : " + orderedScoreOfStudents);

//Task 11
var citiesList = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<br><br>" + "Cities List" + "<br>" + citiesList);
var selectedCities = citiesList.slice(1, 4);
document.write("<br><br>" + "Selected Cities List : " + "<br>" + selectedCities);

//Task 12
document.write("<br><br>");
var arr = [" This ", " is ", " my ", " cat "];
document.write("Array : " + arr + "<br>");
var fruits = arr.join(" ");
document.write("String : " + fruits);

//Task 13
document.write("<br><br>");

var arr = new Array();

arr.push("John");
arr.push("Tommy");
arr.push("Tony");
arr.push("Michael");

document.write(arr.shift() + "<br>");
document.write(arr.shift() + "<br>");
document.write(arr.shift() + "<br>");
document.write(arr.shift() + "<br>");

//Task 14
document.write("<br><br>");
var arr2 = new Array();

arr2.push('Keyboard');
arr2.push('Mouse');
arr2.push('Printer');
arr2.push('Monitor');

document.write("Devices : " + arr2 + "<br><br>");
document.write(arr2.pop() + "<br>");
document.write(arr2.pop() + "<br>");
document.write(arr2.pop() + "<br>");
document.write(arr2.pop() + "<br>");

//Task 15
document.write("<select>");
var mobileBrands = ["Apple", "Sasmsung", "Motorola", "Nokia", "Sony", "Haier"];
for (var i =0; i < mobileBrands.length; i++) {
    document.write("<option>" + mobileBrands[i] + "</option>");

}
document.write("</select>");

// ****************************** Chapter 17 - 20 ******************************

//Task 1
var multiArray = [[], [], []];

//Task 2
var matrixArray = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];
for ( var i = 0; i < matrixArray.length; i++) {
    document.write(matrixArray[i] + "<br>");
}

//Task 3
document.write("<br><br>");

for (var i = 1; i <=10; i++) {
    document.write(i + "<br>");
}

//Task 4
var tableNumber = +prompt("Enter number to generate table");
var tableLength = +prompt("Enter Length of table");
var result;

document.write("<br>" + "Multiplication table of " + tableNumber + "<br>");
document.write("Length" + tableLength + "<br>");

for (let i = 1; i <= tableLength; i++) {
    result = tableNumber * i;
    document.write("<br>" + tableNumber + " x" + " " + i + " = " + result);
}

//Task 5
document.write("<br><br>");
var fruitsArray = ["apple", "banana", "mango", "orange", "strawberry"];
var index;

for (var i=0; i < fruitsArray.length; i++) {
         findIndex = fruitsArray.indexOf(fruitsArray[i]);
    document.write("Element at index " + findIndex  + " " + "is " + fruitsArray[i] + "<br>");
}

//Task 6 // a // Counting
document.write("<br><br>");
document.write("<h1>Counting</h1>");
for (var i = 1; i <=15; i++) {
    document.write(i + "<br>");
}

// b Reverse counting
document.write("<br><br>");
document.write("<h1>Reverse Counting</h1>");
for (var i = 10; i >=1; i--) {
    document.write(i + "<br>");
}

// c Even Numbers
document.write("<br><br>");
document.write("<h1>Even Number</h1>");
for (var i = 0; i <=20; i++) {
    if(i % 2 == 0){
        document.write(i + "<br>");
    }
}

// d Odd Numbers
document.write("<br><br>");
document.write("<h1>Odd Number</h1>");
for (var i = 0; i <=20; i++) {
    if(i % 2 !== 0) {
        document.write(i + "<br>");
    }
}

// e Series
document.write("<br><br>");
document.write("<h1>Series</h1>");
for (var i = 2; i <=20; i++) {
    if(i % 2 == 0) {
        document.write(i + "k" + "<br>");
    }
}

// Task 7
document.write("<br><br>");
var A = ["cake", "apple pie", "cookie", "chips", "paties"];
var search =  prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");
var findIndex;

for (var i=0; i < search.length; i++) {
    findIndex = A.indexOf(search);
    if (search === A[i]) {
        alert(search + " is available at index " + findIndex + " in our bakery");
        break;
    }
}

if (search != A[i]) {
    alert("We are sorry " + search + " is not available in out bakery");
}

//Task 8
var A = [24, 53, 78, 91, 12];
var largestNum;

document.write( "Array items : " + A + "<br>");
for (var i = 0; i <= A.length; i++) {
    largestNum = Math.max.apply(Math, A);
}

document.write("The largest number is : "  + largestNum);

//Task 9
A = [24, 53, 78, 91, 12]
var smallestNum;

document.write("Array items : " + A + "<br><br>");
for (var i = 0; i <= A.length; i++) {
    smallestNum = Math.min.apply(Math, A);
}
document.write("The Smallest number is : "  + smallestNum);


//Task 10
for (var i = 1; i <=100; i++) {
    if(i % 5 == 0){
        document.write(i + " ");
    }
}





// ****************************** Chapter 21 - 25 ******************************

// Task 1
var firstName = prompt("Enter your first name?");
var lastName = prompt("Enter your last name?");

var fullName = firstName + " " + lastName;
document.write("Your full name is : " + fullName);

// Task 2
var favPhone = prompt("Enter your favourite phone?");

var strLength = favPhone.length;

document.write("My favourite phone is: " + favPhone + "<br>");

document.write("Length of String: " + strLength);

// Task 3
var str1 = "Pakistani";
var getIndex1 = str1.indexOf("n")

document.write("String : " + str1 + "<br>");
document.write("Index of 'n' : " + getIndex1);

// Task 4
var str2 = "Hello World";
var getIndex2 = str2.lastIndexOf("l")

document.write("String : " + str2 + "<br>");
document.write("Last Index of 'l' : " + getIndex2);

// Task 5
var str3 = "Pakistan";
var getIndex3 = str3.charAt("3")

document.write("String : " + str3 + "<br>");
document.write("Character at Index 3 : " + getIndex3);

// Task 6
var firstName = prompt("Enter your first name?");
var lastName = prompt("Enter your last name?");

var fullName = firstName.concat(" " + lastName);
document.write("Your full name is : " + fullName);

// Task 7
var city = "Hyderabad";
var replaceStr = city.replace("Hyder", "Islam");

document.write("City : " + city + "<br>");
document.write("After replacement : " + replaceStr);

// Task 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replaceWord = message.replace(/and/g, "&");

document.write("<b>Orignal Message</b> : " + message +  "<br>"); 
document.write("<b>Replace and with & : </b> "  + replaceWord);

// Task 9
var str1 = "472";
document.write("Value : " + str1 + "<br>");

var beforeConvert = typeof(str1);
document.write("Type : " + beforeConvert + "<br>");

var convertStrtoNum = parseInt(str1);
document.write("Value : " + convertStrtoNum + "<br>");

var afterConvert = typeof(convertStrtoNum);
document.write("Type : " + afterConvert + "<br>");

// Task 10
var usrInput1 = prompt(" Enter something... ?");
document.write("User input : " + usrInput1 + "<br>");

var convertUppercase = usrInput1.toUpperCase();
document.write("Upper case : " + convertUppercase);

// Task 11
var usrInput2 = prompt(" Enter something... ?");
document.write("User input : " + usrInput2 + "<br>");

var firstChar = usrInput2.slice(0,1);
firstChar = firstChar.toUpperCase();
var otherChar = usrInput2.slice(1);
otherChar = otherChar.toLowerCase();
var finalCase = firstChar + otherChar;
document.write("Title case : " + finalCase);

// Task 12
var num = 35.36;
num = num.toString();
var splitNum = num.split('.').join("");
document.write("Number : " + num + "<br>");
document.write("Result : " + splitNum);

// Task 13
var username = prompt("Enter your username?");
for (var i = 0; i < username.length; i++) {
    var check = username.charCodeAt(i);
    if (check == 33 || check == 64 || check == 44 || check == 46) {
        alert("Please enter valid username");
        break;
    }
}

// Task 14
document.write("<br><br>");
var A = ["cake", "apple pie", "cookie", "chips", "paties"];
var search =  prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");
search = search.toLowerCase();
var findIndex;

for (var i=0; i < search.length; i++) {
    findIndex = A.indexOf(search);
    if (search === A[i]) {
        document.write(search + " is <b>available</b> at index " + findIndex + " in our bakery");
        break;
    }
}

if (search != A[i]) {
    document.write("We are sorry " + search + " is <b>not available</b> in our bakery");
}

// Task 15
var password = prompt("Enter your password?");
document.write("Entered password : " + password + "<br>");

for (var i = 0; i < password.length; i++) {
    var checkChar = password.charCodeAt(i);

    if (checkChar >= 33 && checkChar <= 47 || checkChar == 64) {
        document.write("Please enter only numbers and letters" + "<br>" + "Please enter a valid password");
        break;
    }
    else if (parseInt(password)) {
        document.write("Password should not start with number" + "<br>" + "Please enter a valid password");
        break;
    } else if ( password.length <= 6 ) {
        document.write("Password should be 6 characters long" + "<br>" + "Please enter a valid password");
        break;
    } else {
        document.write("Perfect! Your passowrd is correct");
        break;
    }
}

// Task 16
var university = "University of Karachi";
var convert = university.split('');

for (var i = 0; i < convert.length; i++) {
    document.write("<br>" + convert[i]);
}

// Task 17
var country = prompt("Enter country name?");
var lastChar = country[country.length -1];
document.write("User input : " + country + "<br>");
document.write("Last character of  input : " + lastChar);

// Task 18
var str = "The quick brown fox jumps over the lazy dog";
var convertCase = str.toLowerCase();
var count = (convertCase.match(/the/g) || []).length;
document.write("Text: " + str + "<br>");
document.write("There are " + count + " occurrence(s) of the word 'the' ");








// ****************************** Chapter 26 - 30 ******************************

// Task 1
var getInput = +prompt("Enter positive integer?");
var roundOff = Math.round(getInput);
var floorValue = Math.floor(getInput);
var ceilValue = Math.ceil(getInput);

document.write("number : " + getInput + "<br>");
document.write("round off value : " + roundOff + "<br>");
document.write("floor value : " + floorValue + "<br>");
document.write("ceil value : " + ceilValue  + "<br>");

// Task 2
var getInput = +prompt("Enter negative floating point number?");
var roundOff = Math.round(getInput);
var floorValue = Math.floor(getInput);
var ceilValue = Math.ceil(getInput);

document.write("number : " + getInput + "<br>");
document.write("round off value : " + roundOff + "<br>");
document.write("floor value : " + floorValue + "<br>");
document.write("ceil value : " + ceilValue  + "<br>");

// Task 3
var getNum = +prompt("Enter number to find its absolute value?");
var getAbsoluteValue = Math.abs(getNum);

document.write("The absolute value of : " + getNum + " is " + getAbsoluteValue + "<br>");

// Task 4
var diceRoll = Math.floor( Math.random() * 6 ) +1;
document.write("Random dice value : " + diceRoll);

// Task 5
var toss = Math.random() * 2;
var floor = Math.floor(toss);
var name;

if (floor === 0 ) {
    name = "Heads";
    document.write("random coin value : " + name);
} else {
    name = "Tails";
    document.write("random coin value : " + name);
}

// Task 6
var num = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100 : " + num);

// Task 7
var weight = prompt("Enter your weight in kilograms?");
var getIntfromStr = parseFloat(weight);
document.write("The weight of user is " + getIntfromStr + " kilograms");

// Task 8
var secretNum = 6
var userSecretNum = +prompt("Enter your number from 1 to 10?");

if (userSecretNum === secretNum) {
    alert("Congrats! your number is correct");
} else {
    alert("Sorry! Try again!");
}








// ****************************** Chapter 31 - 34 ******************************

// Task 1
var getCurrentDate = new Date();
document.write(getCurrentDate);

// Task 2
var months = ["January", "February", "March", "April", "May", "June","July","August","September","October", "November", "December"];
var getCurrentDate = new Date();
var getCurrentMonth = getCurrentDate.getMonth();
var nameOftheMonth = months[getCurrentMonth];
alert("Current month: " + nameOftheMonth);

// Task 3
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var getDate = new Date();
var getCurrentDay = getDate.getDay();
var getNameofDay = days[getCurrentDay];
var getFirstThreeLetters = getNameofDay.slice(0, 3);
alert("Today is " + getFirstThreeLetters);

//Task 4
var today = new Date();
if (today.getDay() == 0 || today.getDay() == 6) {
    alert("It's Fun day");
} else {
    alert("It's normal day");
}

// Task 5
var date = new Date();

if (date.getDate() < 15) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}

// Task 6
var date = new Date();
var elapsedMilliseconds = date.getTime();
var elapsedMinutes = elapsedMilliseconds / 60000;
document.write("Current Date :  " + date + "<br>");
document.write("Elapsed Milliseconds since January 1, 1970: " + elapsedMilliseconds + "<br>");
document.write("Elapsed Minutes since January 1, 1970: " + elapsedMinutes + "<br>");

// Task 7
var date = new Date();
var hours = date.getHours();

if (hours >= 12) {
    alert("It's PM");
} else {
    alert("It's AM");
}

// Task 8
var date = new Date();
date.setDate(0);
document.write("Later date: " + date);

// Task 9
var calc = 24 * 60 * 60 * 1000;
var todayDate = new Date();
var lastRamadanDate = new Date('June 18, 2015');
var diff = Math.floor(Math.abs((lastRamadanDate - todayDate) / calc));
document.write(diff  + " days have passed since 1st Ramadan, 2020");

// Task 10
var referanceDate = new Date("Dec 05, 2015 22:50:16");
var yearBeginning = new Date("Jan 01, 2015 00:00:00");
var diff = referanceDate.getTime() - yearBeginning.getTime();
var getsec =  diff /1000

document.write("On reference date: " + referanceDate + "<br>");
document.write(getsec + " had passed since beginning of 2015");

// Task 11
var currentDate = new Date();
document.write("Current Date: " + currentDate + "<br>");
currentDate.setHours(currentDate.getHours() - 1);
document.write("1 hour ago, it was " + currentDate);

// Task 12
var currentDate = new Date();
document.write("Current Date: " + currentDate + "<br>");
currentDate.setFullYear(currentDate.getFullYear() - 100);
document.write("100 years back, it was " + currentDate);

// Task 13
var userAge = new Date (prompt("Enter your age?, E.g: Jan 1, 1970"));
var dobmili = userAge.getTime();
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili - dobmili;
var accAge = Math.floor(diff / (1000*60*60*24*30*12));
var getBirthYear = userAge.getFullYear();
document.write("Your age is: " + accAge + "<br>");
document.write("Your birth year is: " + getBirthYear);

// Task 14
var getCustomerName = prompt("Enter customer name?");
var getCurrentMonth = prompt("Enter current month?");
var numofUnits = +prompt("Enter units?");
var chargesPerUnit = +prompt("Enter charges per unit?");
var netAmount =  numofUnits * chargesPerUnit;
var latePaymentSurcharge = +prompt("Enter late payment surcharge?");
var grossAmountPayable = netAmount + latePaymentSurcharge;

document.write("<h1>K-ELectric Bill</h1>" + "<br>");
document.write("Customer Name: " + "<b>" + getCustomerName + "</b>" + "<br>");
document.write("Current Month: " + "<b>" + getCurrentMonth + "</b>" + "<br>");
document.write("Number of Units: " + "<b>" + numofUnits + "</b>" + "<br>");
document.write("Charges per Unit " + "<b>" + chargesPerUnit+ "</b>" + "<br>");
document.write("Net amount payable (within Due Date): " + "<b>" + netAmount + "</b>" + "<br>");
document.write("Late payment surcharge:  " + "<b>" + latePaymentSurcharge + "</b>" + "<br>");
document.write("Gross amount payable (after Due Date): " + "<b>" + grossAmountPayable + "</b>");






// ****************************** Chapter 35 - 38 ******************************

// Task 1
function displayCurrentDateTime () {
    var date = new Date();
    document.write(date);
}
displayCurrentDateTime();

// Task 2
function greetUser (firstName, lastname) {

    firstName = prompt("Enter first name?");
    lastname = prompt("Enter last name?");
    var fullName = firstName + " " + lastname;
    document.write("Hello! " + fullName);
}
greetUser();

// Task 3
function returnSum (num1, num2, sum) {
    num1 = +prompt("Enter number 1?");
    num2 = +prompt("Enter number 2?");
     return sum = num1 + num2;
}
document.write(returnSum());


// Task 4
function calculator (num1, operator, num2,) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    }else if (operator === "/") {
        return num1 / num2;
    } else {
        return "Incorrect Operator!";
    }
}
var resultSum = calculator(5,"+",5);
var resultMinus = calculator(5,"-",5);
var resultMultiply = calculator(5,"*",5);
var resultDivide = calculator(5,"/",5);

document.write("Sum: " + resultSum + "<br>");
document.write("Minus: " + resultMinus + "<br>");
document.write("Multiply: " + resultMultiply + "<br>");
document.write("Divide: " + resultDivide + "<br>");

// Task 5
function getSquare(num) {
    return Math.sqrt(num);
}
document.write("Square root: "  + getSquare(5));

// Task 6
function findFactorial(num) {
    var comp = 1;
    for (var i = 2; i <= num; i++)
        comp = comp * i;
    return comp;
}
console.log(findFactorial(5));

// Task 7
function counting(start, end) {
    start = +prompt("Enter number from which you want to start counting?");
    end = +prompt("Enter the number up to which you want to end the counting?");
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}
counting();

// Task 8
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare() {
        var hypotenuse = Math.sqrt(base * base + perpendicular * perpendicular);
        return "Hypotenuse of right angle triangle is: " + hypotenuse;
    }
    base = +prompt("Enter base to calculate hypotenuse of a right angle triangle?");
    perpendicular = +prompt("Enter Perpendicular to calculate hypotenuse of a right angle triangle?");

    return calculateSquare();
}
document.write(calculateHypotenuse());

// Task 9
function findAreaofTriangle(width, height) {
    var A = (width * height) / 2;
    return A;
}
document.write("Area of Triangle: " + findAreaofTriangle(10,5));

// Task 10
function isPalindrome(word) {
    word = word.toLowerCase();
    var i, wLength = word.length - 1, wLengthToCompare = wLength / 2;

    for (i = 0; i <= wLengthToCompare; i++) {
        if (word.charAt(i) != word.charAt(wLength - i)) {
            return word + " is not Palindrome";
        }
    }
    return word + " is Palindrome";
}
document.write(isPalindrome("Madam"));

// Task 11
function convertToUpperCase(str) {

    document.write("EXAMPLE STRING: " + str + "<br>");
    var word = str.toLowerCase().split(' ');
    for (var i = 0; i < word.length; i++) {
        var subString = word[i].split('');
        for (var j = 0; j < subString.length; j++) {
            subString[0] = subString[0].toUpperCase();
        }
        word[i] = subString.join('');
    }

    return document.write("EXPECTED OUTPUT: " + word.join(' '));
}
convertToUpperCase("hello my name is umer waqas and i live in fulda");

// Task 12
function longestWord(string) {
    document.write("EXAMPLE STRING: " + string + "<br>");
    var str = string.split(" ");
    var longestWord = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longestWord < str[i].length) {
            longestWord = str[i].length;
            word = str[i];
        }
    }
    return document.write("EXPECTED OUTPUT: " + word);
}
longestWord("The quick brown fox jumped over the lazy dog");

// Task 13
function findOccurrences(str, letter) {
    var count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            count += 1;
        }
    }
    return document.write("There are " + count + " occurrence(s) of the word " + "<b> '" + letter + "'</b>");
}
findOccurrences('w3resource.com', 'o');

// Task 14
function calcCircumference(radius) {
    circumferenceOfCircle  = 2 * Math.PI * radius;
    return document.write("The circumference is: " + circumferenceOfCircle.toFixed(2) + "<br>");
}
calcCircumference(12);

function calcArea(radius) {
    areaOfCircle = radius * radius * Math.PI.toFixed(2);
    return document.write("The Area is: " + areaOfCircle);

}
calcArea(5);









//************************************  Chapter 38 - 42  ************************************

//Task 1
function power(a, b) {
    a = +prompt("Enter base?");
    b = +prompt("Enter exponent?");

    var power = 1;

    for (var i = 0; i < b; i++) {
        power = power * a;
    }
    alert("The answer is " + power);
}
power();

//Task 2
function leapyear() {

    var year = +prompt("Enter a year to check if it is a leap year?");
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        alert(year + " is leap year");
    } else {
        alert(year + " is not a leap year");
    }
}
leapyear();

// Task 3
function calcTriangle(a, b, c) {

    function S() {
        S = (a + b + c) / 2;
        var area = Math.sqrt(S * ((S - a) * (S - b) * (S - c)));
        return area;
    }

    return S();
}

alert("The area of Triangle is: " + calcTriangle(2, 3.5, 4));

// Task 4
function calcMarks(sub1, sub2, sub3) {
    sub1 = +prompt("Enter marks of subject 1");
    sub2 = +prompt("Enter marks of subject 2");
    sub3 = +prompt("Enter marks of subject 3");
    var totalMarks = 300;
    var MarksObtained = sub1 + sub2 + sub3;

    function findAverage() {
        var avg = MarksObtained / 3;
        document.write("The average of your marks: " + avg + "<br />");
    }

    function findPercentage() {
        var percentage = 100 * MarksObtained / totalMarks;
        document.write("The percentage of your marks: " + percentage + "%");

    }

    return findAverage(), findPercentage();
}
calcMarks();


// Task 5
function findIndex(str, char) {
    var index;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == char) {
            index = i;
            break;
        }
    }
    console.log(index);
}
findIndex("Umer Waqas", "e");

//Task 6
function removeVowels(str) {

    var str = "Hello World";
    var removeVowels = str.replace(/[aeiou]/gi, '');
    document.write("Original Sentence: " + str + "<br />");
    document.write("After removing vowels: " + removeVowels);
}
removeVowels();


// Task 7
function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var chars = str.toLowerCase().split("");
    var count = 0;

    document.write(str + "<br />");
    for (var i = 0; i < chars.length - 1; i++) {
        var char = chars[i];
        var next = chars[i + 1];

        if (isCorrectCharacter(char) && isCorrectCharacter(next)) {
            count++
        }
    }

    return count;
}

function isCorrectCharacter(char) {
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }
}
document.write(findOccurrences() + " occurrences found in string");


// Task 8
function calcDistance() {

    var distance = +prompt("Enter distance in km to convert?");
    document.write("Your entered distance in Km is: " + distance + "<br />");

    function meter() {
        var meter = distance * 1000;
        document.write("The distance in Meter is: " + meter + "<br />");
    }

    function feet() {
        var feet = distance * 3280.8
        document.write("The distance in Feet is: " + feet + "<br />");
    }

    function inches() {
        var inches = distance * 39370;
        document.write("The distance in Inches is: " + inches + "<br />");
    }

    function centimeter() {
        var centimeter = distance * 100000;
        document.write("The distance in Inches is: " + centimeter + "<br />");
    }

    meter();
    feet();
    inches();
    centimeter();
}
calcDistance();

// Task 9
function calcOverTime() {

    var timeWorked, overTime, overTimePay = 0;

    timeWorked = +prompt("Enter the time employee work in Hr ");

    if (timeWorked > 40) {
        overTime = timeWorked - 40;
        overTimePay = overTimePay + (12.00 * overTime);
    }

    document.write("Total overtime pay of employee is Rs: " + overTimePay);
}

calcOverTime();

// Task 10
function currencyDenomination() {
    var amount = +prompt("Enter cash (in hundreds): ");
    var hundred, fifty, ten;

    if (amount >= 100) {
        hundred = Math.floor(amount / 100);
    }

    if (amount >= 50) {
        fifty = Math.floor((amount % 100) / 50)
    }

    if (amount >= 10) {
        ten = Math.floor(((((amount % 100) % 50) / 10)));
    }

    document.write("You will have " + hundred + " hundred notes " + fifty + " fifty notes " + ten + " ten notes");
}

currencyDenomination();






//************************************  Chapter 43 - 48  ************************************

// Task 1
function showAlertOnLink() {
    alert("You have clicked on this link");
}

//Task 2
function showAlert() {
    alert("Thanks for purchasing a phone from us");
}

// Task 3
function StudentsRecord() {
    document.write("<table width=100%><tr>")
    document.write("<th>Index</th>");
    document.write("<th>Name</th>");
    document.write("<th>Class</th>");
    document.write("</tr>");

    var students = ["Jhone", "Doe", "James", "Alex", "Chris", "Dani", "Alexander", "John", "Christina", "Elena"];
    var Class = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    for (var i = 0; i < students.length; i++) {
        document.write("<tr><td> " + i + "</td>" + "<td>" + students[i] + "</td>" + "<td>" + Class[i] + "</td>" + '<td><button onclick="deleteRow()">Delete</button></td></tr>');
    }

}
function deleteRow() {
    var td = event.target.parentNode;
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}
StudentsRecord();

//Task 4
function onMouseOver() {
    document.getElementById("img").src = "images/car2.jpg";
}

function onMouseOut() {
    document.getElementById("img").src = "images/car1.jpg";
}


// Task 5
var count = 0;

function increaseCounter() {
    document.getElementById('count').innerHTML = count++ + 1;
}

function decreaseCounter() {
    document.getElementById('count').innerHTML = count-- - 1;
}





//************************************  Chapter 49 - 52  ************************************

// Task 1
function signup() {

    var fname = document.getElementById("first-name").value;
    var lname = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var country = document.getElementById("country").value;

    document.write("<table>");
    document.write("<tr>");
    document.write("<td>First Name:</td>");
    document.write("<td>" + fname + "</td>");

    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>Last Name:</td>");
    document.write("<td>" + lname + "</td>");

    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>Email:</td>");
    document.write("<td>" + email + "</td>");

    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>Contact Number:</td>");
    document.write("<td>" + contactNumber + "</td>");

    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>Country:</td>");
    document.write("<td>" + country + "</td>");

    document.write("</tr>");
    document.write("</table>");

}

// Task 2
function readmore() {
    var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce ac eleifend nibh.Aliquam eu euismod nulla.Nullam porta, nunc et tempor aliquet, ex felis fringilla orci, finibus luctus dolor lorem eget massa.Pellentesque a augue et enim posuere faucibus nec non neque.Sed pharetra vitae metus bibendum faucibus.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Morbi fringilla tincidunt ante ut finibus.Morbi semper a augue non commodo.In commodo velit sit amet augue tempor scelerisque.Integer egestas vulputate neque, ultrices semper justo mollis vel.Pellentesque cursus mauris eget neque varius, id tempus ligula porta.Aliquam id dapibus lorem.Donec sodales nibh risus, id ultricies tortor mollis nec.Suspendisse ornare nulla dui, nec pretium tortor mattis sit amet.Proin varius turpis dolor, ac fringilla massa eleifend commodo."
    var para = document.getElementById('para');
    para.innerHTML = text;
}

// Task 3
function edit(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";

 var name = document.getElementById("name_row"+no);
 var Class = document.getElementById("class_row"+no);
 var rollNumber = document.getElementById("rollNumber_row"+no);
 var contactNumber = document.getElementById("contactNumber_row"+no);
 var email = document.getElementById("email_row"+no);

 var name_data = name.innerHTML;
 var Class_data = Class.innerHTML;
 var rollNumber_data = rollNumber.innerHTML;
 var contactNumber_data = contactNumber.innerHTML;
 var email_data = email.innerHTML;

 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 Class.innerHTML="<input type='text' id='class_text"+no+"' value='"+Class_data+"'>";
 rollNumber.innerHTML="<input type='text' id='rollNumber_text"+no+"' value='"+rollNumber_data+"'>";
 contactNumber.innerHTML="<input type='text' id='contactNumber_text"+no+"' value='"+contactNumber_data+"'>";
 email.innerHTML="<input type='text' id='email_text"+no+"' value='"+email_data+"'>";

}

function submit()
{
 var name = document.getElementById("name").value;
 var Class = document.getElementById("class").value;
 var rollNumber = document.getElementById("rollNumber").value;
 var contactNumber = document.getElementById("contactNumber").value;
 var email = document.getElementById("email").value;



 var table = document.getElementById("data_table");
 var table_len = (table.rows.length)-1;
 var buttons = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+name+"</td><td id='class_row"+table_len+"'>"+Class+"</td><td id='rollNumber_row"+table_len+"'>"+rollNumber+"</td><td id='contactNumber_row"+table_len+"'>"+contactNumber+"</td><td id='email_row"+table_len+"'>"+email+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit("+table_len+")'></td><td><input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save("+table_len+")'></td><td><input type='button' value='Delete' class='delete' onclick='Delete("+table_len+")'></td></tr>";

 document.getElementById("name").value="";
 document.getElementById("class").value="";
 document.getElementById("rollNumber").value="";
 document.getElementById("contactNumber").value="";
 document.getElementById("email").value="";
}

function save(no) {
    var name_val = document.getElementById("name_text" + no).value;
    var Class_val = document.getElementById("class_text" + no).value;
    var rollNumber_val = document.getElementById("rollNumber_text" + no).value;
    var contactNumber_val = document.getElementById("contactNumber_text" + no).value;
    var email_val = document.getElementById("email_text" + no).value;

    document.getElementById("name_row" + no).innerHTML = name_val;
    document.getElementById("class_row" + no).innerHTML = Class_val;
    document.getElementById("rollNumber_row" + no).innerHTML = rollNumber_val;
    document.getElementById("contactNumber_row" + no).innerHTML = contactNumber_val;
    document.getElementById("email_row" + no).innerHTML = email_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

function Delete(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}



// ************************************  Chapter 52 - 57  ************************************

// Task 1 (Modal)
function showImage(e) {
    console.log(e);
    var modal = document.getElementById("modalImage");

    modal.src = e.src;
}


//************************************  Chapter 58 - 67  ************************************

// Task 1

// (i)
var a = document.getElementById("main-content");

// (ii)
console.log(a.childNodes);

// (iii)
var getClasses = document.getElementsByClassName('render');
for (var i = 0; i < getClasses.length; i++){
    document.write(getClasses[i].innerHTML + "<br />");
}

// (iv)
document.getElementById("first-name").value = "Umer";

// (v)
document.getElementById("last-name").value = "Waqas";
document.getElementById("email").value = "waqasumer30@gmail.com";


// Task 2

// (i)
var b = document.getElementById("form-content").nodeType;
console.log(b);

// (ii)
var c = document.getElementById("lastName").nodeType;
var d = document.getElementById("lastName").childNodes;
console.log(c);
console.log(d);

(iii)

// (iv)
var findChild = document.getElementById("main-content");
console.log(findChild.firstChild);
console.log(findChild.lastChild);

// (v)
var findSibling = document.getElementById("lastName");
console.log(findSibling.nextSibling);
console.log(findSibling.previousSibling);

// (vi)
var findParentNodeAndType = document.getElementById("email");
console.log(findParentNodeAndType.parentNode);
console.log(findParentNodeAndType.nodeType);