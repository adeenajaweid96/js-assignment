// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// ----------------------------------answer 1------------------------------------------
// var city = prompt("Enter your  city: ");
// if(city == "Karachi"){
//     alert("Welcome to city of lights");

// }
// else{
//     alert("You are not in Karachi");
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// ----------------------------------answer 2------------------------------------------
// var gender = prompt("Enter your gender:");
// if(gender=="male"){
//     alert("Good Morning Sir");
// }
// else{
//     alert("Good Morning Ma'am");
// }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// ----------------------------------answer 3------------------------------------------
// var trafic = prompt("Signal Color");
// if(trafic == "Red"){
//     alert("Must Stop");
// }
// else if(trafic == "Yellow"){
//     alert("Ready to Move");
// }
// else if(trafic == "Green"){
//     alert("Move Now");
// }
// else{
//     alert("Wrong Input");
// }


// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// ----------------------------------answer 4------------------------------------------
// var fuel = prompt("Remaining fuel in car (in litres)");
// if(fuel <= 0.25){
//     alert("Please refill the fuel in your car");
// }
// else{
//     alert("Fuel is enough");
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }


//6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// ------------------------------------answer 6-----------------------------------------------
// var subject1 = +prompt("enter your subject 1 marks");
// var subject2 = +prompt("enter your subject 2 marks");
// var subject3 = +prompt("enter your subject 3 marks");
// var totalMarks = +prompt("enter total marks");

// var obtMarks = (subject1+subject2+subject3);
// var percentage = (obtMarks/totalMarks)*100;

// var result;
// var remarks;
// if(percentage >= 80 && percentage <= 100){
// result="A+";
// remarks = "Excellent"; 
// document.write("<h1>Mark Sheet</h1>"+"<br/>");
// document.write("Total Marks"+ totalMarks+"<br/>");
// document.write("Marks Obtained: " + obtMarks+"<br/>");
// document.write("Percentage: " + percentage+"<br/>");
// document.write("Grade: " + result+"<br/>");
// document.write("Remarks: "+ remarks+"<br/>");
// }
// else if(percentage >= 70){
//     result="A";
//     remarks = "Good"; 
//     document.write("<h1>Mark Sheet</h1>"+"<br/>");
//     document.write("Total Marks"+ totalMarks+"<br/>");
//     document.write("Marks Obtained: " + obtMarks+"<br/>");
//     document.write("Percentage: " + percentage+"<br/>");
//     document.write("Grade: " + result+"<br/>");
//     document.write("Remarks: "+ remarks+"<br/>");}
// else if(percentage >= 60){
//     result="B";
//     remarks = "You need to improve"; 
//     document.write("<h1>Mark Sheet</h1>"+"<br/>");
//     document.write("Total Marks"+ totalMarks+"<br/>");
//     document.write("Marks Obtained: " + obtMarks+"<br/>");
//     document.write("Percentage: " + percentage+"<br/>");
//     document.write("Grade: " + result+"<br/>");
//     document.write("Remarks: "+ remarks+"<br/>");}
// else{
//     result="Fail";
//     remarks = "Sorry"; 
//     document.write("<h1>Mark Sheet</h1>"+"<br/>");
//     document.write("Total Marks"+ totalMarks+"<br/>");
//     document.write("Marks Obtained: " + obtMarks+"<br/>");
//     document.write("Percentage: " + percentage+"<br/>");
//     document.write("Grade: " + result+"<br/>");
//     document.write("Remarks: "+ remarks+"<br/>");}


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
// ----------------------------------answer 7------------------------------------------
// var secretNumber = 7;
// var user = +prompt("Guess the number(between 1 to 10) ");
// if(user < 1 || user > 10){
//     alert("NOT A VALID NUMBER");
// }
// else if(user === secretNumber){
//     alert("Bingo! Correct Answer");
// }
// else if(user + 1 ===secretNumber){
//     alert("You are close enough");
// }
// else{
//     alert("Wrong Guess :(");
// }


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
// ---------------------------------------answer 8---------------------------------
// var num = +prompt("Enter a number");
// if(num%3 == 0){
//     alert("The number is divisible by 3");
// }
// else{
//     alert("The number is not divisible by 3");
// }


// 9. Write a program that checks whether the given input is an
// even number or an odd number.
// --------------------------------------------answer 9---------------------------------
// var num = +prompt("Enter a number");
// if(num%2 == 0){
//     alert("The number is even");
// }
// else{
//     alert("The number is odd");
// }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// --------------------------------------------answer 10---------------------------------

// var temperature = +prompt("What's the temperature outside today");
// if(temperature >40){
//     alert("It is too hot outside");
// }
// else if(temperature >30){
//     alert("The Weather today is Normal");
// }
// else if(temperature > 20){
//     alert("Today's weather is cool");
// }
// else if(temperature > 10){
//     alert("OMG! Today's weather is so cool");
// }
// else{
//     alert("invalid input");
// }

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// --------------------------------------------answer 11---------------------------------
// var firstNumber = +prompt("enter first number");
// var secondNumber = +prompt("enter second number");
// var operation = prompt("enter operation(+,-,*,/,%");
// if(operation=== "+"){
//     alert(firstNumber+secondNumber);
// }
// else if(operation === "-"){
//     alert(firstNumber - secondNumber);

// }
// else if(operation === "*"){
//     alert(firstNumber * secondNumber);

// }
// else if(operation === "/"){
//     alert(firstNumber / secondNumber);

// }
// else if(operation === "%"){
//     alert(firstNumber % secondNumber);

// }
// else{
//     alert("invalid expressions");
// }

