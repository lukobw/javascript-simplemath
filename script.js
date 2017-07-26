var a = prompt('Podaj liczbę nr 1: ');
var b = prompt('Podaj liczbę nr 2: ');
var value = (a * a) + (2 * a * b) - (b - b);
console.log(value);

var score = value >= 0 ? 'Wynik dodatni' : 'Wynik ujemny';
console.log(score);

if (value === 0) {
    console.log('Wynik to 0');
} else {
    console.log('Wynik to ' + value);
}


