// https://api.blablagues.net/?rub=blagues

// Récupération des différents éléments
const header = document.querySelector("#header__joke");
const content = document.querySelector("#content__joke");
const section = document.querySelector(".jokes__app");
const button = document.querySelector(".btn");

// Fonction fetchJoke qui permet d'afficher les blagues et devinettes
const fetchJoke = async () => {
  await fetch("https://api.blablagues.net/?rub=blagues")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      const joke = value.data.content;
      console.log(joke);
      header.textContent = joke.text_head;
      content.textContent = joke.text !== "" ? joke.text : joke.text_hidden;
    })
    .catch(function (err) {
      // Affichage d'un message d'erreur dans la console
      console.log("Désolé, une erreur est survenue sur le serveur.");
    });
};

fetchJoke();

// Ecoute de l'événement "click" sur la section jokes__app afin de passer à la blague suivante "
button.addEventListener("click", fetchJoke);
