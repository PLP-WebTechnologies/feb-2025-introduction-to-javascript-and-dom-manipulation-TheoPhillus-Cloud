document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("text").textContent = "You've clicked the button!";
});

document.getElementById("toggleElementBtn").addEventListener("click", function() {
    const element = document.getElementById("dynamicElement");
    element.style.display = element.style.display === "none" ? "block" : "none";
});

document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.fontSize = "20px";
});