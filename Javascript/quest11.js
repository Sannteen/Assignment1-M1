// Target both the paragraph with id="special-paragraph" AND the next paragraph
document.addEventListener("DOMContentLoaded", function() {
    let specialParagraph = document.getElementById("special-paragraph");
    
    if (specialParagraph) {
        // Apply to the special paragraph
        specialParagraph.addEventListener("mouseenter", function() {
            this.style.fontWeight = "bold";
            this.style.color = "blue";
        });
        
        specialParagraph.addEventListener("mouseleave", function() {
            this.style.fontWeight = "normal";
            this.style.color = "black";
        });
        
        // Also apply to the next paragraph (the one that comes after it)
        let nextParagraph = specialParagraph.nextElementSibling;
        if (nextParagraph && nextParagraph.tagName === "P") {
            nextParagraph.addEventListener("mouseenter", function() {
                this.style.fontWeight = "bold";
                this.style.color = "blue";
            });
            
            nextParagraph.addEventListener("mouseleave", function() {
                this.style.fontWeight = "normal";
                this.style.color = "black";
            });
        }
    }
});