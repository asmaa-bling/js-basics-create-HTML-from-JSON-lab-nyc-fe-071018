document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  const titanicButton = document.getElementById('Titanic');
  const terminatorButton = document.getElementById('Terminator 2');
  
  titanicButton.addEventListener('click', (event) => {
    updateHTMLContent('Titanic');
  });
  
  terminatorButton.addEventListener('click', (event) => {
    updateHTMLContent('Terminator 2');
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
  
  title.innerHTML = currentMovie.title;
  director.innerHTML = currentMovie.director;
  genre.innerHTML = currentMovie.genre;
  filmRating.innerHTML = currentMovie.filmRating;
  poster.setAttribute('src', currentMovie.poster);
  description.innerHTML = currentMovie.description;
  audienceScore.innerHTML = currentMovie.audienceScore;
  
  let castInnerHTML = "<ul>";
  
  for (let i = 0; i < currentMovie.cast.length; i++){
    let role = currentMovie.cast[i].role;
    let actor = currentMovie.cast[i].actor;
    
    castInnerHTML += '<li><strong>' + role + "</strong> : " + actor + "</li>"
  }
  
  castInnerHTML += "</ul>";
  cast.innerHTML = castInnerHTML;
}

