const quoteEl = document.getElementById("quote");
const characterEl = document.getElementById("character");
const animeEl = document.getElementById("anime");

function generateQuote() {
  fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((data) => {
      const quote = data.quote;
      const character = data.character;
      const anime = data.anime;
      quoteEl.innerText = quote;
      characterEl.innerText = character;
      animeEl.innerText = anime;
    });
}
