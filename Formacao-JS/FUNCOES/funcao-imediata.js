function soma(a, b) {
    return a + b;
}
// Immediately Invoked Function Expression.
// É uma função definida como uma expressão e é executada imediatamente após a sua criação.
// função anônima.
(function() { // main
    console.log(soma(1, 2)); 
})();