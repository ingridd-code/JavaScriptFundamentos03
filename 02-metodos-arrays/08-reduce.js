const valores = [10, 20, 30, 40, 50];

const total = valores.reduce(
    (acumulador, valor) => acumulador + valor, 0
);

console.log(total);

// map() transforma cada item
// filter() filtra item
// some() algum atende?
// every() todos atendem?
// reduce() acumula tudo em um resultado