const factButton = document.querySelector("#fact-button");
const bio = document.querySelector("#bio");
const counter = document.querySelector('#counter');
const icounter = document.querySelector("#icounter");

let clicks = 0;
factButton.addEventListener("click", function () {
  bio.textContent = "Ta treść została zmieniona przez JavaScript.";
  factButton.textContent = "Gotowe!";
});

counter.addEventListener("click", function(){
clicks++;
icounter.textContent = clicks;

});