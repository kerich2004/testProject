let numberOfFilms = prompt('Сколько фильмов вы посмотрели?');


const personalMovieDb = {
    count : numberOfFilms,
    movies : {
    },
    actors : {},
    genres : [],
    privat : false,
}
let a = prompt('Один из последних фильмов?')
let b = prompt('Оценка')

let named = prompt('Имя')
let surn = prompt('Фамилия')

personalMovieDb.actors[named] = surn; 

personalMovieDb.movies[a] = b;

console.log(personalMovieDb);