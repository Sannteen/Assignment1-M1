// Question 13: Display last fruit in array
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grape"];
let lastFruit = fruits[fruits.length - 1];

// Get the LAST element with id="demo"
let demoElements = document.querySelectorAll("#demo");
let lastDemo = demoElements[demoElements.length - 1];

// Display the result
lastDemo.innerHTML = "The Last Fruit In Array Is: " + lastFruit;