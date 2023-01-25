const fruits = ["Apple", "Orange", "Pear"];

// iterates over array elements
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// much shorter and better than this
// for (let index = 0; index < fruits.length; index++) {
//   const fruit = fruits[index];
//   console.log(fruit);
// }
// const fruits2 = [
//   { name: "Apple", quality: 10 },
//   { name: "Orange", quality: 8 },
//   { name: "Pear", quality: 9 },
// ];

// for (let index in fruits2) {
//   console.log(fruits2[index].name, fruits2[index].quality); // Apple, Orange, Pear
//}

// let numbers = [1, 2];

// let arrayLike = {
//   0: "something",
//   length: 1,
// };

// console.log(numbers.concat(arrayLike)); // 1,2,[object Object]
//[1, 2, arrayLike]
// Membuat array kosong untuk menyimpan objek film
// let films = [];

// Membuat objek constructor function untuk membuat objek film baru
// function Film(title, releaseDate, genre) {
//   this.title = title;
//   this.releaseDate = releaseDate;
//   this.genre = genre;
// }

// Membuat objek film baru menggunakan constructor function
// let film1 = new Film("The Shawshank Redemption", "1994-09-14", "Drama");
// let film2 = new Film("The Godfather", "1972-03-24", "Crime");
// let film3 = new Film("The Dark Knight", "2008-07-16", "Thriller");

// Menambahkan objek film ke dalam array films
// films.push(film1);
// films.push(film2);
// films.push(film3);

// Menampilkan daftar film menggunakan forEach
// films.forEach(function (film) {
//   console.log(
//     `${film.title} was released on ${film.releaseDate} and genre is ${film.genre}`
//   );
// });

// Menambahkan function untuk menambah film baru
// function addFilm(title, releaseDate, genre) {
//   let newFilm = new Film(title, releaseDate, genre);
//   films.push(newFilm);
// }

// Menambahkan film baru
// addFilm("Inception", "2010-07-16", "Sci-Fi");
// console.log("List Film after adding new Film : ");
// films.forEach(function (film) {
//   console.log(
//     `${film.title} was released on ${film.releaseDate} and genre is ${film.genre}`
//   );
// });
