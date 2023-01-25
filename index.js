let films = [
  {
    title: "",
    releaseDate: "",
    genre: "",
  },
];

function createFilm(title, releaseDate, genre) {
  let film = {
    title,
    releaseDate,
    genre,
  };

  return film;
}

let film1 = createFilm("The Last Of us", "2023", "Action");
let film2 = createFilm("Kingsman", "2019", "Action");

films.push(film1);
films.push(film2);

console.log("Film list before adding new Film: ");

films.forEach(function (film) {
  console.log(
    `${film.title} was released on ${film.releaseDate} and genre is ${film.genre}`
  );
});

let newTitle = prompt("Enter the title of the new film:");
let newReleaseDate = prompt("Enter the release date of the new film:");
let newGenre = prompt("Enter the genre of the new film:");

let newFilm = createFilm(newTitle, newReleaseDate, newGenre);
films.push(newFilm);

console.log("List Film after adding new Film : ");
films.forEach(function (film) {
  console.log(
    `${film.title} was released on ${film.releaseDate} and genre is ${film.genre}`
  );
});
