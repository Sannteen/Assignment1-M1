// Create a new paragraph element
const paragraph = document.createElement("p");
const card2 = document.querySelector(".card2");


// Set the text using template literals (backticks)
const fullname = "Yvette";
paragraph.textContent = `Hi ${fullname}, I am learning and using JavaScript. `

// // Append the paragraph to the body
// document.body.appendChild(paragraph);
card2.appendChild(paragraph);

