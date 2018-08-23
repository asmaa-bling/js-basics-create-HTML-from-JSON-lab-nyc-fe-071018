document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  const titanicButton = document.getElementById('Titanic');
  const terminatorButton = document.getElementById('Terminator 2');
  
  titanicButton.addEventListener('click', (event) => {
    updateHTMLContent();
  });
  
  terminatorButton.addEventListener('click', (event) => {
    
  });
});

function updateHTMLContent() {
  title.innerText = "hi";
}

let title = document.getElementById("title");
let director = document.getElementById("director");
let genre = document.getElementById("genre");
let filmRating = document.getElementById("filmRating");