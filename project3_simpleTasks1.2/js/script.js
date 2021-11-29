// Задание на урок:

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
}

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
// 4) Потренироваться и переписать цикл еще двумя способами

// let i = 0;

/* do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = +prompt('На сколько оцените его', '');
    personalMovieDB.movies[a] = b;     
    i++
} while (i < 2) */

/* while (i < 2) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = +prompt('На сколько оцените его', '');
    personalMovieDB.movies[a] = b;     
    i++
} */

// console.log(personalMovieDB);

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

/* for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = +prompt('На сколько оцените его', '');

    if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done')
    } else {
        console.log('error');
        i--
    }    
} */

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

/* if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель')
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман')
} else {
    console.log('Произошла ошибка')
} */

/* const answer = () => {
    return ((personalMovieDB.count < 10) ? console.log('Просмотрено довольно мало фильмов') : 
    (personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? console.log('Вы классический зритель') : 
    (personalMovieDB.count >= 30) ? console.log('Вы киноман') : console.log('Произошла ошибка'))
}

answer(); */

function answer() {
    return ((personalMovieDB.count < 10) ? console.log('Просмотрено довольно мало фильмов') : 
    (personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? console.log('Вы классический зритель') : 
    (personalMovieDB.count >= 30) ? console.log('Вы киноман') : console.log('Произошла ошибка'))
}

answer();


