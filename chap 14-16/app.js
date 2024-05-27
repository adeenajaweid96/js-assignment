// 1.Declare an empty array using JS literal notation to store
// student names in future.
// ---------------------------------answer 1-----------------------------
// let studentName = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
// ---------------------------------answer 2-----------------------------
// var studentName = new Array();

// 3. Declare and initialize a strings array.
// ---------------------------------answer 3-----------------------------
// var studentName = ["sana","ali","zara","zain"];


// 4. Declare and initialize a numbers array.
// ---------------------------------answer 4-----------------------------
// var studentName = [1,2,3,4,5,6,7];

// 5. Declare and initialize a boolean array.
// ---------------------------------answer 5-----------------------------
// var arr = [true,false];

// 6. Declare and initialize a mixed array.
// ---------------------------------answer 6-----------------------------
// var array = ["sana",16,true];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
// ---------------------------------answer 7-----------------------------
// var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M. Phil.","PhD"];
// document.write("<h1>Qualifications</h1>");
// document.write("<br/>1) SSC <br/>2) HSC <br/>3) BCS <br/>4) BS <br/>5) BCOM <br/>6) MS <br/>7) M.Phil <br/>8) PhD <br/>");

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// ---------------------------------answer 8-----------------------------
// var studentName = ["Ahmed","Saif","Fahad"];
// var score = [320,230,480];
// document.write("Score of " + studentName[0] + " is " +score[0] +" Percentage: 64%");
// document.write("<br/> Score of " + studentName[1] + " is " +score[1] +" Percentage: 46%");
// document.write("<br/> Score of " + studentName[2] + " is " +score[2] +" Percentage: 96%");




// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.







// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
// ---------------------------------answer 10-----------------------------
// var studentScore= [780,321,432,123,221,145];
// document.write("<br/> Score of Students: " + studentScore);
// studentScore.sort();
// document.write("<br/> Ordered Score of Students: "+ studentScore);



// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
// ---------------------------------answer 11-----------------------------
// var city = ["Karachi","Islamabad","Lahore","Quetta","Peshawar"];
// var selectedCities = [city[0],city[3],city[1]];
// document.write(" <br/> Cities List: <br/>" + city );
// document.write("<br/><br/> Selected Cities List: <br/>" + selectedCities);


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
// ---------------------------------answer 12-----------------------------
// var arr = ["This ", " is ", " my ", " cat"];
// var myArray = arr.join('');
// document.write("<br/> Array: <br/> " +arr);
// document.write("<br/> String: <br/> " + myArray);



// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
// ---------------------------------answer 13-----------------------------
// var newArray = ["python","php","ruby","mongo-DB","DJango"];
// document.write("<br/> Array:  <br/>"+ newArray );
// document.write("<br/> Out:  <br/>"+newArray.shift());
// document.write("<br/> Out:  <br/>"+newArray.shift());
// document.write("<br/> Out:  <br/>"+newArray.shift());
// document.write("<br/> Out:  <br/>"+newArray.shift());
// document.write("<br/> Out:  <br/>"+newArray.shift());



// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)
// ---------------------------------answer 14-----------------------------
// var device = ["keyboard","mouse","monitor","CPU"];
// document.write("<br/> Devices:  <br/>"+device );
// document.write("<br/> Out:  <br/>"+device.pop());
// document.write("<br/> Out:  <br/>"+device.pop());
// document.write("<br/> Out:  <br/>"+device.pop());
// document.write("<br/> Out:  <br/>"+device.pop());




// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
// ---------------------------------answer 15-----------------------------
// var phone =["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// document.write("<br/> <select> <option> "+ phone[0]+"<option><select>" + phone[1] + "<option/><select/>");


