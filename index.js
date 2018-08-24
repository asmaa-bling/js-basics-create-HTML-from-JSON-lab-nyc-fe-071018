  const titanicButton = document.getElementById('Titanic');
  const terminatorButton = document.getElementById('Terminator 2');
  updateHTMLContent('Titanic');
  
  titanicButton.addEventListener('click', (event) => {
    updateHTMLContent('Titanic');
  });
  
  terminatorButton.addEventListener('click', (event) => {
    updateHTMLContent('Terminator 2');
  });
  
document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  const titanicButton = document.getElementById('Titanic');
  const terminatorButton = document.getElementById('Terminator 2');
  updateHTMLContent('Titanic');
  
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
  let reviews = document.getElementById("reviews");
  
  title.innerHTML = currentMovie.title;
  director.innerHTML = currentMovie.director;
  genre.innerHTML = currentMovie.genre;
  filmRating.innerHTML = currentMovie.filmRating;
  poster.setAttribute('src', currentMovie.poster);
  description.innerHTML = currentMovie.description;
  audienceScore.innerHTML = currentMovie.audienceScore;
  
  let castInnerHTML = "<ul>";
  let reviewInnerHTML = "<div>";
  
  for (castmember of currentMovie.cast){
    let role = castmember.role;
    let actor = castmember.actor;
    
    castInnerHTML += '<li>' + role + ": " + actor + "</li>"
  }
  
  castInnerHTML += "</ul>";
  cast.innerHTML = castInnerHTML;
  
  for (review of currentMovie.reviews){
    let userName = review.username;
    let content = review.content;
    
    reviewInnerHTML += "<p>" + userName + ": " + content + "</p>"
  }
  
  reviewInnerHTML += "</div>";
  reviews.innerHTML = reviewInnerHTML;
  
}

