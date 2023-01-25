// class Film {
//   constructor(title, releaseDate, genre) {
//     this.title = title;
//     this.releaseDate = releaseDate;
//     this.genre = genre;
//   }
// }

// class FilmList {
//   constructor() {
//     this.films = [];
//   }

//   addFilm(film) {
//     this.films.push(film);
//   }

//   removeFilm(film) {
//     let index = this.films.indexOf(film);
//     if (index > -1) {
//       this.films.splice(index, 1);
//     }
//   }

//   displayFilms() {
//     this.films.forEach((film) => {
//       console.log(
//         `Title: ${film.title} | Release Date: ${film.releaseDate} | Genre: ${film.genre}`
//       );
//     });
//   }
// }

// let filmList = new FilmList();

// filmList.addFilm(new Film("THE Last Of us", "2023", "Action"));
// filmList.addFilm(new Film("Kingsman", "2019", "Action"));

// console.log("List Film before adding new Film : ");
// filmList.displayFilms();

// let newTitle = prompt("Enter the title of the new film:");
// let newReleaseDate = prompt("Enter the release date of the new film:");
// let newGenre = prompt("Enter the genre of the new film:");

// filmList.addFilm(new Film(newTitle, newReleaseDate, newGenre));
// console.log("List Film after adding new Film : ");
// filmList.displayFilms();
