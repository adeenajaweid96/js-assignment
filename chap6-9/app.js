//1. Write a program to take a number in a variable, do the
//required arithmetic to display the following result in your
//browser:

var num = 10;
document.write("The value of a is: " + num);
document.write("<br/><br/>" +"The value of ++a is: " + ++num +"<br/>" + "Now the value of a is: 11");
document.write("<br/> <br/>"+"The value of a++ is: " + num++ + "<br/>" + "Now the value of a is: 12");
document.write("<br/> <br/>"+"The value of --a is: " + --num + "<br/>" + "Now the value of a is: 11");
document.write("<br/> <br/>"+"The value of a-- is: " + num-- + "<br/>" + "Now the value of a is: 10");

//2. What will be the output in variables a, b & result after
//execution of the following script:
//var a = 2, b = 1;
//var result = --a - --b + ++b + b--;
//Explain the output at each stage:
//--a;1
//--a - --b;
//--a - --b + ++b;
//--a - --b + ++b + b--;

// 1 - 0 + 1 + 0=2