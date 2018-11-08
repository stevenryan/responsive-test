// Dynamically creating hero divs

var heroes = ["ana", "bastion", "dva", "hanzo", "roadhog", "junkrat", "lucio", "mccree", "mei", "mercy", "pharah", "reaper", "reinhart", "soldier76", "sombra", "symmetra", "torbjorn", "tracer", "widow", "zenyatta"]

var heroGallery = document.getElementById("heroGallery")

window.onload = function(){
  for(let i=0; i<heroes.length; i++){
    var heroDiv = document.createElement('div')
    heroDiv.className = "heroDiv"
    var heroIcon = document.createElement('div')
    heroIcon.className = "heroIcon"
    heroIcon.style.backgroundImage = "url(images/icons/"+heroes[i]+"-icon.png)"
    var heroName = document.createElement('div')
    heroName.className = "heroName"
    var heroLink = document.createElement('a')
    heroLink.setAttribute('href', "#");
    heroLink.innerHTML = heroes[i].toUpperCase()
    heroName.appendChild(heroLink)
    heroDiv.appendChild(heroIcon)
    heroDiv.appendChild(heroName)
    heroGallery.appendChild(heroDiv)
  }
}

// NavBar Dropdown
var burger = document.getElementById("burger")
var topNav = document.getElementById("topNav")
burger.addEventListener('click', function(){
  if (topNav.className === "open") {
      topNav.className += "closed";
  } else {
      topNav.className = "open";
  }
})
