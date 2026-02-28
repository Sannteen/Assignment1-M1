
// Declaring three variables on a single line 
let firstname, lastname, age;
let userPromptButton = document.getElementById("userPrompt");

// Using prompt to get user's information 


    userPromptButton.addEventListener("click", function() {
        
        firstname = prompt("Enter your first name:");
        lastname = prompt("Enter your last name:");
        age = prompt("Enter your age:");

        // Displaying the information 
        alert(`First Name: ${firstname}\nLast Name: ${lastname}\nAge: ${age}`);
    }   );

