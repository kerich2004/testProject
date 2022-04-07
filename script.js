let numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');


const personalMovieDb = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
}
    for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних фильмов?');
            let b = prompt('Оценка');
            if (a != null && b!= null && a!='' && b!='' && a.length<50) {
                personalMovieDb.movies[a] = b;
                console.log('done');
            } else {
                console.log ('error');
                i--;
            }
        }

        if(personalMovieDb.count < 10) {
            console.log('Просмотрено довольно мало фильмов')
        } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
            console.log ('Вы - классический зритель')
        } else if (personalMovieDb.count >= 30) {
            console.log('Вы - киноман.')
        }
        else {
            console.log('ERROR')
        }
console.log(personalMovieDb)