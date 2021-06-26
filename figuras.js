function perimetro_cuadrado (lado) {
    return lado*4;
}
 
function area_cuadrado (lado) {
     return lado*lado
}

function area_triangulo (base,altura) {
    return base*altura/2
}

function perimetro_triangulo (lado1,lado2,base) {
    return lado1+lado2+base
}
function perimetro_circulo (radio) {
    return 2*Math.PI*radio
}
function area_circulo (radio) {
    return Math.PI*radio*radio
}
function altura_triangulo_isoceles (lado1,lado2,lado3) {
    if ((lado2===lado3 && lado2===lado1 && lado3===lado1) || (lado2!=lado3 && lado2!=lado1 && lado3!=lado1)) {
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
        return altuwra
    }
}
function area_triangulo_isoceles (lado1,lado2,lado3) {
    if ((lado2===lado3 && lado2===lado1 && lado3===lado1) || (lado2!=lado3 && lado2!=lado1 && lado3!=lado1)) {
        return "un triangulo isoceles tiene unicamente 2 lados iguales"
    } else {    
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
}
function Area_Triangulo_Isoceles () {
    const lado1 = document.getElementById("ilado1").value
    const lado2 = document.getElementById("ilado2").value
    const lado3 = document.getElementById("ilado3").value
    const area = area_triangulo_isoceles(lado1,lado2,lado3)
    alert(area)
}
function Altura_Triangulo_Isoceles () {
    const lado1 = document.getElementById("ilado1").value
    const lado2 = document.getElementById("ilado2").value
    const lado3 = document.getElementById("ilado3").value
    const altura = altura_triangulo_isoceles(lado1,lado2,lado3)
    alert(altura)
}

function Perimetro_Cuadrado () {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetro_cuadrado(value);
    alert(perimetro); 
}
function Area_Cuadrado () {
    const input = document.getElementById("inputCuadrado")
    const value = input.value
    const area = area_cuadrado(value);
    alert(area)
}
function Perimetro_Triangulo () {
    const input1 = document.getElementById("lado1")
    const input2 = document.getElementById("lado2")
    const input_base = document.getElementById("base")
    const lado1 = Number(input1.value)
    const lado2 = Number(input2.value)
    const base = Number(input_base.value)
    alert(perimetro_triangulo(lado1,lado2,base))
}
function Area_Triangulo () {
    const input = document.getElementById("base")
    const base = input.value
    const input1 = document.getElementById("altura")
    alert (area_triangulo(base,input1.value))
}
function Perimetro_Circulo () {
    const input = document.getElementById("radio") 
    const radio = Number(input.value)
    alert(perimetro_circulo(radio))
}
function Area_Circulo () {
    const input = document.getElementById("radio")
    const radio = Number(input.value)
    alert(area_circulo(radio))
}


