let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(p => {
    p.addEventListener("mouseenter", function() {
        this.style.fontWeight = "bold";
        this.style.color = "blue";
    });
    p.addEventListener("mouseleave", function() {
        this.style.fontWeight = "normal";
        this.style.color = "black";
    });
});