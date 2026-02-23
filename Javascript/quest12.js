function removeParagraph() {
    let paragraph = document.getElementById("remove-paragraph");
    if (paragraph) {
        paragraph.remove();
    } else {
        console.log("Paragraph not found");
    }
}