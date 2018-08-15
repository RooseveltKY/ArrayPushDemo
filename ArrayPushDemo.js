//Build an array that stores first names. The default value of the array will be empty.
var firstName= [];

//Build an array that stores last names. The default value of the array will be empty
var lastName= [];

//Ask user for a first name, and store it in the first names array
var first= prompt("What is your first name?");
firstName.unshift(first);

//Ask user for a last name, and store it in the last names array
var last= prompt("What is your last name?");
lastName.unshift(last);

//Dispay to the window both the first and last name from the array with the length of the two arrays
window.alert(firstName[0]+ " "+ lastName[0]+ " "+ firstName.length+ lastName.length);