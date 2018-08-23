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

function updateHTMLContent(movieName) {
  let currentMovie = movies[movieName];
  let title = document.getElementById("title");
  let director = document.getElementById("director");
  let genre = document.getElementById("genre");
  let filmRating = document.getElementById("filmRating");
  let poster = document.getElementById("poster");
  let audienceScore = document.getElementById("audienceScore");
  let description = document.getElementById("description");
  
  title.innerHTML = movies[currentMovie].title;
  director.innerHTML = movies[currentMovie].director;
  genre.innerHTML = movies[currentMovie].genre;
  filmRating.innerHTML = movies[currentMovie].filmRating;
  poster.setAttribute('src', movies[currentMovie].poster);
  description.innerHTML = movies[currentMovie].description;
  audienceScore.innerHTML = movies[currentMovie].audienceScore;
}

