function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // Aqui haverá uma troca de valores
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))