// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// var user = +prompt("enter a character or number");
// if(isNaN(user)){
// if (user === user.toUpperCase() ){
//     alert("The input is in upper case letter");
// }
// else if (user === user.toLowerCase()){
//     alert("The input is in lower case letter");

// }
// else{
//     alert("the input is a number");
// }
// }

//  2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// ---------------------------------------------answer 2----------------------------------------
// var firstNumber = +prompt("Enter Your FirstName:");
// var secondNumber = +prompt("Enter Your SecondName:");
// if (firstNumber > secondNumber){
//     alert("the large number is " + firstNumber);
// }
// else if(firstNumber < secondNumber){
//     alert("the large number is " + secondNumber);
// }
// else{
//     alert("the number is equal");
// }


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
// ---------------------------------------------answer 3----------------------------------------
// var user = +prompt("Enter a number: ");
// if (user > 0){
//     alert("the number is positive");
// }
// else if (user < 0){
//     alert("the number is negative");
// }
// else if (user == 0){
// alert("number is zero");
// }
// else{
//     alert("enter a number");
// }

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise
// ---------------------------------------------answer 4----------------------------------------
// var user = prompt("enter a letter");
// if(user.length != 1){
//     alert("enter a single letter");
// }
// else if(user == "a" || user == "e" || user == "i" || user == "o" || user == "u"){
//     alert("the letter is vowel");
// }
// else{
//     alert("the letter is not vowel");
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// ---------------------------------------------answer 5----------------------------------------
// var correctPassword = "password123";
// var user = prompt("enter your password");
// if(user === ""){
//     alert("Please enter your password");
// }
// else if(user === correctPassword){
//     alert("Correct! The password you entered matches the original password");
// }
// else{
//     alert("Incorrect password");
// }



// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
// ---------------------------------------------answer 6----------------------------------------
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
// console.log(greeting);


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// var time= +prompt("enter time");
// if(time>=0000 && time<1200){
//     alert("Good Morning");
// }
