var var1;
if (true) var1 = 10;

console.log(var1);

function teste() {
    var var2 = 20; // não vazou o escopo da função
}

console.log(typeof var2);