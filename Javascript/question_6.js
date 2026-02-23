//get the button element 
const button = document.getElementById("btn1");

//add event listener to the button
button.addEventListener("click", function() {
    const tutorials = document.getElementsByClassName("tutorial");

    //loop through the elements and change the background color
    for (let i = 0; i < tutorials.length; i++) {
        tutorials[i].style.backgroundColor = "yellow";
    }
});