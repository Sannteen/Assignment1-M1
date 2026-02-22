//getting the paragraph element by its id
const paragraph = document.getElementById("targetparagraph");

//adding click event listener to the paragraph
paragraph.addEventListener("click", function() {
    paragraph.style.color = "blueviolet"; // changing the text color to red when clicked
    paragraph.style.backgroundColor = "rgb(220, 220, 220)"; // changing the background color to yellow when clicked
});