var a = prompt('Podaj liczbę nr 1: ');
var b = prompt('Podaj liczbę nr 2: ');
var value = (a * a) + (2 * a * b) - (b - b);
console.log(value);

if (value > 0) {
    console.log('Wynik jest dodatni');
} else if (value === 0) {
    console.log('Wynik jest równy 0');
} else {
    console.log('Wynik jest ujemny');
}
