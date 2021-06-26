function altura_triangulo_isoceles (lado1,lado2,lado3) {
    if (lado2!=lado3 && lado2!=lado1 && lado3!=lado1) {
        return "un triangulo isoceles tiene 2 lados iguales"
    } else {
        if (lado1 === lado2) {
            var A= lado3/2;
            var h= lado1;
        } else if (lado1===lado3) {
            var A = lado2/2;
            var h = lado1
        } else {
            var A = lado1;
            var h = lado2
        }
        const theta = Math.acos(A/h)
        const altura = h*Math.sin(theta)
        return altura
    }
}
function area_triangulo_isoceles (lado1,lado2,lado3) {
    if (lado1 === lado2) {
        var A = lado3/2;
        var h = lado1;
    } else if (lado1===lado3) {
        var A = lado2/2;
        var h = lado1;
    } else {
        var A = lado1/2;
        var h = lado2
    }
    const altura = altura_triangulo_isoceles(lado1,lado2,lado3)
    return A*altura
}
