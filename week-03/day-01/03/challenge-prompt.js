// Day 01
// Acitivity 03


console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds

var windowTimeout1 = setTimeout(function(){
    alert("Question 1");
},5000);


console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds

var windowTimeout2 = setTimeout(function(){
    alert("Question 2");
},1000*15);

// Remove the timer you just made for Question 2
clearTimeout(windowTimeout2);


console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds

var windowTimeout3 = setTimeout(function(){
    alert("Question 3 part 1");
},1000*15);

// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds

var windowTimeout4 = setTimeout(function(){
    alert("Question 3 part 2");
},1000*16);

console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1

clearTimeout(windowTimeout3)

console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"


