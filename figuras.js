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


