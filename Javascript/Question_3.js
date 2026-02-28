//Question 3 - Add a red boarder to all <textarea> and a <p> element when button is clicked
    var button1 = document.querySelector("#button1");

button1.addEventListener("click", function(){
    var elements = document.querySelectorAll(".card textarea, .card p");

    elements.forEach(function(element) {
        element.style.border = "2px solid red";
    });

 
});

