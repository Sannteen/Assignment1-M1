//getting the paragraph element by its id
const paragraph1 = document.querySelectorAll("#targetparagraph");

//adding click event listener to the paragraph
paragraph1.forEach(function(p) {
    p.addEventListener("click", function() {
        p.style.color = "White"; // changing the text color to red when clicked
        p.style.backgroundColor = "rgba(0, 0, 0, 0.73)"; // changing the background color to yellow when clicked
    });
});

